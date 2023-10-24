import { allPosts } from 'contentlayer/generated';
import type { Post } from 'contentlayer/generated';

export function getPost(slug: string): Post | undefined {
  return findBySlug(excludeDraft(allPosts), slug);
}

function excludeDraft<T extends { draft: boolean }>(arr: T[]) {
  return arr.filter((post) => post.draft !== true);
}

function findBySlug<T extends { slug: string }>(arr: T[], slug: string) {
  return arr.find((post) => post.slug === slug);
}
