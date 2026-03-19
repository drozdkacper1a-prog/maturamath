import SkillTreePanel from '@/components/SkillTreePanel';

export default function SkillTreePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Mapa umiejętności</h1>
        <p className="mt-2 text-sm text-gray-600">
          Zobacz, co masz opanowane, co jest w trakcie i gdzie warto wrócić.
        </p>
      </div>

      <SkillTreePanel />
    </div>
  );
}

