import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Navigation from '@/components/Navigation';

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
      <body className="min-h-screen bg-white">
        <Navigation />
        <main className="mx-auto w-full max-w-5xl px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}

