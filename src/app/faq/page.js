'use client';
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineChevronDown, HiOutlineSearch } from 'react-icons/hi';

const FAQ_CATEGORIES = ['All', 'Booking', 'Amenities', 'Dining', 'Policies'];

const FAQS = [
  {
    category: 'Dining',
    question: 'Does CLEMENT MOTEL have bars on-site?',
    answer: "Experience your holiday vacation the finest way with a beverage in your hand at CLEMENT MOTEL's bar readily available right in front of your doorstep for when you need a drink or two."
  },
  {
    category: 'Amenities',
    question: 'Does CLEMENT MOTEL provide shuttle service for getting around?',
    answer: 'For your ease of travel around the city, CLEMENT MOTEL offers shuttle service right where you need it making it simple for you to get to places conveniently.'
  },
  {
    category: 'Amenities',
    question: 'What sort of non-water sports and outdoor activities are available at CLEMENT MOTEL?',
    answer: 'CLEMENT MOTEL offers non-water sport and outdoor activities such as hiking trails for you to sweat it out.'
  },
  {
    category: 'Amenities',
    question: 'What kind of water sports activities are readily available at CLEMENT MOTEL?',
    answer: 'CLEMENT MOTEL features water sport activities including fishing for you to enjoy.'
  },
  {
    category: 'Amenities',
    question: 'Does CLEMENT MOTEL offer laundry services?',
    answer: 'Yes! CLEMENT MOTEL includes laundry service at your disposal and even hot water linen and laundry washing for whenever you need your favorite clothes clean and fresh all throughout your holiday. Please contact the property for more information.'
  },
  {
    category: 'Policies',
    question: 'Is car parking available at CLEMENT MOTEL?',
    answer: 'CLEMENT MOTEL features car park free of charge for all guests traveling with a car. Please contact the property for more information.'
  },
  {
    category: 'Policies',
    question: "In which languages can CLEMENT MOTEL's staff members communicate?",
    answer: 'CLEMENT MOTEL can converse up to 2 languages which includes English for guests that prefer this language.'
  },
  {
    category: 'Booking',
    question: 'What is the closest airport to CLEMENT MOTEL?',
    answer: 'The nearest airport to CLEMENT MOTEL is Goma International Airport, 28.0 km away.'
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-40 pb-20 bg-white border-b border-zinc-100">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <h1 className="text-4xl md:text-4xl font-serif text-zinc-900 mb-6 capitalize">
            Frequently asked questions
          </h1>

          <div className="mt-12 relative max-w-2xl mx-auto flex flex-col sm:flex-row items-stretch gap-3">
            <div className="relative flex-1">
              <HiOutlineSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 text-xl" />
              <input 
                type="text" 
                placeholder="Search for answers..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[60px] bg-white border border-zinc-200 rounded-2xl py-4 pl-16 pr-6 outline-none focus:border-zinc-300 transition-colors capitalize text-zinc-900 shadow-sm placeholder:text-zinc-400"
              />
            </div>
            <button className="bg-accent hover:bg-accent-hover text-white px-10 h-[60px] rounded-2xl capitalize font-medium transition-colors shrink-0 flex items-center justify-center shadow-lg shadow-accent/20">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className=" flex-1">
        <div className="container mx-auto px-6 mb-10 lg:px-12 flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Categories Sidebar */}
          <div className="w-full lg:w-1/4 lg:sticky lg:top-32 mb-10 lg:mb-0">
            <h3 className="font-bold text-zinc-900 mb-6 capitalize text-xl hidden lg:block">Categories</h3>
            
            <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
              {FAQ_CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => { setActiveCategory(category); setOpenIndex(null); }}
                  className={`shrink-0 text-left px-6 lg:px-5 py-3 lg:py-3.5 rounded-xl transition-all capitalize font-medium shadow-sm ${
                    activeCategory === category 
                      ? 'bg-accent text-white shadow-lg shadow-zinc-900/10 border border-zinc-900' 
                      : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion List */}
          <div className="w-full lg:w-3/4">
            <h3 className="font-bold text-zinc-900 mb-8 capitalize text-xl border-b border-zinc-200 pb-4">
              {searchQuery ? 'Search results' : `${activeCategory} questions`}
            </h3>

            {filteredFaqs.length === 0 ? (
              <div className="py-16 text-center bg-white border border-zinc-100 rounded-3xl">
                <p className="text-zinc-500 capitalize text-lg">No questions found matching your criteria.</p>
                <button 
                  onClick={() => setSearchQuery('')} 
                  className="mt-6 px-8 py-3 bg-zinc-900 text-white rounded-xl capitalize font-medium transition-colors hover:bg-zinc-800"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div 
                      key={index} 
                      className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                        isOpen ? 'border-zinc-300 shadow-xl shadow-zinc-200/50' : 'border-zinc-300 hover:border-zinc-200'
                      }`}
                    >
                      <button 
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full text-left px-8 py-6 flex items-center justify-between gap-6 outline-none"
                      >
                        <span className="font-medium text-lg text-zinc-900 capitalize leading-relaxed">
                          {faq.question}
                        </span>
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                          isOpen ? 'bg-zinc-900 border-zinc-900 text-white rotate-180' : 'bg-transparent border-zinc-200 text-zinc-400'
                        }`}>
                          <HiOutlineChevronDown />
                        </span>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          >
                            <div className="px-8 pb-8 pt-2">
                              <p className="text-zinc-500 leading-relaxed capitalize">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}
