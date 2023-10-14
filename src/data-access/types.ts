import type { Content } from 'newt-client-js';

export type Tag = Content & {
  slug: string;
  name: string;
};

export type Post = Content & {
  slug: string;
  title: string;
  tags: Tag[];
  body: string;
  draft: boolean;
};
