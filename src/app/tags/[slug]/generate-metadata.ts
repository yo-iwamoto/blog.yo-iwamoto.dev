import type { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `「${slug}」に関する記事一覧 | blog.yoiw.dev`,
    alternates: {
      canonical: `/posts/${slug}/`,
    },
  } satisfies Metadata;
}
