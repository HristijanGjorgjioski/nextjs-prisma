/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import './globals.css';
import QueryWrapper from './QueryWrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <QueryWrapper>
          <main>
            <nav>
              <Link href="/">
                Home
              </Link>
              <Link href="/notes">
                Notes
              </Link>
            </nav>
            {children}
          </main>
        </QueryWrapper>
      </body>
    </html>
  );
}
