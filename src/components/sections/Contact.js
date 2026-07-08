'use client';
import React from 'react';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineArrowRight } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const CONTACT_DETAILS = [
  {
    icon: <HiOutlineLocationMarker />,
    label: 'Location',
    value: 'Nkomero center, Kivu belt street Near Nkomero center, Musasa village',
    action: { href: 'https://maps.google.com/?q=Clement+Motel+Nkomero', label: 'Get Directions' },
  },
  {
    icon: <HiOutlinePhone />,
    label: 'Phone',
    value: '0791 750 555',
    action: { href: 'tel:0791750555', label: 'Call Now' },
  },
  {
    icon: <HiOutlineMail />,
    label: 'Email',
    value: 'clementmotel@gmail.com', // Updated to match brand
    action: { href: 'mailto:clementmotel@gmail.com', label: 'Send Email' },
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-zinc-50 border-t border-zinc-100">
      <div className="container mx-auto px-6 lg:px-12">
        {/* <SectionHeading subtitle="Get in touch" title="Here to assist" /> */}

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mb-10">
          {CONTACT_DETAILS.map((item, i) => (
            <div key={i} className="bg-white border border-zinc-100 rounded-[32px] p-2 transition-all duration-500 group hover:-translate-y-2">
              {/* Inner Top Card Component */}
              <div className="bg-zinc-100/60 rounded-[24px] p-7 flex flex-col items-start min-h-[220px]">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 text-lg mb-5 shadow-sm border border-zinc-100">
                  {item.icon}
                </div>
                <h4 className="text-zinc-900 text-xl font-bold capitalize mb-2">{item.label}</h4>
                <p className="text-zinc-600 text-[13px] leading-relaxed">{item.value}</p>
              </div>
              
              {/* Inner Bottom Action Bar */}
              <div className="py-3 px-6 flex justify-between items-center">
                <span className="text-zinc-900 font-bold capitalize text-sm">
                  {item.action.label}
                </span>
                <a href={item.action.href} target="_blank" rel="noreferrer" className="w-10 h-10 bg-accent group-hover:bg-accent rounded-xl flex items-center justify-center text-white group-hover:text-white transition-colors">
                  <HiOutlineArrowRight className="text-lg" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Map + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <div className="p-8 md:p-12 bg-white border border-zinc-100">
            <h3 className="font-serif text-3xl mb-8 capitalize">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm capitalize font-medium text-zinc-600">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-zinc-50 border border-zinc-300 px-5 py-4 focus:border-zinc-300 outline-none transition-all text-sm text-zinc-900" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm capitalize font-medium text-zinc-600">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-zinc-50 border border-zinc-300 px-5 py-4 focus:border-zinc-300 outline-none transition-all text-sm text-zinc-900" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm capitalize font-medium text-zinc-600">Message</label>
                <textarea placeholder="How can we assist you?" rows="5"
                  className="w-full bg-zinc-50 border border-zinc-100 px-5 py-4 focus:border-zinc-300 outline-none transition-all text-sm text-zinc-900 resize-none" />
              </div>
              <Button variant="primary" className="w-full py-4! capitalize shadow-none">Send Message</Button>
            </form>
          </div>

          {/* Google Maps Embed */}
          <div className="space-y-6">
            <div className="overflow-hidden border border-zinc-100 h-[420px] bg-white">
              <iframe
                title="Clement Motel Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15941.0!2d30.6!3d-2.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dfa!2sKibuye!5e0!3m2!1sen!2srw!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="https://maps.google.com/?q=Clement+Motel+Kibuye" target="_blank" rel="noreferrer" className="flex-1">
                <Button variant="ghost" className="w-full h-[50px] flex items-center justify-center capitalize border border-zinc-200 shadow-none text-sm">
                  Get Directions
                </Button>
              </a>
              <a href="https://wa.me/250791750555" target="_blank" rel="noreferrer" className="flex-1">
                <button className="w-full h-[50px] flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5c] text-white font-medium capitalize text-sm px-6 transition-all shadow-none rounded-sm">
                  <FaWhatsapp className="text-lg" /> WhatsApp
                </button>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
