import { allEntries } from "@/data/contents";

export function generateStaticParams() {
  const articles = allEntries;

  return articles.map(({ meta: { slug } }) => ({
    params: { slug },
  }));
}
