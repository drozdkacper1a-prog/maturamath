import ActivityHeatmap from '@/components/ActivityHeatmap';
import MasteryTable from '@/components/MasteryTable';
import ResultLineChart from '@/components/ResultLineChart';
import styles from '../simplePage.module.css';

export default function PostepyPage() {
  return (
    <div className={styles.page}>
      <div>
        <h1 className={styles.title}>Postępy</h1>
        <p className={styles.subtitle}>
          Obserwuj, jak rośnie Twój wynik oraz gdzie potrzebujesz więcej pracy.
        </p>
      </div>

      <section className={`${styles.grid} ${styles.gridTwo}`}>
        <ResultLineChart />
        <ActivityHeatmap />
      </section>

      <MasteryTable />
    </div>
  );
}

