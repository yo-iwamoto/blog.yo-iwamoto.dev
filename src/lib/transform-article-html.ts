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

  addFileNameElement(document);

  return document.body.innerHTML;
}

function assignIdToHeadings(document: DOMWindow["document"]) {
  const headings = Array.from(document.querySelectorAll("h2, h3, h4, h5, h6"));

  for (const heading of headings) {
    const text = heading.textContent;
    if (text === null) continue;

    const id = text.replaceAll(/ /g, "-").toLowerCase();
    heading.id = id;

    const div = document.createElement("div");
    div.classList.add("link-container");
    const parent = document.createElement("a");
    parent.href = `#${id}`;
    parent.appendChild(heading.cloneNode(true));
    parent.classList.add("heading-link");
    div.appendChild(parent);

    heading.replaceWith(div);
  }
}

const FILE_NAME_CLASS_PATTERN = /^language-[a-z]+:([a-z0-9.\-\/]+)$/i;

function addFileNameElement(document: Document) {
  const codeElements = document.querySelectorAll("pre code");
  for (const codeElement of codeElements) {
    const fileName = Array.from(codeElement.classList)
      .find((c) => FILE_NAME_CLASS_PATTERN.test(c))
      ?.match(FILE_NAME_CLASS_PATTERN)?.[1];
    if (fileName !== undefined) {
      const span = document.createElement("span");
      span.className = "file-name";
      span.textContent = fileName;
      codeElement.parentElement?.insertBefore(span, codeElement);
    }
  }
}
