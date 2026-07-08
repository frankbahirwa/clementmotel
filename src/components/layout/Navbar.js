'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiMenuAlt3,
  HiOutlineX,
  HiOutlinePhone,
  HiOutlineMail,
  HiChevronDown
} from 'react-icons/hi';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import Button from '../ui/Button';
import Image from 'next/image';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Rooms', href: '/rooms' },
  { name: 'Restaurant & bar', href: '/restaurant' },
  { name: 'Events', href: '/events' },
  { name: 'gallery', href: '/gallery' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Contact',
    dropdown: [
      { name: 'Contact us', href: '/contact' },
      { name: 'FAQs', href: '/faq' }
    ]
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  const isDeepScroll = false;
  const isHeroPage = pathname === '/';
  const useDarkTheme = true;
  const needsBackground = false;

  return (
    <motion.header
      initial={false}
      animate={{ y: isDeepScroll ? -45 : 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-100"
    >
      {/* --- TOP BAR --- */}
      <div className="bg-white border-b border-zinc-100 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 flex flex-row-reverse md:flex-row justify-between items-stretch h-11">

          {/* Info: Icons only on mobile, full text on md+ (Left on desktop, Right on mobile) */}
          <div className="flex items-center gap-3 md:gap-8 pr-4 md:pr-0">
            {/* Phone */}
            <a href="tel:+250781058603" className="flex items-center gap-2 text-zinc-500 hover:text-accent transition-colors">
              <HiOutlinePhone className="text-accent text-2xl shrink-0" />
              <span className="hidden md:inline text-[13px] capitalize tracking-widest">
                Call Us Anytime: <span className="text-zinc-900">+250 0791 750 555</span>
              </span>
            </a>
            {/* Email */}
            <a href="mailto:clementmotel@gmail.com" className="flex items-center gap-3 md:px-8 md:border-r md:border-zinc-100 text-zinc-500 hover:text-accent transition-colors">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                <HiOutlineMail className="text-xl md:text-xl" />
              </div>
              <span className="hidden md:inline text-[13px] text-zinc-600 tracking-wider">clementmotel@gmail.com</span>
            </a>
          </div>

          {/* Socials: Dark Angled Section (Right on desktop, Left on mobile) */}
          <div className="relative flex items-center bg-primary text-white px-4 md:px-10 py-1 angled-left md:angled-right -ml-4 md:ml-0 md:-mr-6">
            <span className="hidden md:inline text-[15px] capitalize tracking-[0.2em] mr-8 opacity-70">Follow Us</span>
            <div className="flex items-center gap-4 md:gap-5">
              {[
                { Icon: FaInstagram, href: 'https://www.instagram.com/clementmotelrwanda/' },
                { Icon: FaFacebookF, href: '#' },
                { Icon: FaWhatsapp, href: 'https://wa.me/250791750555' }
              ].map((social, idx) => (
                <a key={idx} href={social.href} className="hover:text-accent hover:scale-110 transition-all pr-1 duration-300">
                  <social.Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <motion.nav
        animate={{
          paddingTop: isDeepScroll ? '8px' : '0px',
          paddingBottom: isDeepScroll ? '8px' : '0px',
        }}
        className={`transition-all duration-500 relative ${useDarkTheme ? 'nav-dark' : 'nav-glass'}`}
      >
        <div className="container mx-auto px-6 h-24 lg:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" prefetch className="text-2xl font-bold tracking-tighter shrink-0 z-10 flex flex-row leading-none">
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} priority className="w-20 h-16 lg:w-20 lg:h-20 rounded-full -ml-5 lg:ml-0 lg:block" />
            <span className={`${useDarkTheme ? 'text-white' : 'text-primary'} hidden lg:block mt-7 ml-3`}>Clement Motel</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.name} className="relative group py-2">
                    <button className="flex items-center gap-1.5 text-lg capitalize font-bold tracking-widest transition-colors duration-300 text-white/70 group-hover:text-white">
                      {link.name}
                      <HiChevronDown className="text-lg mt-0.5" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-12 left-0 min-w-[200px] bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 p-2 flex flex-col z-50">
                      {link.dropdown.map(drop => {
                        const isDropActive = pathname === drop.href;
                        return (
                          <Link key={drop.name} href={drop.href} prefetch className={`px-4 py-3 text-[13px] rounded-lg transition-colors capitalize font-medium tracking-wide ${isDropActive ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'}`}>
                            {drop.name}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                );
              }
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link key={link.name} href={link.href} prefetch
                  className="relative group py-2 text-lg capitalize font-bold tracking-widest transition-colors duration-300">
                  <span className={`transition-colors duration-300 ${isActive ? 'text-accent' : 'text-white/70 group-hover:text-white'}`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Section: Email + Button */}
          <div className="hidden lg:flex items-stretch h-full">
            <div className={`flex items-center pl-10 pr-6 relative overflow-hidden h-full angled-right ${needsBackground ? 'bg-accent/5' : 'bg-white/5'}`}>
              <Link href="/book" prefetch>
                <Button variant="primary" className="py-3! px-8! text-[15px]! shadow-xl!">Book Your Stay</Button>
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`xl:hidden text-2xl p-2 rounded-sm transition-colors ${useDarkTheme ? 'text-white hover:bg-white/10' : 'text-primary hover:bg-primary/10'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={isMobileMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                {isMobileMenuOpen ? <HiOutlineX /> : <HiMenuAlt3 />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu — clean dropdown tray */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="xl:hidden w-full bg-zinc-950 border-t border-white/5"
            >
              <div className="px-6 pt-4 pb-6 flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  if (link.dropdown) {
                    const isOpen = openDropdown === link.name;
                    return (
                      <div key={link.name} className="mt-1">
                        {/* Collapsible toggle row */}
                        <button
                          onClick={() => setOpenDropdown(isOpen ? null : link.name)}
                          className="w-full flex items-center justify-between py-3 px-3 rounded-lg text-sm font-medium capitalize text-zinc-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                        >
                          {link.name}
                          <HiChevronDown className={`text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {/* Collapsible sub-links */}
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4"
                            >
                              {link.dropdown.map((drop) => {
                                const isDropActive = pathname === drop.href;
                                return (
                                  <Link key={drop.name} href={drop.href} prefetch onClick={() => { setIsMobileMenuOpen(false); setOpenDropdown(null); }}
                                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm capitalize transition-all duration-200 ${isDropActive ? 'text-accent bg-accent/10' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                      }`}>
                                    {drop.name}
                                    {isDropActive && <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
                  const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                  return (
                    <Link key={link.name} href={link.href} prefetch onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-3 px-3 rounded-lg text-sm font-medium capitalize transition-all duration-200 ${isActive ? 'text-accent bg-accent/10' : 'text-zinc-300 hover:text-white hover:bg-white/5'
                        }`}>
                      {link.name}
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />}
                    </Link>
                  );
                })}
              </div>

              {/* Bottom CTA */}
              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex flex-col gap-3">
                <a href="tel:+250781058603" className="flex items-center gap-2 text-sm text-zinc-400">
                  <HiOutlinePhone className="text-accent shrink-0" /> 0791 750 555
                </a>
                <Link href="/book" prefetch onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" className="w-full capitalize shadow-none">Book your stay</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;

