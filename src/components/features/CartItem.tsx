import { Trash2, Clock } from 'lucide-react';
import type { CartItem as CartItemType } from '@/types';
import { APP_CONFIG } from '@/constants/config';
import { useCartStore } from '@/stores/cartStore';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const removeItem = useCartStore((s) => s.removeItem);
  const isFood = item.product.sectionType === 'ready_food';

  return (
    <div className="flex gap-3 bg-card rounded-2xl p-3 border border-border/40 shadow-sm animate-fade-in-up">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="size-20 rounded-xl object-cover flex-shrink-0"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const p = e.currentTarget.parentElement;
          if (p) {
            const d = document.createElement('div');
            d.className = 'size-20 rounded-xl bg-cream-dark flex items-center justify-center flex-shrink-0';
            d.innerHTML = '<span class="text-2xl">🍽️</span>';
            p.prepend(d);
          }
        }}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-bold text-foreground line-clamp-1">{item.product.name}</h3>
          <button
            onClick={() => removeItem(item.cartItemId)}
            className="flex-shrink-0 flex items-center justify-center size-7 rounded-full hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
            aria-label="حذف"
          >
            <Trash2 className="size-3.5" />
          </button>
        </div>
        <div className="mt-1 flex flex-wrap gap-1.5">
          <span className="text-[10px] bg-secondary text-foreground font-medium px-2 py-0.5 rounded-full">
            {item.quantity} {item.product.unit}
          </span>
          {item.cutType && (
            <span className="text-[10px] bg-wine/10 text-wine font-medium px-2 py-0.5 rounded-full">{item.cutType}</span>
          )}
          {isFood && item.product.prepTime && (
            <span className="text-[10px] bg-gold/10 text-gold-dark font-medium px-2 py-0.5 rounded-full flex items-center gap-0.5">
              <Clock className="size-2.5" />{item.product.prepTime} د
            </span>
          )}
        </div>
        {item.notes && <p className="mt-1 text-[10px] text-muted-foreground line-clamp-1">📝 {item.notes}</p>}
        <p className="mt-1.5 price-tag text-sm">{item.totalPrice.toFixed(2)} {APP_CONFIG.currency}</p>
      </div>
    </div>
  );
}
