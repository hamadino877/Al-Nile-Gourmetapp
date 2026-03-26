import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, ChevronLeft, Package, Clock } from 'lucide-react';
import { useOrderStore } from '@/stores/orderStore';
import { APP_CONFIG } from '@/constants/config';
import { ORDER_STATUS_LABELS } from '@/types';
import EmptyState from '@/components/features/EmptyState';

type TabType = 'current' | 'past';

const STATUS_COLORS: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-blue-100 text-blue-800',
  preparing: 'bg-orange-100 text-orange-800',
  ready: 'bg-green-100 text-green-800',
  out_for_delivery: 'bg-purple-100 text-purple-800',
  delivered: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
};

export default function Orders() {
  const [tab, setTab] = useState<TabType>('current');
  const getCurrentOrders = useOrderStore((s) => s.getCurrentOrders);
  const getPastOrders = useOrderStore((s) => s.getPastOrders);

  const orders = tab === 'current' ? getCurrentOrders() : getPastOrders();

  function formatDate(iso: string) {
    const d = new Date(iso);
    return d.toLocaleDateString('ar-EG', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  return (
    <div className="px-4 pt-4 space-y-4">
      <h1 className="text-xl font-extrabold text-foreground">طلباتي</h1>

      {/* Tabs */}
      <div className="flex bg-secondary rounded-xl p-1 gap-1">
        {(['current', 'past'] as TabType[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${
              tab === t ? 'bg-card text-wine shadow-sm' : 'text-muted-foreground'
            }`}
          >
            {t === 'current' ? 'الطلبات الحالية' : 'الطلبات السابقة'}
          </button>
        ))}
      </div>

      {/* Orders List */}
      {orders.length === 0 ? (
        <EmptyState
          icon={<ClipboardList className="size-10 text-muted-foreground" />}
          title={tab === 'current' ? 'لا توجد طلبات حالية' : 'لا توجد طلبات سابقة'}
          description={
            tab === 'current'
              ? 'ابدأ بطلب لحوم طازجة أو أكل جاهز الآن'
              : 'ستظهر هنا طلباتك المكتملة'
          }
          action={
            tab === 'current' ? (
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-wine text-white rounded-xl px-6 py-3 text-sm font-bold hover:bg-wine-light transition-colors"
              >
                تصفح المنتجات
              </Link>
            ) : undefined
          }
        />
      ) : (
        <div className="space-y-3 stagger-children">
          {orders.map((order) => (
            <Link
              key={order.id}
              to={`/order/${order.id}`}
              className="block bg-card rounded-2xl p-4 border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Package className="size-4 text-wine" />
                  <span className="text-sm font-bold text-foreground">{order.id}</span>
                </div>
                <span
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                    STATUS_COLORS[order.status] || 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {ORDER_STATUS_LABELS[order.status]}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                <Clock className="size-3.5" />
                {formatDate(order.createdAt)}
                <span className="mx-1">•</span>
                {order.items.length} منتج
                <span className="mx-1">•</span>
                {order.orderType === 'delivery' ? '🚚 توصيل' : '🏪 استلام'}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border/50">
                <span className="price-tag text-sm">
                  {order.total.toFixed(2)} {APP_CONFIG.currency}
                </span>
                <ChevronLeft className="size-4 text-muted-foreground" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
