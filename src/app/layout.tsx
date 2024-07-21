import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import '@/lib/fontawesome/css/fa.css';

const inter = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'SchoolHub',
  description: 'Your all-in-one learning app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
