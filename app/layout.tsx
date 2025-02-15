import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import cn from 'classnames';

import '@mantine/core/styles.css';
import '../styles/global.css';
import { Providers } from '@/components/providers';
import Controller from '@/components/controller';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <Providers>
          {children}
          <Controller />
        </Providers>
      </body>
    </html>
  );
}
