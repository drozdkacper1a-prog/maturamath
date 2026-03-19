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
    return 'bg-[#1D9E75]/15 text-[#168965] border-[#1D9E75]';
  if (progress >= 40)
    return 'bg-[#F59E0B]/15 text-[#B45309] border-[#F59E0B]';
  return 'bg-[#EF4444]/15 text-[#B91C1C] border-[#EF4444]';
}

function level(progress: number) {
  if (progress > 70) return 'wysoki';
  if (progress >= 40) return 'średni';
  return 'niski';
}

export default function MasteryTable() {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-card">
      <h2 className="text-lg font-semibold text-gray-900">
        Tabela działów
      </h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-sm">
          <thead>
            <tr className="text-left text-xs uppercase text-gray-500">
              <th className="pb-3 font-semibold">Dział</th>
              <th className="pb-3 font-semibold">Opanowanie</th>
              <th className="pb-3 font-semibold">Poziom</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.title} className="border-t border-gray-100">
                <td className="py-3 font-medium text-gray-900">{r.title}</td>
                <td className="py-3 text-gray-700">{r.progress}%</td>
                <td className="py-3">
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${badge(
                      r.progress
                    )}`}
                  >
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

