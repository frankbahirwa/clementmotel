'use client';
import React, { use, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ROOMS } from '@/data/rooms';
import Button from '@/components/ui/Button';
import { HiOutlineArrowLeft, HiOutlineCheck, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { notFound } from 'next/navigation';

const RoomDetailsPage = ({ params }) => {
  const { id } = use(params);
  const room = ROOMS.find(r => r.id === id);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2 Adults, 0 Children'
  });

  if (!room) {
    notFound();
  }

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
  };

  const nextGallery = () => setGalleryIndex((prev) => (prev + 1) % room.gallery.length);
  const prevGallery = () => setGalleryIndex((prev) => (prev - 1 + room.gallery.length) % room.gallery.length);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src={room.gallery[0]} 
            alt={room.name} 
            fill 
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/20 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8 pl-1">
                <Link href="/rooms" prefetch>
                  <button className="flex items-center gap-4 group bg-white/10 hover:bg-white backdrop-blur-md px-3 py-2 rounded-sm transition-all duration-500 border border-white/10 hover:border-white shadow-lg">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                      <HiOutlineArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
                    </div>
                    <span className="text-[15px] capitalize tracking-[0.2em] text-white group-hover:text-primary transition-colors">Back to Rooms</span>
                  </button>
                </Link>
              </div>

              <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">{room.name}</h1>
              <div className="flex flex-wrap items-center gap-8 text-white/90">
                <span className="text-3xl font-serif text-accent">{room.price} <span className="text-sm font-light opacity-70">/ Night</span></span>
                <div className="h-4 w-px bg-white/20 hidden md:block" />
                <div className="flex gap-6">
                   {room.features.map((f, i) => (
                     <span key={i} className="text-[12px] capitalize">{f}</span>
                   ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
            
            {/* Left Content */}
            <div className="lg:col-span-8">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-serif mb-8 text-primary">About this accommodation</h2>
                <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
                  <p>{room.fullDesc}</p>
                </div>

                {/* Amenities Grid */}
                <div className="mt-20 md:mt-32">
                  <h3 className="text-2xl font-serif mb-12 text-primary border-b border-zinc-100 pb-6">Premium Amenities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {room.amenities.map((amenity, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx} className="flex items-center gap-6 group"
                      >
                        <div className="w-16 h-16 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:shadow-xl group-hover:-translate-y-1">
                          <amenity.icon className="text-2xl" />
                        </div>
                        <span className="text-zinc-800 font-medium tracking-wide text-lg">{amenity.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Gallery Slider */}
                <div className="mt-20 md:mt-32">
                   <div className="flex items-center justify-between mb-12 border-b border-zinc-100">
                      <h3 className="text-2xl font-serif text-primary">In-room Gallery</h3>
                      <div className="flex gap-4">
                        <button onClick={prevGallery} className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                          <HiOutlineChevronLeft className="text-xl" />
                        </button>
                        <button onClick={nextGallery} className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                          <HiOutlineChevronRight className="text-xl" />
                        </button>
                      </div>
                   </div>
                   
                   <div className="relative h-[500px] overflow-hidden group/gal rounded-sm">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={galleryIndex}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                        >
                          <Image 
                            src={room.gallery[galleryIndex]} 
                            alt={`${room.name} detail`} 
                            fill 
                            className="object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>
                      
                      {/* Counter */}
                      <div className="absolute bottom-6 right-6 bg-white shadow-lg px-4 py-2 rounded-full text-[12px] font-bold tracking-widest text-primary">
                        {galleryIndex + 1} / {room.gallery.length}
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Right Booking Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 bg-white border border-zinc-200 p-8 md:p-10 rounded-sm shadow-sm">
                
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-serif text-primary mb-1">Book Your Stay</h3>
                    <p className="text-zinc-400 text-[12px] font-medium capitalize tracking-widest">Clement Motel Experience</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-serif text-primary block leading-none">{room.price}</span>
                    <span className="text-zinc-400 text-[10px] italic">per night</span>
                  </div>
                </div>

                {/* Booking Form Refinement */}
                <div className="space-y-6 mb-10 pt-8 border-t border-zinc-100">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[11px] capitalize tracking-widest font-bold text-primary ml-1">Check-in</label>
                      <input 
                        type="date"
                        name="checkIn"
                        value={bookingData.checkIn}
                        onChange={handleBookingChange}
                        className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-sm hover:border-accent focus:border-accent outline-none transition-all duration-300 text-zinc-900 font-medium text-[13px] cursor-pointer"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] capitalize tracking-widest font-bold text-primary ml-1">Check-out</label>
                      <input 
                        type="date"
                        name="checkOut"
                        value={bookingData.checkOut}
                        onChange={handleBookingChange}
                        className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-sm hover:border-accent focus:border-accent outline-none transition-all duration-300 text-zinc-900 font-medium text-[13px] cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] capitalize tracking-widest font-bold text-primary ml-1">Number of Guests</label>
                    <div className="relative">
                      <select 
                        name="guests"
                        value={bookingData.guests}
                        onChange={handleBookingChange}
                        className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-sm hover:border-accent outline-none appearance-none cursor-pointer text-zinc-900 font-medium text-[13px] transition-all duration-300"
                      >
                        <option>1 Adult, 0 Children</option>
                        <option>2 Adults, 0 Children</option>
                        <option>2 Adults, 1 Child</option>
                        <option>2 Adults, 2 Children</option>
                        <option>3 Adults, 0 Children</option>
                        <option>4 Adults, 0 Children</option>
                        <option>4 Adults, 2 Children</option>
                        <option>6 Adults, 0 Children</option>
                      </select>
                      <HiOutlineChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 rotate-90" />
                    </div>
                  </div>
                </div>

                <Button variant="primary" className="w-full py-5! text-[13px]! tracking-[0.2em]! transition-all!">
                  Confirm Booking Now
                </Button>
                
                <div className="mt-8 pt-8 border-t border-zinc-100 space-y-4">
                  {[
                    { text: 'Instant Confirmation', desc: 'Secure your room immediately' },
                    { text: 'Free Cancellation', desc: 'Up to 24h before arrival' },
                    { text: 'No Pre-payment', desc: 'Pay during your stay' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="w-8 h-8 shrink-0 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <HiOutlineCheck className="text-sm" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-bold text-primary leading-tight">{item.text}</span>
                        <span className="text-[11px] text-zinc-400 font-light leading-tight">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomDetailsPage;
