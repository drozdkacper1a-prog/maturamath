import ProgressBar from '@/components/ProgressBar';

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
  if (progress > 70) return 'bg-[#1D9E75]';
  if (progress >= 40) return 'bg-[#F59E0B]';
  return 'bg-[#EF4444]';
}

export default function DashboardSectionList() {
  return (
    <div className="space-y-4">
      {sections.map((s) => (
        <div key={s.title} className="rounded-xl border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-gray-900">{s.title}</div>
            <div className="text-sm text-gray-600">{s.progress}%</div>
          </div>
          <div className="mt-2">
            <ProgressBar value={s.progress} colorClass={getBarColor(s.progress)} />
          </div>
        </div>
      ))}
    </div>
  );
}

