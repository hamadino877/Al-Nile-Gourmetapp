import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/features/ProductCard';
import { getMeatCategories, getFoodCategories, getProductsByCategory } from '@/constants/mockData';
import beefImg from '@/assets/category-beef.jpg';
import lambImg from '@/assets/category-lamb.jpg';
import poultryImg from '@/assets/category-poultry.jpg';
import grillImg from '@/assets/category-grill.jpg';
import fryImg from '@/assets/category-fry.jpg';
import heroFoodImg from '@/assets/hero-food.jpg';
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

const CAT_IMAGES: Record<string, string> = {
  beef: beefImg, lamb: lambImg, poultry: poultryImg, grill_raw: grillImg, fry_raw: fryImg,
  soups: catSoupsImg, cold_appetizers: catAppImg, hot_appetizers: catAppImg, mahashi: catMahashiImg,
  tagines: catTagineImg, fatta: catFattaImg, poultry_food: catPoultryFoodImg, special: catSpecialImg,
  grills: catGrillsImg, sandwiches: catSandwichImg, feteer_savory: catFeteerImg, feteer_sweet: catFeteerImg,
  crepe_savory: catCrepeImg, crepe_sweet: catCrepeImg, pizza: catPizzaImg,
};

interface SectionInfo { title: string; emoji: string; fallbackImg: string; }
const SECTION_INFO: Record<string, SectionInfo> = {
  meats: { title: 'اللحوم والملحمة', emoji: '🥩', fallbackImg: beefImg },
  food: { title: 'الأكل الجاهز', emoji: '🍽️', fallbackImg: heroFoodImg },
};

export default function Category() {
  const { section } = useParams<{ section: string }>();
  const [searchParams] = useSearchParams();
  const isFood = section === 'food';
  const cats = isFood ? getFoodCategories() : getMeatCategories();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam || cats[0]?.id || '');

  useEffect(() => {
    if (tabParam && cats.some((c) => c.id === tabParam)) {
      setActiveTab(tabParam);
    } else if (cats.length > 0 && !cats.some((c) => c.id === activeTab)) {
      setActiveTab(cats[0].id);
    }
  }, [tabParam, cats, activeTab]);

  const products = getProductsByCategory(activeTab);
  const info = SECTION_INFO[section || 'meats'];
  const activeCat = cats.find((c) => c.id === activeTab);
  const headerImg = CAT_IMAGES[activeTab] || info?.fallbackImg || beefImg;

  return (
    <div>
      {/* Category Header */}
      <div className="relative h-40 overflow-hidden">
        <img src={headerImg} alt={info?.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute bottom-0 inset-x-0 p-4">
          <h1 className="text-xl font-extrabold text-white">{info?.emoji} {info?.title}</h1>
          <p className="text-xs text-white/70 mt-0.5 font-medium">
            {activeCat?.name} — {products.length} منتج
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-14 z-30 bg-background/95 backdrop-blur-sm border-b border-border/60">
        <div className="flex overflow-x-auto hide-scrollbar px-3 py-2.5 gap-2">
          {cats.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === cat.id
                  ? 'bg-wine text-white shadow-md'
                  : 'bg-card text-foreground border border-border/50 hover:bg-secondary'
              }`}
            >
              <span className="text-sm">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 stagger-children">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">🍽️</p>
            <p className="text-muted-foreground text-sm font-medium">لا توجد منتجات في هذا التصنيف حالياً</p>
          </div>
        )}
      </div>
    </div>
  );
}
