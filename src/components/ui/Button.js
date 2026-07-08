'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  type = 'button' 
}) => {
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover shadow-lg hover:shadow-accent/20",
    outline: "bg-transparent border border-accent text-accent hover:bg-accent hover:text-white",
    ghost: "bg-transparent text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      className={`
        px-8 py-4 text-base font-medium capitalize tracking-wide rounded-sm
        transition-all duration-300 inline-flex items-center justify-center
        ${variants[variant]} ${className}
      `}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
