'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import SectionHeading from '../ui/SectionHeading';

const CATEGORIES = ['All', 'Hotel', 'Rooms', 'Restaurant', 'Events'];

const IMAGES = [
  { src: '/images/clement_landing1.png', cat: 'Hotel', alt: 'Serene Exterior' },
  { src: '/images/image2.png', cat: 'Hotel', alt: 'Grand Lobby' },
  { src: '/images/image3.png', cat: 'Hotel', alt: 'Presidential Suite' },
  { src: '/images/image4.png', cat: 'Restaurant', alt: 'Fine Dining' },
  { src: '/images/image5.png', cat: 'Restaurant', alt: 'chicken' },
  { src: '/images/image6.png', alt: 'Artisan Dish', cat: 'Rooms' },
  { src: '/images/image7.png', cat: 'Rooms', alt: 'Grand Ballroom' },
  { src: '/images/image8.png', cat: 'Events', alt: 'Garden Event' },
  { src: '/images/image9.png', cat: 'Hotel', alt: 'Infinity Pool' },
  { src: '/images/bar_image.png', cat: 'Restaurant', alt: 'Bistro Area' },
  { src: '/images/image11.png', cat: 'Events', alt: 'Conference Hall' },
  { src: '/images/image12.png', cat: 'Events', alt: 'Conference Hall' },
  { src: '/images/image13.png', cat: 'Hotel', alt: 'Presidential Suite' },
  { src: '/images/bar_bottle1.jpg', cat: 'Restaurant', alt: 'Fine Dining' },
  { src: '/images/image15.png', cat: 'Restaurant', alt: 'chicken' },
  { src: '/images/image16.png', alt: 'Artisan Dish', cat: 'Restaurant' },
];

const Gallery = () => {
  const [active, setActive] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleCategoryChange = (cat) => {
    setActive(cat);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const filtered = active === 'All' ? IMAGES : IMAGES.filter(i => i.cat === active);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedImages = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getGridSpan = (index) => {
    const spans = [
      'md:col-span-2 md:row-span-2',
      'md:col-span-1 md:row-span-1',
      'md:col-span-1 md:row-span-1',
      'md:col-span-2 md:row-span-1',
      'md:col-span-1 md:row-span-2',
      'md:col-span-1 md:row-span-1'
    ];
    return spans[index % spans.length];
  };

  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          {/* Changed title to 'Visual Diary' so the SectionHeading component doesn't receive fully uppercase text */}
          <SectionHeading subtitle="Lookbook" title="Visual Diary" />
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-6 md:pb-2">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat} 
                onClick={() => handleCategoryChange(cat)}
                className={`text-lg capitalize transition-all duration-500 pb-1 border-b ${
                  active === cat 
                    ? 'border-zinc-900 text-zinc-900 font-medium' 
                    : 'border-transparent text-zinc-400 hover:text-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Lookbook Grid container */}
        <div className="min-h-[580px]">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-4"
          >
            <AnimatePresence mode="popLayout">
              {paginatedImages.map((img, i) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, filter: 'blur(10px)' }} 
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
                  key={`${img.src}-${active}-${currentPage}-${i}`}
                  className={`relative overflow-hidden group bg-zinc-200 ${getGridSpan(i)}`}
                >
                  <Image 
                    src={img.src} 
                    alt={img.alt} 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[2s] group-hover:scale-105 ease-out" 
                  />
                  
                  {/* Lookbook Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 ease-out" />
                  
                  {/* Lookbook Caption */}
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out flex items-end justify-between bg-linear-to-t from-black/60 via-black/20 to-transparent">
                    <div>
                      {/* Using capitalize and normal positioning without uppercase */}
                      <p className="text-sm text-white/90 capitalize font-medium mb-1.5">{img.cat}</p>
                      <p className="text-white font-serif text-xl capitalize tracking-wide">{img.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mt-16">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:border-zinc-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-zinc-200 transition-all"
            >
              <HiOutlineArrowLeft className="text-xl" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPage === idx + 1 ? 'bg-zinc-800 scale-125' : 'bg-zinc-300 hover:bg-zinc-400'}`}
                />
              ))}
            </div>
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:border-zinc-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-zinc-200 transition-all"
            >
              <HiOutlineArrowRight className="text-xl" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
