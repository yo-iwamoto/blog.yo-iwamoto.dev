import { getAllArticles } from "@/repo/get-all-articles";

export async function generateStaticParams() {
  const articles = await getAllArticles();

  return articles.map(({ slug }) => ({
    params: { slug },
  }));
}
