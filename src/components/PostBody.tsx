'use client';

import { cn } from '@/lib/cn';
import hljs from 'highlight.js/lib/core';
import { useEffect } from 'react';
import 'highlight.js/styles/atom-one-dark.min.css';

type Props = {
  body: string;
};

export function PostBody({ body }: Props) {
  useHighlight();

  return (
    <div
      className={cn(
        'prose-code:unset prose prose-sm mx-auto md:prose-lg prose-code:font-normal prose-code:before:hidden prose-code:after:hidden',
        'prose-h1:text-xl prose-pre:p-2 prose-pre:text-sm md:prose-h1:text-3xl md:prose-pre:text-base',
        'mb-20 !max-w-none'
      )}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}

function useHighlight() {
  async function registerLanguagesSync() {
    await Promise.all([
      import('highlight.js/lib/languages/typescript'),
      import('highlight.js/lib/languages/bash'),
      import('highlight.js/lib/languages/yaml'),
      import('highlight.js/lib/languages/json'),
    ]).then(([typescript, bash, yaml, json]) => {
      hljs.registerLanguage('typescript', typescript.default);
      hljs.registerLanguage('bash', bash.default);
      hljs.registerLanguage('yaml', yaml.default);
      hljs.registerLanguage('json', json.default);
    });
  }

  useEffect(() => {
    registerLanguagesSync().then(() => {
      hljs.highlightAll();
    });
  }, []);
}
