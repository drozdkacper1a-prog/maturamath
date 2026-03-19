import ProgressBar from '@/components/ProgressBar';
import styles from './DashboardSectionList.module.css';

type Section = {
  title: string;
  progress: number; // 0..100
};

const sections: Section[] = [
  { title: 'Funkcje i równania', progress: 72 },
  { title: 'Geometria', progress: 61 },
  { title: 'Równania i nierówności', progress: 55 },
  { title: 'Trygonometria', progress: 38 },
  { title: 'Pochodne i całki', progress: 25 },
  { title: 'Statystyka i prawdopodobieństwo', progress: 66 }
];

function getBarColor(progress: number) {
  if (progress > 70) return 'var(--accent)';
  if (progress >= 40) return 'var(--warning)';
  return 'var(--danger)';
}

export default function DashboardSectionList() {
  return (
    <div className={styles.list}>
      {sections.map((s) => (
        <div key={s.title} className={styles.item}>
          <div className={styles.row}>
            <div className={styles.title}>{s.title}</div>
            <div className={styles.value}>{s.progress}%</div>
          </div>
          <div className={styles.bar}>
            <ProgressBar value={s.progress} color={getBarColor(s.progress)} />
          </div>
        </div>
      ))}
    </div>
  );
}

