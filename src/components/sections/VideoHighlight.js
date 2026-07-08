'use client';

import React, { useRef, useEffect } from 'react';
import { HiOutlineSparkles, HiOutlineCheckCircle } from 'react-icons/hi';
import { MdOutlineWaves } from 'react-icons/md';

const highlights = [
  {
    icon: <HiOutlineCheckCircle />,
    title: 'Lake Kivu Serenity',
    desc: 'Wake up to breathtaking views of Lake Kivu, where calm waters and lush green hills create a picture-perfect escape.',
  },
  {
    icon: <HiOutlineSparkles />,
    title: 'Premium Comfort',
    desc: 'From elegantly appointed rooms to fully-equipped apartments, every detail is crafted for an exceptional stay.',
  },
  {
    icon: <MdOutlineWaves />,
    title: 'Nature & Adventure',
    desc: "Enjoy fishing, canoeing, hiking trails, and garden views — Rwanda's natural beauty at your doorstep.",
  },
];

const VideoHighlight = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-2 md:py-10 bg-white dark:bg-zinc-50 overflow-hidden"
    >
      {/* Subtle accent strip at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent" />

      {/* Soft background circles */}
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* ── Left: Text Content ── */}
          <div className="flex flex-col justify-center">
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-5 self-start">
              <span className="block w-7 h-px bg-accent" />
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em]">
                Experience Clement Motel
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 leading-snug mb-4">
              Where Nature Meets{' '}
              <span className="text-accent italic">Unmatched Luxury</span>
            </h2>

            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              Nestled on the shores of Lake Kivu in Kibuye, Rwanda, Clement Motel
              is a sanctuary where stunning landscapes blend seamlessly with
              premium hospitality — comfort, elegance, and genuine African warmth.
            </p>

            {/* Highlight list */}
            <ul className="space-y-5">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-lg group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-zinc-900 font-semibold text-sm mb-0.5">{item.title}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-zinc-100">
              {[
                { value: '34+', label: 'Luxury Rooms' },
                { value: '10', label: 'Apartments' },
                { value: '24/7', label: 'At Your Service' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <span className="block text-2xl font-bold text-accent mb-0.5">{stat.value}</span>
                  <span className="text-[9px] uppercase tracking-widest font-semibold text-zinc-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Video ── */}
          <div className="relative group">
            {/* Decorative shadow frame */}
            <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-accent/30 via-transparent to-accent/10 p-px pointer-events-none" />
            <div className="absolute -inset-3 rounded-2xl border border-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-100">
              {/* Playing indicator */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-white/70 backdrop-blur-md rounded-full px-3 py-1 border border-zinc-200">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-zinc-700 text-[10px] font-semibold tracking-wide">Live Preview</span>
              </div>

              <video
                ref={videoRef}
                src="/videos/clement_demo.mp4"
                className="w-full h-full max-h-[500px] object-cover block"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />

              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white/30 to-transparent pointer-events-none" />
            </div>

            <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-accent/5 blur-xl pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Subtle accent strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent" />
    </section>
  );
};

export default VideoHighlight;
