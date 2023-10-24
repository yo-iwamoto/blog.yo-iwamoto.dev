import { allPosts } from 'contentlayer/generated';
import type { Post } from 'contentlayer/generated';

export function getAllPosts(): Post[] {
  return excludeDraft(allPosts);
}

function excludeDraft<T extends { draft: boolean }>(arr: T[]) {
  return arr.filter((post) => post.draft !== true);
}
