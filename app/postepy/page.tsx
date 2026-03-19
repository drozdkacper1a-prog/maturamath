import ActivityHeatmap from '@/components/ActivityHeatmap';
import MasteryTable from '@/components/MasteryTable';
import ResultLineChart from '@/components/ResultLineChart';

export default function PostepyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Postępy</h1>
        <p className="mt-2 text-sm text-gray-600">
          Obserwuj, jak rośnie Twój wynik oraz gdzie potrzebujesz więcej pracy.
        </p>
      </div>

      <section className="grid gap-4 lg:grid-cols-2">
        <ResultLineChart />
        <ActivityHeatmap />
      </section>

      <MasteryTable />
    </div>
  );
}

