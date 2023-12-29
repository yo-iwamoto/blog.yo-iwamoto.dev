import { Link } from "@/components/link";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

function PostCardListRoot({ children }: PropsWithChildren) {
  return <ul className="grid gap-2">{children}</ul>;
}

function PostCardListCard({
  article: { title, slug, tags, publishedAt },
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
      <Link
        href={`/articles/${slug}`}
        className={cn(
          "group grid gap-2 rounded-md p-3 hover:bg-neutral-200",
          "focus-within:bg-neutral-200 focus-within:ring-2 focus-within:ring-neutral-500 focus-within:ring-offset-2 focus:outline-none",
        )}
      >
        <h2 className="text-2xl font-bold">{title}</h2>

        <div className="flex items-end gap-4">
          <span className="text-sm">
            {publishedAt.toISOString().split("T")[0]}
          </span>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag.slug}
                className="rounded-lg bg-neutral-800 px-2 py-0.5 text-neutral-200"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </li>
  );
}

export const PostCardList = {
  Root: PostCardListRoot,
  Card: PostCardListCard,
};
