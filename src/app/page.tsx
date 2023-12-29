import { getAllArticles } from "@/repo/articles";
import { PostCardList } from "./_parts/post-card-list";

export default async function Page() {
  const articles = await getAllArticles();

  return (
    <div className="grid py-4 gap-4">
      <h1 className="font-bold text-xl">最近のエントリ</h1>

      <PostCardList.Root>
        {articles.map((article) => (
          <PostCardList.Card key={article.slug} article={article} />
        ))}
      </PostCardList.Root>
    </div>
  );
}
