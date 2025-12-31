"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from "motion/react";
import { FaInstagram } from 'react-icons/fa';

const InstagramButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const instagramUrl = 'https://www.instagram.com/vj_scans_and_labs/';

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
                    className="fixed bottom-36 right-5 z-50 flex items-center justify-center placeholder:blur-xl"
                >
                    <Link
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              relative
              flex items-center justify-center 
              w-11 h-11 
              rounded-full 
              bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]
              border-[1.5px] border-white/40
              shadow-[0_4px_15px_rgba(188,24,136,0.4),inset_0_2px_10px_rgba(255,255,255,0.3)]
              hover:shadow-[0_6px_20px_rgba(188,24,136,0.6),inset_0_2px_15px_rgba(255,255,255,0.4)]
              hover:scale-110 
              transition-all duration-300 
              group 
              overflow-hidden
            "
                        aria-label="Follow us on Instagram"
                        style={{
                            background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                        }}
                    >
                        {/* Upper Glare */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none rounded-t-full"></div>

                        {/* Bottom Reflection */}
                        <div className="absolute bottom-1 left-2 right-2 h-1/3 bg-gradient-to-t from-white/10 to-transparent rounded-b-full pointer-events-none filter blur-[2px]"></div>

                        {/* Tooltip */}
                        <span className="absolute right-full mr-4 bg-white/80 backdrop-blur-md border border-white/40 text-[#bc1888] px-3 py-1 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            Follow us
                        </span>

                        {/* Instagram Icon from React Icons */}
                        <FaInstagram size={22} className="text-white drop-shadow-md z-10 mb-1" />
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default InstagramButton;
