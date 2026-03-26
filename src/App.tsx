import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import AppLayout from '@/components/layout/AppLayout';

const Home = lazy(() => import('@/pages/Home'));
const Category = lazy(() => import('@/pages/Category'));
const ProductDetail = lazy(() => import('@/pages/ProductDetail'));
const Cart = lazy(() => import('@/pages/Cart'));
const Orders = lazy(() => import('@/pages/Orders'));
const OrderTracking = lazy(() => import('@/pages/OrderTracking'));
const Profile = lazy(() => import('@/pages/Profile'));
const Admin = lazy(() => import('@/pages/Admin'));

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="flex flex-col items-center gap-3">
        <div className="size-10 border-3 border-wine/20 border-t-wine rounded-full animate-spin" />
        <span className="text-sm text-muted-foreground font-medium">جاري التحميل...</span>
      </div>
    </div>
  );
}

function SuspenseWrap({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<LoadingFallback />}>{children}</Suspense>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{ style: { fontFamily: 'Cairo, sans-serif', direction: 'rtl' } }}
        richColors
      />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<SuspenseWrap><Home /></SuspenseWrap>} />
          <Route path="/category/:section" element={<SuspenseWrap><Category /></SuspenseWrap>} />
          <Route path="/product/:id" element={<SuspenseWrap><ProductDetail /></SuspenseWrap>} />
          <Route path="/cart" element={<SuspenseWrap><Cart /></SuspenseWrap>} />
          <Route path="/orders" element={<SuspenseWrap><Orders /></SuspenseWrap>} />
          <Route path="/order/:id" element={<SuspenseWrap><OrderTracking /></SuspenseWrap>} />
          <Route path="/profile" element={<SuspenseWrap><Profile /></SuspenseWrap>} />
          <Route path="/admin" element={<SuspenseWrap><Admin /></SuspenseWrap>} />
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center h-96 gap-3">
              <span className="text-5xl">🔍</span>
              <p className="text-muted-foreground font-medium">الصفحة غير موجودة</p>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
