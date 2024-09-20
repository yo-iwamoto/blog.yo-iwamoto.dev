import { render, screen } from "@testing-library/react";
import { SizedBox } from "./sized-box";

describe("SizedBox", () => {
  it("children が描画されること", () => {
    const { getByText } = render(<SizedBox>children</SizedBox>);

    expect(getByText("children")).toBeInTheDocument();
  });

  it("as で指定したタグで描画されること", () => {
    render(<SizedBox as="h1">box</SizedBox>);

    expect(
      screen.getByRole("heading", { level: 1, name: "box" }),
    ).toBeDefined();
  });
});
