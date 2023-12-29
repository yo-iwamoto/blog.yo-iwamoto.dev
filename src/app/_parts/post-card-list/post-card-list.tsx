import { Link } from "@/components/link";
import { PropsWithChildren } from "react";

function PostCardListRoot({ children }: PropsWithChildren) {
  return <ul>{children}</ul>;
}

function PostCardListCard({
  article: { title, slug },
}: {
  article: {
    title: string;
    slug: string;
    tags: { name: string; slug: string }[];
    publishedAt: Date;
  };
}) {
  return (
    <li>
      <Link href={`/articles/${slug}`}>{title}</Link>
    </li>
  );
}

export const PostCardList = {
  Root: PostCardListRoot,
  Card: PostCardListCard,
};
