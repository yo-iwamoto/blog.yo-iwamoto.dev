import { Link } from "@/components/link";
import { Text } from "@/components/text";
import { getArticleBySlug } from "@/repo/get-article-by-slug";
import "@/styles/post-body.scss";
import { notFound } from "next/navigation";
import { PostBody } from "./_parts/post-body";

export { generateMetadata } from "./generate-metadata";
export { generateStaticParams } from "./generate-static-params";

export const dynamic = "force-static";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params: { slug } }: Props) {
  const article = await getArticleBySlug(slug);
  if (article === null) {
    notFound();
  }

  const { title, tags, publishedAt, body } = article;

  return (
    <article className="my-8 grid gap-2">
      <Text as="h1" className="text-2xl font-bold md:text-3xl lg:text-4xl">
        {title}
      </Text>

      <div className="flex items-end gap-4">
        <Text className="text-sm">
          {publishedAt.toISOString().split("T")[0]}
        </Text>

        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <Link
              href={`/tags/${tag.slug}`}
              key={tag.slug}
              className="group rounded-lg focus-within:ring-2 focus-within:ring-neutral-500 focus-within:ring-offset-1 focus:outline-none dark:focus-within:ring-offset-2 dark:focus-within:ring-offset-neutral-800"
            >
              <Text
                as="span"
                className="rounded-lg bg-neutral-800 px-2 py-0.5 text-neutral-200 hover:bg-neutral-600 group-focus-within:bg-neutral-600 dark:bg-neutral-200 dark:text-neutral-800 dark:hover:bg-neutral-400 dark:group-focus-within:bg-neutral-400"
              >
                {tag.name}
              </Text>
            </Link>
          ))}
        </div>
      </div>

      <PostBody body={body} />
    </article>
  );
}
