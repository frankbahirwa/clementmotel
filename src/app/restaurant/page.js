import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RestaurantSection from '@/components/sections/RestaurantSection';
import BarSection from '@/components/sections/BarSection';

export const metadata = {
  title: 'Restaurant & Bar | Clement Motel',
  description: 'Experience fine dining at Lumière Restaurant and handcrafted cocktails at Noir Bar & Lounge.',
};

export default function RestaurantPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <RestaurantSection />
        <BarSection />
      </div>
    </main>
  );
}
