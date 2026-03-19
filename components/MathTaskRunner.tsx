'use client';

import { useMemo, useRef, useState } from 'react';
import styles from './MathTaskRunner.module.css';

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
    <div className={styles.card}>
      <h1 className={styles.title}>Zadanie</h1>
      <div className={styles.taskBox}>
        <p>{task.prompt}</p>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Twoja odpowiedź</label>
        <textarea
          ref={textareaRef}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows={4}
          className={styles.textarea}
          placeholder="Wpisz odpowiedź, np. x1=3, x2=-0.5"
        />
      </div>

      <div className={styles.actions}>
        <button
          onClick={onCheck}
          className={styles.primaryBtn}
        >
          Sprawdź odpowiedź
        </button>
        <button
          onClick={onNext}
          className={styles.secondaryBtn}
        >
          Następne zadanie
        </button>
      </div>

      {status === 'success' ? (
        <div className={styles.success}>
          <div className={styles.successTitle}>Gratulacje! +25 XP</div>
          <div className={styles.successText}>Twoja odpowiedź jest poprawna.</div>
        </div>
      ) : null}

      {status === 'error' ? (
        <div className={styles.error}>
          <div className={styles.errorTitle}>Niestety, spróbuj jeszcze raz.</div>
          <div className={styles.errorSubtitle}>{task.solutionTitle}</div>
          <ol className={styles.steps}>
            {task.solutionSteps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </div>
      ) : null}
    </div>
  );
}

