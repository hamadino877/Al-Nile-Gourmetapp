import type { Product, Category } from '@/types';

/* ═══════════════════ RELIABLE IMAGE URLS ═══════════════════ */
/* Using Pexels free images with specific food-matching photos */

// Beef
const IMG_BEEF_STEAK = 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_BEEF_RAW = 'https://images.pexels.com/photos/618773/pexels-photo-618773.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_BEEF_CUTS = 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_BEEF_GROUND = 'https://images.pexels.com/photos/128401/pexels-photo-128401.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_BEEF_CUBES = 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_BEEF_LIVER = 'https://images.pexels.com/photos/5908226/pexels-photo-5908226.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_BEEF_RIBS = 'https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

// Lamb
const IMG_LAMB_RACK = 'https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_LAMB_LEG = 'https://images.pexels.com/photos/8477437/pexels-photo-8477437.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_LAMB_CUT = 'https://images.pexels.com/photos/6941043/pexels-photo-6941043.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

// Poultry
const IMG_CHICKEN_WHOLE = 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_CHICKEN_BREAST = 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_DUCK = 'https://images.pexels.com/photos/5718026/pexels-photo-5718026.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

// Grill raw
const IMG_KEBAB_RAW = 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_SAUSAGE_RAW = 'https://images.pexels.com/photos/8753710/pexels-photo-8753710.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_BURGER_RAW = 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

// Fry raw
const IMG_ESCALOPE = 'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_SAMBOUSEK = 'https://images.pexels.com/photos/5718025/pexels-photo-5718025.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_STUFFED_CHICKEN = 'https://images.pexels.com/photos/5718104/pexels-photo-5718104.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

// ═══ READY FOOD IMAGES ═══

// Soups
const IMG_LENTIL_SOUP = 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_ORZO_SOUP = 'https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_BONE_SOUP = 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

// Cold appetizers
const IMG_SALAD = 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_HUMMUS = 'https://images.pexels.com/photos/1618898/pexels-photo-1618898.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_BABA = 'https://images.pexels.com/photos/4552980/pexels-photo-4552980.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_TAHINI = 'https://images.pexels.com/photos/5836362/pexels-photo-5836362.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

// Hot appetizers
const IMG_LIVER_COOKED = 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_FRIES = 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

// Mahashi
const IMG_MAHSHI_MIX = 'https://images.pexels.com/photos/6275187/pexels-photo-6275187.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_GRAPE_LEAVES = 'https://images.pexels.com/photos/6275162/pexels-photo-6275162.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_CABBAGE_ROLL = 'https://images.pexels.com/photos/8477435/pexels-photo-8477435.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

// Tagines
const IMG_TAGINE_POTATO = 'https://images.pexels.com/photos/5836363/pexels-photo-5836363.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_TAGINE_MEAT = 'https://images.pexels.com/photos/6275167/pexels-photo-6275167.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_MOLOKHIA = 'https://images.pexels.com/photos/5836365/pexels-photo-5836365.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_OKRA = 'https://images.pexels.com/photos/8477434/pexels-photo-8477434.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_RICE_DISH = 'https://images.pexels.com/photos/7625049/pexels-photo-7625049.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

// Fatta
const IMG_FATTA = 'https://images.pexels.com/photos/6275185/pexels-photo-6275185.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

// Grills cooked
const IMG_GRILL_MIX = 'https://images.pexels.com/photos/2491088/pexels-photo-2491088.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_KEBAB_COOKED = 'https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_KOFTA = 'https://images.pexels.com/photos/6542790/pexels-photo-6542790.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_SHISH_TAWOOK = 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_GRILLED_CHICKEN = 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_LAMB_CHOPS = 'https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

// Poultry food
const IMG_ROAST_CHICKEN = 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_STUFFED_PIGEON = 'https://images.pexels.com/photos/5718026/pexels-photo-5718026.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

// Special
const IMG_LAMB_SHOULDER = 'https://images.pexels.com/photos/8477437/pexels-photo-8477437.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_BECHAMEL = 'https://images.pexels.com/photos/5949897/pexels-photo-5949897.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_PASTA = 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

// Sandwiches
const IMG_SANDWICH_KEBAB = 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_SANDWICH_WRAP = 'https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_SANDWICH_FRIES = 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

// Feteer / Pastry
const IMG_FETEER_MEAT = 'https://images.pexels.com/photos/6275179/pexels-photo-6275179.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_FETEER_CHEESE = 'https://images.pexels.com/photos/5718025/pexels-photo-5718025.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_FETEER_SWEET = 'https://images.pexels.com/photos/4553020/pexels-photo-4553020.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

// Crepe
const IMG_CREPE_SAVORY = 'https://images.pexels.com/photos/2878741/pexels-photo-2878741.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_CREPE_NUTELLA = 'https://images.pexels.com/photos/4553032/pexels-photo-4553032.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

// Pizza
const IMG_PIZZA_MARG = 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_PIZZA_CHICKEN = 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
const IMG_PIZZA_MEAT = 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

// Hawawshi
const IMG_HAWAWSHI = 'https://images.pexels.com/photos/6275179/pexels-photo-6275179.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

/* ═══════════════════ CATEGORIES ═══════════════════ */

export const categories: Category[] = [
  // Meat section
  { id: 'beef', name: 'لحوم بقري', sectionType: 'meat', image: '', icon: '🐄', productCount: 17 },
  { id: 'lamb', name: 'لحوم ضاني', sectionType: 'meat', image: '', icon: '🐑', productCount: 8 },
  { id: 'poultry', name: 'طيور ودواجن', sectionType: 'meat', image: '', icon: '🐔', productCount: 6 },
  { id: 'grill_raw', name: 'جاهز للشواء', sectionType: 'ready_raw', image: '', icon: '🔥', productCount: 6 },
  { id: 'fry_raw', name: 'جاهز للتحمير', sectionType: 'ready_raw', image: '', icon: '🍳', productCount: 10 },

  // Ready food section
  { id: 'soups', name: 'الشوربات', sectionType: 'ready_food', image: '', icon: '🍲', productCount: 3 },
  { id: 'cold_appetizers', name: 'مقبلات باردة', sectionType: 'ready_food', image: '', icon: '🥗', productCount: 5 },
  { id: 'hot_appetizers', name: 'مقبلات ساخنة', sectionType: 'ready_food', image: '', icon: '🌶️', productCount: 3 },
  { id: 'mahashi', name: 'المحاشي', sectionType: 'ready_food', image: '', icon: '🫔', productCount: 5 },
  { id: 'tagines', name: 'الطواجن', sectionType: 'ready_food', image: '', icon: '🥘', productCount: 16 },
  { id: 'fatta', name: 'الفتة', sectionType: 'ready_food', image: '', icon: '🍛', productCount: 3 },
  { id: 'poultry_food', name: 'دواجن وطيور', sectionType: 'ready_food', image: '', icon: '🍗', productCount: 8 },
  { id: 'special', name: 'أطباق خاصة', sectionType: 'ready_food', image: '', icon: '⭐', productCount: 4 },
  { id: 'grills', name: 'المشاوي', sectionType: 'ready_food', image: '', icon: '🥩', productCount: 14 },
  { id: 'sandwiches', name: 'ساندوتشات', sectionType: 'ready_food', image: '', icon: '🌯', productCount: 7 },
  { id: 'feteer_savory', name: 'فطير حادق', sectionType: 'ready_food', image: '', icon: '🥧', productCount: 6 },
  { id: 'feteer_sweet', name: 'فطير حلو', sectionType: 'ready_food', image: '', icon: '🍯', productCount: 5 },
  { id: 'crepe_savory', name: 'كريب حادق', sectionType: 'ready_food', image: '', icon: '🫓', productCount: 6 },
  { id: 'crepe_sweet', name: 'كريب حلو', sectionType: 'ready_food', image: '', icon: '🍫', productCount: 3 },
  { id: 'pizza', name: 'بيتزا', sectionType: 'ready_food', image: '', icon: '🍕', productCount: 6 },
];

/* ═══════════════════ PRODUCTS ═══════════════════ */

export const products: Product[] = [
  // ══════════ MEATS SECTION ══════════

  // === لحوم بقري (17) ===
  { id: 'bf_01', name: 'فيليه أستيك', price: 115, categoryId: 'beef', categoryName: 'لحوم بقري', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_BEEF_STEAK, hasCutOptions: true, origin: 'برازيلي', isAvailable: true },
  { id: 'bf_02', name: 'انتركوت', price: 75, categoryId: 'beef', categoryName: 'لحوم بقري', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_BEEF_RAW, hasCutOptions: true, origin: 'برازيلي', isAvailable: true },
  { id: 'bf_03', name: 'ريب أي', price: 75, categoryId: 'beef', categoryName: 'لحوم بقري', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_BEEF_RIBS, hasCutOptions: true, origin: 'أسترالي', isAvailable: true },
  { id: 'bf_04', name: 'مكعبات لحم بقري', price: 60, categoryId: 'beef', categoryName: 'لحوم بقري', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_BEEF_CUBES, hasCutOptions: false, origin: 'هندي', isAvailable: true },
  { id: 'bf_05', name: 'لحم مفروم بقري', price: 60, categoryId: 'beef', categoryName: 'لحوم بقري', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_BEEF_GROUND, hasCutOptions: false, origin: 'هندي', isAvailable: true },
  { id: 'bf_06', name: 'روستو بقري', price: 60, categoryId: 'beef', categoryName: 'لحوم بقري', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_BEEF_CUTS, hasCutOptions: true, origin: 'هندي', isAvailable: true },
  { id: 'bf_07', name: 'بيكاتا بقري', price: 60, categoryId: 'beef', categoryName: 'لحوم بقري', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_BEEF_RAW, hasCutOptions: true, origin: 'هندي', isAvailable: true },
  { id: 'bf_08', name: 'بيف استروجانوف', price: 60, categoryId: 'beef', categoryName: 'لحوم بقري', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_BEEF_CUBES, hasCutOptions: true, origin: 'هندي', isAvailable: true },
  { id: 'bf_09', name: 'شاورما لحم بقري', price: 60, categoryId: 'beef', categoryName: 'لحوم بقري', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_BEEF_CUTS, hasCutOptions: false, origin: 'هندي', isAvailable: true },
  { id: 'bf_10', name: 'بوفتيك بقري', price: 60, categoryId: 'beef', categoryName: 'لحوم بقري', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_BEEF_STEAK, hasCutOptions: true, origin: 'هندي', isAvailable: true },
  { id: 'bf_11', name: 'موزة بقري بدون عظم', price: 60, categoryId: 'beef', categoryName: 'لحوم بقري', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_BEEF_RAW, hasCutOptions: true, origin: 'هندي', isAvailable: true },
  { id: 'bf_12', name: 'موزة بقري بالعظم', price: 58, categoryId: 'beef', categoryName: 'لحوم بقري', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_BEEF_RIBS, hasCutOptions: true, origin: 'هندي', isAvailable: true },
  { id: 'bf_13', name: 'كبدة بقري شرائح', price: 58, categoryId: 'beef', categoryName: 'لحوم بقري', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_BEEF_LIVER, hasCutOptions: true, origin: 'هندي', isAvailable: true },
  { id: 'bf_14', name: 'كبدة إسكندراني', price: 58, categoryId: 'beef', categoryName: 'لحوم بقري', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_BEEF_LIVER, hasCutOptions: false, origin: 'مصري', isAvailable: true },
  { id: 'bf_15', name: 'عكاوي بقري', price: 58, categoryId: 'beef', categoryName: 'لحوم بقري', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_BEEF_RAW, hasCutOptions: true, origin: 'هندي', isAvailable: true },
  { id: 'bf_16', name: 'رقبة بتلو', price: 42, categoryId: 'beef', categoryName: 'لحوم بقري', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_BEEF_CUTS, hasCutOptions: true, origin: 'هندي', isAvailable: true },
  { id: 'bf_17', name: 'كوارع بقري', price: 35, categoryId: 'beef', categoryName: 'لحوم بقري', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_BEEF_RAW, hasCutOptions: false, origin: 'هندي', isAvailable: true },

  // === لحوم ضاني (8) ===
  { id: 'lb_01', name: 'ريش ضاني نعيمي', price: 115, categoryId: 'lamb', categoryName: 'لحوم ضاني', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_LAMB_RACK, hasCutOptions: true, origin: 'نعيمي إماراتي', isAvailable: true },
  { id: 'lb_02', name: 'خروف نعيمي بدون عظم', price: 79, categoryId: 'lamb', categoryName: 'لحوم ضاني', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_LAMB_CUT, hasCutOptions: true, origin: 'نعيمي إماراتي', isAvailable: true },
  { id: 'lb_03', name: 'موزة ضاني نعيمي', price: 69, categoryId: 'lamb', categoryName: 'لحوم ضاني', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_LAMB_LEG, hasCutOptions: true, origin: 'نعيمي إماراتي', isAvailable: true },
  { id: 'lb_04', name: 'كتف/فخذة/رقبة نعيمي', price: 68, categoryId: 'lamb', categoryName: 'لحوم ضاني', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_LAMB_CUT, hasCutOptions: true, origin: 'نعيمي إماراتي', isAvailable: true },
  { id: 'lb_05', name: 'ريش ضاني أسترالي', price: 115, categoryId: 'lamb', categoryName: 'لحوم ضاني', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_LAMB_RACK, hasCutOptions: true, origin: 'أسترالي', isAvailable: true },
  { id: 'lb_06', name: 'لحم أسترالي بدون عظم', price: 70, categoryId: 'lamb', categoryName: 'لحوم ضاني', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_LAMB_CUT, hasCutOptions: true, origin: 'أسترالي', isAvailable: true },
  { id: 'lb_07', name: 'موزة ضاني أسترالي', price: 60, categoryId: 'lamb', categoryName: 'لحوم ضاني', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_LAMB_LEG, hasCutOptions: true, origin: 'أسترالي', isAvailable: true },
  { id: 'lb_08', name: 'فخذة/كتف/رقبة أسترالي', price: 58, categoryId: 'lamb', categoryName: 'لحوم ضاني', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_LAMB_CUT, hasCutOptions: true, origin: 'أسترالي', isAvailable: true },

  // === طيور ودواجن (6) ===
  { id: 'pt_01', name: 'دجاج كامل فريش', price: 25, categoryId: 'poultry', categoryName: 'طيور ودواجن', sectionType: 'meat', unit: 'كجم', minQuantity: 1, step: 0.5, image: IMG_CHICKEN_WHOLE, hasCutOptions: false, origin: 'إماراتي', isAvailable: true },
  { id: 'pt_02', name: 'صدور دجاج مخلية', price: 45, categoryId: 'poultry', categoryName: 'طيور ودواجن', sectionType: 'meat', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_CHICKEN_BREAST, hasCutOptions: true, origin: 'إماراتي', isAvailable: true },
  { id: 'pt_03', name: 'ديك رومي مصري', price: 47, categoryId: 'poultry', categoryName: 'طيور ودواجن', sectionType: 'meat', unit: 'كجم', minQuantity: 1, step: 0.5, image: IMG_CHICKEN_WHOLE, hasCutOptions: false, origin: 'مصري', isAvailable: true },
  { id: 'pt_04', name: 'أرنب بلدي مصري', price: 46, categoryId: 'poultry', categoryName: 'طيور ودواجن', sectionType: 'meat', unit: 'كجم', minQuantity: 1, step: 0.5, image: IMG_CHICKEN_BREAST, hasCutOptions: false, origin: 'مصري', isAvailable: true },
  { id: 'pt_05', name: 'بط بلدي مصري', price: 45, categoryId: 'poultry', categoryName: 'طيور ودواجن', sectionType: 'meat', unit: 'كجم', minQuantity: 1, step: 0.5, image: IMG_DUCK, hasCutOptions: false, origin: 'مصري', isAvailable: true },
  { id: 'pt_06', name: 'جوز حمام مصري', price: 10, categoryId: 'poultry', categoryName: 'طيور ودواجن', sectionType: 'meat', unit: 'حبة', minQuantity: 1, step: 1, image: IMG_DUCK, hasCutOptions: false, origin: 'مصري', isAvailable: true },

  // === جاهز للشواء (6) ===
  { id: 'rg_01', name: 'برجر واجيو متبل', price: 80, categoryId: 'grill_raw', categoryName: 'جاهز للشواء', sectionType: 'ready_raw', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_BURGER_RAW, hasCutOptions: false, origin: 'واجيو', isAvailable: true },
  { id: 'rg_02', name: 'كباب متبل', price: 100, categoryId: 'grill_raw', categoryName: 'جاهز للشواء', sectionType: 'ready_raw', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_KEBAB_RAW, hasCutOptions: false, isAvailable: true },
  { id: 'rg_03', name: 'سجق متبل', price: 58, categoryId: 'grill_raw', categoryName: 'جاهز للشواء', sectionType: 'ready_raw', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_SAUSAGE_RAW, hasCutOptions: false, isAvailable: true },
  { id: 'rg_04', name: 'كفتة متبلة', price: 58, categoryId: 'grill_raw', categoryName: 'جاهز للشواء', sectionType: 'ready_raw', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_KEBAB_RAW, hasCutOptions: false, isAvailable: true },
  { id: 'rg_05', name: 'شيش طاووق متبل', price: 45, categoryId: 'grill_raw', categoryName: 'جاهز للشواء', sectionType: 'ready_raw', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_SHISH_TAWOOK, hasCutOptions: false, isAvailable: true },
  { id: 'rg_06', name: 'رغيف حواوشي بلدي', price: 13, categoryId: 'grill_raw', categoryName: 'جاهز للشواء', sectionType: 'ready_raw', unit: 'رغيف', minQuantity: 1, step: 1, image: IMG_HAWAWSHI, hasCutOptions: false, origin: 'مصري', isAvailable: true },

  // === جاهز للتحمير (10) ===
  { id: 'rf_01', name: 'إسكالوب لحمة', price: 60, categoryId: 'fry_raw', categoryName: 'جاهز للتحمير', sectionType: 'ready_raw', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_ESCALOPE, hasCutOptions: false, isAvailable: true },
  { id: 'rf_02', name: 'كبدة بالرده', price: 60, categoryId: 'fry_raw', categoryName: 'جاهز للتحمير', sectionType: 'ready_raw', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_BEEF_LIVER, hasCutOptions: false, isAvailable: true },
  { id: 'rf_03', name: 'ممبار نيل جورميه', price: 60, categoryId: 'fry_raw', categoryName: 'جاهز للتحمير', sectionType: 'ready_raw', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_SAUSAGE_RAW, hasCutOptions: false, origin: 'خاص', isAvailable: true },
  { id: 'rf_04', name: 'كفتة رز نيل جورميه', price: 48, categoryId: 'fry_raw', categoryName: 'جاهز للتحمير', sectionType: 'ready_raw', unit: 'صحن', minQuantity: 1, step: 1, image: IMG_KOFTA, hasCutOptions: false, origin: 'خاص', isAvailable: true },
  { id: 'rf_05', name: 'جوز حمام محشي فريك', price: 75, categoryId: 'fry_raw', categoryName: 'جاهز للتحمير', sectionType: 'ready_raw', unit: 'جوز', minQuantity: 1, step: 1, image: IMG_STUFFED_PIGEON, hasCutOptions: false, origin: 'مصري', isAvailable: true },
  { id: 'rf_06', name: 'جوز حمام محشي أرز', price: 73, categoryId: 'fry_raw', categoryName: 'جاهز للتحمير', sectionType: 'ready_raw', unit: 'جوز', minQuantity: 1, step: 1, image: IMG_STUFFED_PIGEON, hasCutOptions: false, origin: 'مصري', isAvailable: true },
  { id: 'rf_07', name: 'شاورما دجاج متبلة', price: 45, categoryId: 'fry_raw', categoryName: 'جاهز للتحمير', sectionType: 'ready_raw', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_SHISH_TAWOOK, hasCutOptions: false, isAvailable: true },
  { id: 'rf_08', name: 'فرخة محشية أرز', price: 35, categoryId: 'fry_raw', categoryName: 'جاهز للتحمير', sectionType: 'ready_raw', unit: 'فرخة', minQuantity: 1, step: 1, image: IMG_STUFFED_CHICKEN, hasCutOptions: false, origin: 'مصري', isAvailable: true },
  { id: 'rf_09', name: 'كبيبة شامي', price: 55, categoryId: 'fry_raw', categoryName: 'جاهز للتحمير', sectionType: 'ready_raw', unit: 'كجم', minQuantity: 0.5, step: 0.25, image: IMG_SAMBOUSEK, hasCutOptions: false, isAvailable: true },
  { id: 'rf_10', name: 'سمبوسة لحم/جبن', price: 40, categoryId: 'fry_raw', categoryName: 'جاهز للتحمير', sectionType: 'ready_raw', unit: 'علبة', minQuantity: 1, step: 1, image: IMG_SAMBOUSEK, hasCutOptions: false, isAvailable: true },

  // ══════════ READY FOOD SECTION ══════════

  // === الشوربات (3) ===
  { id: 'sp_01', name: 'شوربة لسان عصفور', price: 15, categoryId: 'soups', categoryName: 'الشوربات', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_ORZO_SOUP, hasCutOptions: false, prepTime: 15, isAvailable: true },
  { id: 'sp_02', name: 'شوربة عدس', price: 15, categoryId: 'soups', categoryName: 'الشوربات', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_LENTIL_SOUP, hasCutOptions: false, prepTime: 15, isAvailable: true },
  { id: 'sp_03', name: 'شوربة كوارع', price: 25, categoryId: 'soups', categoryName: 'الشوربات', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_BONE_SOUP, hasCutOptions: false, prepTime: 20, isAvailable: true },

  // === مقبلات باردة (5) ===
  { id: 'ap_01', name: 'سلطة بلدي', price: 15, categoryId: 'cold_appetizers', categoryName: 'مقبلات باردة', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_SALAD, hasCutOptions: false, prepTime: 10, isAvailable: true },
  { id: 'ap_02', name: 'حمص', price: 18, categoryId: 'cold_appetizers', categoryName: 'مقبلات باردة', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_HUMMUS, hasCutOptions: false, prepTime: 5, isAvailable: true },
  { id: 'ap_03', name: 'بابا غنوج', price: 18, categoryId: 'cold_appetizers', categoryName: 'مقبلات باردة', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_BABA, hasCutOptions: false, prepTime: 5, isAvailable: true },
  { id: 'ap_04', name: 'طحينة', price: 15, categoryId: 'cold_appetizers', categoryName: 'مقبلات باردة', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_TAHINI, hasCutOptions: false, prepTime: 5, isAvailable: true },
  { id: 'ap_05', name: 'تومية', price: 16, categoryId: 'cold_appetizers', categoryName: 'مقبلات باردة', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_TAHINI, hasCutOptions: false, prepTime: 5, isAvailable: true },

  // === مقبلات ساخنة (3) ===
  { id: 'ap_06', name: 'كبدة إسكندراني', price: 29, categoryId: 'hot_appetizers', categoryName: 'مقبلات ساخنة', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_LIVER_COOKED, hasCutOptions: false, prepTime: 15, isAvailable: true },
  { id: 'ap_07', name: 'سجق إسكندراني', price: 29, categoryId: 'hot_appetizers', categoryName: 'مقبلات ساخنة', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_SAUSAGE_RAW, hasCutOptions: false, prepTime: 15, isAvailable: true },
  { id: 'ap_08', name: 'بطاطس مقلية', price: 10, categoryId: 'hot_appetizers', categoryName: 'مقبلات ساخنة', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_FRIES, hasCutOptions: false, prepTime: 10, isAvailable: true },

  // === المحاشي (5) ===
  { id: 'mh_01', name: 'محاشي مشكلة (طبق)', price: 40, categoryId: 'mahashi', categoryName: 'المحاشي', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_MAHSHI_MIX, hasCutOptions: false, prepTime: 20, isAvailable: true },
  { id: 'mh_02', name: 'محاشي مشكلة (1 كيلو)', price: 70, categoryId: 'mahashi', categoryName: 'المحاشي', sectionType: 'ready_food', unit: 'كيلو', minQuantity: 1, step: 1, image: IMG_MAHSHI_MIX, hasCutOptions: false, prepTime: 25, isAvailable: true },
  { id: 'mh_03', name: 'ممبار', price: 40, categoryId: 'mahashi', categoryName: 'المحاشي', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_CABBAGE_ROLL, hasCutOptions: false, prepTime: 20, isAvailable: true },
  { id: 'mh_04', name: 'ورق عنب محشي', price: 30, categoryId: 'mahashi', categoryName: 'المحاشي', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_GRAPE_LEAVES, hasCutOptions: false, prepTime: 15, isAvailable: true },
  { id: 'mh_05', name: 'ورق كرنب محشي', price: 30, categoryId: 'mahashi', categoryName: 'المحاشي', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_CABBAGE_ROLL, hasCutOptions: false, prepTime: 15, isAvailable: true },

  // === الطواجن (16) ===
  { id: 'tg_01', name: 'طاجن بطاطس بالدجاج', price: 45, categoryId: 'tagines', categoryName: 'الطواجن', sectionType: 'ready_food', unit: 'طاجن', minQuantity: 1, step: 1, image: IMG_TAGINE_POTATO, hasCutOptions: false, prepTime: 25, isAvailable: true },
  { id: 'tg_02', name: 'طاجن بطاطس باللحمة', price: 45, categoryId: 'tagines', categoryName: 'الطواجن', sectionType: 'ready_food', unit: 'طاجن', minQuantity: 1, step: 1, image: IMG_TAGINE_MEAT, hasCutOptions: false, prepTime: 30, isAvailable: true },
  { id: 'tg_03', name: 'طاجن بطاطس سادة', price: 30, categoryId: 'tagines', categoryName: 'الطواجن', sectionType: 'ready_food', unit: 'طاجن', minQuantity: 1, step: 1, image: IMG_TAGINE_POTATO, hasCutOptions: false, prepTime: 20, isAvailable: true },
  { id: 'tg_04', name: 'ورقة لحمة', price: 49, categoryId: 'tagines', categoryName: 'الطواجن', sectionType: 'ready_food', unit: 'طاجن', minQuantity: 1, step: 1, image: IMG_TAGINE_MEAT, hasCutOptions: false, prepTime: 30, isAvailable: true },
  { id: 'tg_05', name: 'طاجن أرز معمر سادة', price: 30, categoryId: 'tagines', categoryName: 'الطواجن', sectionType: 'ready_food', unit: 'طاجن', minQuantity: 1, step: 1, image: IMG_RICE_DISH, hasCutOptions: false, prepTime: 25, isAvailable: true },
  { id: 'tg_06', name: 'طاجن أرز معمر باللحمة', price: 49, categoryId: 'tagines', categoryName: 'الطواجن', sectionType: 'ready_food', unit: 'طاجن', minQuantity: 1, step: 1, image: IMG_RICE_DISH, hasCutOptions: false, prepTime: 30, isAvailable: true },
  { id: 'tg_07', name: 'طاجن معمر بالحمام', price: 65, categoryId: 'tagines', categoryName: 'الطواجن', sectionType: 'ready_food', unit: 'طاجن', minQuantity: 1, step: 1, image: IMG_STUFFED_PIGEON, hasCutOptions: false, prepTime: 35, isAvailable: true },
  { id: 'tg_08', name: 'طاجن ملوخية سادة مع أرز', price: 27, categoryId: 'tagines', categoryName: 'الطواجن', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_MOLOKHIA, hasCutOptions: false, prepTime: 20, isAvailable: true },
  { id: 'tg_09', name: 'طاجن ملوخية بالدجاج مع أرز', price: 49, categoryId: 'tagines', categoryName: 'الطواجن', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_MOLOKHIA, hasCutOptions: false, prepTime: 25, isAvailable: true },
  { id: 'tg_10', name: 'ملوخية مع مكعبات لحم مقلي', price: 50, categoryId: 'tagines', categoryName: 'الطواجن', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_MOLOKHIA, hasCutOptions: false, prepTime: 25, isAvailable: true },
  { id: 'tg_11', name: 'طاجن بامية باللحمة', price: 50, categoryId: 'tagines', categoryName: 'الطواجن', sectionType: 'ready_food', unit: 'طاجن', minQuantity: 1, step: 1, image: IMG_OKRA, hasCutOptions: false, prepTime: 30, isAvailable: true },
  { id: 'tg_12', name: 'طاجن بامية سادة مع أرز', price: 35, categoryId: 'tagines', categoryName: 'الطواجن', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_OKRA, hasCutOptions: false, prepTime: 25, isAvailable: true },
  { id: 'tg_13', name: 'طاجن ورق عنب بالكوارع', price: 50, categoryId: 'tagines', categoryName: 'الطواجن', sectionType: 'ready_food', unit: 'طاجن', minQuantity: 1, step: 1, image: IMG_GRAPE_LEAVES, hasCutOptions: false, prepTime: 35, isAvailable: true },
  { id: 'tg_14', name: 'طاجن عكاوي بالبصل', price: 49, categoryId: 'tagines', categoryName: 'الطواجن', sectionType: 'ready_food', unit: 'طاجن', minQuantity: 1, step: 1, image: IMG_TAGINE_MEAT, hasCutOptions: false, prepTime: 30, isAvailable: true },
  { id: 'tg_15', name: 'طاجن لحم بالبصل', price: 49, categoryId: 'tagines', categoryName: 'الطواجن', sectionType: 'ready_food', unit: 'طاجن', minQuantity: 1, step: 1, image: IMG_TAGINE_MEAT, hasCutOptions: false, prepTime: 30, isAvailable: true },
  { id: 'tg_16', name: 'طاجن مسقعة باللحم المفروم', price: 45, categoryId: 'tagines', categoryName: 'الطواجن', sectionType: 'ready_food', unit: 'طاجن', minQuantity: 1, step: 1, image: IMG_TAGINE_POTATO, hasCutOptions: false, prepTime: 30, isAvailable: true },

  // === الفتة (3) ===
  { id: 'ft_01', name: 'فتة بمكعبات لحمة بقري', price: 55, categoryId: 'fatta', categoryName: 'الفتة', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_FATTA, hasCutOptions: false, prepTime: 25, isAvailable: true },
  { id: 'ft_02', name: 'فتة موزة ضاني', price: 60, categoryId: 'fatta', categoryName: 'الفتة', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_FATTA, hasCutOptions: false, prepTime: 25, isAvailable: true },
  { id: 'ft_03', name: 'فتة كوارع', price: 55, categoryId: 'fatta', categoryName: 'الفتة', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_FATTA, hasCutOptions: false, prepTime: 25, isAvailable: true },

  // === دواجن وطيور - أكل جاهز (8) ===
  { id: 'ck_01', name: 'دجاج إسكالوب', price: 35, categoryId: 'poultry_food', categoryName: 'دواجن وطيور', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_ESCALOPE, hasCutOptions: false, prepTime: 20, isAvailable: true },
  { id: 'ck_02', name: 'دجاجة كاملة محشية بالأرز', price: 49, categoryId: 'poultry_food', categoryName: 'دواجن وطيور', sectionType: 'ready_food', unit: 'فرخة', minQuantity: 1, step: 1, image: IMG_ROAST_CHICKEN, hasCutOptions: false, prepTime: 40, isAvailable: true },
  { id: 'dk_01', name: 'نصف بطة بلدي مع محاشي', price: 110, categoryId: 'poultry_food', categoryName: 'دواجن وطيور', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_DUCK, hasCutOptions: false, prepTime: 45, isAvailable: true },
  { id: 'dk_02', name: 'نصف بطة مشوية بالفرن', price: 100, categoryId: 'poultry_food', categoryName: 'دواجن وطيور', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_DUCK, hasCutOptions: false, prepTime: 40, isAvailable: true },
  { id: 'pg_01', name: 'حمام محشي أرز (1 حبة)', price: 55, categoryId: 'poultry_food', categoryName: 'دواجن وطيور', sectionType: 'ready_food', unit: 'حبة', minQuantity: 1, step: 1, image: IMG_STUFFED_PIGEON, hasCutOptions: false, prepTime: 30, isAvailable: true },
  { id: 'pg_02', name: 'حمام محشي أرز (2 حبة)', price: 105, categoryId: 'poultry_food', categoryName: 'دواجن وطيور', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_STUFFED_PIGEON, hasCutOptions: false, prepTime: 35, isAvailable: true },
  { id: 'pg_03', name: 'حمام محشي فريك (1 حبة)', price: 55, categoryId: 'poultry_food', categoryName: 'دواجن وطيور', sectionType: 'ready_food', unit: 'حبة', minQuantity: 1, step: 1, image: IMG_STUFFED_PIGEON, hasCutOptions: false, prepTime: 30, isAvailable: true },
  { id: 'pg_04', name: 'حمام محشي فريك (2 حبة)', price: 110, categoryId: 'poultry_food', categoryName: 'دواجن وطيور', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_STUFFED_PIGEON, hasCutOptions: false, prepTime: 35, isAvailable: true },

  // === أطباق خاصة (4) ===
  { id: 'sd_01', name: 'كتف ضاني بالفرن', price: 195, categoryId: 'special', categoryName: 'أطباق خاصة', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_LAMB_SHOULDER, hasCutOptions: false, prepTime: 60, isAvailable: true },
  { id: 'sd_02', name: 'رقاق باللحمة المفرومة', price: 30, categoryId: 'special', categoryName: 'أطباق خاصة', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_FETEER_MEAT, hasCutOptions: false, prepTime: 20, isAvailable: true },
  { id: 'sd_03', name: 'طاجن مكرونة بشاميل', price: 35, categoryId: 'special', categoryName: 'أطباق خاصة', sectionType: 'ready_food', unit: 'طاجن', minQuantity: 1, step: 1, image: IMG_BECHAMEL, hasCutOptions: false, prepTime: 25, isAvailable: true },
  { id: 'sd_04', name: 'مكرونة بالسجق الشرقي', price: 35, categoryId: 'special', categoryName: 'أطباق خاصة', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_PASTA, hasCutOptions: false, prepTime: 25, isAvailable: true },

  // === المشاوي (14) ===
  { id: 'gr_01', name: 'مشاوي مشكلة النيل جورميه', price: 59, categoryId: 'grills', categoryName: 'المشاوي', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_GRILL_MIX, hasCutOptions: false, prepTime: 25, isAvailable: true },
  { id: 'gr_02', name: 'مكس جريل لحوم', price: 59, categoryId: 'grills', categoryName: 'المشاوي', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_GRILL_MIX, hasCutOptions: false, prepTime: 25, isAvailable: true },
  { id: 'gr_03', name: 'كباب', price: 59, categoryId: 'grills', categoryName: 'المشاوي', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_KEBAB_COOKED, hasCutOptions: false, prepTime: 20, isAvailable: true },
  { id: 'gr_04', name: 'كفتة', price: 52, categoryId: 'grills', categoryName: 'المشاوي', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_KOFTA, hasCutOptions: false, prepTime: 20, isAvailable: true },
  { id: 'gr_05', name: 'ريش ضاني', price: 62, categoryId: 'grills', categoryName: 'المشاوي', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_LAMB_CHOPS, hasCutOptions: false, prepTime: 30, isAvailable: true },
  { id: 'gr_06', name: 'طرب', price: 54, categoryId: 'grills', categoryName: 'المشاوي', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_KEBAB_COOKED, hasCutOptions: false, prepTime: 20, isAvailable: true },
  { id: 'gr_07', name: 'شيش طاووق', price: 42, categoryId: 'grills', categoryName: 'المشاوي', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_SHISH_TAWOOK, hasCutOptions: false, prepTime: 20, isAvailable: true },
  { id: 'gr_08', name: 'نيفا', price: 79, categoryId: 'grills', categoryName: 'المشاوي', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_GRILL_MIX, hasCutOptions: false, prepTime: 25, isAvailable: true },
  { id: 'gr_09', name: 'موزة مشوية', price: 60, categoryId: 'grills', categoryName: 'المشاوي', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_LAMB_LEG, hasCutOptions: false, prepTime: 25, isAvailable: true },
  { id: 'gr_10', name: 'نصف دجاج مسحب', price: 39, categoryId: 'grills', categoryName: 'المشاوي', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_GRILLED_CHICKEN, hasCutOptions: false, prepTime: 25, isAvailable: true },
  { id: 'gr_11', name: 'كبدة مشوية', price: 40, categoryId: 'grills', categoryName: 'المشاوي', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_LIVER_COOKED, hasCutOptions: false, prepTime: 15, isAvailable: true },
  { id: 'gr_12', name: 'سجق مشوي', price: 45, categoryId: 'grills', categoryName: 'المشاوي', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_SAUSAGE_RAW, hasCutOptions: false, prepTime: 15, isAvailable: true },
  { id: 'gr_13', name: 'صدور دجاج مشوية', price: 40, categoryId: 'grills', categoryName: 'المشاوي', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_GRILLED_CHICKEN, hasCutOptions: false, prepTime: 20, isAvailable: true },
  { id: 'gr_14', name: 'رغيف حواوشي', price: 30, categoryId: 'grills', categoryName: 'المشاوي', sectionType: 'ready_food', unit: 'رغيف', minQuantity: 1, step: 1, image: IMG_HAWAWSHI, hasCutOptions: false, prepTime: 15, isAvailable: true },

  // === الساندويتشات (7) ===
  { id: 'sw_01', name: 'ساندوتش كباب', price: 22, categoryId: 'sandwiches', categoryName: 'ساندوتشات', sectionType: 'ready_food', unit: 'ساندوتش', minQuantity: 1, step: 1, image: IMG_SANDWICH_KEBAB, hasCutOptions: false, prepTime: 10, isAvailable: true },
  { id: 'sw_02', name: 'ساندوتش كبدة مشوية', price: 18, categoryId: 'sandwiches', categoryName: 'ساندوتشات', sectionType: 'ready_food', unit: 'ساندوتش', minQuantity: 1, step: 1, image: IMG_SANDWICH_WRAP, hasCutOptions: false, prepTime: 10, isAvailable: true },
  { id: 'sw_03', name: 'ساندوتش كفتة', price: 20, categoryId: 'sandwiches', categoryName: 'ساندوتشات', sectionType: 'ready_food', unit: 'ساندوتش', minQuantity: 1, step: 1, image: IMG_SANDWICH_KEBAB, hasCutOptions: false, prepTime: 10, isAvailable: true },
  { id: 'sw_04', name: 'ساندوتش سجق مشوي', price: 18, categoryId: 'sandwiches', categoryName: 'ساندوتشات', sectionType: 'ready_food', unit: 'ساندوتش', minQuantity: 1, step: 1, image: IMG_SANDWICH_WRAP, hasCutOptions: false, prepTime: 10, isAvailable: true },
  { id: 'sw_05', name: 'ساندوتش طرب', price: 21, categoryId: 'sandwiches', categoryName: 'ساندوتشات', sectionType: 'ready_food', unit: 'ساندوتش', minQuantity: 1, step: 1, image: IMG_SANDWICH_KEBAB, hasCutOptions: false, prepTime: 10, isAvailable: true },
  { id: 'sw_06', name: 'ساندوتش شيش طاووق', price: 18, categoryId: 'sandwiches', categoryName: 'ساندوتشات', sectionType: 'ready_food', unit: 'ساندوتش', minQuantity: 1, step: 1, image: IMG_SANDWICH_WRAP, hasCutOptions: false, prepTime: 10, isAvailable: true },
  { id: 'sw_07', name: 'ساندوتش بطاطس مقلية', price: 12, categoryId: 'sandwiches', categoryName: 'ساندوتشات', sectionType: 'ready_food', unit: 'ساندوتش', minQuantity: 1, step: 1, image: IMG_SANDWICH_FRIES, hasCutOptions: false, prepTime: 5, isAvailable: true },

  // === الفطير الحادق (6) ===
  { id: 'py_01', name: 'فطيرة مشكل لحوم', price: 50, categoryId: 'feteer_savory', categoryName: 'فطير حادق', sectionType: 'ready_food', unit: 'فطيرة', minQuantity: 1, step: 1, image: IMG_FETEER_MEAT, hasCutOptions: false, prepTime: 20, isAvailable: true },
  { id: 'py_02', name: 'فطيرة مشكل جبن', price: 49, categoryId: 'feteer_savory', categoryName: 'فطير حادق', sectionType: 'ready_food', unit: 'فطيرة', minQuantity: 1, step: 1, image: IMG_FETEER_CHEESE, hasCutOptions: false, prepTime: 20, isAvailable: true },
  { id: 'py_03', name: 'فطيرة مشكل خضار', price: 42, categoryId: 'feteer_savory', categoryName: 'فطير حادق', sectionType: 'ready_food', unit: 'فطيرة', minQuantity: 1, step: 1, image: IMG_FETEER_CHEESE, hasCutOptions: false, prepTime: 20, isAvailable: true },
  { id: 'py_04', name: 'فطيرة جمبري', price: 55, categoryId: 'feteer_savory', categoryName: 'فطير حادق', sectionType: 'ready_food', unit: 'فطيرة', minQuantity: 1, step: 1, image: IMG_FETEER_MEAT, hasCutOptions: false, prepTime: 20, isAvailable: true },
  { id: 'py_05', name: 'فطيرة النيل جورميه حادق', price: 65, categoryId: 'feteer_savory', categoryName: 'فطير حادق', sectionType: 'ready_food', unit: 'فطيرة', minQuantity: 1, step: 1, image: IMG_FETEER_MEAT, hasCutOptions: false, prepTime: 25, isAvailable: true },
  { id: 'py_06', name: 'مشلتت النيل', price: 69, categoryId: 'feteer_savory', categoryName: 'فطير حادق', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_FETEER_CHEESE, hasCutOptions: false, prepTime: 25, isAvailable: true },

  // === الفطير الحلو (5) ===
  { id: 'py_07', name: 'بغاشة حليب وسكر', price: 39, categoryId: 'feteer_sweet', categoryName: 'فطير حلو', sectionType: 'ready_food', unit: 'طبق', minQuantity: 1, step: 1, image: IMG_FETEER_SWEET, hasCutOptions: false, prepTime: 15, isAvailable: true },
  { id: 'py_08', name: 'فطيرة كاسترد', price: 35, categoryId: 'feteer_sweet', categoryName: 'فطير حلو', sectionType: 'ready_food', unit: 'فطيرة', minQuantity: 1, step: 1, image: IMG_FETEER_SWEET, hasCutOptions: false, prepTime: 15, isAvailable: true },
  { id: 'py_09', name: 'فطيرة قشطة وعسل', price: 40, categoryId: 'feteer_sweet', categoryName: 'فطير حلو', sectionType: 'ready_food', unit: 'فطيرة', minQuantity: 1, step: 1, image: IMG_FETEER_SWEET, hasCutOptions: false, prepTime: 15, isAvailable: true },
  { id: 'py_10', name: 'نوتيلا بالمكسرات', price: 40, categoryId: 'feteer_sweet', categoryName: 'فطير حلو', sectionType: 'ready_food', unit: 'فطيرة', minQuantity: 1, step: 1, image: IMG_CREPE_NUTELLA, hasCutOptions: false, prepTime: 15, isAvailable: true },
  { id: 'py_11', name: 'فطيرة النيل جورميه حلو', price: 49, categoryId: 'feteer_sweet', categoryName: 'فطير حلو', sectionType: 'ready_food', unit: 'فطيرة', minQuantity: 1, step: 1, image: IMG_FETEER_SWEET, hasCutOptions: false, prepTime: 20, isAvailable: true },

  // === الكريب الحادق (6) ===
  { id: 'cr_01', name: 'كريب النيل', price: 49, categoryId: 'crepe_savory', categoryName: 'كريب حادق', sectionType: 'ready_food', unit: 'كريب', minQuantity: 1, step: 1, image: IMG_CREPE_SAVORY, hasCutOptions: false, prepTime: 15, isAvailable: true },
  { id: 'cr_02', name: 'كريب شيش طاووق', price: 35, categoryId: 'crepe_savory', categoryName: 'كريب حادق', sectionType: 'ready_food', unit: 'كريب', minQuantity: 1, step: 1, image: IMG_CREPE_SAVORY, hasCutOptions: false, prepTime: 15, isAvailable: true },
  { id: 'cr_03', name: 'كريب برجر لحم', price: 35, categoryId: 'crepe_savory', categoryName: 'كريب حادق', sectionType: 'ready_food', unit: 'كريب', minQuantity: 1, step: 1, image: IMG_CREPE_SAVORY, hasCutOptions: false, prepTime: 15, isAvailable: true },
  { id: 'cr_04', name: 'كريب بانيه دجاج', price: 35, categoryId: 'crepe_savory', categoryName: 'كريب حادق', sectionType: 'ready_food', unit: 'كريب', minQuantity: 1, step: 1, image: IMG_CREPE_SAVORY, hasCutOptions: false, prepTime: 15, isAvailable: true },
  { id: 'cr_05', name: 'كريب مشكل لحوم', price: 45, categoryId: 'crepe_savory', categoryName: 'كريب حادق', sectionType: 'ready_food', unit: 'كريب', minQuantity: 1, step: 1, image: IMG_CREPE_SAVORY, hasCutOptions: false, prepTime: 15, isAvailable: true },
  { id: 'cr_06', name: 'كريب بطاطس', price: 30, categoryId: 'crepe_savory', categoryName: 'كريب حادق', sectionType: 'ready_food', unit: 'كريب', minQuantity: 1, step: 1, image: IMG_CREPE_SAVORY, hasCutOptions: false, prepTime: 10, isAvailable: true },

  // === الكريب الحلو (3) ===
  { id: 'cr_07', name: 'كريب نوتيلا لوتس', price: 37, categoryId: 'crepe_sweet', categoryName: 'كريب حلو', sectionType: 'ready_food', unit: 'كريب', minQuantity: 1, step: 1, image: IMG_CREPE_NUTELLA, hasCutOptions: false, prepTime: 10, isAvailable: true },
  { id: 'cr_08', name: 'كريب نوتيلا مكسرات', price: 37, categoryId: 'crepe_sweet', categoryName: 'كريب حلو', sectionType: 'ready_food', unit: 'كريب', minQuantity: 1, step: 1, image: IMG_CREPE_NUTELLA, hasCutOptions: false, prepTime: 10, isAvailable: true },
  { id: 'cr_09', name: 'كريب نوتيلا فواكه', price: 42, categoryId: 'crepe_sweet', categoryName: 'كريب حلو', sectionType: 'ready_food', unit: 'كريب', minQuantity: 1, step: 1, image: IMG_CREPE_NUTELLA, hasCutOptions: false, prepTime: 10, isAvailable: true },

  // === البيتزا (6) ===
  { id: 'pz_01', name: 'بيتزا مارغريتا', price: 45, categoryId: 'pizza', categoryName: 'بيتزا', sectionType: 'ready_food', unit: 'بيتزا', minQuantity: 1, step: 1, image: IMG_PIZZA_MARG, hasCutOptions: false, prepTime: 20, isAvailable: true },
  { id: 'pz_02', name: 'بيتزا دجاج', price: 45, categoryId: 'pizza', categoryName: 'بيتزا', sectionType: 'ready_food', unit: 'بيتزا', minQuantity: 1, step: 1, image: IMG_PIZZA_CHICKEN, hasCutOptions: false, prepTime: 20, isAvailable: true },
  { id: 'pz_03', name: 'بيتزا مكس لحوم', price: 52, categoryId: 'pizza', categoryName: 'بيتزا', sectionType: 'ready_food', unit: 'بيتزا', minQuantity: 1, step: 1, image: IMG_PIZZA_MEAT, hasCutOptions: false, prepTime: 20, isAvailable: true },
  { id: 'pz_04', name: 'بيتزا النيل حشو الأطراف', price: 69, categoryId: 'pizza', categoryName: 'بيتزا', sectionType: 'ready_food', unit: 'بيتزا', minQuantity: 1, step: 1, image: IMG_PIZZA_MEAT, hasCutOptions: false, prepTime: 25, isAvailable: true },
  { id: 'pz_05', name: 'بيتزا جمبري', price: 60, categoryId: 'pizza', categoryName: 'بيتزا', sectionType: 'ready_food', unit: 'بيتزا', minQuantity: 1, step: 1, image: IMG_PIZZA_CHICKEN, hasCutOptions: false, prepTime: 20, isAvailable: true },
  { id: 'pz_06', name: 'بيتزا مكس جبن', price: 49, categoryId: 'pizza', categoryName: 'بيتزا', sectionType: 'ready_food', unit: 'بيتزا', minQuantity: 1, step: 1, image: IMG_PIZZA_MARG, hasCutOptions: false, prepTime: 20, isAvailable: true },
];

/* ═══════════════════ HELPERS ═══════════════════ */

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId && p.isAvailable);
}

export function getProductsBySection(sectionType: 'meat' | 'ready_raw' | 'ready_food'): Product[] {
  return products.filter((p) => p.sectionType === sectionType && p.isAvailable);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCategoriesBySection(sectionType: 'meat' | 'ready_raw' | 'ready_food'): Category[] {
  return categories.filter((c) => c.sectionType === sectionType);
}

export function getMeatCategories(): Category[] {
  return categories.filter((c) => c.sectionType === 'meat' || c.sectionType === 'ready_raw');
}

export function getFoodCategories(): Category[] {
  return categories.filter((c) => c.sectionType === 'ready_food');
}

export function getFeaturedProducts(): Product[] {
  return [
    products.find((p) => p.id === 'bf_01')!,
    products.find((p) => p.id === 'lb_01')!,
    products.find((p) => p.id === 'rg_02')!,
    products.find((p) => p.id === 'pt_02')!,
  ].filter(Boolean);
}

export function getFeaturedFood(): Product[] {
  return [
    products.find((p) => p.id === 'gr_01')!,
    products.find((p) => p.id === 'tg_07')!,
    products.find((p) => p.id === 'sd_01')!,
    products.find((p) => p.id === 'pz_04')!,
    products.find((p) => p.id === 'dk_01')!,
    products.find((p) => p.id === 'py_05')!,
  ].filter(Boolean);
}

export function getTotalProductCount(): number {
  return products.length;
}
