import { env } from "@/config/env";
import { cdnClient } from "./client";
import type { Content } from "./client";

const articleModelUid = "article";

class Article {
  constructor(
    public title: string,
    public slug: string,
    public tags: string[],
    public publishedAt: Date,
  ) {}
}

export async function getAllArticles(): Promise<Article[]> {
  const res = await cdnClient.getContents<
    {
      title: string;
      slug: string;
      tags: string[];
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
      new Article(
        item.title,
        item.slug,
        item.tags,
        new Date(item._sys.raw.firstPublishedAt),
      ),
  );

  return articles;
}
