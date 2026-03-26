import { useNavigate, Link } from 'react-router-dom';
import { ShoppingCart, Truck, MapPin, CreditCard, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { useCartStore, getSubtotal, getDeliveryFee, getTotal } from '@/stores/cartStore';
import { useOrderStore } from '@/stores/orderStore';
import { APP_CONFIG } from '@/constants/config';
import { generateWhatsAppMessage } from '@/lib/utils';
import CartItemComponent from '@/components/features/CartItem';
import EmptyState from '@/components/features/EmptyState';

export default function Cart() {
  const navigate = useNavigate();
  const { items, orderType, setOrderType, clearCart, address, setAddress } = useCartStore();
  const createOrder = useOrderStore((s) => s.createOrder);

  const subtotal = getSubtotal(items);
  const deliveryFee = getDeliveryFee(subtotal, orderType);
  const total = getTotal(items, orderType);

  const maxPrepTime = items.reduce((max, item) => {
    const pt = item.product.prepTime || 0;
    return pt > max ? pt : max;
  }, 0);

  const meatItems = items.filter((i) => i.product.sectionType === 'meat' || i.product.sectionType === 'ready_raw');
  const foodItems = items.filter((i) => i.product.sectionType === 'ready_food');

  function handleConfirmOrder() {
    if (items.length === 0) return;
    if (orderType === 'delivery' && !address.trim()) {
      toast.error('يرجى إدخال عنوان التوصيل');
      return;
    }

    const orderId = createOrder({
      items, subtotal, deliveryFee, total, orderType,
      address: orderType === 'delivery' ? address : undefined,
      phone: APP_CONFIG.phone,
    });

    // Generate WhatsApp Message
    const message = generateWhatsAppMessage({
      orderId,
      items,
      subtotal,
      deliveryFee,
      total,
      orderType,
      address: orderType === 'delivery' ? address : undefined,
      phone: APP_CONFIG.phone,
    });

    clearCart();
    toast.success('تم تأكيد الطلب بنجاح!', { description: `رقم الطلب: ${orderId}` });
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${APP_CONFIG.phone.replace(/\+/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    navigate(`/order/${orderId}`);
  }

  if (items.length === 0) {
    return (
      <EmptyState
        icon={<ShoppingCart className="size-10 text-muted-foreground" />}
        title="السلة فارغة"
        description="أضف منتجات من قسم اللحوم أو الأكل الجاهز لبدء الطلب"
        action={
          <Link to="/" className="inline-flex items-center gap-2 bg-wine text-white rounded-xl px-6 py-3 text-sm font-bold hover:bg-wine-light transition-colors">
            تصفح المنتجات
          </Link>
        }
      />
    );
  }

  return (
    <div className="pb-36">
      <div className="px-4 pt-4 space-y-4">
        <h1 className="text-xl font-extrabold text-foreground">🛒 سلة المشتريات</h1>

        {meatItems.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
              🥩 اللحوم والملحمة
              <span className="text-xs text-muted-foreground font-medium">({meatItems.length})</span>
            </h3>
            <div className="space-y-3">
              {meatItems.map((item) => <CartItemComponent key={item.cartItemId} item={item} />)}
            </div>
          </div>
        )}

        {foodItems.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
              🍽️ الأكل الجاهز
              <span className="text-xs text-muted-foreground font-medium">({foodItems.length})</span>
            </h3>
            <div className="space-y-3">
              {foodItems.map((item) => <CartItemComponent key={item.cartItemId} item={item} />)}
            </div>
          </div>
        )}

        {maxPrepTime > 0 && (
          <div className="flex items-center gap-2 bg-wine/5 border border-wine/20 rounded-xl px-4 py-3">
            <Clock className="size-4 text-wine flex-shrink-0" />
            <p className="text-xs font-medium text-wine">الوقت المتوقع للتحضير: حوالي {maxPrepTime} دقيقة</p>
          </div>
        )}

        {/* Order Type */}
        <div className="bg-card rounded-2xl p-4 border border-border/40 shadow-sm">
          <h3 className="text-sm font-bold text-foreground mb-3">طريقة الاستلام</h3>
          <div className="grid grid-cols-2 gap-2">
            {(['delivery', 'pickup'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setOrderType(type)}
                className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all ${
                  orderType === type ? 'border-wine bg-wine/5' : 'border-border hover:border-border/80'
                }`}
              >
                {type === 'delivery' ? <Truck className={`size-6 ${orderType === type ? 'text-wine' : 'text-muted-foreground'}`} /> : <MapPin className={`size-6 ${orderType === type ? 'text-wine' : 'text-muted-foreground'}`} />}
                <span className={`text-xs font-bold ${orderType === type ? 'text-wine' : 'text-muted-foreground'}`}>
                  {type === 'delivery' ? 'توصيل للمنزل 🚚' : 'استلام من الفرع 🏪'}
                </span>
              </button>
            ))}
          </div>
          {orderType === 'delivery' && (
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="أدخل عنوان التوصيل بالتفصيل..."
              className="mt-3 w-full bg-secondary rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-wine/30"
            />
          )}
          {orderType === 'pickup' && (
            <div className="mt-3 bg-secondary rounded-xl px-4 py-3">
              <p className="text-xs text-muted-foreground font-medium">📍 عنوان الفرع</p>
              <p className="text-sm font-medium text-foreground mt-1">{APP_CONFIG.address}</p>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="bg-card rounded-2xl p-4 border border-border/40 shadow-sm space-y-3">
          <h3 className="text-sm font-bold text-foreground">ملخص الطلب</h3>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">المجموع الفرعي ({items.length} منتج)</span>
            <span className="font-bold tabular-nums">{subtotal.toFixed(2)} {APP_CONFIG.currency}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">رسوم التوصيل</span>
            <span className={`font-bold tabular-nums ${deliveryFee === 0 ? 'text-green-600' : ''}`}>
              {deliveryFee === 0 ? 'مجاناً ✨' : `${deliveryFee} ${APP_CONFIG.currency}`}
            </span>
          </div>
          {orderType === 'delivery' && subtotal < APP_CONFIG.freeDeliveryMin && (
            <p className="text-[11px] text-gold-dark bg-gold/10 rounded-lg px-3 py-2">
              💡 أضف {(APP_CONFIG.freeDeliveryMin - subtotal).toFixed(2)} {APP_CONFIG.currency} للتوصيل المجاني
            </p>
          )}
          <div className="border-t border-border pt-3 flex items-center justify-between">
            <span className="font-extrabold text-foreground">الإجمالي</span>
            <span className="price-tag text-xl">{total.toFixed(2)} {APP_CONFIG.currency}</span>
          </div>
        </div>

        {/* Cash Notice */}
        <div className="flex items-center gap-3 bg-gold/10 border border-gold/30 rounded-2xl px-4 py-3">
          <CreditCard className="size-5 text-gold-dark flex-shrink-0" />
          <div>
            <p className="text-sm font-bold text-gold-dark">💵 الدفع كاش عند الاستلام</p>
            <p className="text-[11px] text-gold-dark/80 mt-0.5">يرجى تحضير المبلغ المطلوب</p>
          </div>
        </div>
      </div>

      {/* Fixed Confirm */}
      <div className="fixed bottom-[60px] inset-x-0 z-40 px-4 pb-3 pt-2 bg-gradient-to-t from-background via-background to-transparent max-w-lg mx-auto">
        <button
          onClick={handleConfirmOrder}
          className="w-full flex items-center justify-center gap-2 bg-wine hover:bg-wine-light text-white rounded-2xl py-4 shadow-xl font-bold text-base transition-colors active:scale-[0.98]"
        >
          <span>تأكيد الطلب</span>
          <span className="bg-white/20 rounded-lg px-3 py-1 text-sm tabular-nums">{total.toFixed(2)} {APP_CONFIG.currency}</span>
        </button>
      </div>
    </div>
  );
}
