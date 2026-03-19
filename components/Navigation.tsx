'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Panel' },
  { href: '/zadanie', label: 'Zadanie' },
  { href: '/skill-tree', label: 'Mapa umiejętności' },
  { href: '/postepy', label: 'Postępy' }
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-extrabold text-gray-900">
          Matura<span className="text-accent">Math</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center rounded-xl border border-gray-200 p-2 text-gray-700 md:hidden"
          aria-label="Otwórz menu"
        >
          <span className="text-lg leading-none">☰</span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`border-b-2 pb-1 text-sm font-semibold ${
                pathname === l.href
                  ? 'border-accent text-accent'
                  : 'border-transparent text-gray-600 hover:border-accent/30 hover:text-gray-900'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {open ? (
        <div className="border-t border-gray-100 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-2 text-sm font-semibold ${
                  pathname === l.href
                    ? 'bg-accentLight text-accent'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}

