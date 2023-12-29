import { cache } from "react";
import { getAllArticles } from "./get-all-articles";

async function getAllTagsFn() {
  const articles = await getAllArticles();
  const map = new Map();

  for (const article of articles) {
    for (const tag of article.tags) {
      if (map.has(tag.slug)) {
        map.get(tag.slug).count++;
      } else {
        map.set(tag.slug, {
          name: tag.name,
          slug: tag.slug,
          count: 1,
        });
      }
    }
  }
  return [...map.values()] as { name: string; slug: string; count: number }[];
}

export const getAllTags = cache(getAllTagsFn);
