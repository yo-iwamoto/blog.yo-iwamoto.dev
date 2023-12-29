import { getArticleBySlug } from "@/repo/get-article-by-slug";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const article = await getArticleBySlug(slug);
  if (article === null) {
    notFound();
  }

  return {
    title: `${article.title} | blog.yoiw.dev`,
    keywords: article.tags.map((tag) => tag.name),
  } satisfies Metadata;
}
