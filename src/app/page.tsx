import { getAllArticles } from "@/repo/get-all-articles";
import { PostCardList } from "./_parts/post-card-list";
import { Text } from "@/components/text";

export default async function Page() {
  const articles = await getAllArticles();

  return (
    <div className="grid py-4 gap-4">
      <Text as="h1" className="font-bold text-xl lg:text-2xl">
        最近のエントリ
      </Text>

      <PostCardList.Root>
        {articles.map((article) => (
          <PostCardList.Card key={article.slug} article={article} />
        ))}
      </PostCardList.Root>
    </div>
  );
}
