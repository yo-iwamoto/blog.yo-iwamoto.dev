export type Tag = {
  _id: string;
  slug: string;
  name: string;
};

export type Post = {
  _id: string;
  slug: string;
  title: string;
  tags: Tag[];
  body: string;
  postedAt: string;
  draft: boolean;
};
