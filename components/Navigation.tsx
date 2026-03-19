'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Navigation.module.css';

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
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          Matura<span className={styles.brandAccent}>Math</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={styles.menuButton}
          aria-label="Otwórz menu"
        >
          <span style={{ fontSize: '1.125rem', lineHeight: 1 }}>☰</span>
        </button>

        <div className={styles.desktopLinks}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.link} ${pathname === l.href ? styles.active : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {open ? (
        <div className={styles.mobilePanel}>
          <div className={styles.mobileList}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`${styles.mobileLink} ${pathname === l.href ? styles.mobileActive : ''}`}
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

