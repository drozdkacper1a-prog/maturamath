import CountdownToMatura from '@/components/CountdownToMatura';
import DashboardSectionList from '@/components/DashboardSectionList';
import ProgressBar from '@/components/ProgressBar';
import StatCard from '@/components/StatCard';
import SuggestedTasks from '@/components/SuggestedTasks';

export default function DashboardPage() {
  const estimated = 74;
  const goal = 80;
  const progressToGoal = Math.round((estimated / goal) * 100);

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-green-100 bg-gradient-to-br from-white to-[#f0fdf4] p-6 shadow-card">
          <div className="text-sm font-semibold text-gray-700">Szacowany wynik matury</div>
          <div className="mt-1 flex items-end justify-between gap-3">
            <div>
              <div className="text-6xl font-extrabold tracking-tight text-gray-900">
                {estimated}%
              </div>
              <div className="mt-1 text-sm text-gray-600">Cel: {goal}%</div>
            </div>

            <div className="rounded-xl bg-white/80 px-3 py-2 text-right shadow-sm">
              <div className="text-xs font-semibold text-accent">Do celu</div>
              <div className="text-lg font-bold text-gray-900">{progressToGoal}%</div>
            </div>
          </div>

          <div className="mt-5">
            <ProgressBar value={estimated} colorClass="bg-accent" />
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
            <span>0%</span>
            <span>{goal}%</span>
          </div>
        </div>

        <CountdownToMatura />
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <StatCard icon="📚" label="Sesje" value="12" hint="ostatnie 14 dni" />
        <StatCard icon="✅" label="Zadania rozwiązane" value="38" hint="z nich: 21 z poprawą" />
        <StatCard icon="🎯" label="Średnia trafność" value="74%" hint="zgodność rozwiązań" />
        <StatCard icon="⏱" label="Czas nauki" value="6 h 40 min" hint="w tym tydzień" />
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Twoje działy</h2>
          <div className="text-xs text-gray-500">
            Zielony &gt; 70%, żółty 40–70%, czerwony &lt; 40%
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-gray-100 bg-white p-5 shadow-card">
          <DashboardSectionList />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-card">
          <h2 className="text-lg font-semibold text-gray-900">Sugerowane zadania</h2>
          <div className="mt-3">
            <SuggestedTasks />
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-card">
          <h2 className="text-lg font-semibold text-gray-900">Na dziś</h2>
          <div className="mt-3 space-y-3 text-sm text-gray-700">
            <div className="rounded-xl bg-gray-50 p-3">
              Skup się na <span className="font-semibold text-gray-900">Geometrii</span> i zadaniach z wykresów.
            </div>
            <div className="rounded-xl bg-gray-50 p-3">
              Powtórz wzory: <span className="font-semibold text-gray-900">wyróżnik</span> i <span className="font-semibold text-gray-900">pierwiastki</span>.
            </div>
            <div className="rounded-xl bg-gray-50 p-3">
              Zapisz odpowiedzi krótko, żeby szybciej sprawdzać się w sesji.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

