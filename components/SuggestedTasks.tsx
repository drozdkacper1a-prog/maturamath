import Link from 'next/link';
import styles from './SuggestedTasks.module.css';

const tasks = [
  {
    title: 'Miejsca zerowe funkcji kwadratowej',
    subtitle: 'Sprawdź wyróżnik i wyznacz pierwiastki'
  },
  {
    title: 'Równanie liniowe krok po kroku',
    subtitle: 'Przekształcenia i poprawne rozumowanie'
  },
  {
    title: 'Wykres funkcji i odczyt z osi',
    subtitle: 'Zamiana opisu na konkretne wartości'
  }
];

export default function SuggestedTasks() {
  return (
    <div className={styles.list}>
      {tasks.map((t) => (
        <Link
          key={t.title}
          href="/zadanie"
          className={styles.card}
        >
          <div className={styles.title}>{t.title}</div>
          <div className={styles.subtitle}>{t.subtitle}</div>
          <div className={styles.badge}>
            Rozwiąż →
          </div>
        </Link>
      ))}
    </div>
  );
}

