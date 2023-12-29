import { env } from "@/config/env";
import { cdnClient } from "./client";
import type { Content } from "./client";

const articleModelUid = "article";

class ArticleItem {
  constructor(
    public title: string,
    public slug: string,
    public tags: { name: string; slug: string }[],
    public publishedAt: Date,
  ) {}
}

export async function getAllArticles(): Promise<ArticleItem[]> {
  const res = await cdnClient.getContents<
    {
      title: string;
      slug: string;
      tags: { name: string; slug: string }[];
    } & Content
  >({
    appUid: env.newtAppUid,
    modelUid: articleModelUid,
    query: {
      order: ["-publishDate"],
      select: ["title", "slug", "tags", "_sys"],
    },
  });

  const articles = res.items.map(
    (item) =>
      new ArticleItem(
        item.title,
        item.slug,
        item.tags,
        new Date(item._sys.raw.firstPublishedAt),
      ),
  );

  return articles;
}
