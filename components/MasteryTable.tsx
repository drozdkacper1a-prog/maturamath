import styles from './MasteryTable.module.css';

type Row = {
  title: string;
  progress: number;
};

const rows: Row[] = [
  { title: 'Funkcje i równania', progress: 72 },
  { title: 'Geometria', progress: 61 },
  { title: 'Równania i nierówności', progress: 55 },
  { title: 'Trygonometria', progress: 38 },
  { title: 'Pochodne i całki', progress: 25 },
  { title: 'Statystyka i prawdopodobieństwo', progress: 66 }
];

function badge(progress: number) {
  if (progress > 70)
    return {
      background: 'rgba(29, 158, 117, 0.15)',
      color: '#168965',
      borderColor: '#1D9E75'
    };
  if (progress >= 40)
    return {
      background: 'rgba(245, 158, 11, 0.15)',
      color: '#B45309',
      borderColor: '#F59E0B'
    };
  return {
    background: 'rgba(239, 68, 68, 0.15)',
    color: '#B91C1C',
    borderColor: '#EF4444'
  };
}

function level(progress: number) {
  if (progress > 70) return 'wysoki';
  if (progress >= 40) return 'średni';
  return 'niski';
}

export default function MasteryTable() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Tabela działów</h2>
      <div className={styles.scroll}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headRow}>
              <th className={styles.th}>Dział</th>
              <th className={styles.th}>Opanowanie</th>
              <th className={styles.th}>Poziom</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.title} className={styles.tr}>
                <td className={`${styles.td} ${styles.name}`}>{r.title}</td>
                <td className={`${styles.td} ${styles.muted}`}>{r.progress}%</td>
                <td className={styles.td}>
                  <span className={styles.badge} style={badge(r.progress)}>
                    {level(r.progress)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

