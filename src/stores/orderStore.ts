import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Order, OrderStatus, CartItem } from '@/types';

interface OrderState {
  orders: Order[];
  createOrder: (params: {
    items: CartItem[];
    subtotal: number;
    deliveryFee: number;
    total: number;
    orderType: 'delivery' | 'pickup';
    address?: string;
    phone: string;
    notes?: string;
  }) => string;
  getOrder: (id: string) => Order | undefined;
  updateStatus: (id: string, status: OrderStatus) => void;
  getCurrentOrders: () => Order[];
  getPastOrders: () => Order[];
}

export const useOrderStore = create<OrderState>()(
  persist(
    (set, get) => ({
      orders: [],

      createOrder: (params) => {
        const id = `ORD-${Date.now().toString(36).toUpperCase()}`;
        const newOrder: Order = {
          id,
          items: params.items,
          subtotal: params.subtotal,
          deliveryFee: params.deliveryFee,
          total: params.total,
          orderType: params.orderType,
          status: 'confirmed',
          address: params.address,
          createdAt: new Date().toISOString(),
          phone: params.phone,
          notes: params.notes,
        };
        set((state) => ({ orders: [newOrder, ...state.orders] }));
        return id;
      },

      getOrder: (id) => get().orders.find((o) => o.id === id),

      updateStatus: (id, status) => {
        set((state) => ({
          orders: state.orders.map((o) => (o.id === id ? { ...o, status } : o)),
        }));
      },

      getCurrentOrders: () =>
        get().orders.filter((o) => !['delivered', 'cancelled'].includes(o.status)),

      getPastOrders: () =>
        get().orders.filter((o) => ['delivered', 'cancelled'].includes(o.status)),
    }),
    { name: 'nile-gourmet-orders' }
  )
);
