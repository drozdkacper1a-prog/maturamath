type Props = {
  value: number; // 0..100
  colorClass?: string;
};

export default function ProgressBar({ value, colorClass }: Props) {
  const safe = Math.max(0, Math.min(100, value));
  const fillClass = colorClass ?? 'bg-accent';

  return (
    <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100">
      <div
        className={`h-full ${fillClass} transition-[width] duration-500`}
        style={{ width: `${safe}%` }}
      />
    </div>
  );
}

