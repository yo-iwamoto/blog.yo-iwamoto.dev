import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allEntries } from "#src/data/contents";
import { extractTextFromArticleHtml } from "#src/lib/extract-text-from-article-html";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

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
