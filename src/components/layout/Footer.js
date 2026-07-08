import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const EXPLORE_LINKS = [
  { label: 'Rooms & suites', href: '/rooms' },
  { label: 'Amenities', href: '/amenities' },
  { label: 'Restaurant & bar', href: '/restaurant' },
  { label: 'Events & conferences', href: '/events' },
  { label: 'Special offers', href: '/offers' },
];

const SUPPORT_LINKS = [
  { label: 'About us', href: '/about' },
  { label: 'Contact us', href: '/contact' },
  { label: 'Book now', href: '/book' },
  { label: 'FAQ', href: '/faq' },
];


const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-10 pb-20 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Newsletter Box */}
        <div className="bg-zinc-920 p-3 border border-zinc-600 text-white rounded-xl  md:p-14 lg:p-8 mb-24 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-12">
          
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl  mb-5 capitalize">Subscribe our newsletter</h2>
            <p className="text-zinc-400 text-sm leading-relaxed capitalize">
              Subscribe to our newsletter and be the first to receive insights, updates, and expert tips on optimizing your stay.
            </p>
          </div>

          <div className="w-full xl:w-auto min-w-[340px]">
            <span className="block text-sm text-zinc-300 mb-3 capitalize">Stay up to date</span>
            <form className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-zinc-800 rounded-2xl p-1.5 focus-within:ring-1 focus-within:ring-zinc-600 gap-2 sm:gap-0">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border-none px-5 py-4 sm:py-3 outline-none text-sm text-white placeholder-zinc-500 capitalize"
                required
              />
              <button 
                type="submit" 
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 sm:py-3.5 rounded-xl  text-sm transition-colors capitalize shrink-0"
              >
                Subscribe
              </button>
            </form>
            {/* <span className="block mt-4 text-[11px] text-zinc-500 capitalize">
              By subscribing you agree to our <Link href="/privacy" className="underline hover:text-white transition-colors">Privacy policy</Link>
            </span> */}
          </div>
        </div>

        {/* Footer Navigation Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          
          {/* Logo Area */}
          <div className="max-w-xs">
            <Link href="/" prefetch className="text-2xl font-bold block text-white mb-5 capitalize">
              Clement Motel
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed capitalize mb-4">
              A convenient stop for business travelers, tourists, and transport operators. Experience quality hospitality in the heart of Kibuye.
            </p>
            <div className="space-y-1 mb-8">
              <p className="text-zinc-400 text-[13px] capitalize italic">Nkomero center, Kivu belt street Near Nkomero center, Musasa village</p>
              <p className="text-white font-medium">+250 791 750 555</p>
            </div>
            
            {/* Socials embedded unobtrusively to preserve design structure */}
            <div className="flex gap-4">
              <a href="https://www.instagram.com/clementmotel/" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors text-zinc-500 text-sm">
                <FaInstagram />
              </a>
              <a href="https://web.facebook.com/profile.php?id=100067182974576" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors text-zinc-500 text-sm">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors text-zinc-500 text-sm">
                <FaXTwitter />
              </a>
              <a href="https://wa.me/250791750555" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-colors text-zinc-500 text-sm">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h3 className="text-white font-bold mb-6 capitalize text-sm">Explore</h3>
              <ul className="space-y-4 text-sm text-zinc-400">
                {EXPLORE_LINKS.map(l => (
                  <li key={l.label}>
                    <Link href={l.href} prefetch className="hover:text-white capitalize transition-colors block">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-6 capitalize text-sm">Support</h3>
              <ul className="space-y-4 text-sm text-zinc-400">
                {SUPPORT_LINKS.map(l => (
                  <li key={l.label}>
                    <Link href={l.href} prefetch className="hover:text-white capitalize transition-colors block">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-xs text-zinc-500 capitalize">
          <p>&copy; {new Date().getFullYear()} Clement Motel. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
