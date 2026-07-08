'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  HiChevronLeft, 
  HiChevronRight, 
  HiArrowRight,
  HiOutlineOfficeBuilding,
  HiOutlineHome,
  HiOutlineWifi,
  HiOutlineUsers,
  HiOutlineSparkles
} from 'react-icons/hi';
import Button from '../ui/Button';

const HERO_IMAGES = [
  "/images/clement_landing1.png"
];

const FEATURES = [
  { id: '01', title: 'Free Wi-Fi', desc: 'In all rooms & areas.', icon: <HiOutlineWifi /> },
  { id: '02', title: 'Bar & Restaurant', desc: 'On-site dining & drinks.', icon: <HiOutlineSparkles /> },
  { id: '03', title: 'Shuttle Service', desc: 'Easy transport & tours.', icon: <HiOutlineUsers /> },
  { id: '04', title: 'Free Parking', desc: 'Safe on-site car park.', icon: <HiOutlineOfficeBuilding /> }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-zinc-950 pt-20 pb-40">
      {/* Background Image Slider with Cross-fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_IMAGES[currentIndex]}
              alt="Clement Motel"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-zinc-900/60 z-1"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl text-left lg:mt-15 mt-30">
          {/* Top Tag - Faithfully Matching Inspiration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <HiOutlineSparkles className="text-accent text-xl" />
            <span className="text-white text-lg md:text-base font-bold">
              Welcome to Clement Motel!
            </span>
          </motion.div>

          {/* Main Heading - Faithful Two-line bold layout */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white text-4xl md:text-4xl lg:text-6xl leading-tight mb-8 font-serif font-black"
          >
            Quality Hospitality ,<br />
            <span className="text-accent">Accommodation</span> Experience
          </motion.h1>

          {/* Description - Plain left-aligned */}
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-zinc-200 text-lg md:text-base leading-relaxed mb-10 max-w-2xl opacity-90"
          >
            Experience a sanctuary of pure comfort in Kibuye, Kibuye. Situated along the KIVU BELT, 
            we provide quality hospitality and a convenient stop for all travelers.
          </motion.p>

          {/* Action Buttons - Full-width on mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-6 w-full"
          >
            <Link href="/rooms" className="w-full md:w-auto">
              <Button variant="primary" className="w-full md:w-auto px-8 py-4 md:px-10 md:py-5 text-xs md:text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 bg-accent border-accent hover:bg-accent/90">
                explore our rooms <HiArrowRight className="text-base" />
              </Button>
            </Link>
            
            <Link href="/contact" className="w-full md:w-auto">
              <Button className="w-full md:w-auto px-8 py-4 md:px-10 md:py-5 text-xs md:text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 bg-white text-zinc-900 border-white hover:bg-zinc-100">
                contact us <HiArrowRight className="text-base" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>



      {/* Floating Feature Cards - Edge-to-Edge Unified Container on Mobile */}
      <div className="absolute hidden  bottom-0 right-0 left-0 lg:left-auto lg:right-4 z-30 px-0 lg:px-0">
        <div className="bg-zinc-900 pb-10 lg:pb-16 lg:bg-transparent grid grid-cols-4 lg:flex lg:items-end gap-0 lg:gap-3 translate-y-1/2 lg:rounded-none shadow-xl lg:shadow-none border border-zinc-900 lg:border-zinc-100 lg:border-none overflow-hidden lg:overflow-visible mx-0 lg:mx-0">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`p-2 flex flex-col items-start relative group hover:-translate-y-1 lg:hover:-translate-y-5 transition-all duration-500 lg:bg-white lg:rounded-xl lg:shadow-2xl lg:border border-zinc-100 lg:min-w-[150px] ${
                i !== FEATURES.length - 1 ? 'border-r border-zinc-900 lg:border-r-0' : ''
              }`}
            >
                {/* Header: Compact Icon Circle + Number */}
                <div className="flex items-center justify-between w-full  lg:mb-4">
                  <div className="w-4 h-4 lg:w-12 lg:h-12 rounded-full bg-accent flex items-center justify-center text-white text-xs lg:text-lg group-hover:bg-accent/5 group-hover:text-accent transition-all duration-500">
                    <span className="scale-90  lg:scale-100">{feature.icon}</span>
                  </div>
                  <span className="text-[10px] lg:text-xl font-serif font-bold text-accent group-hover:text-accent/40 transition-colors ">
                    {feature.id}
                  </span>
                </div>
                
                {/* Content */}
                <h4 className="text-zinc-500 lg:-mt-2 font-serif font-black text-[15px] lg:text-sm mb-0.5 lg:mb-1 tracking-tight line-clamp-1">
                  {feature.title}
                </h4>
                <p className="text-zinc-500 text-[15px] lg:text-[15px] leading-tight font-medium line-clamp-1">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Hero;
