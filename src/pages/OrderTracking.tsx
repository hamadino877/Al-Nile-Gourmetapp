import { useParams } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Package, Clock } from 'lucide-react';
import { useOrderStore } from '@/stores/orderStore';
import { APP_CONFIG } from '@/constants/config';
import { ORDER_STATUS_LABELS } from '@/types';
import OrderStatusBar from '@/components/features/OrderStatusBar';
import { generateWhatsAppMessage } from '@/lib/utils';

export default function OrderTracking() {
  const { id } = useParams<{ id: string }>();
  const getOrder = useOrderStore((s) => s.getOrder);
  const order = getOrder(id || '');

  if (!order) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-muted-foreground">الطلب غير موجود</p>
      </div>
    );
  }

  function formatDate(iso: string) {
    const d = new Date(iso);
    return d.toLocaleDateString('ar-EG', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  return (
    <div className="px-4 pt-4 pb-6 space-y-4">
      {/* Order Header */}
      <div className="bg-card rounded-2xl p-4 border border-border/50 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Package className="size-5 text-wine" />
            <h1 className="text-base font-extrabold text-foreground">{order.id}</h1>
          </div>
          <span className="text-xs bg-wine/10 text-wine font-bold px-3 py-1 rounded-full">
            {ORDER_STATUS_LABELS[order.status]}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="size-3.5" />
          {formatDate(order.createdAt)}
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-card rounded-2xl p-4 border border-border/50 shadow-sm">
        <h2 className="text-sm font-bold text-foreground mb-2">حالة الطلب</h2>
        <OrderStatusBar status={order.status} orderType={order.orderType} />
      </div>

      {/* Order Items */}
      <div className="bg-card rounded-2xl p-4 border border-border/50 shadow-sm">
        <h2 className="text-sm font-bold text-foreground mb-3">تفاصيل الطلب</h2>
        <div className="space-y-3">
          {order.items.map((item) => (
            <div key={item.cartItemId} className="flex items-center gap-3">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="size-12 rounded-xl object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-foreground line-clamp-1">{item.product.name}</p>
                <p className="text-xs text-muted-foreground">
                  {item.quantity} {item.product.unit}
                  {item.cutType && ` • ${item.cutType}`}
                </p>
              </div>
              <span className="price-tag text-sm flex-shrink-0">
                {item.totalPrice.toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="mt-4 pt-3 border-t border-border space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">المجموع الفرعي</span>
            <span className="tabular-nums">{order.subtotal.toFixed(2)} {APP_CONFIG.currency}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">رسوم التوصيل</span>
            <span className={`tabular-nums ${order.deliveryFee === 0 ? 'text-green-600' : ''}`}>
              {order.deliveryFee === 0 ? 'مجاناً' : `${order.deliveryFee} ${APP_CONFIG.currency}`}
            </span>
          </div>
          <div className="flex justify-between pt-2 border-t border-border">
            <span className="font-extrabold">الإجمالي</span>
            <span className="price-tag text-lg">{order.total.toFixed(2)} {APP_CONFIG.currency}</span>
          </div>
        </div>
      </div>

      {/* Delivery/Pickup Info */}
      <div className="bg-card rounded-2xl p-4 border border-border/50 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="size-4 text-wine" />
          <h2 className="text-sm font-bold text-foreground">
            {order.orderType === 'delivery' ? 'عنوان التوصيل' : 'عنوان الاستلام'}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {order.orderType === 'delivery' ? order.address : APP_CONFIG.address}
        </p>
      </div>

      {/* Payment */}
      <div className="bg-gold/10 border border-gold/30 rounded-2xl px-4 py-3">
        <p className="text-sm font-bold text-gold-dark">💵 الدفع كاش عند الاستلام</p>
      </div>

      {/* Contact Actions */}
      <div className="grid grid-cols-2 gap-3">
        <a
          href={APP_CONFIG.callLink}
          className="flex items-center justify-center gap-2 bg-wine text-white rounded-2xl py-3.5 font-bold text-sm hover:bg-wine-light transition-colors"
        >
          <Phone className="size-4" />
          اتصل بنا
        </a>
        <a
          href={`${APP_CONFIG.whatsappLink}?text=${generateWhatsAppMessage({
            orderId: order.id,
            items: order.items,
            subtotal: order.subtotal,
            deliveryFee: order.deliveryFee,
            total: order.total,
            orderType: order.orderType,
            address: order.address,
            phone: order.phone,
          })}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-600 text-white rounded-2xl py-3.5 font-bold text-sm hover:bg-green-700 transition-colors"
        >
          <MessageCircle className="size-4" />
          واتساب
        </a>
      </div>
    </div>
  );
}
