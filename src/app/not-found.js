'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-screen relative flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 px-6">
      {/* Decorative Background Patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50 dark:bg-zinc-900/50 -skew-x-12 translate-x-1/2 z-0 hidden md:block"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 border border-accent/10 rounded-full z-0"></div>
      <div className="absolute top-1/4 -right-12 w-48 h-48 border border-zinc-100 dark:border-white/5 rotate-45 z-0"></div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-2xl text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="block text-accent text-[20px] uppercase font-bold mb-4">
            Error 404 ( Not Found )
          </span>
          
          <h1 className="text-xl md:text-7xl font-serif text-zinc-900 dark:text-white mb-8">
            Lost in <span className="text-accent italic">Luxury</span>
          </h1>
          
          <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl leading-relaxed mb-12 max-w-lg mx-auto">
            The page you are seeking has vanished like a soft morning mist over the ocean sanctuary. 
            Allow us to lead you back to our refined world of comfort.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/">
              <Button variant="primary" className="px-12! py-5! text-[14px]!">
                Return To Sanctuary
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="px-12! py-5! text-[14px]!">
                Contact Concierge
              </Button>
            </Link>
          </div>
        </motion.div>
        
        {/* Decorative Center Pattern */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ delay: 0.5, duration: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none pointer-events-none"
        >
          <span className="text-[20vw] font-serif font-bold text-zinc-900 uppercase">Clement Motel</span>
        </motion.div>
      </div>
      
      {/* Footer-like detail */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-20 bg-linear-to-b from-accent to-transparent"></div>
      </div>
    </main>
  );
}
