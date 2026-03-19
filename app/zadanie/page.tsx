import MathTaskRunner from '@/components/MathTaskRunner';
import styles from '../simplePage.module.css';

export default function TaskPage() {
  return (
    <div className={styles.page}>
      <div>
        <h1 className={styles.title}>Rozwiąż zadanie</h1>
        <p className={styles.subtitle}>
          Ćwicz krok po kroku i od razu sprawdzaj odpowiedź.
        </p>
      </div>
      <MathTaskRunner />
    </div>
  );
}

