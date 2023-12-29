"use client";

import { useHighlightEffect } from "./use-highlight-effect";

type Props = {
  body: string;
};

export function PostBody({ body }: Props) {
  useHighlightEffect();

  return (
    <div className="postBody prose max-w-none">
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: body は HTML 形式で取得されるため */}
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}
