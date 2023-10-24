import { Header } from './_components/Header';
import { SizedContainer } from '@/components/SizedContainer';
import type { PropsWithChildren } from 'react';
import '@/styles/global.css';

export const metadata = {
  title: 'blog.yoiw.dev',
  description: "yoiwamoto's tech blog.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='ja'>
      <body className='min-h-screen bg-neutral-100 dark:bg-neutral-900'>
        <Header />

        <SizedContainer>{children}</SizedContainer>
      </body>
    </html>
  );
}
