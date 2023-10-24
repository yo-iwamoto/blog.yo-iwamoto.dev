import { allPosts } from 'contentlayer/generated';
import type { Post } from 'contentlayer/generated';

export function getPost(slug: string): Post | null {
  const post = allPosts.find((post) => post.slug === slug);
  if (post === undefined) {
    return null;
  }

  return post;
}
