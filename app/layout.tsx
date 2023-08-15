import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  let pathSegments: string[] = [];

  // For some reason, headersList.get('x-invoke-path') is not present in production
  // So I try to use headersList.get('x-matched-path')
  // The value of headersList.get('x-matched-path') ends with .rsc e.g "/settings.rsc"
  // So I replaced the .rsc with ''
  if (headersList.get('x-invoke-path')) {
    const pathname = headersList.get('x-invoke-path') || '';
    pathSegments = pathname.split('/').filter((segment) => segment !== '');
  } else if (headersList.get('x-matched-path')) {
    const pathname = headersList.get('x-matched-path') || '';
    pathSegments = pathname
      .split('/')
      .filter((segment) => segment !== '')
      .map((segment) => segment.replace(/\.rsc$/, ''));
  }

  const titleSegments = pathSegments.map(
    (segment) => segment.charAt(0).toUpperCase() + segment.slice(1)
  );
  const hasTitleSegments = titleSegments.length > 0;
  const title = titleSegments.join(' › ');

  return {
    title: hasTitleSegments ? `${title} | Untitled UI` : 'Untitled UI',
    description: hasTitleSegments
      ? `${title} page of an imaginary fintech app`
      : ''
  };
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
