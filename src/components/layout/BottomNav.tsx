import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Beef, UtensilsCrossed, ShoppingCart, ClipboardList } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';

const NAV_ITEMS = [
  { path: '/', label: 'الرئيسية', icon: Home },
  { path: '/category/meats', label: 'اللحوم', icon: Beef },
  { path: '/category/food', label: 'الأكل', icon: UtensilsCrossed },
  { path: '/cart', label: 'السلة', icon: ShoppingCart, showBadge: true },
  { path: '/orders', label: 'طلباتي', icon: ClipboardList },
] as const;

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const itemCount = useCartStore((s) => s.items.length);

  function isActive(path: string) {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  }

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 bg-card/95 backdrop-blur-md border-t border-border/50 pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around h-[60px]">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.path);
          const Icon = item.icon;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center gap-0.5 w-16 h-full transition-colors relative ${
                active ? 'text-wine' : 'text-muted-foreground'
              }`}
              aria-label={item.label}
            >
              {active && <span className="absolute top-0 w-8 h-[3px] rounded-full bg-wine" />}
              <span className="relative">
                <Icon className="size-5" strokeWidth={active ? 2.5 : 1.8} />
                {'showBadge' in item && item.showBadge && itemCount > 0 && (
                  <span className="absolute -top-1.5 -left-2 flex items-center justify-center min-w-4 h-4 rounded-full bg-gold text-white text-[9px] font-bold px-0.5 tabular-nums">
                    {itemCount}
                  </span>
                )}
              </span>
              <span className={`text-[10px] leading-tight ${active ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
