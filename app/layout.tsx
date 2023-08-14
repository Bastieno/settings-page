import './globals.css';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const pathname = headersList.get('x-invoke-path') || 'Untitled UI';

  // Split pathname into segments and remove empty segments
  const pathSegments = pathname.split('/').filter((segment) => segment !== '');
  // Capitalize the first letter of each segment
  const titleSegments = pathSegments.map(
    (segment) => segment.charAt(0).toUpperCase() + segment.slice(1)
  );
  // Join segments with a separator
  const title = titleSegments.join(' › ');

  return {
    title: `${title} | Untitled UI`,
    description: `${title} page of an imaginary fintech app`,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
