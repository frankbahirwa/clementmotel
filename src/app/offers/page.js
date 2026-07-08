import SpecialOffers from '@/components/sections/SpecialOffers';

export const metadata = {
  title: 'Special Offers | Clement Motel',
  description: 'Discover exclusive packages and special offers at Clement Motel.',
};

export default function OffersPage() {
  return (
    <div className="pt-10 min-h-screen pb-20">
      <SpecialOffers />
    </div>
  );
}
