import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { ROOMS } from '@/data/rooms';

const RoomShowcase = () => {
  return (
    <section id="rooms" className="section-padding bg-zinc-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-100/50 -skew-x-12 translate-x-1/2 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          subtitle="Our Accommodations" 
          title="Luxury Rooms & Suites" 
          centered 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {ROOMS.map((room) => (
            <div key={room.id} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
              <div className="relative h-72 overflow-hidden">
                <Image 
                  src={room.image} 
                  alt={room.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif mb-4 group-hover:text-accent transition-colors">{room.name}</h3>
                <ul className="grid grid-cols-1 gap-2 mb-8">
                  {room.features.map((f, i) => (
                    <li key={i} className="text-zinc-500 text-[12px] flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent/60 rounded-full"></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <div>
                    <span className="block text-2xl font-serif text-zinc-900">{room.price}</span>
                    <span className="text-[15px] capitalize tracking-widest text-zinc-400">Per Night</span>
                  </div>
                  <Link href={`/rooms/${room.id}`} prefetch>
                    <Button variant="outline" className="px-6! py-3! text-[15px]! group/btn">
                      View Details <HiOutlineArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="mt-20 text-center">
          <Button variant="outline" className="px-12! py-5! text-[20px]!">Explore All Accommodations</Button>
        </div> */}
      </div>
    </section>
  );
};

export default RoomShowcase;
