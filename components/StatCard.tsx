type Props = {
  label: string;
  value: string;
  hint?: string;
  icon?: string;
};

export default function StatCard({ label, value, hint, icon }: Props) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-card hover:-translate-y-0.5">
      <div className="text-sm text-gray-600">
        {icon ? <span className="mr-2">{icon}</span> : null}
        {label}
      </div>
      <div className="mt-2 text-2xl font-semibold text-gray-900">{value}</div>
      {hint ? <div className="mt-1 text-xs text-gray-500">{hint}</div> : null}
    </div>
  );
}

