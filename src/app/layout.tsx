import type { PropsWithChildren } from 'react';
import '@/styles/global.css';

export const metadata = {
  title: 'blog.yoiw.dev',
  description: "yoiwamoto's tech blog.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  );
}
