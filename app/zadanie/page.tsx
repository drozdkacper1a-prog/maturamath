import MathTaskRunner from '@/components/MathTaskRunner';

export default function TaskPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Rozwiąż zadanie</h1>
        <p className="mt-1 text-sm text-gray-600">
          Ćwicz krok po kroku i od razu sprawdzaj odpowiedź.
        </p>
      </div>
      <MathTaskRunner />
    </div>
  );
}

