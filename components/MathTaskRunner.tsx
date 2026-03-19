'use client';

import { useMemo, useRef, useState } from 'react';

type Task = {
  id: string;
  prompt: string;
  expectedSubstrings: string[]; // po przefiltrowaniu odpowiedzi
  solutionTitle: string;
  solutionSteps: string[];
};

function normalizeAnswer(input: string) {
  // Ujednolicamy zapis liczby (przecinek vs kropka, różne znaki minusa).
  return input
    .trim()
    .replaceAll('−', '-')
    .replaceAll('–', '-')
    .replaceAll(',', '.')
    .replaceAll(/\s+/g, '');
}

export default function MathTaskRunner() {
  const tasks: Task[] = useMemo(
    () => [
      {
        id: 'quadratic-zeros',
        prompt:
          'Znajdź miejsca zerowe funkcji f(x) = 2x^2 - 5x - 3',
        expectedSubstrings: ['3', '-0.5'],
        solutionTitle: 'Rozwiązanie krok po kroku',
        solutionSteps: [
          '1) Wyróżnik: dla a=2, b=-5, c=-3 liczymy D = b^2 - 4ac = (-5)^2 - 4*2*(-3) = 25 + 24 = 49.',
          '2) Pierwiastek z wyróżnika: sqrt(D) = sqrt(49) = 7.',
          '3) Pierwiastki: x = (-b ± sqrt(D))/(2a) = (5 ± 7)/4.',
          '4) Wynik: x1 = (5+7)/4 = 3 oraz x2 = (5-7)/4 = -0.5.'
        ]
      },
      {
        id: 'linear-equation',
        prompt: 'Rozwiąż równanie: 2x - 3 = 5',
        expectedSubstrings: ['4'],
        solutionTitle: 'Rozwiązanie krok po kroku',
        solutionSteps: [
          '1) Dodaj 3 do obu stron: 2x = 8.',
          '2) Podziel przez 2: x = 4.',
          '3) Sprawdź: 2·4 − 3 = 8 − 3 = 5.',
          '4) Odpowiedź: x = 4.'
        ]
      }
    ],
    []
  );

  const [taskIndex, setTaskIndex] = useState(0);
  const task = tasks[taskIndex];

  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  function resetForNext() {
    setAnswer('');
    setStatus('idle');
    requestAnimationFrame(() => textareaRef.current?.focus());
  }

  function onCheck() {
    const normalized = normalizeAnswer(answer);
    const ok = task.expectedSubstrings.every((s) => normalized.includes(s));

    if (ok) {
      setStatus('success');
      return;
    }
    setStatus('error');
  }

  function onNext() {
    const next = (taskIndex + 1) % tasks.length;
    setTaskIndex(next);
    resetForNext();
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h1 className="text-xl font-semibold text-gray-900">Zadanie</h1>
      <p className="mt-3 text-sm text-gray-700">
        {task.prompt}
      </p>

      <div className="mt-5">
        <label className="text-sm font-medium text-gray-800">
          Twoja odpowiedź
        </label>
        <textarea
          ref={textareaRef}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows={4}
          className="mt-2 w-full resize-none rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm outline-none focus:border-[#1D9E75] focus:ring-2 focus:ring-[#1D9E75]/20"
          placeholder="Wpisz odpowiedź, np. x1=3, x2=-0.5"
        />
      </div>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
        <button
          onClick={onCheck}
          className="rounded-xl bg-[#1D9E75] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#168965] focus:outline-none focus:ring-2 focus:ring-[#1D9E75]/40"
        >
          Sprawdź odpowiedź
        </button>
        <button
          onClick={onNext}
          className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          Następne zadanie
        </button>
      </div>

      {status === 'success' ? (
        <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-4">
          <div className="text-sm font-semibold text-green-800">
            Sukces!
          </div>
          <div className="mt-1 text-sm text-green-900">
            Twoja odpowiedź jest poprawna.
          </div>
        </div>
      ) : null}

      {status === 'error' ? (
        <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4">
          <div className="text-sm font-semibold text-red-800">
            Niestety, spróbuj jeszcze raz.
          </div>
          <div className="mt-2 text-sm font-medium text-red-900">
            {task.solutionTitle}
          </div>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-red-900">
            {task.solutionSteps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </div>
      ) : null}
    </div>
  );
}

