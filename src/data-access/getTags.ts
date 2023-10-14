import { newtClient } from '@/lib/newt';
import { cache } from 'react';
import type { Tag } from './types';

async function getTagsRaw(): Promise<Tag[]> {
  const res = await newtClient.getContents<Tag>({
    appUid: 'blog-yoiw-dev',
    modelUid: 'tag',
  });

  return res.items;
}

export const getTags = cache(getTagsRaw);
