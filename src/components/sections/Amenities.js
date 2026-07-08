'use client';
import React from 'react';
import {
  HiOutlineFire,
  HiOutlineSparkles,
  HiOutlineColorSwatch,
  HiOutlineGlobeAlt,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineWifi,
  HiOutlineStar,
  HiOutlineHeart,
  HiOutlineViewGrid,
  HiOutlineCake,
  HiOutlineKey,
  HiOutlineSun,
  HiOutlineUserGroup,
  HiOutlineBookOpen,
  HiChevronLeft,
  HiChevronRight
} from 'react-icons/hi';
import { GiBigDiamondRing, GiCoffeePot, GiCookingPot } from 'react-icons/gi';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const AMENITIES = [
  { title: 'Fast Free Wi-Fi', icon: <HiOutlineWifi />, desc: 'Stay connected with Free Wi-Fi in all rooms and public areas.' },
  { title: 'Free Parking', icon: <HiOutlineShieldCheck />, desc: 'Ample, secure, and free car park available for all guests.' },
  { title: '24-Hour Front Desk', icon: <HiOutlineUserGroup />, desc: 'Always available to assist you with any needs checking in or out.' },
  { title: 'Restaurant & Dining', icon: <GiCookingPot />, desc: 'Exceptional meals, safe dining setup, and kids meal options.' },
  { title: 'Bar & Happy Hour', icon: <HiOutlineColorSwatch />, desc: 'Unwind and enjoy a beverage at our readily available on-site bar.' },
  { title: 'Shuttle & Tours', icon: <HiOutlineGlobeAlt />, desc: 'Convenient shuttle service and ticket services for easy travel.' },
  { title: 'Fishing & Hiking', icon: <HiOutlineSun />, desc: 'Enjoy outdoor activities such as hiking trails and water sports like fishing.' },
  { title: 'Laundry Services', icon: <HiOutlineSparkles />, desc: 'On-site laundry and hot water linen washing for fresh clothes.' },
  { title: 'Room Service', icon: <HiOutlineCake />, desc: 'Food delivery, breakfast in room, and takeaway service.' },
  { title: 'Garden & Terrace', icon: <HiOutlineStar />, desc: 'Peaceful garden areas and nice terraces to relax outdoors.' },
  { title: 'Cleanliness & Safety', icon: <HiOutlineHeart />, desc: 'Staff trained in safety protocol with anti-viral cleaning products.' },
  { title: 'Daily Housekeeping', icon: <HiOutlineSparkles />, desc: 'Rooms are actively cleaned daily ensuring optimal comfort.' },
  { title: 'Family Friendly', icon: <HiOutlineUserGroup />, desc: 'Comfortable family rooms suitable for adults and children.' },
  { title: 'Luggage Storage', icon: <HiOutlineKey />, desc: 'Secure luggage storage and dedicated concierge services.' },
  { title: 'Kitchen & BBQ', icon: <GiCoffeePot />, desc: 'Access to a shared kitchen area and fun outdoor BBQ facilities.' }
];

const Amenities = () => {
  const scrollRef = React.useRef(null);
  const marqueeItems = [...AMENITIES, ...AMENITIES, ...AMENITIES]; // Triple for smoother endless feel

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    
    // If we've scrolled past the first set, jump back to middle
    if (scrollLeft <= 0) {
      scrollRef.current.scrollLeft = scrollWidth / 3;
    } else if (scrollLeft + clientWidth >= scrollWidth) {
      scrollRef.current.scrollLeft = scrollWidth / 3;
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  React.useEffect(() => {
    // Start in the middle set
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 3;
    }
  }, []);

  return (
    <section id="amenities" className="relative section-padding overflow-hidden bg-zinc-50 py-10">
      {/* Quiet Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-[0.12] grayscale pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      />

      <div className="relative z-10">
        <div className="container mx-auto px-6 mb-10">
          <SectionHeading
            subtitle="World-class services"
            title="Exquisite Amenities"
            centered
          />
        </div>

        {/* Slider Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-30 flex justify-between px-4 md:px-10 pointer-events-none">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 backdrop-blur-md shadow-xl flex items-center justify-center text-zinc-900 border-2 border-accent/20 hover:border-accent hover:bg-accent hover:text-white transition-all duration-300 pointer-events-auto"
          >
            <HiChevronLeft className="text-2xl" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 backdrop-blur-md shadow-xl flex items-center justify-center text-zinc-900 border-2 border-accent/20 hover:border-accent hover:bg-accent hover:text-white transition-all duration-300 pointer-events-auto"
          >
            <HiChevronRight className="text-2xl" />
          </button>
        </div>

        {/* Infinite Slider Wrapper */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="relative mt-10 flex overflow-x-auto no-scrollbar py-6 snap-x snap-mandatory mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="flex gap-8 px-4">
            {marqueeItems.map((item, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-[320px] bg-white/60 backdrop-blur-xl rounded-2xl border border-white p-10 text-center flex flex-col items-center justify-center group hover:bg-white hover:border-zinc-200/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="text-4xl text-accent/60 group-hover:text-accent transition-all duration-500 mb-8 transform group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium tracking-wide mb-4 text-zinc-800 group-hover:text-black transition-colors font-serif">
                  {item.title}
                </h3>
                <div className="w-8 h-px bg-accent/20 group-hover:w-16 transition-all duration-500 mb-6" />
                <p className="text-zinc-500 text-sm leading-relaxed max-w-[240px] group-hover:text-zinc-600 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
