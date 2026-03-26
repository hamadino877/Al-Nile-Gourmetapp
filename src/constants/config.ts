export const APP_CONFIG = {
  name: 'النيل جورمية',
  nameEn: 'Al-Nile Gourmet',
  tagline: 'مطعم وملحمة النيل جورمية',
  phone: '0554099255',
  whatsappLink: 'https://wa.me/971554099255',
  callLink: 'tel:+971554099255',
  address: 'دبي، البرشاء جنوب الثالثة، أرجان، بناية روز بالاس، محل رقم 15',
  currency: 'د.إ',
  deliveryFee: 15,
  freeDeliveryMin: 100,
  workingHours: '٩:٠٠ ص - ١١:٠٠ م',
  minOrderForDelivery: 30,
} as const;

export const DELIVERY_AREAS = [
  'البرشاء',
  'أرجان',
  'المدينة العالمية',
  'دبي لاند',
  'موتور سيتي',
  'سبورت سيتي',
  'قرية جميرا الدائرية',
  'واحة دبي للسيليكون',
  'مردف',
  'القصيص',
  'النهدة',
  'ديرة',
] as const;
