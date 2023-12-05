import { getPost } from '@/repo/getPost';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params: { slug } }: PageProps) {
  const post = getPost(slug);
  if (post === undefined) {
    notFound();
  }

  return {
    title: `${post.title} | blog.yoiw.dev`,
    keywords: post.tags,
  } satisfies Metadata;
}
