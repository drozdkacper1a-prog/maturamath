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
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Wynik w czasie</h2>
        <div className="text-xs text-gray-500">7 tygodni</div>
      </div>

      <div className="mt-4" style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tydzien" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
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

