import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { RootLayout } from "./_parts/root-layout";
import "@/styles/global.scss";

export const metadata = {
  title: "blog.yoiw.dev",
  description: "Tech blog by yoiwamoto.",
} satisfies Metadata;

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <body>
        <RootLayout.Root>
          <RootLayout.Header />
          <RootLayout.Content>{children}</RootLayout.Content>
        </RootLayout.Root>
      </body>
    </html>
  );
}
