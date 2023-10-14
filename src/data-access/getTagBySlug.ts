import { newtClient } from '@/lib/newt';
import { cache } from 'react';
import type { Tag } from './types';

async function getTagBySlugRaw({ slug }: { slug: string }): Promise<Tag | null> {
  return newtClient.getFirstContent<Tag>({
    appUid: 'blog-yoiw-dev',
    modelUid: 'tag',
    query: {
      slug,
    },
  });
}

export const getTagBySlug = cache(getTagBySlugRaw);
