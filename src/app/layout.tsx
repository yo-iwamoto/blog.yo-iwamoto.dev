import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Noto_Sans_JP } from "next/font/google";
import { Layout } from "./_parts/layout";
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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <body className={fontStyle.className}>
        <Layout.Root>
          <Layout.Header />
          <Layout.Content>{children}</Layout.Content>
        </Layout.Root>
      </body>
    </html>
  );
}
