'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineClock, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const COCKTAILS = [
  { name: 'Kibuye Sunrise', desc: 'Local passion fruit, citrus zest, & premium vodka', price: '7,000 RWF', img: '/images/bar_bottle1.jpg' },
  { name: 'Clement Gin Tonic', desc: 'Craft gin, organic botanical tonic, & garden rosemary', price: '8,500 RWF', img: '/images/bar_bottle2.jpg' },
  { name: 'Clement contoire', desc: 'Fresh ginger infusion, lime, & spiced rum splash', price: '9,000 RWF', img: '/images/bar_image.png' },
  { name: 'Tropical Sangria', desc: 'Red wine blend with locally sourced seasonal fruits', price: '12,000 RWF', img: '/images/bar_bottle1.jpg' },
  { name: 'Classic Rwandan Tea (Spiced)', desc: 'Warm ginger-infused black tea with house secret spices', price: '3,000 RWF', img: '/images/bar_bottle2.jpg' },
  { name: 'Chilled Local Brew', desc: 'Selection of Rwanda\'s finest craft beers', price: '4,000 RWF', img: '/images/bar_bottle3.jpg' },
];

const HOURS = [
  { period: 'Afternoon Social', time: '2:00 PM – 6:00 PM' },
  { period: 'Clement Evenings', time: '6:00 PM – 11:00 PM' },
  { period: 'Late Night Lounge', time: '11:00 PM – 1:00 AM' },
];

const PER_PAGE = 3;

const BarSection = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(COCKTAILS.length / PER_PAGE);
  const pageCocktails = COCKTAILS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="section-padding bg-zinc-50 text-zinc-900 overflow-hidden border-t border-zinc-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative order-2 lg:order-1">
            <div className="h-[500px] rounded-sm overflow-hidden relative border border-zinc-200">
              <Image 
                src="/images/bar_image.png" 
                alt="Clement Bar" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-sm hidden md:block z-10">
              <p className="text-white font-serif text-3xl font-bold">Clement</p>
              <p className="text-white/80 text-xs capitalize tracking-widest mt-1">Bar & Lounge</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
            <SectionHeading subtitle="Vibrant Entertainment" title="Clement Bar" />
            <p className="text-zinc-500 text-lg leading-relaxed mb-10">
              The bar at CLEMENT MOTEL is the perfect place to unwind and socialize. Sip on your favorite beverage while taking in the breathtaking views of the surrounding garden. The bar also hosts regular live music performances, ensuring a lively and delightful atmosphere for all guests.
            </p>
            <div className="mb-10 overflow-hidden rounded-xl border border-zinc-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-100/50 border-b border-zinc-200">
                    <th className="text-left px-5 py-3.5 font-semibold capitalize text-zinc-400 text-xs tracking-widest">Opening</th>
                    <th className="text-right px-5 py-3.5 font-semibold capitalize text-zinc-400 text-xs tracking-widest">Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {HOURS.map((h, i) => (
                    <tr key={i} className={`border-b border-zinc-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-zinc-50/30'}`}>
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
            <Button variant="outline">View Full Menu</Button>
          </motion.div>
        </div>

        {/* Handcrafted Libations with Pagination */}
        <SectionHeading subtitle="Signature Cocktails" title="Handcrafted Libations" centered />

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {pageCocktails.map((cocktail) => (
              <div key={cocktail.name}
                className="bg-white border border-zinc-200 rounded-sm overflow-hidden group hover:border-accent/40 transition-all duration-300">
                <div className="h-52 overflow-hidden relative">
                  <Image 
                    src={cocktail.img} 
                    alt={cocktail.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-lg text-zinc-900 capitalize">{cocktail.name}</h3>
                    <span className="text-accent font-bold text-sm shrink-0 ml-4">{cocktail.price}</span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed">{cocktail.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Paginator */}
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

export default BarSection;
