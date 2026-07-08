import React from 'react';

const SectionHeading = ({ title, subtitle, centered = false, light = false }) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center flex flex-col items-center' : ''}`}>
      {subtitle && (
        <span className="block text-accent capitalize tracking-[0.3em] text-[13px] font-bold mb-4">
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-5xl lg:text-5xl mb-6 leading-tight ${light ? 'text-white' : 'text-zinc-900'}`}>
        {title}
      </h2>
      <div className="w-16 h-0.5 bg-accent"></div>
    </div>
  );
};

export default SectionHeading;
