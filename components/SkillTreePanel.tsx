import styles from './SkillTreePanel.module.css';

type NodeStatus = 'done' | 'in_progress' | 'weak' | 'locked';

type SkillNode = {
  id: string;
  label: string;
  status: NodeStatus;
};

const functionsSkills: SkillNode[] = [
  { id: 'lin-func', label: 'Funkcja liniowa', status: 'done' },
  { id: 'quad-func', label: 'Funkcja kwadratowa', status: 'in_progress' },
  { id: 'log', label: 'Logarytmy', status: 'locked' }
];

const geometrySkills: SkillNode[] = [
  { id: 'tri', label: 'Trójkąty', status: 'done' },
  { id: 'triangles', label: 'Trygonometria', status: 'weak' },
  { id: 'stereo', label: 'Stereometria', status: 'locked' }
];

function getNodeClasses(status: NodeStatus) {
  switch (status) {
    case 'done':
      return styles.done;
    case 'in_progress':
      return styles.inProgress;
    case 'weak':
      return styles.weak;
    case 'locked':
      return styles.locked;
  }
}

function getSubtitle(status: NodeStatus) {
  switch (status) {
    case 'done':
      return 'opanowane';
    case 'in_progress':
      return 'w trakcie';
    case 'weak':
      return 'słabe';
    case 'locked':
      return 'zablokowane';
  }
}

function SkillGrid({ title, nodes }: { title: string; nodes: SkillNode[] }) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.pillRow}>
        {nodes.map((n) => (
          <div
            key={n.id}
            className={`${styles.pill} ${getNodeClasses(n.status)}`}
          >
            <span>
              {n.status === 'done'
                ? '✓'
                : n.status === 'in_progress'
                  ? '•'
                  : n.status === 'weak'
                    ? '!'
                    : 'L'}
            </span>
            <span>{n.label}</span>
            <span className={styles.meta}>
              {getSubtitle(n.status)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillTreePanel() {
  return (
    <div className={styles.wrapper}>
      <SkillGrid title="Funkcje" nodes={functionsSkills} />
      <SkillGrid title="Geometria" nodes={geometrySkills} />

      <div className={styles.legend}>
        <div className={styles.legendTitle}>Legenda</div>
        <div className={styles.legendRow}>
          <span className={`${styles.legendItem} ${styles.doneSoft}`}>
            <span className={styles.dot} style={{ background: 'var(--accent)' }} />
            opanowane
          </span>
          <span className={`${styles.legendItem} ${styles.inProgressSoft}`}>
            <span className={styles.dot} style={{ background: 'var(--warning)' }} />
            w trakcie
          </span>
          <span className={`${styles.legendItem} ${styles.weakSoft}`}>
            <span className={styles.dot} style={{ background: 'var(--danger)' }} />
            słabe
          </span>
          <span className={`${styles.legendItem} ${styles.lockedSoft}`}>
            <span className={styles.dot} style={{ background: '#9ca3af' }} />
            zablokowane
          </span>
        </div>
      </div>
    </div>
  );
}

