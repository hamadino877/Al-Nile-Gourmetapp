import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, Product } from '@/types';
import { APP_CONFIG } from '@/constants/config';

interface CartState {
  items: CartItem[];
  orderType: 'delivery' | 'pickup';
  address: string;
  addItem: (product: Product, quantity: number, cutType?: string, notes?: string) => void;
  removeItem: (cartItemId: string) => void;
  updateItemQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  setOrderType: (type: 'delivery' | 'pickup') => void;
  setAddress: (address: string) => void;
  getItemCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      orderType: 'delivery',
      address: '',

      addItem: (product, quantity, cutType, notes) => {
        const cartItemId = `${product.id}_${Date.now()}`;
        const totalPrice = Math.round(product.price * quantity * 100) / 100;
        const newItem: CartItem = {
          cartItemId,
          product,
          quantity,
          cutType,
          notes,
          totalPrice,
        };
        set((state) => ({ items: [...state.items, newItem] }));
      },

      removeItem: (cartItemId) => {
        set((state) => ({
          items: state.items.filter((i) => i.cartItemId !== cartItemId),
        }));
      },

      updateItemQuantity: (cartItemId, quantity) => {
        set((state) => ({
          items: state.items.map((i) =>
            i.cartItemId === cartItemId
              ? { ...i, quantity, totalPrice: Math.round(i.product.price * quantity * 100) / 100 }
              : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      setOrderType: (type) => set({ orderType: type }),

      setAddress: (address) => set({ address }),

      getItemCount: () => get().items.length,
    }),
    { name: 'nile-gourmet-cart' }
  )
);

export function getSubtotal(items: CartItem[]): number {
  return Math.round(items.reduce((sum, i) => sum + i.totalPrice, 0) * 100) / 100;
}

export function getDeliveryFee(subtotal: number, orderType: 'delivery' | 'pickup'): number {
  if (orderType === 'pickup') return 0;
  return subtotal >= APP_CONFIG.freeDeliveryMin ? 0 : APP_CONFIG.deliveryFee;
}

export function getTotal(items: CartItem[], orderType: 'delivery' | 'pickup'): number {
  const sub = getSubtotal(items);
  return sub + getDeliveryFee(sub, orderType);
}
