import { excludeDraft } from './common';
import { kv, kvFavCountKey } from '@/lib/kv';
import { allPosts } from 'contentlayer/generated';

export async function getFavCount(slug: string) {
  const post = findBySlug(excludeDraft(allPosts), slug);
  if (post === undefined) {
    throw new Error(`Cannot find post with slug "${slug}"`);
  }

  const count = await kv.get<number>(kvFavCountKey(slug));
  return count ?? 0;
}

function findBySlug<T extends { slug: string }>(arr: T[], slug: string) {
  return arr.find((post) => post.slug === slug);
}
