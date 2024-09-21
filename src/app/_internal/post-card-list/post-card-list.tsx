import type { PropsWithChildren } from "react";
import { Link } from "#src/components/link";
import { Text } from "#src/components/text/text";
import { cn } from "#src/lib/utils";

function PostCardListRoot({ children }: PropsWithChildren) {
  return <ul className="grid gap-2">{children}</ul>;
}

type PostCardListCardProps = {
  article: {
    meta: {
      title: string;
      tags: string[];
      publishedAt: string;
      slug: string;
    };
    content: string;
  };
};

function PostCardListCard({
  article: {
    meta: { title, tags, publishedAt, slug },
  },
}: PostCardListCardProps) {
  return (
    <li>
      <article>
        <Link
          href={`/posts/${slug}`}
          className={cn(
            "group grid gap-2 rounded-md p-3 hover:bg-neutral-200 dark:hover:bg-neutral-800",
            "focus-within:bg-neutral-200 focus-within:ring-2 focus-within:ring-neutral-500 focus-within:ring-offset-2 focus:outline-none dark:focus-within:bg-neutral-800",
          )}
        >
          <Text as="h2" className="text-2xl font-bold">
            {title}
          </Text>

          <div className="flex items-end gap-4">
            <Text className="text-sm">{publishedAt}</Text>

            <div className="flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <Text
                  as="span"
                  key={tag}
                  className="rounded-lg bg-neutral-800 px-2 py-0.5 text-neutral-200"
                >
                  {tag}
                </Text>
              ))}
            </div>
          </div>
        </Link>
      </article>
    </li>
  );
}

export const PostCardList = {
  Root: PostCardListRoot,
  Card: PostCardListCard,
};
