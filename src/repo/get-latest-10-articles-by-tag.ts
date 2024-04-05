import { env } from "@/config/env";
import { ArticleListItem } from "@/model/article-list-item";
import { cache } from "react";
import { type Content, cdnClient } from "./client";

const modelUid = "article";

async function getLatest10ArticlesByTagFn(tagSlug: string) {
  const res = await cdnClient.getContents<
    {
      title: string;
      slug: string;
      tags: { name: string; slug: string }[];
    } & Content
  >({
    appUid: env.newtAppUid,
    modelUid,
    query: {
      order: ["-publishDate"],
      select: ["title", "slug", "tags", "_sys"],
    },
  });

  const articles = res.items
    .filter((item) => item.tags.some((tag) => tag.slug === tagSlug))
    .map(
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

export const getLatest10ArticlesByTag = cache(getLatest10ArticlesByTagFn);
