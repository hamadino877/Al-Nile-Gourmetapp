import { useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { LayoutGrid, List, Search, Plus, Edit2, Trash2, Power, PowerOff, Save, X } from 'lucide-react';
import { toast } from 'sonner';
import type { Product } from '@/types';

export default function Admin() {
  const { products, loading, toggleAvailability, updateProduct } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Product>>({});

  const filteredProducts = products.filter(p => 
    p.name.includes(searchTerm) || p.categoryName.includes(searchTerm)
  );

  async function handleToggle(id: string, currentStatus: boolean) {
    const success = await toggleAvailability(id, !currentStatus);
    if (success) {
      toast.success(currentStatus ? 'تم إخفاء الصنف' : 'تم تفعيل الصنف');
    } else {
      toast.error('حدث خطأ أثناء التحديث');
    }
  }

  function startEdit(p: Product) {
    setEditingId(p.id);
    setEditForm({ name: p.name, price: p.price, image: p.image });
  }

  async function handleSave(id: string) {
    const success = await updateProduct(id, editForm);
    if (success) {
      toast.success('تم حفظ التعديلات');
      setEditingId(null);
    } else {
      toast.error('حدث خطأ أثناء الحفظ');
    }
  }

  if (loading) return <div className="p-8 text-center">جاري التحميل...</div>;

  return (
    <div className="p-4 pb-24 space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-foreground">🛠️ لوحة التحكم</h1>
        <button className="bg-wine text-white p-2 rounded-xl shadow-lg">
          <Plus className="size-6" />
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="ابحث عن صنف..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-card border border-border/50 rounded-2xl py-3 pr-12 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-wine/20"
        />
      </div>

      {/* Product List */}
      <div className="space-y-3">
        {filteredProducts.map((p) => (
          <div key={p.id} className={`bg-card rounded-2xl p-4 border transition-all ${p.isAvailable ? 'border-border/50' : 'border-red-200 opacity-75'}`}>
            <div className="flex gap-4">
              <img src={p.image} alt={p.name} className="size-16 rounded-xl object-cover" />
              <div className="flex-1 space-y-1">
                {editingId === p.id ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      className="w-full bg-secondary rounded-lg px-2 py-1 text-sm font-bold"
                    />
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={editForm.price}
                        onChange={(e) => setEditForm({ ...editForm, price: Number(e.target.value) })}
                        className="w-24 bg-secondary rounded-lg px-2 py-1 text-sm"
                      />
                      <span className="text-xs text-muted-foreground">د.إ</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-foreground">{p.name}</h3>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${p.isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {p.isAvailable ? 'متوفر' : 'غير متوفر'}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{p.categoryName} • {p.price} {p.unit}</p>
                  </>
                )}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {editingId === p.id ? (
                  <>
                    <button onClick={() => handleSave(p.id)} className="flex items-center gap-1.5 bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">
                      <Save className="size-3.5" /> حفظ
                    </button>
                    <button onClick={() => setEditingId(null)} className="flex items-center gap-1.5 bg-secondary text-foreground px-3 py-1.5 rounded-lg text-xs font-bold">
                      <X className="size-3.5" /> إلغاء
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => startEdit(p)} className="p-2 hover:bg-secondary rounded-lg transition-colors text-blue-600">
                      <Edit2 className="size-4" />
                    </button>
                    <button onClick={() => handleToggle(p.id, p.isAvailable)} className={`p-2 rounded-lg transition-colors ${p.isAvailable ? 'text-red-500 hover:bg-red-50' : 'text-green-600 hover:bg-green-50'}`}>
                      {p.isAvailable ? <PowerOff className="size-4" /> : <Power className="size-4" />}
                    </button>
                  </>
                )}
              </div>
              <button className="p-2 hover:bg-red-50 rounded-lg transition-colors text-red-400">
                <Trash2 className="size-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
