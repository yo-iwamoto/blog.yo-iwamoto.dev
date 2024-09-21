import { allEntries } from "#src/data/contents";

export function generateStaticParams() {
  const tags = new Set();
  for (const article of allEntries) {
    for (const tag of article.meta.tags) {
      tags.add(tag);
    }
  }

  return Array.from(tags).map((tag) => ({
    params: { slug: tag },
  }));
}
