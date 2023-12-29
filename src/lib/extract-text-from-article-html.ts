export function extractTextFromArticleHtml(html: string) {
  const text = html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text;
}
