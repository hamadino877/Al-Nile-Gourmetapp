import type { OrderStatus } from '@/types';
import { Check } from 'lucide-react';

interface OrderStatusBarProps {
  status: OrderStatus;
  orderType: 'delivery' | 'pickup';
}

const DELIVERY_STEPS: { status: OrderStatus; label: string }[] = [
  { status: 'confirmed', label: 'تم التأكيد' },
  { status: 'preparing', label: 'قيد التحضير' },
  { status: 'ready', label: 'جاهز' },
  { status: 'out_for_delivery', label: 'في الطريق' },
  { status: 'delivered', label: 'تم التوصيل' },
];

const PICKUP_STEPS: { status: OrderStatus; label: string }[] = [
  { status: 'confirmed', label: 'تم التأكيد' },
  { status: 'preparing', label: 'قيد التحضير' },
  { status: 'ready', label: 'جاهز للاستلام' },
  { status: 'delivered', label: 'تم الاستلام' },
];

function getStepIndex(status: OrderStatus, steps: { status: OrderStatus }[]): number {
  const idx = steps.findIndex((s) => s.status === status);
  return idx === -1 ? 0 : idx;
}

export default function OrderStatusBar({ status, orderType }: OrderStatusBarProps) {
  const steps = orderType === 'delivery' ? DELIVERY_STEPS : PICKUP_STEPS;
  const currentIdx = getStepIndex(status, steps);

  return (
    <div className="py-4">
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute top-4 inset-x-0 h-0.5 bg-border mx-6" />
        <div
          className="absolute top-4 start-6 h-0.5 bg-wine transition-all duration-500"
          style={{ width: `calc(${(currentIdx / (steps.length - 1)) * 100}% - 48px)` }}
        />

        {steps.map((step, i) => {
          const completed = i <= currentIdx;
          const isCurrent = i === currentIdx;
          return (
            <div key={step.status} className="flex flex-col items-center gap-1.5 relative z-10">
              <div
                className={`flex items-center justify-center size-8 rounded-full border-2 transition-all ${
                  completed
                    ? 'bg-wine border-wine text-white'
                    : 'bg-card border-border text-muted-foreground'
                } ${isCurrent ? 'animate-pulse-gold ring-4 ring-wine/20' : ''}`}
              >
                {completed ? (
                  <Check className="size-4" strokeWidth={3} />
                ) : (
                  <span className="text-xs font-bold">{i + 1}</span>
                )}
              </div>
              <span
                className={`text-[10px] font-bold text-center leading-tight max-w-16 ${
                  completed ? 'text-wine' : 'text-muted-foreground'
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
