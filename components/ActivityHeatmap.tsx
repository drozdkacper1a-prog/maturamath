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
      return 'bg-green-50';
    case 1:
      return 'bg-green-100';
    case 2:
      return 'bg-green-200';
    case 3:
      return 'bg-green-300';
    default:
      return 'bg-green-400';
  }
}

export default function ActivityHeatmap() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Aktywność (heatmap)
        </h2>
        <div className="text-xs text-gray-500">8 tygodni × 7 dni</div>
      </div>

      <div className="mt-4 space-y-1">
        {days.map((day, dayIdx) => (
          <div key={day} className="flex items-center gap-3">
            <div className="w-10 text-right text-xs text-gray-500">{day}</div>
            <div className="grid grid-cols-8 gap-1">
              {heatmap.map((week, weekIdx) => {
                const v = week[dayIdx] ?? 0;
                return (
                  <div
                    key={`${day}-${weekIdx}`}
                    title={`Tydzień ${weekIdx + 1}, ${day}: ${v}`}
                    className={`h-4 w-4 rounded-md ${valueToClass(v)} ring-1 ring-white/70`}
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

