export { kv } from '@vercel/kv';

export function kvFavCountKey(slug: string) {
  return `blog-yoiw-dev.posts.${slug}.favCount`;
}
