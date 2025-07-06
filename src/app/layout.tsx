import type { Metadata } from 'next';
import { inter } from '@/config/fonts';

import './globals.css';
import { Providers } from '@/components';

export const metadata: Metadata = {
  title: {
    template: '%s - Kawaii | Store',
    default: 'Home - Kawaii | Store',
  },
  description: 'Una tienda virtual de dulces tematicos de anime y k-pop',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
