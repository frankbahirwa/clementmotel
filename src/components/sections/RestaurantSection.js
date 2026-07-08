'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineClock, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const DISHES = [
  { name: 'Grilled Kivu Tilapia', desc: 'Fresh tilapia fillet with lemon butter & local garden herbs', price: '12,000 RWF', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80' },
  { name: 'Kibuye Beef Sbrochette', desc: 'Tender beef skewers marinated in local spices, served with akabanga', price: '15,000 RWF', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80' },
  { name: 'Clement Special Stew', desc: 'Traditional slow-cooked beef stew with seasonal vegetables', price: '10,000 RWF', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80' },
  { name: 'Garden Fresh Salad', desc: 'Organic Kibuye greens, avocado, & honey balsamic dressing', price: '6,000 RWF', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80' },
  { name: 'Chef\'s Mixed Grill', desc: 'A selection of goat, beef, and chicken from our external kitchen', price: '25,000 RWF', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80' },
  { name: 'Traditional Matooke', desc: 'Steamed green bananas served with a rich peanut sauce', price: '8,000 RWF', img: 'https://images.unsplash.com/photo-1565557623262-15964de0646c?w=400&q=80' },
];

const HOURS = [
  { period: 'Breakfast', time: '6:30 AM – 10:30 AM' },
  { period: 'Lunch', time: '12:00 PM – 3:00 PM' },
  { period: 'Dinner', time: '6:30 PM – 11:00 PM' },
];

const PER_PAGE = 3;

const RestaurantSection = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(DISHES.length / PER_PAGE);
  const pageDishes = DISHES.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="section-padding bg-white text-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionHeading subtitle="Culinary Delights" title="Clement Restaurant" />
            <p className="text-zinc-500 text-lg leading-relaxed mb-10">
              Indulge in culinary delights at CLEMENT MOTEL's restaurant! Experience an unforgettable gastronomic journey featuring both local regional flavors and an array of international favorites, all prepared meticulously by our expert chefs with the finest ingredients.
            </p>
            <div className="mb-10 overflow-hidden rounded-xl border border-zinc-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-100">
                    <th className="text-left px-5 py-3.5 font-semibold capitalize text-zinc-400 text-lg tracking-widest">Meal</th>
                    <th className="text-right px-5 py-3.5 font-semibold capitalize text-zinc-400 text-lg tracking-widest">Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {HOURS.map((h, i) => (
                    <tr key={i} className={`border-b border-zinc-50 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-zinc-50/50'}`}>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <HiOutlineClock className="text-accent text-base shrink-0" />
                          <span className="capitalize font-semibold text-zinc-900">{h.period}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-right text-zinc-500 capitalize">{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Button variant="outline">view full menu</Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="h-[500px] rounded-sm overflow-hidden relative border border-zinc-100">
              <Image 
                src="/images/image16.png" 
                alt="Clement Restaurant" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover" 
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent p-8 rounded-sm hidden md:block z-10">
              <p className="text-white font-serif text-3xl font-bold">Clement</p>
              <p className="text-white/80 text-xs capitalize tracking-widest mt-1">Restaurant & Kitchen</p>
            </div>
          </motion.div>
        </div>

        {/* Chef's Creations with Pagination */}
        <SectionHeading subtitle="Signature Dishes" title="Chef's Creations" centered />

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {pageDishes.map((dish, i) => (
              <div key={dish.name}
                className="bg-zinc-50 border border-zinc-100 rounded-sm overflow-hidden group hover:border-zinc-200 transition-all duration-300">
                <div className="h-52 overflow-hidden relative">
                  <Image 
                    src={dish.img} 
                    alt={dish.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-lg text-zinc-900 capitalize">{dish.name}</h3>
                    <span className="text-accent font-bold text-sm shrink-0 ml-4">{dish.price}</span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed">{dish.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Paginator — bottom right */}
        {totalPages > 1 && (
          <div className="flex items-center justify-end gap-3 mt-10">
            <span className="text-sm text-zinc-400 capitalize mr-2">
              Page {page + 1} of {totalPages}
            </span>
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <HiOutlineChevronLeft className="text-sm" />
            </button>
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx)}
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-all ${
                  idx === page
                    ? 'bg-zinc-900 text-white border border-zinc-900'
                    : 'border border-zinc-200 text-zinc-500 hover:bg-zinc-50'
                }`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <HiOutlineChevronRight className="text-sm" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default RestaurantSection;
