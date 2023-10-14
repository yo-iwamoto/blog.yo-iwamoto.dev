import { newtClient } from '@/lib/newt';
import { cache } from 'react';
import type { Post } from './types';

async function getPostsRaw(): Promise<Post[]> {
  const res = await newtClient.getContents<Post>({
    appUid: 'blog-yoiw-dev',
    modelUid: 'article',
    query: {
      order: ['-publishDate'],
    },
  });

  return res.items;
}

export const getPosts = cache(getPostsRaw);
