import { type DOMWindow, JSDOM } from "jsdom";

const jsdom = new JSDOM();
const domParser = new jsdom.window.DOMParser();

/**
 * Transforms the HTML of an article.
 * - Adds an ID to each heading for permalinks.
 */
export function transformArticleHtml(html: string) {
  const document = domParser.parseFromString(html, "text/html");

  assignIdToHeadings(document);

  return document.body.innerHTML;
}

function assignIdToHeadings(document: DOMWindow["document"]) {
  const headings = Array.from(document.querySelectorAll("h2, h3, h4, h5, h6"));

  for (const heading of headings) {
    const text = heading.textContent;
    if (text === null) continue;

    const id = text.replaceAll(/ /g, "-").toLowerCase();
    heading.id = id;

    const parent = document.createElement("a");
    parent.href = `#${id}`;
    parent.appendChild(heading.cloneNode(true));
    parent.classList.add("heading-link");

    heading.replaceWith(parent);
  }
}
