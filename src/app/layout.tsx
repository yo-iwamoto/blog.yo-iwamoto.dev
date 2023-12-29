import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Noto_Sans_JP } from "next/font/google";
import { RootLayout } from "./_parts/root-layout";
import "@/styles/global.css";

const fontStyle = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "blog.yoiw.dev",
  description: "Tech blog by yoiwamoto.",
} satisfies Metadata;

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <body className={fontStyle.className}>
        <RootLayout.Root>
          <RootLayout.Header />
          <RootLayout.Content>{children}</RootLayout.Content>
        </RootLayout.Root>
      </body>
    </html>
  );
}
