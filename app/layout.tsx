import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Navigation from '@/components/Navigation';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'MaturMath - nauka matematyki maturalnej',
  description: 'Aplikacja do nauki matematyki maturalnej w Polsce.'
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={styles.body}>
        <Navigation />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}

