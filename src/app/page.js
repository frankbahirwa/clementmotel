import Hero from '@/components/sections/Hero';
import BookingWidget from '@/components/sections/BookingWidget';
import RoomShowcase from '@/components/sections/RoomShowcase';
import Amenities from '@/components/sections/Amenities';
import RestaurantSection from '@/components/sections/RestaurantSection';
import SpecialOffers from '@/components/sections/SpecialOffers';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import BarSection from '@/components/sections/BarSection';
import { HotelSchema } from '@/components/seo/JsonLd';
import VideoHighlight from '@/components/sections/VideoHighlight';

export const metadata = {
  title: "Home | Clement Motel",
  description: "Welcome to Clement Motel. Quality hospitality and accommodation in Kibuye, Kibuye, Rwanda. A convenient stop along the KIVU BELT.",
};

export default function Home() {
  return (
    <>
      <HotelSchema />
      <Hero />
      {/* <BookingWidget /> */}
      <RoomShowcase />
      <Amenities />
      <RestaurantSection />
      <BarSection />
      <SpecialOffers />
      <Gallery />
      <Testimonials />
      <VideoHighlight />
      <Contact />
    </>
  );
}
