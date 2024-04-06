---
slug: vitest-restore-mocks
title: Vitest の restoreMocks はとりあえず true でいいと思います
publishedAt: 2023-12-29
tags: [vitest, testing]
---

## 結論

設定で `restoreMocks: true` を指定した方がいいです。

<https://vitest.dev/config/#restoremocks>

```ts:vitest.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    restoreMocks: true,
  },
});
```

やることは、`beforeEach` のタイミングで `vi.restoreAllMocks()` をしてくれるイメージです。  
`vi.restoreAllMocks()`（あるいは `mock.mockRestore()`）は、call history をリセットし、かつ `vi.fn(impl)` の形式でモックした関数についてはその `impl` の振る舞いに戻ります。
これにより、**誤って別の suite での呼び出しについて assertion してしまったり**、**振る舞いの変更が他の suite に影響を及ぼしたり**するようなことを予め避けることができます。

## Vitest でのモックのリセット

Vitest（Jest でも同じようですが）では、モックのリセットに `reset`、`clear`、`restore` の 3 種類があり紛らわしいですが、`restore` が `reset`、`clear` で行うことを包含している形になっているので、基本的には `restoreMocks` の設定を有効にしておくのが良いかと思っています。
詳しくはドキュメントを参照してください。

## どんな時に困るか

### 振る舞いの変更が他の suite に影響するケース

以下のようなテストコードを想定します。  
別記事からの使い回しなので若干例として冗長ですが、ご了承ください。

```tsx:user-profile.test.tsx
import { render } from '@testing-library/react';
import { UserProfile } from './user-profile';

const { useUserQuery } = vi.hoisted(() => ({
  useUserQuery: vi.fn(() => ({
    data: { name: 'John Doe' },
  })),
}));
vi.mock('./use-user-query', () => ({
  useUserQuery,
}));

describe('UserProfile', () => {
  it('ユーザー名が表示されること', () => {
    const { getByText } = render(<UserProfile />);
    expect(getByText('John Doe')).toBeInTheDocument();
  });

  it('データが取得中の時、ローディング UI が表示されること', () => {
    // モック関数の返り値を変更する
    useUserQuery.mockReturnValue({
      data: undefined,
    });

    const { getByText } = render(<UserProfile />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('ユーザーページへのリンクが表示されること', () => {
    const { getByRole } = render(<UserProfile />);
    expect(getByRole('link', { name: 'John Doe' })).toBeInTheDocument();
  })
});
```

上記の `'ユーザーページへのリンクが表示されること'` の suite は、useUserQuery が最初にモックされたままの実装であることを期待していますが、直前の suite 内の以下の箇所で `{ data: undefined }` を返す状態になってしまったままなので、リンクが表示されず fail します。

```ts
useUserQuery.mockReturnValue({
  data: undefined,
});
```

`restoreMocks` が有効である場合、`mockReturnValue()` によって加えられたモック関数への変更は、すべて初めに `vi.fn()` に渡した implementation に restore されるため、このような問題は起きません。

### 呼び出し履歴が残ってしまっているケース

以下のようなテストは `restoreMocks` が有効でない場合 fail します。

## テスト対象

```tsx:show-toast-button.tsx
import { useToast } from './use-toast';

type Props = {
  disabled?: boolean;
};

export function ShowToastButton({ disabled = false }: Props) {
  const { showToast } = useToast();

  const onClick = () => showToast('Hello!');

  return (
    <button onClick={onClick} disabled={disabled}>
      Show Toast
    </button>
  );
}
```

## テスト

```tsx:show-toast-button.test.tsx
import { ShowToastButton } from './show-toast-button';
import userEvent from '@testing-library/user-event';

const { showToast } = vi.hoisted(() => ({
  showToast: vi.fn(),
}));
vi.mock('./use-toast', () => ({
  useToast: vi.fn(() => ({ showToast })),
}));

describe('ShowToastButton', () => {
  it('ボタンがクリックされた時、トーストが表示されること', async () => {
    const { getByRole } = render(<ShowToastButton />);
    await userEvent.click(getByRole('button', { name: 'Show Toast' }));
    expect(showToast).toHaveBeenCalled();
  });

  it('disabled が true の時、クリックしてもトーストが表示されないこと', async () => {
    const { getByRole } = render(<ShowToastButton disabled />);
    await userEvent.click(getByRole('button', { name: 'Show Toast' }));
    expect(showToast).not.toHaveBeenCalled();
  });
});
```

```shell:stdout
AssertionError: expected "spy" to not be called at all, but actually been called 1 times
```

`restoreMocks` が有効であれば、呼び出し履歴が suite ごとにリセットされるので、テストコードはそのままで pass します。

### 都度 `beforeEach` で書けばよいのでは

こういうことが起こった / 起こりそうな時に、テストファイル単位で以下を記載する、でも良いのかもしれませんが、基本的にはこのような変更が suite 間で共有されることを期待することはないと思うので、全体の設定で良いと思っています。

```ts
beforeEach(() => {
  vi.restoreAllMocks();
});
```

## `restoreMocks: true` にしたらこれまでのテストが壊れたが？

suite 記載外のモック関数の変更が保持されていることを期待するテストについては、挙動が変わるので落ちます。  
大きいプロジェクトで、落ちるテストも多いと設定の変更はなかなか難しいと思うので、取り急ぎ新しく書くファイルについては以下のようにファイル単位で設定してしまう、でも良いかと思います。`vi.setConfig()` のスコープはファイルなので、他に影響しません。

```ts
vi.setConfig({ restoreMocks: true });
```
