import React from 'react';
import Contact from '@/components/sections/Contact';

export const metadata = {
  title: "Contact Us | Clement Motel",
  description: "Get in touch with Clement Motel in Kibuye, Kibuye, Rwanda.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Contact />
    </div>  
  );
}
