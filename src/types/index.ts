export interface Product {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  categoryName: string;
  sectionType: 'meat' | 'ready_raw' | 'ready_food';
  unit: string;
  minQuantity: number;
  step: number;
  image: string;
  hasCutOptions: boolean;
  origin?: string;
  description?: string;
  prepTime?: number; // minutes — for ready food
  isAvailable: boolean;
}

export interface Category {
  id: string;
  name: string;
  sectionType: 'meat' | 'ready_raw' | 'ready_food';
  image: string;
  icon: string;
  productCount: number;
}

export interface CartItem {
  cartItemId: string;
  product: Product;
  quantity: number;
  cutType?: string;
  notes?: string;
  totalPrice: number;
}

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled';

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  orderType: 'delivery' | 'pickup';
  status: OrderStatus;
  address?: string;
  createdAt: string;
  phone: string;
  notes?: string;
}

export interface UserProfile {
  name: string;
  phone: string;
  addresses: string[];
}

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  pending: 'في الانتظار',
  confirmed: 'تم التأكيد',
  preparing: 'قيد التحضير',
  ready: 'جاهز',
  out_for_delivery: 'في الطريق',
  delivered: 'تم التوصيل',
  cancelled: 'ملغي',
};

export const CUT_OPTIONS = [
  'مفروم ناعم',
  'مفروم خشن',
  'شرائح رقيقة',
  'شرائح سميكة',
  'مكعبات',
  'قطع كبيرة',
  'كامل',
] as const;

export type CutType = (typeof CUT_OPTIONS)[number];
