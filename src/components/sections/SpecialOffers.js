'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineHeart, HiOutlineBriefcase, HiOutlineSun, HiOutlineCheck } from 'react-icons/hi';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Link from 'next/link';

const OFFERS = [
  {
    icon: <HiOutlineSun className="text-4xl" />,
    tag: 'Best Value',
    name: 'Lake Kivu Escape',
    subtitle: 'Fri – Sun Package',
    price: '85,000 RWF',
    per: '/ 2 nights',
    color: 'from-amber-500/20 to-orange-500/10',
    border: 'border-amber-400/30',
    perks: ['Double Room for 2 Nights', 'Free Breakfast Daily', 'Free Wi-Fi & Parking', 'Daily Housekeeping'],
  },
  {
    icon: <HiOutlineHeart className="text-4xl" />,
    tag: 'Most Popular',
    name: 'Adventure Package',
    subtitle: '3-Night Minimum',
    price: '145,000 RWF',
    per: '/ 3 nights',
    color: 'from-rose-500/20 to-pink-500/10',
    border: 'border-rose-400/30',
    featured: true,
    perks: ['Deluxe Room (3 Nights)', 'Fishing & Hiking Tour', 'Shuttle Service Included', 'Free Bar Welcome Drink', 'Laundry Service'],
  },
  {
    icon: <HiOutlineBriefcase className="text-4xl" />,
    tag: 'Extended Stay',
    name: 'Long Stay Deal',
    subtitle: '7+ Night Stay',
    price: '280,000 RWF',
    per: '/ week',
    color: 'from-blue-500/20 to-indigo-500/10',
    border: 'border-blue-400/30',
    perks: ['King Room for 7 Nights', 'Daily Breakfast Included', 'Free Wi-Fi & Parking', 'Ticket & Tour Desk'],
  },
];

const SpecialOffers = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Limited Packages" title="Special Offers" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 items-start">
          {OFFERS.map((offer, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className={`relative rounded-sm border bg-linear-to-br ${offer.color} ${offer.border} backdrop-blur-sm p-10 ${offer.featured ? 'md:-mt-6 md:mb-6 shadow-2xl' : ''}`}>
              {offer.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px]  tracking-widest font-bold px-6 py-1.5 rounded-sm">
                  Most Popular
                </div>
              )}
              <div className="text-accent mb-6">{offer.icon}</div>
              <div className="inline-block text-[9px] uppercase tracking-[0.3em] font-bold text-accent border border-accent/30 px-3 py-1 rounded-sm mb-4">
                {offer.tag}
              </div>
              <h3 className="font-serif text-2xl mb-1 text-zinc-900">{offer.name}</h3>
              <p className="text-zinc-400 text-xs uppercase tracking-widest mb-8">{offer.subtitle}</p>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-4xl font-bold text-accent">{offer.price}</span>
                <span className="text-zinc-400 text-sm">{offer.per}</span>
              </div>
              <ul className="space-y-3 mb-10">
                {offer.perks.map((perk, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-zinc-600">
                    <HiOutlineCheck className="text-accent shrink-0" />
                    {perk}
                  </li>
                ))}
              </ul>
              <Link href={`/book?package=${encodeURIComponent(offer.name)}`} className="block w-full">
                <Button variant={offer.featured ? 'primary' : 'outline'} className="w-full">
                  Book This Package
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
