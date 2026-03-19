'use client';

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import styles from './ChartCard.module.css';

const data = [
  { tydzien: 'T1', wynik: 52 },
  { tydzien: 'T2', wynik: 55 },
  { tydzien: 'T3', wynik: 57 },
  { tydzien: 'T4', wynik: 61 },
  { tydzien: 'T5', wynik: 65 },
  { tydzien: 'T6', wynik: 70 },
  { tydzien: 'T7', wynik: 74 }
];

export default function ResultLineChart() {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <h2 className={styles.title}>Wynik w czasie</h2>
        <div className={styles.meta}>7 tygodni</div>
      </div>

      <div style={{ marginTop: 16, height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 8, bottom: 8, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="tydzien" tick={{ fill: '#6b7280', fontSize: 12 }} />
            <YAxis domain={[0, 100]} tick={{ fill: '#6b7280', fontSize: 12 }} />
            <Tooltip cursor={{ stroke: '#a7f3d0' }} />
            <Line
              type="monotone"
              dataKey="wynik"
              stroke="#1D9E75"
              strokeWidth={3}
              dot={{ r: 4, stroke: '#1D9E75', strokeWidth: 2, fill: '#ffffff' }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

