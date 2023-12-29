export class Article {
  constructor(
    public title: string,
    public slug: string,
    public tags: { name: string; slug: string }[],
    public publishedAt: Date,
    public body: string,
  ) {}
}
