import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, ArrowRight, Phone } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { APP_CONFIG } from '@/constants/config';
import logoImg from '@/assets/logo.png';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const items = useCartStore((s) => s.items);
  const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-40 glass border-b border-border/50">
      <div className="flex items-center justify-between px-4 h-14">
        {/* Right side */}
        <div className="flex items-center gap-2.5">
          {!isHome && (
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center size-9 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="رجوع"
            >
              <ArrowRight className="size-5 text-foreground" />
            </button>
          )}
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImg} alt="النيل جورمية" className="size-8 rounded-full object-cover shadow-sm" />
            <div className="flex flex-col">
              <span className="text-sm font-extrabold text-wine leading-none">النيل جورمية</span>
              {isHome && <span className="text-[9px] text-muted-foreground font-medium">مطعم وملحمة | دبي</span>}
            </div>
          </Link>
        </div>

        {/* Left side */}
        <div className="flex items-center gap-2">
          <a
            href={APP_CONFIG.callLink}
            className="flex items-center justify-center size-9 rounded-full bg-green-600/10 hover:bg-green-600/20 transition-colors"
            aria-label="اتصال"
          >
            <Phone className="size-4 text-green-600" />
          </a>
          <button
            onClick={() => navigate('/cart')}
            className="relative flex items-center justify-center size-9 rounded-full bg-wine/10 hover:bg-wine/20 transition-colors"
            aria-label="السلة"
          >
            <ShoppingCart className="size-4 text-wine" />
            {items.length > 0 && (
              <span className="absolute -top-1 -left-1 flex items-center justify-center min-w-[18px] h-[18px] rounded-full bg-gold text-white text-[10px] font-bold px-0.5 tabular-nums shadow-sm">
                {items.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
