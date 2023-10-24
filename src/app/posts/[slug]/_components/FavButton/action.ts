'use server';

import { kv, kvFavCountKey } from '@/lib/kv';

type Arguments = {
  slug: string;
};

export async function favAction({ slug }: Arguments) {
  const key = kvFavCountKey(slug);

  const current = await kv.get<number>(key);
  const newValue = current === null ? 1 : current + 1;
  await kv.set(key, newValue);

  return { success: true as const };
}
