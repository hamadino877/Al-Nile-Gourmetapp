import { Minus, Plus } from 'lucide-react';

interface WeightSelectorProps {
  value: number;
  min: number;
  max?: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
}

export default function WeightSelector({
  value,
  min,
  max = 20,
  step,
  unit,
  onChange,
}: WeightSelectorProps) {
  const canDecrease = value - step >= min;
  const canIncrease = value + step <= max;

  function handleDecrease() {
    if (canDecrease) {
      onChange(Math.round((value - step) * 100) / 100);
    }
  }

  function handleIncrease() {
    if (canIncrease) {
      onChange(Math.round((value + step) * 100) / 100);
    }
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleDecrease}
        disabled={!canDecrease}
        className="flex items-center justify-center size-12 rounded-xl bg-secondary text-foreground hover:bg-secondary/80 disabled:opacity-30 disabled:cursor-not-allowed transition-colors active:scale-95"
        aria-label="إنقاص"
      >
        <Minus className="size-5" />
      </button>

      <div className="flex-1 flex flex-col items-center justify-center bg-card border-2 border-wine/20 rounded-xl py-3 min-w-[100px]">
        <span className="text-2xl font-extrabold text-wine tabular-nums">{value}</span>
        <span className="text-xs text-muted-foreground font-medium">{unit}</span>
      </div>

      <button
        onClick={handleIncrease}
        disabled={!canIncrease}
        className="flex items-center justify-center size-12 rounded-xl bg-wine text-white hover:bg-wine-light disabled:opacity-30 disabled:cursor-not-allowed transition-colors active:scale-95"
        aria-label="زيادة"
      >
        <Plus className="size-5" />
      </button>
    </div>
  );
}
