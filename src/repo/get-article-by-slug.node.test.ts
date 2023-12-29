import { getArticleBySlug } from "./get-article-by-slug";

const { getFirstContent } = vi.hoisted(() => ({
  getFirstContent: vi.fn(async () => ({
    title: "Article 1",
    slug: "article-1",
    tags: [],
    body: "Hello World",
    _sys: {
      raw: {
        firstPublishedAt: "2021-01-01T00:00:00.000Z",
      },
    },
  })),
}));

vi.mock("./client", () => ({ cdnClient: { getFirstContent } }));

vi.mock("@/lib/transfrom-article-html", () => ({
  transformArticleHtml: (body: string) => body,
}));

describe("getArticleBySlug", () => {
  it("取得した記事が整形されて返却されること", async () => {
    const res = await getArticleBySlug("article-1");

    expect(res?.title).toBe("Article 1");
    expect(res?.slug).toBe("article-1");
    expect(res?.tags).toHaveLength(0);
    expect(res?.publishedAt).toStrictEqual(
      new Date("2021-01-01T00:00:00.000Z"),
    );
    expect(res?.body).toBe("Hello World");
  });

  it("クエリが変わらないこと", async () => {
    await getArticleBySlug("article-1");

    expect(getFirstContent.mock.lastCall).toMatchSnapshot();
  });
});
