import CountdownToMatura from '@/components/CountdownToMatura';
import DashboardSectionList from '@/components/DashboardSectionList';
import ProgressBar from '@/components/ProgressBar';
import StatCard from '@/components/StatCard';
import SuggestedTasks from '@/components/SuggestedTasks';
import styles from './page.module.css';

export default function DashboardPage() {
  const estimated = 74;
  const goal = 80;
  const progressToGoal = Math.round((estimated / goal) * 100);

  return (
    <div className={styles.page}>
      <section className={styles.topGrid}>
        <div className={styles.hero}>
          <div className={styles.heroTitle}>Szacowany wynik matury</div>
          <div className={styles.heroRow}>
            <div>
              <div className={styles.score}>{estimated}%</div>
              <div className={styles.goal}>Cel: {goal}%</div>
            </div>

            <div className={styles.goalBadge}>
              <div className={styles.goalBadgeLabel}>Do celu</div>
              <div className={styles.goalBadgeValue}>{progressToGoal}%</div>
            </div>
          </div>

          <div className={styles.heroBar}>
            <ProgressBar value={estimated} color="var(--accent)" />
          </div>
          <div className={styles.barLegend}>
            <span>0%</span>
            <span>{goal}%</span>
          </div>
        </div>

        <CountdownToMatura />
      </section>

      <section className={styles.statsGrid}>
        <StatCard icon="📚" label="Sesje" value="12" hint="ostatnie 14 dni" />
        <StatCard icon="✅" label="Zadania rozwiązane" value="38" hint="z nich: 21 z poprawą" />
        <StatCard icon="🎯" label="Średnia trafność" value="74%" hint="zgodność rozwiązań" />
        <StatCard icon="⏱" label="Czas nauki" value="6 h 40 min" hint="w tym tydzień" />
      </section>

      <section>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Twoje działy</h2>
          <div className={styles.sectionInfo}>
            Zielony &gt; 70%, żółty 40–70%, czerwony &lt; 40%
          </div>
        </div>
        <div className={styles.card} style={{ marginTop: '1rem' }}>
          <DashboardSectionList />
        </div>
      </section>

      <section className={styles.bottomGrid}>
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>Sugerowane zadania</h2>
          <div style={{ marginTop: '0.75rem' }}>
            <SuggestedTasks />
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>Na dziś</h2>
          <div className={styles.todayList}>
            <div className={styles.todayItem}>
              Skup się na <strong>Geometrii</strong> i zadaniach z wykresów.
            </div>
            <div className={styles.todayItem}>
              Powtórz wzory: <strong>wyróżnik</strong> i <strong>pierwiastki</strong>.
            </div>
            <div className={styles.todayItem}>
              Zapisz odpowiedzi krótko, żeby szybciej sprawdzać się w sesji.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

