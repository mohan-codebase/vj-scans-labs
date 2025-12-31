"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from "motion/react";
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const phoneNumber = '919585335552'; // International format without +
    const message = 'Hi! I would like to know more about VJ Scans & Labs services.';

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 2, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="fixed bottom-20 right-5 z-50 flex items-center justify-center placeholder:blur-xl"
                >
                    <Link
                        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              relative
              flex items-center justify-center 
              w-13 h-13 
              rounded-full 
              bg-gradient-to-br from-[#25D366] to-[#128C7E]
              border-[1.5px] border-white/40
              shadow-[0_4px_15px_rgba(37,211,102,0.4),inset_0_2px_10px_rgba(255,255,255,0.3)]
              hover:shadow-[0_6px_20px_rgba(37,211,102,0.6),inset_0_2px_15px_rgba(255,255,255,0.4)]
              hover:scale-110 
              hover:bg-[#25D366]
              transition-all duration-300 
              group 
              overflow-hidden
            "
                        aria-label="Chat on WhatsApp"
                        style={{
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                        }}
                    >
                        {/* Upper Glare */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none rounded-t-full"></div>

                        {/* Bottom Reflection */}
                        <div className="absolute bottom-1 left-2 right-2 h-1/3 bg-gradient-to-t from-white/10 to-transparent rounded-b-full pointer-events-none filter blur-[2px]"></div>

                        {/* Tooltip */}
                        <span className="absolute right-full mr-4 bg-white/80 backdrop-blur-md border border-white/40 text-[#075E54] px-3 py-1 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            Chat with us
                        </span>

                        {/* WhatsApp Icon from React Icons */}
                        <FaWhatsapp size={26} className="text-white drop-shadow-md z-10 mb-1" />
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WhatsAppButton;
