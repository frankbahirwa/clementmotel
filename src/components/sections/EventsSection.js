'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiOutlineUsers, HiOutlineOfficeBuilding, HiOutlinePresentationChartLine, HiOutlineHeart, HiOutlineStar, HiOutlineBriefcase } from 'react-icons/hi';
import { MdSportsKabaddi, MdDirectionsWalk, MdOutlineLibraryMusic, MdOutlineTour } from 'react-icons/md';
import { GiBarbecue } from 'react-icons/gi';
import { HiOutlineTicket } from 'react-icons/hi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

const VENUES = [
  { name: 'Live Music Bar', capacity: 'Delightful Atmosphere', img: '/images/clement_band.png', tag: 'Entertainment' },
  { name: 'Clement Garden BBQ', capacity: 'Socializing & Dining', img: '/images/image3.png', tag: 'Outdoors' },
  { name: 'Adventure & Sport', capacity: 'Lake & Nature Trails', img: '/images/clement_outdoor.png', tag: 'Activities' },
];

const SERVICES = [
  { icon: <MdOutlineLibraryMusic />, label: 'Live Music Performances' },
  { icon: <MdOutlineTour />, label: 'Tour Desk Services' },
  { icon: <GiBarbecue />, label: 'Garden BBQ Facilities' },
  { icon: <MdDirectionsWalk />, label: 'Hiking & Outdor Trails' },
  { icon: <MdSportsKabaddi />, label: 'Fishing & Canoeing' },
  { icon: <HiOutlineTicket />, label: 'Ticket Booking Services' },
];

const EventsSection = () => {
  return (
    <section className="section-padding bg-zinc-50">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Entertainment & Sports" title="Clement Activities & Experiences" centered />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {VENUES.map((venue, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="relative rounded-sm overflow-hidden group h-80 cursor-pointer">
              <Image 
                src={venue.img} 
                alt={venue.name} 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/30 to-transparent z-10" />
              <div className="absolute top-4 right-4 bg-accent text-white text-[10px] capitalize tracking-widest font-bold px-3 py-1 rounded-sm z-10">
                {venue.tag}
              </div>
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-white font-serif text-xl mb-1">{venue.name}</h3>
                <div className="flex items-center gap-2 text-zinc-300 text-xs">
                  <HiOutlineStar />
                  <span>{venue.capacity}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading subtitle="Active Getaway" title="Leisure Services & Tours" />
            <div className="grid grid-cols-2 gap-6 mt-10">
              {SERVICES.map((s, i) => (
                <div key={i} className="flex items-center gap-4 text-zinc-600 group">
                  <span className="text-2xl text-accent group-hover:scale-125 transition-transform">{s.icon}</span>
                  <span className="text-sm font-semibold">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Button variant="primary">Enquire About Activities</Button>
            </div>
          </div>
          <GlassCard className="space-y-6">
            <h3 className="font-serif text-2xl">Book Your Experience</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Tell us what activities you'd love to experience, and our tour desk will handle all your ticket and shuttle arrangements.
            </p>
            <div className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full bg-white border border-zinc-200 px-5 py-3 rounded-sm focus:border-accent outline-none text-sm" />
              <input type="email" placeholder="Email Address" className="w-full bg-white border border-zinc-200 px-5 py-3 rounded-sm focus:border-accent outline-none text-sm" />
              <select className="w-full bg-white border border-zinc-200 px-5 py-3 rounded-sm focus:border-accent outline-none text-sm text-zinc-500">
                <option>Select Activity...</option>
                <option>Fishing / Canoeing Trip</option>
                <option>Hiking Trail Tour</option>
                <option>Live Music Group Booking</option>
                <option>Garden BBQ Setup</option>
              </select>
              <select className="w-full bg-white border border-zinc-200 px-5 py-3 rounded-sm focus:border-accent outline-none text-sm text-zinc-500">
                <option>Expected Participants</option>
                <option>1–2</option>
                <option>3–5</option>
                <option>6–10</option>
                <option>10+</option>
              </select>
              <Button variant="primary" className="w-full">Submit Request</Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
