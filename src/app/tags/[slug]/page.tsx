import { PostCardList } from "@/app/_parts/post-card-list";
import { Text } from "@/components/text";
import { getLatest10ArticlesByTag } from "@/repo/get-latest-10-articles-by-tag";
import { notFound } from "next/navigation";

export { generateStaticParams } from "./generate-static-params";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params: { slug } }: PageProps) {
  const articles = await getLatest10ArticlesByTag(slug);
  if (articles.length === 0) {
    notFound();
  }

  return (
    <main className="mt-8 grid gap-4">
      <Text className="px-2 text-xl">
        「<span className="font-bold">{slug}</span>
        」についてのエントリ
      </Text>

      <PostCardList.Root>
        {articles.map((article) => (
          <PostCardList.Card key={article.slug} article={article} />
        ))}
      </PostCardList.Root>
    </main>
  );
}
