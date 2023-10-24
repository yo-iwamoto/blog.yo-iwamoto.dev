import { excludeDraft } from './common';
import { allPosts } from 'contentlayer/generated';
import type { Post } from 'contentlayer/generated';

export function getLatest10PostsByTags(tag: string): Post[] {
  return pickLatest10(
    sortByPostedAt(filterByTags(excludeDraft(allPosts), tag)),
  );
}

function filterByTags<T extends { tags: string[] }>(arr: T[], tag: string) {
  return arr.filter((post) => post.tags.includes(tag));
}

function sortByPostedAt<T extends { postedAt: string }>(arr: T[]) {
  return arr.sort((a, b) =>
    new Date(a.postedAt) > new Date(b.postedAt) ? -1 : 1,
  );
}

function pickLatest10<T>(arr: T[]) {
  return arr.slice(0, 10);
}
