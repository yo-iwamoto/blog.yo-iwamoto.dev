'use client';

import { useEffect } from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import highlightjs from 'highlight.js';

export const PostBody = ({ code }: { code: string }) => {
  const Content = useMDXComponent(code);

  useEffect(() => {
    document.querySelectorAll('pre code').forEach((el) => {
      if (!(el instanceof HTMLElement)) return;
      highlightjs.highlightElement(el);
    });
  });

  return <Content />;
};
