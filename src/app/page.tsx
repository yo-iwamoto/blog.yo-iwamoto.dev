import { Text } from "@/components/text";
import { PostCardList } from "./_parts/post-card-list";
import { getAllEntries } from "@/repo/markdown";

export const dynamic = "force-static";

export default async function Page() {
  const articles = await getAllEntries();

  return (
    <div className="grid py-4 gap-4">
      <Text as="h1" className="font-bold text-xl lg:text-2xl">
        最近のエントリ
      </Text>

      <PostCardList.Root>
        {articles.map((article) => (
          <PostCardList.Card key={article.meta.slug} article={article} />
        ))}
      </PostCardList.Root>
    </div>
  );
}
