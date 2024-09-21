import { PostCardList } from "#src/app/_internal/post-card-list";
import { Text } from "#src/components/text";
import { allEntries } from "#src/data/contents";
import { notFound } from "next/navigation";

export { generateMetadata } from "./generate-metadata";
export { generateStaticParams } from "./generate-static-params";

export const dynamic = "force-static";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function Page({ params: { slug } }: PageProps) {
  const articles = allEntries.filter((entry) => entry.meta.tags.includes(slug));
  if (articles.length === 0) {
    notFound();
  }

  return (
    <div className="mt-8 grid gap-4">
      <Text className="px-2 text-xl">
        「<span className="font-bold">{slug}</span>
        」についてのエントリ
      </Text>

      <PostCardList.Root>
        {articles.map((article) => (
          <PostCardList.Card key={article.meta.slug} article={article} />
        ))}
      </PostCardList.Root>
    </div>
  );
}
