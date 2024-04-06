import { getAllEntries } from "@/repo/markdown";

export async function generateStaticParams() {
  const tags = new Set();
  for (const article of await getAllEntries()) {
    for (const tag of article.meta.tags) {
      tags.add(tag);
    }
  }

  return Array.from(tags).map((tag) => ({
    params: { slug: tag },
  }));
}
