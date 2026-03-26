import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Info, MapPin, Clock, Share2, Minus, Plus } from 'lucide-react';
import { toast } from 'sonner';
import { useProducts } from '@/hooks/useProducts';
import { APP_CONFIG } from '@/constants/config';
import { useCartStore } from '@/stores/cartStore';
import CutTypeSelector from '@/components/features/CutTypeSelector';
import type { CutType } from '@/types';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products, loading } = useProducts();
  const product = products.find(p => p.id === id);
  const addItem = useCartStore((s) => s.addItem);

  const [quantity, setQuantity] = useState(product?.minQuantity || 1);
  const [cutType, setCutType] = useState<CutType | undefined>();
  const [notes, setNotes] = useState('');

  if (loading && products.length === 0) {
    return <div className="p-8 text-center text-muted-foreground animate-pulse">جاري التحميل...</div>;
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-96 gap-3">
        <span className="text-5xl">🍽️</span>
        <p className="text-muted-foreground font-medium">المنتج غير موجود</p>
      </div>
    );
  }

  const isFood = product.sectionType === 'ready_food';
  const totalPrice = Math.round(product.price * quantity * 100) / 100;
  const step = product.step;
  const min = product.minQuantity;
  const canDecrease = quantity - step >= min;
  const canIncrease = quantity + step <= 20;

  function handleAddToCart() {
    addItem(product!, quantity, cutType, notes || undefined);
    toast.success(`تمت إضافة ${product!.name} للسلة`, {
      description: `${quantity} ${product!.unit} — ${totalPrice} ${APP_CONFIG.currency}`,
    });
    navigate(-1);
  }

  function handleShare() {
    const text = `${product!.name} — ${product!.price} ${APP_CONFIG.currency}\nاطلب الآن من النيل جورمية\n${APP_CONFIG.whatsappLink}`;
    if (navigator.share) {
      navigator.share({ title: product!.name, text }).catch(() => {});
    } else {
      window.open(`${APP_CONFIG.whatsappLink}?text=${encodeURIComponent(text)}`, '_blank');
    }
  }

  return (
    <div className="pb-28">
      {/* Product Image */}
      <div className="relative h-72 sm:h-80 bg-cream-dark">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const p = e.currentTarget.parentElement;
            if (p) { p.classList.add('flex', 'items-center', 'justify-center'); p.innerHTML = '<span class="text-7xl">🍽️</span>'; }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <button
          onClick={handleShare}
          className="absolute top-4 end-4 flex items-center justify-center size-10 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-sm"
          aria-label="مشاركة"
        >
          <Share2 className="size-5" />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 -mt-10 relative z-10 space-y-4">
        {/* Title & Price Card */}
        <div className="bg-card rounded-2xl p-4 border border-border/40 shadow-lg">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-extrabold text-foreground leading-tight">{product.name}</h1>
              <p className="text-xs text-muted-foreground mt-0.5 font-medium">{product.categoryName}</p>
            </div>
            <div className="text-end flex-shrink-0">
              <p className="price-tag text-2xl leading-none">{product.price}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{APP_CONFIG.currency}/{product.unit}</p>
            </div>
          </div>

          {/* Badges */}
          <div className="mt-3 flex flex-wrap gap-2">
            {product.origin && (
              <div className="flex items-center gap-1.5 bg-wine/10 rounded-lg px-2.5 py-1.5">
                <MapPin className="size-3 text-wine" />
                <span className="text-[11px] font-bold text-wine">{product.origin}</span>
              </div>
            )}
            {isFood && product.prepTime && (
              <div className="flex items-center gap-1.5 bg-gold/10 rounded-lg px-2.5 py-1.5">
                <Clock className="size-3 text-gold-dark" />
                <span className="text-[11px] font-bold text-gold-dark">{product.prepTime} دقيقة تحضير</span>
              </div>
            )}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="bg-card rounded-2xl p-4 border border-border/40 shadow-sm">
          <label className="text-sm font-bold text-foreground mb-3 block">
            {product.unit === 'كجم' ? '⚖️ الوزن' : '🔢 الكمية'}
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => canDecrease && setQuantity(Math.round((quantity - step) * 100) / 100)}
              disabled={!canDecrease}
              className="flex items-center justify-center size-12 rounded-xl bg-secondary text-foreground hover:bg-secondary/80 disabled:opacity-30 transition-colors active:scale-95"
            >
              <Minus className="size-5" />
            </button>
            <div className="flex-1 flex flex-col items-center justify-center bg-card border-2 border-wine/20 rounded-xl py-3">
              <span className="text-2xl font-extrabold text-wine tabular-nums">{quantity}</span>
              <span className="text-xs text-muted-foreground font-medium">{product.unit}</span>
            </div>
            <button
              onClick={() => canIncrease && setQuantity(Math.round((quantity + step) * 100) / 100)}
              disabled={!canIncrease}
              className="flex items-center justify-center size-12 rounded-xl bg-wine text-white hover:bg-wine-light disabled:opacity-30 transition-colors active:scale-95"
            >
              <Plus className="size-5" />
            </button>
          </div>
          {product.unit === 'كجم' && (
            <p className="text-[10px] text-muted-foreground mt-2 text-center">الحد الأدنى: {min} كجم</p>
          )}
        </div>

        {/* Cut Type */}
        {product.hasCutOptions && (
          <div className="bg-card rounded-2xl p-4 border border-border/40 shadow-sm">
            <CutTypeSelector selected={cutType} onSelect={setCutType} />
          </div>
        )}

        {/* Notes */}
        <div className="bg-card rounded-2xl p-4 border border-border/40 shadow-sm">
          <label className="text-sm font-bold text-foreground mb-2 block">
            {isFood ? '📝 ملاحظات خاصة' : '📝 ملاحظات إضافية'}
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={isFood ? 'مثال: بدون بصل، حار زيادة...' : 'مثال: نظيف بدون دهون، تقطيع صغير...'}
            className="w-full bg-secondary rounded-xl px-4 py-3 text-sm resize-none h-20 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-wine/30"
          />
        </div>

        {/* Cash Notice */}
        <div className="flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-xl px-4 py-3">
          <Info className="size-4 text-gold-dark flex-shrink-0" />
          <p className="text-xs font-bold text-gold-dark">💵 الدفع كاش عند الاستلام فقط</p>
        </div>
      </div>

      {/* Fixed Add to Cart */}
      <div className="fixed bottom-[60px] inset-x-0 z-40 px-4 pb-3 pt-2 bg-gradient-to-t from-background via-background to-transparent max-w-lg mx-auto">
        <button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-between bg-wine hover:bg-wine-light text-white rounded-2xl px-5 py-4 shadow-xl transition-colors active:scale-[0.98]"
        >
          <div className="flex items-center gap-2">
            <ShoppingCart className="size-5" />
            <span className="font-bold">أضف للسلة</span>
          </div>
          <span className="font-extrabold text-lg tabular-nums">
            {totalPrice.toFixed(2)} {APP_CONFIG.currency}
          </span>
        </button>
      </div>
    </div>
  );
}
