import { CUT_OPTIONS, type CutType } from '@/types';

interface CutTypeSelectorProps {
  selected?: string;
  onSelect: (cut: CutType) => void;
}

export default function CutTypeSelector({ selected, onSelect }: CutTypeSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-foreground">نوع التقطيع</label>
      <div className="grid grid-cols-3 gap-2">
        {CUT_OPTIONS.map((cut) => (
          <button
            key={cut}
            onClick={() => onSelect(cut)}
            className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all text-center leading-tight ${
              selected === cut
                ? 'bg-wine text-white shadow-md ring-2 ring-wine/30'
                : 'bg-secondary text-foreground hover:bg-secondary/70 border border-border/50'
            }`}
          >
            {cut}
          </button>
        ))}
      </div>
    </div>
  );
}
