import { getArticleBySlug } from "@/repo/get-article-by-slug";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { extractTextFromArticleHtml } from "@/lib/extract-text-from-article-html";

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

  const bodyTextFirst100Letters = extractTextFromArticleHtml(
    article.body,
  ).slice(0, 100);

  return {
    title: `${article.title} | blog.yoiw.dev`,
    description: `${bodyTextFirst100Letters}...`,
    keywords: article.tags.map((tag) => tag.name),
    alternates: {
      canonical: `/posts/${article.slug}/`,
    },
  } satisfies Metadata;
}
