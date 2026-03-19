import styles from './StatCard.module.css';

type Props = {
  label: string;
  value: string;
  hint?: string;
  icon?: string;
};

export default function StatCard({ label, value, hint, icon }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.label}>
        {icon ? <span style={{ marginRight: 8 }}>{icon}</span> : null}
        {label}
      </div>
      <div className={styles.value}>{value}</div>
      {hint ? <div className={styles.hint}>{hint}</div> : null}
    </div>
  );
}

