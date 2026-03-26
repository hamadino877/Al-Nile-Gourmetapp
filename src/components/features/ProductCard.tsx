import { Link } from 'react-router-dom';
import { Plus, Clock } from 'lucide-react';
import type { Product } from '@/types';
import { APP_CONFIG } from '@/constants/config';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isFood = product.sectionType === 'ready_food';

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-card rounded-2xl overflow-hidden border border-border/40 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 active:scale-[0.98]"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-cream-dark">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.classList.add('flex', 'items-center', 'justify-center');
              parent.innerHTML = '<span class="text-4xl">🍽️</span>';
            }
          }}
        />
        {product.origin && (
          <span className="absolute top-2 start-2 bg-wine/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
            {product.origin}
          </span>
        )}
        {isFood && product.prepTime && (
          <span className="absolute top-2 end-2 bg-black/70 text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 backdrop-blur-sm">
            <Clock className="size-2.5" />
            {product.prepTime} د
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="text-xs font-bold text-foreground leading-snug line-clamp-2 min-h-[2rem] group-hover:text-wine transition-colors">
          {product.name}
        </h3>

        <div className="mt-2 flex items-end justify-between">
          <div>
            <span className="price-tag text-base leading-none">{product.price}</span>
            <span className="text-[10px] text-muted-foreground font-medium me-1">
              {APP_CONFIG.currency}
              {product.unit === 'كجم' && '/كجم'}
            </span>
          </div>
          <span className="flex items-center justify-center size-7 rounded-full bg-wine text-white shadow-sm group-hover:bg-gold transition-colors active:scale-90">
            <Plus className="size-3.5" strokeWidth={3} />
          </span>
        </div>
      </div>
    </Link>
  );
}
