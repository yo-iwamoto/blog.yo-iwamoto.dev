import { getServerSideEnv } from "#src/config/env";
import "#src/styles/global.css";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { RootLayout } from "./_internal/root-layout";

export const metadata = {
  title: "blog.yo-iwamoto.me",
  description: "Tech blog by yoiwamoto.",
  metadataBase: new URL(getServerSideEnv().websiteUrl),
  keywords: ["web development", "blog", "frontend", "yoiwamoto"],
  openGraph: {
    type: "article",
    siteName: "blog.yo-iwamoto.me",
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
    canonical: "",
  },
} satisfies Metadata;

export default async function Layout({ children }: PropsWithChildren) {
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
