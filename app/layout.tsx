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
      <body className="min-h-screen bg-white font-sans">
        <Navigation />
        <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:py-8">
          {children}
        </main>
      </body>
    </html>
  );
}

