'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineCalendar, HiOutlineUser, HiOutlineMail, HiOutlinePhone, HiOutlineChatAlt2, HiOutlineCheck, HiOutlineTag } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

const WHATSAPP_NUMBER = '15550001234';

const BookingFormContent = () => {
  const searchParams = useSearchParams();
  const initialPackage = searchParams.get('package') || '';

  const [form, setForm] = React.useState({ 
    name: '', 
    email: '', 
    phone: '', 
    checkin: '', 
    checkout: '', 
    guests: '1', 
    package: initialPackage,
    message: '' 
  });
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (initialPackage) {
      setForm(prev => ({ 
        ...prev, 
        package: initialPackage,
        guests: initialPackage === 'Honeymoon Bliss' ? '2' : prev.guests 
      }));
    }
  }, [initialPackage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newForm = { ...form, [name]: value };
    
    // Enforce 2 guests for Honeymoon Bliss
    if (name === 'package' && value === 'Honeymoon Bliss') {
      newForm.guests = '2';
    }
    
    setForm(newForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappText = encodeURIComponent(
    `Hello Clement Motel!\n\nBooking Request:\nPackage: ${form.package || 'None'}\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCheck-in: ${form.checkin}\nCheck-out: ${form.checkout}\nGuests: ${form.guests}\nMessage: ${form.message}`
  );

  const inputClass = "w-full bg-zinc-50 dark:bg-white/5 border border-zinc-300 dark:border-white/10 px-5 py-3.5 rounded-sm focus:border-accent outline-none transition-all text-sm text-zinc-900 dark:text-white";
  const labelClass = "text-[15px] font-bold tracking-widest text-zinc-400";

  return (
    <section id="booking" className="section-padding bg-zinc-50 dark:bg-zinc-900/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading subtitle="Secure Your Stay" title="Request Reservation" centered />
        <div className="">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <GlassCard className="p-8! md:p-12!">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 md:col-span-2">
                        <label className={labelClass}><HiOutlineTag className="inline mr-1" />Selected Package</label>
                        <select name="package" value={form.package} onChange={handleChange} className={inputClass}>
                          <option value="">None / Room Only</option>
                          <option value="Weekend Escape">Weekend Escape</option>
                          <option value="Honeymoon Bliss">Honeymoon Bliss</option>
                          <option value="Business Elite">Business Elite</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}><HiOutlineUser className="inline mr-1" />Full Name</label>
                        <input required name="name" value={form.name} onChange={handleChange} placeholder="John Smith" className={inputClass} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}><HiOutlineMail className="inline mr-1" />Email Address</label>
                        <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" className={inputClass} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}><HiOutlinePhone className="inline mr-1" />Phone Number</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 555 000 1234" className={inputClass} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>
                          <HiOutlineUser className="inline mr-1" />
                          Number of Guests {form.package === 'Honeymoon Bliss' && <span className="text-accent ml-1 text-[14px] font-normal tracking-normal lowercase">(Limited to 2 for Honeymoon)</span>}
                        </label>
                        <select 
                          name="guests" 
                          value={form.guests} 
                          onChange={handleChange} 
                          disabled={form.package === 'Honeymoon Bliss'}
                          title={form.package === 'Honeymoon Bliss' ? 'The Honeymoon Bliss package is exclusively for 2 guests.' : ''}
                          className={`${inputClass} ${form.package === 'Honeymoon Bliss' ? 'opacity-60 cursor-not-allowed bg-zinc-50 dark:bg-zinc-800/50' : ''}`}
                        >
                          {[1,2,3,4,5,6,'7+'].map(n => <option key={n} value={n}>{n} Guest{n !== 1 && n !== '7+' ? 's' : n === '7+' ? 's' : ''}</option>)}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}><HiOutlineCalendar className="inline mr-1" />Check-in Date</label>
                        <input required type="date" name="checkin" value={form.checkin} onChange={handleChange} className={inputClass} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}><HiOutlineCalendar className="inline mr-1" />Check-out Date</label>
                        <input required type="date" name="checkout" value={form.checkout} onChange={handleChange} className={inputClass} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className={labelClass}><HiOutlineChatAlt2 className="inline mr-1" />Special Requests (optional)</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows="4" placeholder="Any special requirements, room preferences, dietary needs..." className={`${inputClass} resize-none`} />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <Button type="submit" variant="primary" className="flex-1 py-4!">Send Reservation Request</Button>
                      <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`} target="_blank" rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5c] text-white font-bold uppercase tracking-widest text-xs px-6 py-4 rounded-sm transition-all">
                        <FaWhatsapp className="text-xl" /> WhatsApp Us
                      </a>
                    </div>
                  </form>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <GlassCard className="p-12! text-center">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-8">
                    <HiOutlineCheck />
                  </div>
                  <h3 className="font-serif text-3xl mb-4">Request Received!</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-md mx-auto">
                    Thank you, <strong>{form.name}</strong>. Your request for the <strong>{form.package || 'Room Only'}</strong> package has been received. Our concierge team will contact you within 2 hours to confirm your reservation.
                  </p>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5c] text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-sm transition-all">
                    <FaWhatsapp className="text-xl" /> Also Chat on WhatsApp
                  </a>
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const BookingForm = () => {
  return (
    <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center text-zinc-400 uppercase tracking-widest text-xs">Loading Form...</div>}>
      <BookingFormContent />
    </React.Suspense>
  );
};

export default BookingForm;
