import SkillTreePanel from '@/components/SkillTreePanel';
import styles from '../simplePage.module.css';

export default function SkillTreePage() {
  return (
    <div className={styles.page}>
      <div>
        <h1 className={styles.title}>Mapa umiejętności</h1>
        <p className={styles.subtitle}>
          Zobacz, co masz opanowane, co jest w trakcie i gdzie warto wrócić.
        </p>
      </div>

      <SkillTreePanel />
    </div>
  );
}

