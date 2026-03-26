import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomNav from './BottomNav';

export default function AppLayout() {
  return (
    <div className="min-h-dvh flex flex-col bg-background max-w-lg mx-auto relative shadow-xl">
      <Header />
      <main className="flex-1 pb-[76px]">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
