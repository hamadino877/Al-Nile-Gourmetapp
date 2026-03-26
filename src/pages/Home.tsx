import { Link } from 'react-router-dom';
import { ChevronLeft, Phone, MessageCircle, MapPin, Truck, Clock, Banknote, Star } from 'lucide-react';
import ProductCard from '@/components/features/ProductCard';
import { getMeatCategories, getFoodCategories, getFeaturedProducts, getFeaturedFood, getTotalProductCount } from '@/constants/mockData';
import { APP_CONFIG } from '@/constants/config';
import { useCartStore } from '@/stores/cartStore';
import { useProducts } from '@/hooks/useProducts';
import heroBanner from '@/assets/hero-banner.jpg';
import secMeat from '@/assets/sec-meat.jpg';
import secFood from '@/assets/sec-food.jpg';
import logoImg from '@/assets/logo.png';

// Category images
import beefImg from '@/assets/category-beef.jpg';
import lambImg from '@/assets/category-lamb.jpg';
import poultryImg from '@/assets/category-poultry.jpg';
import grillImg from '@/assets/category-grill.jpg';
import fryImg from '@/assets/category-fry.jpg';
import catSoupsImg from '@/assets/cat-soups.jpg';
import catAppImg from '@/assets/cat-appetizers.jpg';
import catMahashiImg from '@/assets/cat-mahashi.jpg';
import catTagineImg from '@/assets/cat-tagine.jpg';
import catFattaImg from '@/assets/cat-fatta.jpg';
import catGrillsImg from '@/assets/cat-grills.jpg';
import catSandwichImg from '@/assets/cat-sandwiches.jpg';
import catFeteerImg from '@/assets/cat-feteer.jpg';
import catCrepeImg from '@/assets/cat-crepe.jpg';
import catPizzaImg from '@/assets/cat-pizza.jpg';
import catPoultryFoodImg from '@/assets/cat-poultry-food.jpg';
import catSpecialImg from '@/assets/cat-special.jpg';

const MEAT_CAT_IMAGES: Record<string, string> = {
  beef: beefImg, lamb: lambImg, poultry: poultryImg, grill_raw: grillImg, fry_raw: fryImg,
};
const FOOD_CAT_IMAGES: Record<string, string> = {
  soups: catSoupsImg, cold_appetizers: catAppImg, hot_appetizers: catAppImg, mahashi: catMahashiImg,
  tagines: catTagineImg, fatta: catFattaImg, poultry_food: catPoultryFoodImg, special: catSpecialImg,
  grills: catGrillsImg, sandwiches: catSandwichImg, feteer_savory: catFeteerImg, feteer_sweet: catFeteerImg,
  crepe_savory: catCrepeImg, crepe_sweet: catCrepeImg, pizza: catPizzaImg,
};

export default function Home() {
  const { products, loading } = useProducts();
  const meatCats = getMeatCategories();
  const foodCats = getFoodCategories();
  
  const featured = products.filter(p => ['bf_01', 'lb_01', 'rg_02', 'pt_02'].includes(p.id));
  const featuredFood = products.filter(p => ['gr_01', 'tg_07', 'sd_01', 'pz_04', 'dk_01', 'py_05'].includes(p.id));
  
  const orderType = useCartStore((s) => s.orderType);
  const setOrderType = useCartStore((s) => s.setOrderType);

  if (loading && products.length === 0) {
    return <div className="p-8 text-center text-muted-foreground animate-pulse">جاري تحميل المنتجات...</div>;
  }

  return (
    <div className="pb-6">
      {/* ═══ HERO ═══ */}
      <section className="relative">
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img src={heroBanner} alt="النيل جورمية" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
          <div className="absolute inset-0 flex flex-col justify-end p-5 pb-14">
            <div className="flex items-center gap-3 mb-3 animate-fade-in-up">
              <img src={logoImg} alt="Logo" className="size-12 rounded-full border-2 border-gold/60 shadow-lg object-cover" />
              <div>
                <h1 className="text-2xl font-extrabold text-white leading-tight">النيل جورمية</h1>
                <p className="text-xs text-gold font-bold">مطعم وملحمة | دبي</p>
              </div>
            </div>
            <p className="text-sm text-white/80 font-medium animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              لحوم طازجة بالوزن والتقطيع + أكل مصري جاهز
            </p>
          </div>
        </div>

        {/* Delivery Toggle */}
        <div className="px-4 -mt-6 relative z-10">
          <div className="bg-card rounded-2xl shadow-xl border border-border/60 p-1.5 flex gap-1.5">
            <button
              onClick={() => setOrderType('delivery')}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all ${
                orderType === 'delivery' ? 'bg-wine text-white shadow-lg' : 'text-muted-foreground hover:bg-secondary'
              }`}
            >
              <Truck className="size-4" />
              توصيل للمنزل 🚚
            </button>
            <button
              onClick={() => setOrderType('pickup')}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all ${
                orderType === 'pickup' ? 'bg-wine text-white shadow-lg' : 'text-muted-foreground hover:bg-secondary'
              }`}
            >
              <MapPin className="size-4" />
              استلام من الفرع 🏪
            </button>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES STRIP ═══ */}
      <div className="px-4 mt-5 grid grid-cols-3 gap-2">
        {[
          { icon: Star, label: 'جودة ممتازة', sub: 'لحوم طازجة يومياً', color: 'text-gold' },
          { icon: Truck, label: 'توصيل سريع', sub: 'مجاني فوق 100 د.إ', color: 'text-wine' },
          { icon: Banknote, label: 'دفع كاش', sub: 'عند الاستلام', color: 'text-green-600' },
        ].map((f) => (
          <div key={f.label} className="flex flex-col items-center gap-1 bg-card rounded-xl p-3 border border-border/40 shadow-sm text-center">
            <f.icon className={`size-5 ${f.color}`} />
            <span className="text-[11px] font-bold text-foreground">{f.label}</span>
            <span className="text-[9px] text-muted-foreground leading-tight">{f.sub}</span>
          </div>
        ))}
      </div>

      {/* ═══ TWO MAIN SECTIONS ═══ */}
      <div className="px-4 mt-6 space-y-3">
        <h2 className="text-lg font-extrabold text-foreground">اختر قسمك</h2>

        <div className="grid grid-cols-2 gap-3">
          {/* Meats Section */}
          <Link to="/category/meats" className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg">
            <img src={secMeat} alt="اللحوم" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-4">
              <span className="text-3xl mb-1 block">🥩</span>
              <h3 className="text-base font-extrabold text-white leading-tight">اللحوم الطازجة</h3>
              <p className="text-[10px] text-white/70 mt-1">بقري • ضاني • دواجن • شواء • تحمير</p>
              <div className="mt-2 bg-gold/90 text-black text-[10px] font-bold px-2.5 py-1 rounded-full inline-block">47 منتج</div>
            </div>
          </Link>

          {/* Ready Food Section */}
          <Link to="/category/food" className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg">
            <img src={secFood} alt="الأكل الجاهز" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-4">
              <span className="text-3xl mb-1 block">🍽️</span>
              <h3 className="text-base font-extrabold text-white leading-tight">الأكل الجاهز</h3>
              <p className="text-[10px] text-white/70 mt-1">مشاوي • طواجن • فطير • كريب • بيتزا</p>
              <div className="mt-2 bg-gold/90 text-black text-[10px] font-bold px-2.5 py-1 rounded-full inline-block">73 منتج</div>
            </div>
          </Link>
        </div>
      </div>

      {/* ═══ MEAT CATEGORIES ═══ */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-extrabold text-foreground">🥩 الملحمة</h2>
          <Link to="/category/meats" className="flex items-center gap-0.5 text-xs font-bold text-wine hover:underline">
            عرض الكل <ChevronLeft className="size-3.5" />
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
          {meatCats.map((cat) => (
            <Link key={cat.id} to={`/category/meats?tab=${cat.id}`} className="flex-shrink-0 group text-center">
              <div className="w-[72px] h-[72px] rounded-2xl overflow-hidden border-2 border-border/50 group-hover:border-wine transition-colors shadow-sm">
                <img src={MEAT_CAT_IMAGES[cat.id]} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="mt-1.5 text-[10px] font-bold text-foreground max-w-[72px] leading-tight">{cat.name}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* ═══ FOOD CATEGORIES ═══ */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-extrabold text-foreground">🍽️ الأكل الجاهز</h2>
          <Link to="/category/food" className="flex items-center gap-0.5 text-xs font-bold text-wine hover:underline">
            عرض الكل <ChevronLeft className="size-3.5" />
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
          {foodCats.map((cat) => (
            <Link key={cat.id} to={`/category/food?tab=${cat.id}`} className="flex-shrink-0 group text-center">
              <div className="w-[72px] h-[72px] rounded-2xl overflow-hidden border-2 border-border/50 group-hover:border-wine transition-colors shadow-sm">
                <img src={FOOD_CAT_IMAGES[cat.id] || catTagineImg} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="mt-1.5 text-[10px] font-bold text-foreground max-w-[72px] leading-tight">{cat.name}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* ═══ FEATURED MEATS ═══ */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-extrabold text-foreground">⭐ الأكثر طلباً — اللحوم</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 stagger-children">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      {/* ═══ FEATURED FOOD ═══ */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-extrabold text-foreground">🔥 وجبات مميزة</h2>
          <Link to="/category/food" className="flex items-center gap-0.5 text-xs font-bold text-wine hover:underline">
            عرض الكل <ChevronLeft className="size-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 stagger-children">
          {featuredFood.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      {/* ═══ CONTACT BANNER ═══ */}
      <div className="mx-4 mt-6 bg-gradient-to-l from-wine to-wine-light rounded-2xl p-5 text-white shadow-lg">
        <h3 className="text-base font-extrabold mb-1">📍 زورونا في الفرع</h3>
        <p className="text-sm text-cream/90 leading-relaxed">{APP_CONFIG.address}</p>
        <p className="text-sm text-gold font-bold mt-1.5 tabular-nums" dir="ltr">{APP_CONFIG.phone}</p>
        <div className="mt-3 flex gap-2">
          <a href={APP_CONFIG.callLink} className="flex-1 flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 rounded-xl py-2.5 text-sm font-bold transition-colors">
            <Phone className="size-4" /> اتصل بنا
          </a>
          <a href={APP_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 rounded-xl py-2.5 text-sm font-bold transition-colors">
            <MessageCircle className="size-4" /> واتساب
          </a>
        </div>
      </div>
    </div>
  );
}
