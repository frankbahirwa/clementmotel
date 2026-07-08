'use client';
import React from 'react';
import { HiOutlineCalendar, HiOutlineUsers, HiSearch } from 'react-icons/hi';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';

const BookingWidget = () => {
  return (
    <div className="container mx-auto px-6 relative z-50 -mt-16 md:-mt-20">
      <GlassCard className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 py-6! px-10!">
        <div className="flex-1 flex flex-col gap-2 border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800 pb-6 lg:pb-0 lg:pr-8">
          <label className="flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-widest">
            <HiOutlineCalendar /> Check In
          </label>
          <input 
            type="date" 
            defaultValue="2024-06-20" 
            className="bg-transparent border-none text-zinc-900 dark:text-zinc-50 font-semibold focus:ring-0 w-full"
          />
        </div>

        <div className="flex-1 flex flex-col gap-2 border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800 pb-6 lg:pb-0 lg:px-8">
          <label className="flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-widest">
            <HiOutlineCalendar /> Check Out
          </label>
          <input 
            type="date" 
            defaultValue="2024-06-25" 
            className="bg-transparent border-none text-zinc-900 dark:text-zinc-50 font-semibold focus:ring-0 w-full"
          />
        </div>

        <div className="flex-1 flex flex-col gap-2 border-zinc-200 dark:border-zinc-800 lg:px-8">
          <label className="flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-widest">
            <HiOutlineUsers /> Guests
          </label>
          <select className="bg-transparent border-none text-zinc-900 dark:text-zinc-50 font-semibold focus:ring-0 w-full">
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>3 Adults</option>
            <option>4 Adults</option>
          </select>
        </div>

        <div className="lg:pl-8">
          <Button variant="primary" className="w-full lg:w-auto flex items-center gap-2 py-4! px-8!">
            <HiSearch className="text-lg" /> Check Availability
          </Button>
        </div>
      </GlassCard>
    </div>
  );
};

export default BookingWidget;
