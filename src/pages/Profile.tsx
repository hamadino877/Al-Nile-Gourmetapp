import { useState, useEffect } from 'react';
import { User, MapPin, Phone, MessageCircle, Clock, Info, ChevronLeft } from 'lucide-react';
import { toast } from 'sonner';
import { APP_CONFIG, DELIVERY_AREAS } from '@/constants/config';

interface ProfileData {
  name: string;
  phone: string;
}

export default function Profile() {
  const [profile, setProfile] = useState<ProfileData>({ name: '', phone: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('nile-gourmet-profile');
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  function handleSave() {
    localStorage.setItem('nile-gourmet-profile', JSON.stringify(profile));
    setIsEditing(false);
    toast.success('تم حفظ البيانات');
  }

  return (
    <div className="px-4 pt-4 pb-6 space-y-4">
      <h1 className="text-xl font-extrabold text-foreground">حسابي</h1>

      {/* Profile Card */}
      <div className="bg-card rounded-2xl p-5 border border-border/50 shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center size-16 rounded-full bg-wine/10">
            <User className="size-7 text-wine" />
          </div>
          <div className="flex-1">
            {isEditing ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile((p) => ({ ...p, name: e.target.value }))}
                  placeholder="الاسم"
                  className="w-full bg-secondary rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-wine/30"
                />
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile((p) => ({ ...p, phone: e.target.value }))}
                  placeholder="رقم الهاتف"
                  className="w-full bg-secondary rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-wine/30"
                />
              </div>
            ) : (
              <>
                <p className="font-bold text-foreground">{profile.name || 'أضف اسمك'}</p>
                <p className="text-sm text-muted-foreground">{profile.phone || 'أضف رقم هاتفك'}</p>
              </>
            )}
          </div>
        </div>
        <button
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          className={`w-full py-2.5 rounded-xl text-sm font-bold transition-colors ${
            isEditing
              ? 'bg-wine text-white hover:bg-wine-light'
              : 'bg-secondary text-foreground hover:bg-secondary/80'
          }`}
        >
          {isEditing ? 'حفظ' : 'تعديل البيانات'}
        </button>
      </div>

      {/* Restaurant Info */}
      <div className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm">
        <div className="px-4 py-3 bg-wine/5 border-b border-border/50">
          <h2 className="text-sm font-bold text-foreground">معلومات المطعم</h2>
        </div>

        <div className="divide-y divide-border/50">
          <div className="flex items-center gap-3 px-4 py-3.5">
            <MapPin className="size-5 text-wine flex-shrink-0" />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">العنوان</p>
              <p className="text-sm font-medium text-foreground mt-0.5">{APP_CONFIG.address}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3.5">
            <Phone className="size-5 text-wine flex-shrink-0" />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">رقم التواصل</p>
              <p className="text-sm font-medium text-foreground mt-0.5 tabular-nums" dir="ltr">
                {APP_CONFIG.phone}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3.5">
            <Clock className="size-5 text-wine flex-shrink-0" />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">أوقات العمل</p>
              <p className="text-sm font-medium text-foreground mt-0.5">{APP_CONFIG.workingHours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Areas */}
      <div className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm">
        <div className="px-4 py-3 bg-wine/5 border-b border-border/50">
          <h2 className="text-sm font-bold text-foreground">مناطق التوصيل</h2>
        </div>
        <div className="p-4 flex flex-wrap gap-2">
          {DELIVERY_AREAS.map((area) => (
            <span
              key={area}
              className="text-xs font-medium bg-secondary text-foreground px-3 py-1.5 rounded-full"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      {/* Policies */}
      <div className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm">
        <div className="px-4 py-3 bg-wine/5 border-b border-border/50">
          <h2 className="text-sm font-bold text-foreground">معلومات هامة</h2>
        </div>
        <div className="p-4 space-y-3">
          {[
            { icon: '💵', text: 'الدفع كاش عند الاستلام فقط' },
            { icon: '🚚', text: `توصيل مجاني للطلبات فوق ${APP_CONFIG.freeDeliveryMin} ${APP_CONFIG.currency}` },
            { icon: '📦', text: `رسوم التوصيل ${APP_CONFIG.deliveryFee} ${APP_CONFIG.currency} للطلبات الأقل` },
            { icon: '❌', text: 'الإلغاء متاح فقط قبل تأكيد الطلب من الإدارة' },
            { icon: '⚖️', text: 'الحد الأدنى للحوم 0.5 كجم وللدواجن الكاملة 1 كجم' },
          ].map((item) => (
            <div key={item.text} className="flex items-start gap-2">
              <span className="text-sm flex-shrink-0">{item.icon}</span>
              <p className="text-sm text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <a
          href={APP_CONFIG.callLink}
          className="flex items-center justify-center gap-2 bg-wine text-white rounded-2xl py-3.5 font-bold text-sm hover:bg-wine-light transition-colors"
        >
          <Phone className="size-4" />
          اتصل بنا
        </a>
        <a
          href={APP_CONFIG.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-600 text-white rounded-2xl py-3.5 font-bold text-sm hover:bg-green-700 transition-colors"
        >
          <MessageCircle className="size-4" />
          واتساب
        </a>
      </div>

      {/* App Version */}
      <p className="text-center text-xs text-muted-foreground pt-2">
        {APP_CONFIG.name} • الإصدار 1.0
      </p>
    </div>
  );
}
