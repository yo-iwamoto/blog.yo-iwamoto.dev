import '@/styles/global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body>
        <main className='min-h-screen bg-stone-50'>{children}</main>
      </body>
    </html>
  );
}
