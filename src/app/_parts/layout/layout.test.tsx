import { render, within } from "@testing-library/react";
import { Layout } from "./layout";

function Compounded() {
  return (
    <Layout.Root>
      <Layout.Header />
      <Layout.Content>
        <h1>hello world</h1>
      </Layout.Content>
    </Layout.Root>
  );
}

describe("Layout", () => {
  it("snapshot unchanged", () => {
    const { asFragment } = render(<Compounded />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("main 内に content が表示されていること", () => {
    const { getByRole } = render(<Compounded />);

    expect(
      within(getByRole("main")).getByRole("heading", {
        level: 1,
        name: "hello world",
      }),
    ).toBeDefined();
  });

  it("ヘッダーにトップページへのリンクが表示されていること", () => {
    const { getByRole } = render(<Compounded />);

    expect(
      within(getByRole("banner")).getByRole("link", {
        name: "blog.yoiw.dev",
      }),
    ).toHaveAttribute("href", "/");
  });
});
