import styles from './ProgressBar.module.css';

type Props = {
  value: number; // 0..100
  color?: string;
};

export default function ProgressBar({ value, color }: Props) {
  const safe = Math.max(0, Math.min(100, value));

  return (
    <div className={styles.track}>
      <div
        className={styles.fill}
        style={{ width: `${safe}%`, backgroundColor: color ?? 'var(--accent)' }}
      />
    </div>
  );
}

