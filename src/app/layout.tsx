import '@/styles/global.css';
import Link from 'next/link';

export const revalidate = 86400;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className='bg-stone-50'>
        <header className='px-4'>
          <div className='mx-auto max-w-[735px] py-5'>
            <Link href='/' className='font-mono text-xl font-bold'>
              blog.yoiw.dev
            </Link>
          </div>
        </header>
        <main className='min-h-screen'>{children}</main>
      </body>
    </html>
  );
}
