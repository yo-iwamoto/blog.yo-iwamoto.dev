import "@testing-library/jest-dom";

vi.mock("next/link", () => ({
  default: ({ ...props }) => <a {...props} />,
}));

vi.mock("react", async () => {
  const actual = await vi.importActual<typeof import("react")>("react");
  return {
    ...actual,
    cache: vi.fn((fn: unknown) => fn),
  };
});
