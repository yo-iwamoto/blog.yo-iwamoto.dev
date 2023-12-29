import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { RootLayout } from "./_parts/root-layout";
import "@/styles/global.scss";
import { env } from "@/config/env";

export const metadata = {
  title: "blog.yoiw.dev",
  description: "Tech blog by yoiwamoto.",
  metadataBase: new URL(env.websiteUrl),
  keywords: ["web development", "blog", "frontend", "yoiwamoto"],
  openGraph: {
    type: "article",
    siteName: "blog.yoiw.dev",
    images: "/opengraph-image.jpg",
  },
  twitter: {
    card: "summary",
  },
  robots: {
    follow: true,
    index: true,
  },
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
