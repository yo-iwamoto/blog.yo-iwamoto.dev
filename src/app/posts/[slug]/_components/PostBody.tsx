'use client';

import { useHighlightEffect } from './useHighlightEffect';
import { useMDXComponent } from 'next-contentlayer/hooks';

type Props = {
  code: string;
};

export function PostBody({ code }: Props) {
  const Content = useMDXComponent(code);

  useHighlightEffect();

  return (
    <div className='prose postBody max-w-none'>
      <Content />
    </div>
  );
}
