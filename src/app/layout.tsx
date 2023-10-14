import { cn } from '@/lib/cn';
import '@/styles/global.css';

export const revalidate = 86400;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body>
        <main className={cn('min-h-screen bg-stone-50')}>{children}</main>
      </body>
    </html>
  );
}
