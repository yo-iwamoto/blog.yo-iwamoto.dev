import { Text } from "#src/components/text"
import { allEntries } from "#src/data/contents"
import { PostCardList } from "./_internal/post-card-list"

export const dynamic = "force-static"

export default function Page() {
  const articles = allEntries

  return (
    <div className="grid gap-4 py-4">
      <Text as="h1" className="text-xl font-bold lg:text-2xl">
        最近のエントリ
      </Text>

      <PostCardList.Root>
        {articles.map((article) => (
          <PostCardList.Card key={article.meta.slug} article={article} />
        ))}
      </PostCardList.Root>
    </div>
  )
}
