import hljs from 'highlight.js';
import { useEffect } from 'react';
import 'highlight.js/styles/atom-one-dark.min.css';

export function useHighlightEffect() {
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((el) => {
      if (!(el instanceof HTMLElement)) return;
      hljs.highlightElement(el);
    });
  });
}
