import { render, screen } from "@testing-library/react";
import { transformArticleHtml } from "./transform-article-html";

const html = `<h2>Heading 2</h2>
<p>Paragraph 1</p>
<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>
<h3>Heading 3</h3>
<p>Paragraph 2</p>
<ol>
<li>Item 1</li>
<li>Item 2</li>
</ol>`;

describe("transformArticleHtml", () => {
  it("見出しがアンカーリンクで囲われていること", () => {
    const transformed = transformArticleHtml(html);
    render(
      // biome-ignore lint/security/noDangerouslySetInnerHtml: body は HTML 形式で取得されるため
      <div dangerouslySetInnerHTML={{ __html: transformed }} />,
    );
    expect(screen.getByRole("link", { name: "Heading 2" })).toHaveAttribute(
      "href",
      "#heading-2",
    );
    expect(screen.getByRole("link", { name: "Heading 3" })).toHaveAttribute(
      "href",
      "#heading-3",
    );
  });

  it("見出し要素が存在すること", () => {
    const transformed = transformArticleHtml(html);
    render(
      // biome-ignore lint/security/noDangerouslySetInnerHtml: body は HTML 形式で取得されるため
      <div dangerouslySetInnerHTML={{ __html: transformed }} />,
    );
    expect(screen.getByRole("heading", { name: "Heading 2" })).toBeDefined();
    expect(screen.getByRole("heading", { name: "Heading 3" })).toBeDefined();
  });

  it("transform 結果の snapshot が一致すること", () => {
    const transformed = transformArticleHtml(html);
    expect(transformed).toMatchSnapshot();
  });
});
