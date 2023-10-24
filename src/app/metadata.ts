import { env } from '@/config/env';
import type { Metadata } from 'next';

export const metadata = {
  metadataBase: new URL(env.WEBSITE_URL),
  title: `blog.yoiw.dev`,
  description: "yoiwamoto's tech blog.",
  keywords: ['tech', 'blog', 'yoiwamoto'],
  twitter: {
    card: 'summary_large_image',
    creator: '@yoiwamoto',
  },
  robots: {
    follow: true,
    index: true,
  },
} satisfies Metadata;
