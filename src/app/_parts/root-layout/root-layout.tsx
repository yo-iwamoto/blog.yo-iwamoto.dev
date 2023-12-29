import { PropsWithChildren } from "react";
import { Link } from "@/components/link";
import { SizedBox } from "@/components/sized-box";

export function RootLayoutRoot({ children }: PropsWithChildren) {
  return <div className="flex flex-col h-screen overflow-auto">{children}</div>;
}

export function RootLayoutHeader() {
  return (
    <SizedBox
      as="header"
      className="py-2 w-full sticky top-0 bg-white/70 backdrop-blur-sm"
    >
      <Link
        href="/"
        className="font-bold py-2 text-lg inline-block hover:underline"
      >
        blog.yoiw.dev
      </Link>
    </SizedBox>
  );
}

export function RootLayoutContent({ children }: PropsWithChildren) {
  return (
    <div className="bg-neutral-50 grow">
      <SizedBox as="main">{children}</SizedBox>
    </div>
  );
}

export const RootLayout = {
  Root: RootLayoutRoot,
  Header: RootLayoutHeader,
  Content: RootLayoutContent,
};
