'use client';

import { ArrowUp } from "lucide-react";
import { motion } from 'framer-motion';

export default function LiquidGlassButton({ onClick, ...props }) {
  return (
    <motion.button
      onClick={onClick}
      {...props}
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: 'keyframes', stiffness: 300, damping: 18 }}
      className="
        p-3
        rounded-full
        bg-[linear-gradient(84.92deg,#F98D1B_34.11%,#FFC180_105.58%)]
        text-white
        shadow-lg
        hover:shadow-xl
        transition-shadow
        z-50
      "
    >
      <ArrowUp size={24} strokeWidth={3} />
    </motion.button>
  );
}
