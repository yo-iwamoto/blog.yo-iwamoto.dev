"use client";

import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.min.css";
import { useEffect } from "react";

function useHighlightEffect() {
  useEffect(() => {
    const codeElements = document.querySelectorAll("pre code");

    for (const codeElement of codeElements) {
      if (!(codeElement instanceof HTMLElement)) continue;

      hljs.highlightElement(codeElement);
    }
  });
}

function HighlightNode() {
  useHighlightEffect();

  return false;
}

export default HighlightNode;
