import { excludeDraft } from './common';
import { allPosts } from 'contentlayer/generated';
import type { Post } from 'contentlayer/generated';

export function getPost(slug: string): Post | undefined {
  return findBySlug(excludeDraft(allPosts), slug);
}

function findBySlug<T extends { slug: string }>(arr: T[], slug: string) {
  return arr.find((post) => post.slug === slug);
}
