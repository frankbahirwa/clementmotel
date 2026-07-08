'use client';
import React from 'react';
import Image from 'next/image';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    name: 'Alexandra Wright',
    role: 'Fashion Designer',
    quote: 'The attention to detail at Clement Motel is unparalleled. I have stayed at the finest hotels globally, but this experience felt personal and deeply comfortable.',
    avatar: 'https://i.pravatar.cc/150?u=alex'
  },
  {
    name: 'James Harrison',
    role: 'CEO, Tech Vent',
    quote: 'Perfect for a quiet retreat. The smart suite technology and the rooftop infinity pool made my business stay feel like a true vacation.',
    avatar: 'https://i.pravatar.cc/150?u=james'
  },
  {
    name: 'Sofia Martinez',
    role: 'Travel Journalist',
    quote: 'A masterpiece of architecture and service. The Clement Motel team doesn\'t just provide a room; they curate a memory that stays with you.',
    avatar: 'https://i.pravatar.cc/150?u=sofia'
  },
  {
    name: 'William Bennett',
    role: 'Investment Banker',
    quote: 'An oasis of peace. The gourmet breakfast was fantastic, and the concierge went above and beyond to arrange my transport.',
    avatar: 'https://i.pravatar.cc/150?u=william'
  },
  {
    name: 'Eleanor Vance',
    role: 'Novelist',
    quote: 'I found the inspiration I needed in their stunning VIP Lounge. The service is discrete, elegant, and perfectly timed.',
    avatar: 'https://i.pravatar.cc/150?u=eleanor'
  },
  {
    name: 'Marcus Thorne',
    role: 'Film Director',
    quote: 'The ambient lighting and interior design are out of this world. It’s an absolute visual treat and incredibly comfortable.',
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    name: 'Chloe Park',
    role: 'Art Curator',
    quote: 'Every corner of the lobby feels considered. They’ve managed to create an environment that feels both expansive and intimately private.',
    avatar: 'https://i.pravatar.cc/150?u=chloe'
  }
];

const Testimonials = () => {
  return (
    <section className="relative section-padding overflow-hidden bg-zinc-50">
      {/* Parallax Background Mockup */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      >
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          subtitle="Guest Experiences" 
          title="What They Say About Us" 
          centered 
        />

        {/* Global Review Score Block */}
        <div className="mx-auto mt-10 mb-8 p-8 bg-white/80 rounded-lg border border-zinc-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md">
          <div className="text-center md:text-left flex items-center gap-6">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-accent text-white rounded-2xl flex items-center justify-center text-3xl md:text-4xl font-black shadow-lg shrink-0">
              8.0
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-1">Excellent</h3>
              <p className="text-zinc-500 font-medium">Based on 24 verified reviews</p>
              <div className="flex mt-2 text-accent text-lg">
                <span className="text-xl">★★</span><span className="text-zinc-300">★★★</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full md:w-auto text-center md:text-left">
             <div className="flex flex-col"><span className="text-xl font-bold text-zinc-900">10.0</span><span className="text-xs text-zinc-500 uppercase tracking-widest">Cleanliness</span></div>
             <div className="flex flex-col"><span className="text-xl font-bold text-zinc-900">10.0</span><span className="text-xs text-zinc-500 uppercase tracking-widest">Facilities</span></div>
             <div className="flex flex-col"><span className="text-xl font-bold text-zinc-900">10.0</span><span className="text-xs text-zinc-500 uppercase tracking-widest">Service</span></div>
             <div className="flex flex-col"><span className="text-xl font-bold text-zinc-900">10.0</span><span className="text-xs text-zinc-500 uppercase tracking-widest">Value</span></div>
             <div className="flex flex-col"><span className="text-xl font-bold text-zinc-900">6.0</span><span className="text-xs text-zinc-500 uppercase tracking-widest">Location</span></div>
          </div>
        </div>
        
          <div className="relative mt-16 overflow-hidden py-10 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] -mx-4 pb-12">
          <motion.div
            className="flex gap-8 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
               <GlassCard key={i} className="bg-white/80 border-white shadow-xl p-12! relative group shrink-0 w-full md:w-[450px]">
               <HiOutlineChatAlt2 className="text-6xl text-accent/10 absolute top-8 right-8 group-hover:text-accent/20 transition-colors" />
               <p className="text-lg italic text-zinc-600 leading-relaxed mb-10 relative z-10">
                 "{t.quote}"
               </p>
               <div className="flex items-center gap-4">
                 <div className="relative w-14 h-14 rounded-full border-2 border-accent/20 shadow-sm overflow-hidden">
                   <Image 
                     src={t.avatar} 
                     alt={t.name} 
                     fill
                     sizes="56px"
                     className="object-cover" 
                   />
                 </div>
                 <div>
                   <span className="block font-bold text-zinc-900 tracking-widest text-sm capitalize">{t.name}</span>
                   <span className="text-[10px] text-accent font-bold capitalize tracking-[0.2em]">{t.role}</span>
                 </div>
               </div>
             </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
