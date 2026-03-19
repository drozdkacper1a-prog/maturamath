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
      return 'bg-[#1D9E75] text-white';
    case 'in_progress':
      return 'bg-[#F59E0B] text-white';
    case 'weak':
      return 'bg-[#EF4444] text-white';
    case 'locked':
      return 'bg-gray-400 text-white opacity-70';
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
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {nodes.map((n) => (
          <div
            key={n.id}
            className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm"
          >
            <div
              className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${getNodeClasses(
                n.status
              )}`}
            >
              <span className="text-sm font-bold">
                {n.status === 'done'
                  ? '✓'
                  : n.status === 'in_progress'
                    ? '•'
                    : n.status === 'weak'
                      ? '!'
                      : 'L'}
              </span>
            </div>
            <div className="mt-3 text-sm font-medium text-gray-900">
              {n.label}
            </div>
            <div className="mt-1 text-xs text-gray-600">{getSubtitle(n.status)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillTreePanel() {
  return (
    <div className="space-y-6">
      <SkillGrid title="Funkcje" nodes={functionsSkills} />
      <SkillGrid title="Geometria" nodes={geometrySkills} />

      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="text-sm font-semibold text-gray-900">Legenda</div>
        <div className="mt-3 flex flex-wrap gap-3 text-xs">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#1D9E75]/10 px-3 py-1 text-[#1D9E75]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#1D9E75]" />
            opanowane
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B]/10 px-3 py-1 text-[#B45309]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
            w trakcie
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#EF4444]/10 px-3 py-1 text-[#B91C1C]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
            słabe
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-gray-700">
            <span className="h-2.5 w-2.5 rounded-full bg-gray-400" />
            zablokowane
          </span>
        </div>
      </div>
    </div>
  );
}

