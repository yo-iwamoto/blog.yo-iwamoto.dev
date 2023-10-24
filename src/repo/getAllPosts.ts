import { excludeDraft } from './common';
import { allPosts } from 'contentlayer/generated';
import type { Post } from 'contentlayer/generated';

export function getAllPosts(): Post[] {
  return excludeDraft(allPosts);
}
