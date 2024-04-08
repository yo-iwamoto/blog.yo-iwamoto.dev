import { Link } from "@/components/link";
import { Text } from "@/components/text";
import { allEntries } from "@/data/contents";
import "@/styles/post-body.scss";
import { notFound } from "next/navigation";
import HighlightNode from "./_internal/highlight-node-internal";

export { generateMetadata } from "./generate-metadata";
export { generateStaticParams } from "./generate-static-params";

export const dynamic = "force-static";

type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params: { slug } }: Props) {
  const article = allEntries.find((entry) => entry.meta.slug === slug);
  if (article === undefined) {
    notFound();
  }

  const {
    meta: { title, tags, publishedAt },
    content,
  } = article;

  return (
    <article className="my-8 grid gap-2">
      <Text as="h1" className="text-2xl font-bold md:text-3xl lg:text-4xl">
        {title}
      </Text>

      <div className="flex items-end gap-4">
        <Text className="text-sm">{publishedAt}</Text>

        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <Link
              href={`/tags/${tag}`}
              key={tag}
              className="group rounded-lg focus-within:ring-2 focus-within:ring-neutral-500 focus-within:ring-offset-1 focus:outline-none dark:focus-within:ring-offset-2 dark:focus-within:ring-offset-neutral-800"
            >
              <Text
                as="span"
                className="rounded-lg bg-neutral-800 px-2 py-0.5 text-neutral-200 hover:bg-neutral-600 group-focus-within:bg-neutral-600 dark:bg-neutral-200 dark:text-neutral-800 dark:hover:bg-neutral-400 dark:group-focus-within:bg-neutral-400"
              >
                {tag}
              </Text>
            </Link>
          ))}
        </div>
      </div>

      <div className="postBody prose max-w-none">
        <div
          // biome-ignore lint/security/noDangerouslySetInnerHtml: show markdown content
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <HighlightNode />
      </div>
    </article>
  );
}
