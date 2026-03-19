import Link from 'next/link';

const links = [
  { href: '/', label: 'Panel' },
  { href: '/zadanie', label: 'Zadanie' },
  { href: '/skill-tree', label: 'Mapa umiejętności' },
  { href: '/postepy', label: 'Postępy' }
];

export default function Navigation() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-base font-bold text-gray-900">
          MaturMath
        </Link>

        <div className="flex gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

