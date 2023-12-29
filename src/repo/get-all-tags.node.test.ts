import { getAllTags } from "./get-all-tags";

const { getContents } = vi.hoisted(() => ({
  getContents: vi.fn(async () => ({
    items: [
      {
        title: "Article 1",
        slug: "article-1",
        tags: [
          { name: "tag1", slug: "tag1" },
          { name: "tag2", slug: "tag2" },
        ],
        _sys: {
          raw: {
            firstPublishedAt: "2021-01-01T00:00:00.000Z",
          },
        },
      },
      {
        title: "Article 1",
        slug: "article-1",
        tags: [
          { name: "tag2", slug: "tag2" },
          { name: "tag3", slug: "tag3" },
          { name: "tag4", slug: "tag4" },
        ],
        _sys: {
          raw: {
            firstPublishedAt: "2021-01-01T00:00:00.000Z",
          },
        },
      },
    ],
  })),
}));

vi.mock("./client", () => ({ cdnClient: { getContents } }));

describe("getAllTags", () => {
  it("タグの一覧が、紐づく記事の数と合わせて返却されること", async () => {
    const res = await getAllTags();

    expect(res).toStrictEqual([
      { name: "tag1", slug: "tag1", count: 1 },
      { name: "tag2", slug: "tag2", count: 2 },
      { name: "tag3", slug: "tag3", count: 1 },
      { name: "tag4", slug: "tag4", count: 1 },
    ]);
  });
});
