import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { APP_CONFIG } from "@/constants/config"
import type { CartItem } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateWhatsAppMessage(params: {
  orderId: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  orderType: 'delivery' | 'pickup';
  address?: string;
  phone: string;
}) {
  const itemsList = params.items.map(item => {
    const itemName = item.product.name;
    const qty = item.product.unit === 'kg' ? `${item.quantity} كجم` : `${item.quantity} حبة`;
    const cut = item.cutType ? ` (${item.cutType})` : '';
    const notes = item.notes ? `\n   ملاحظات: ${item.notes}` : '';
    return `• ${itemName} x ${qty}${cut}${notes}`;
  }).join('\n');

  const message = `
طلب جديد من النيل جورميه 🥩🍽️
---------------------------
رقم الطلب: ${params.orderId}
نوع الطلب: ${params.orderType === 'delivery' ? 'توصيل للمنزل 🚚' : 'استلام من الفرع 🏪'}
رقم العميل: ${params.phone}
${params.address ? `العنوان: ${params.address}` : ''}
---------------------------
الأصناف:
${itemsList}
---------------------------
المجموع الفرعي: ${params.subtotal.toFixed(2)} ${APP_CONFIG.currency}
رسوم التوصيل: ${params.deliveryFee.toFixed(2)} ${APP_CONFIG.currency}
الإجمالي: ${params.total.toFixed(2)} ${APP_CONFIG.currency}
---------------------------
شكراً لاختياركم النيل جورميه!
`.trim();

  return encodeURIComponent(message);
}
