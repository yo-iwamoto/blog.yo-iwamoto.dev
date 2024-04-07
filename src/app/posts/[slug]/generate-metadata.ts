import { allEntries } from "@/data/contents";
import { extractTextFromArticleHtml } from "@/lib/extract-text-from-article-html";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params: { slug } }: Props) {
  const article = allEntries.find((entry) => entry.meta.slug === slug);
  if (article === undefined) {
    notFound();
  }

  const bodyTextFirst100Letters = extractTextFromArticleHtml(
    article.content,
  ).slice(0, 100);

  return {
    title: `${article.meta.title} | blog.yoiw.dev`,
    description: `${bodyTextFirst100Letters}...`,
    keywords: article.meta.tags,
    alternates: {
      canonical: `/posts/${article.meta.slug}/`,
    },
  } satisfies Metadata;
}
