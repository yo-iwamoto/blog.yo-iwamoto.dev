import { getAllArticles } from "./get-all-articles";

const { getContents } = vi.hoisted(() => ({
  getContents: vi.fn(async () => ({
    items: [
      {
        title: "Article 1",
        slug: "article-1",
        tags: [],
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

describe("getAllArticles", () => {
  it("取得した記事一覧が整形して返却されること", async () => {
    const res = await getAllArticles();

    expect(res).toHaveLength(1);
    expect(res[0].title).toBe("Article 1");
    expect(res[0].slug).toBe("article-1");
    expect(res[0].tags).toHaveLength(0);
    expect(res[0].publishedAt).toStrictEqual(
      new Date("2021-01-01T00:00:00.000Z"),
    );
  });

  it("データ取得のクエリが変わらないこと", async () => {
    await getAllArticles();

    expect(getContents.mock.lastCall).toMatchSnapshot();
  });
});
