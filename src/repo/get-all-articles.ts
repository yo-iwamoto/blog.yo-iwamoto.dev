import { getServerSideEnv } from "@/config/env";
import { ArticleListItem } from "@/model/article-list-item";
import { cache } from "react";
import { cdnClient } from "./client";
import type { Content } from "./client";

const articleModelUid = "article";

async function getAllArticlesFn(): Promise<ArticleListItem[]> {
  const res = await cdnClient.getContents<
    {
      title: string;
      slug: string;
      tags: { name: string; slug: string }[];
    } & Content
  >({
    appUid: getServerSideEnv().newtAppUid,
    modelUid: articleModelUid,
    query: {
      order: ["-publishDate"],
      select: ["title", "slug", "tags", "_sys"],
    },
  });

  const articles = res.items.map(
    (item) =>
      new ArticleListItem(
        item.title,
        item.slug,
        item.tags,
        new Date(item._sys.raw.firstPublishedAt),
      ),
  );

  return articles;
}

export const getAllArticles = cache(getAllArticlesFn);
