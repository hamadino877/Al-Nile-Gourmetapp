import { Link } from 'react-router-dom';
import { Truck, MapPin } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import heroImg from '@/assets/hero-meat.jpg';
import { APP_CONFIG } from '@/constants/config';

export default function HeroBanner() {
  const orderType = useCartStore((s) => s.orderType);
  const setOrderType = useCartStore((s) => s.setOrderType);

  return (
    <section className="relative overflow-hidden">
      {/* Hero Image with Gradient */}
      <div className="relative h-56 sm:h-72">
        <img
          src={heroImg}
          alt="لحوم طازجة"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine via-wine/70 to-wine/20" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <div className="animate-fade-in-up">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight text-balance">
              لحوم طازجة يومياً
              <br />
              <span className="text-gold">بالوزن والتقطيع</span>
            </h1>
            <p className="mt-1.5 text-cream/80 text-sm font-medium">
              توصيل مجاني للطلبات فوق {APP_CONFIG.freeDeliveryMin} {APP_CONFIG.currency}
            </p>
          </div>
        </div>
      </div>

      {/* Delivery Toggle */}
      <div className="px-4 -mt-5 relative z-10">
        <div className="bg-card rounded-2xl shadow-lg border border-border/50 p-1 flex gap-1">
          <button
            onClick={() => setOrderType('delivery')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
              orderType === 'delivery'
                ? 'bg-wine text-white shadow-md'
                : 'text-muted-foreground hover:bg-secondary'
            }`}
          >
            <Truck className="size-4" />
            توصيل للمنزل
          </button>
          <button
            onClick={() => setOrderType('pickup')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
              orderType === 'pickup'
                ? 'bg-wine text-white shadow-md'
                : 'text-muted-foreground hover:bg-secondary'
            }`}
          >
            <MapPin className="size-4" />
            استلام من الفرع
          </button>
        </div>
      </div>
    </section>
  );
}
