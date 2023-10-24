'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
import hljs from 'highlight.js';
import { useEffect } from 'react';
import 'highlight.js/styles/atom-one-dark.min.css';

type Props = {
  code: string;
};

export function PostBody({ code }: Props) {
  const Content = useMDXComponent(code);

  // useHighlightEffect();

  useEffect(() => {
    document.querySelectorAll('pre code').forEach((el) => {
      if (!(el instanceof HTMLElement)) return;
      hljs.highlightElement(el);
    });
  });

  return (
    <div className='prose postBody'>
      <Content />
    </div>
  );
}
