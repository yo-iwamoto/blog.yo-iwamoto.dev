import '@/styles/global.css';
import type { Metadata } from 'next';

export const metadata = {} satisfies Metadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body>
        <main className='min-h-screen bg-stone-50'>{children}</main>
      </body>
    </html>
  );
}
