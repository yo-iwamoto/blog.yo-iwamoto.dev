import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { RootLayout } from "./_parts/root-layout";
import { env } from "@/config/env";
import "@/styles/global.scss";

export const metadata = {
  title: "blog.yoiw.dev",
  description: "Tech blog by yoiwamoto.",
  metadataBase: new URL(env.websiteUrl),
  keywords: ["web development", "blog", "frontend", "yoiwamoto"],
  openGraph: {
    type: "article",
    siteName: "blog.yoiw.dev",
    images: {
      url: "/opengraph-image.jpg",
      height: 100,
      width: 100,
    },
  },
  twitter: {
    card: "summary",
    images: [],
  },
  robots: {
    follow: true,
    index: true,
  },
  alternates: {
    canonical: "/",
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
