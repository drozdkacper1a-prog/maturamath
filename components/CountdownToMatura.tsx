'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from './CountdownToMatura.module.css';

function getDaysTo(target: Date, now: Date) {
  // Wybieramy logikę “dni kalendarzowych” (a nie 24h), żeby UI było przewidywalne.
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const end = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  const diffMs = end.getTime() - start.getTime();
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

export default function CountdownToMatura() {
  const target = useMemo(() => new Date(2026, 4, 7), []);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  const days = getDaysTo(target, now);
  const isPast = days < 0;
  const absDays = Math.abs(days);

  return (
    <div className={styles.card}>
      <div className={styles.title}>Odliczanie do matury</div>
      <div className={styles.date}>7 maja 2026</div>

      <div className={styles.row}>
        <div className={styles.days}>{isPast ? 0 : absDays}</div>
        <div className={styles.label}>
          {isPast ? 'Matura minęła' : 'dni do matury'}
        </div>
      </div>
    </div>
  );
}

