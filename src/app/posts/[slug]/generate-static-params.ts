import { getAllEntries } from "@/repo/markdown";

export async function generateStaticParams() {
  const articles = await getAllEntries();

  return articles.map(({ meta: { slug } }) => ({
    params: { slug },
  }));
}
