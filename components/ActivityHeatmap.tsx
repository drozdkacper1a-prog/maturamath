import cardStyles from './ChartCard.module.css';
import styles from './ActivityHeatmap.module.css';
const days = ['Pon', 'Wto', 'Śr', 'Czw', 'Pt', 'Sob', 'Nd'];
// 8 tygodni × 7 dni
const heatmap: number[][] = [
  [1, 0, 1, 2, 1, 0, 0],
  [0, 1, 2, 1, 0, 1, 0],
  [2, 1, 1, 3, 2, 1, 0],
  [1, 0, 2, 2, 1, 2, 1],
  [2, 1, 3, 2, 2, 1, 1],
  [0, 2, 2, 3, 2, 2, 0],
  [1, 1, 2, 3, 3, 2, 1],
  [2, 2, 3, 2, 4, 3, 2]
];

function valueToClass(v: number) {
  switch (v) {
    case 0:
      return '#f0fdf4';
    case 1:
      return '#dcfce7';
    case 2:
      return '#bbf7d0';
    case 3:
      return '#86efac';
    default:
      return '#4ade80';
  }
}

export default function ActivityHeatmap() {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.head}>
        <h2 className={cardStyles.title}>Aktywność (heatmap)</h2>
        <div className={cardStyles.meta}>8 tygodni × 7 dni</div>
      </div>

      <div className={styles.gridWrap}>
        {days.map((day, dayIdx) => (
          <div key={day} className={styles.row}>
            <div className={styles.day}>{day}</div>
            <div className={styles.weekCols}>
              {heatmap.map((week, weekIdx) => {
                const v = week[dayIdx] ?? 0;
                return (
                  <div
                    key={`${day}-${weekIdx}`}
                    title={`Tydzień ${weekIdx + 1}, ${day}: ${v}`}
                    className={styles.cell}
                    style={{ backgroundColor: valueToClass(v) }}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

