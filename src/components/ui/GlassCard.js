'use client';
import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', dark = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`
        p-8 rounded-lg transition-transform duration-500
        glass bg-white/40 border-white/20 shadow-xl
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
