'use client';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageWrapper({ children }) {
  const pathname = usePathname();

  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="flex-1"
    >
      {children}
    </motion.main>
  );
}
