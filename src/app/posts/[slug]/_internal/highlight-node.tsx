import dynamic from "next/dynamic";

const HighlightNode = dynamic(() => import("./highlight-node-internal"), {
  ssr: false,
});

export { HighlightNode };
