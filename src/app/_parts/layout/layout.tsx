import { PropsWithChildren } from "react";
import { Link } from "@/components/link";
import { SizedBox } from "@/components/sized-box";

export function LayoutRoot({ children }: PropsWithChildren) {
  return <>{children}</>;
}

export function LayoutHeader() {
  return (
    <SizedBox as="header" className="py-2 sticky top-0">
      <Link href="/" className="font-bold py-2 inline-block hover:underline">
        blog.yoiw.dev
      </Link>
    </SizedBox>
  );
}

export function LayoutContent({ children }: PropsWithChildren) {
  return <SizedBox as="main">{children}</SizedBox>;
}

export const Layout = {
  Root: LayoutRoot,
  Header: LayoutHeader,
  Content: LayoutContent,
};
