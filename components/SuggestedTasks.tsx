import Link from 'next/link';

const tasks = [
  {
    title: 'Miejsca zerowe funkcji kwadratowej',
    subtitle: 'Sprawdź wyróżnik i wyznacz pierwiastki'
  },
  {
    title: 'Równanie liniowe krok po kroku',
    subtitle: 'Przekształcenia i poprawne rozumowanie'
  },
  {
    title: 'Wykres funkcji i odczyt z osi',
    subtitle: 'Zamiana opisu na konkretne wartości'
  }
];

export default function SuggestedTasks() {
  return (
    <div className="space-y-3">
      {tasks.map((t) => (
        <Link
          key={t.title}
          href="/zadanie"
          className="block rounded-xl border border-gray-100 bg-white p-4 shadow-card hover:-translate-y-0.5 hover:border-accent/30"
        >
          <div className="text-sm font-semibold text-gray-900">{t.title}</div>
          <div className="mt-1 text-xs text-gray-600">{t.subtitle}</div>
          <div className="mt-3 inline-flex items-center rounded-full bg-accentLight px-3 py-1 text-xs font-semibold text-accent">
            Rozwiąż →
          </div>
        </Link>
      ))}
    </div>
  );
}

