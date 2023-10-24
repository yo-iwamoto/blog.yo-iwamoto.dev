import { Header } from './_components/Header';
import { SizedContainer } from '@/components/SizedContainer';
import type { PropsWithChildren } from 'react';
import '@/styles/global.scss';

export { metadata } from './metadata';

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
