'use client';

import { ArrowUp } from "lucide-react";
import { motion } from 'framer-motion';

export default function LiquidGlassButton() {
  return (
    <motion.button
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: 'keyframes', stiffness: 300, damping: 18 }}
      className="
        px-3 py-3
        rounded-full
      bg-[black]/5
        border border-white/50
        text-orange-500 font-medium
        shadow-2xl backdrop-blur-sm animate-bounce
      "
    >
      <ArrowUp size={24} />
    </motion.button>
  );
}
