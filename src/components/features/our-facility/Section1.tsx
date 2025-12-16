"use client"
import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion' // Corrected import for motion
// import { IconArrowUpRight, IconChevronDown } from '@tabler/icons-react'

const landscapeSlides = [
    {
        id: 1,
        image: "/images/our-fecility/vj-scans-img-1.avif",
        mobileImage: "/images/our-fecility/vj-scans-img-1.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 2,
        image: "/images/our-fecility/vj-scans-img-2.avif",
        mobileImage: "/images/our-fecility/vj-scans-img-2.avif",
    }
]

const portraitSlides = [
    {
        id: 1,
        image: "/images/our-fecility/vj-scans-img-3.avif",
        mobileImage: "/images/our-fecility/vj-scans-img-3.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 2,
        image: "/images/our-fecility/vj-scans-img-4.avif",
        mobileImage: "/images/our-fecility/vj-scans-img-4.avif",
    }
]

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

const Section1 = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    // We use separate slides for landscape (left) and portrait (right)
    const landscapeIndex = Math.abs(page % landscapeSlides.length);
    const portraitIndex = Math.abs(page % portraitSlides.length);

    const paginate = useCallback((newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    }, [page]);

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000)
        return () => clearInterval(timer)
    }, [page, paginate])
    // Added page dependency to reset timer on manual change

    return (
        <section className="w-full max-w-[1500px] mx-auto px-3 md:px-0 py-4 lg:py-8 flex flex-col lg:flex-row gap-2">

            {/* Left Side Banner Slider - Landscape */}
            <div className=" lg:w-[1000px] relative overflow-hidden rounded-[10px] lg:rounded-[16px] min-h-[200px] lg:min-h-[750px]">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={landscapeIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            {/* Desktop Image */}
                            <div className="hidden lg:block absolute inset-0">
                                <Image
                                    src={landscapeSlides[landscapeIndex].image}
                                    alt="Landscape Facility Image"
                                    fill
                                    className="object-cover"
                                    priority
                                    draggable={false}
                                />
                            </div>
                            {/* Mobile Image */}
                            <div className="block lg:hidden absolute inset-0">
                                <Image
                                    src={landscapeSlides[landscapeIndex].mobileImage}
                                    alt="Landscape Facility Image Mobile"
                                    fill
                                    className="object-cover"
                                    priority
                                    draggable={false}
                                />
                            </div>
                            {/* Optional Overlay to ensure text readability if needed, using the gradient as a subtle wash */}
                            {landscapeSlides[landscapeIndex].bgColor && (
                                <div className={`absolute inset-0 ${landscapeSlides[landscapeIndex].bgColor} opacity-90 mix-blend-multiply`} />
                            )}
                        </div>

                    </motion.div>
                </AnimatePresence>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-6 lg:left-12 flex gap-2 z-20">
                    {landscapeSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                const direction = index > landscapeIndex ? 1 : -1;
                                setPage([page + (index - landscapeIndex), direction]);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${landscapeIndex === index ? "w-8 bg-[#F98D1B]" : "w-2 bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Right Side Appointment Form - Portrait */}
            <div className=" lg:w-[500px] relative overflow-hidden rounded-[10px] lg:rounded-[16px] min-h-[500px] lg:min-h-[750px]">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={portraitIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            {/* Desktop Image */}
                            <div className="hidden lg:block absolute inset-0">
                                <Image
                                    src={portraitSlides[portraitIndex].image}
                                    alt="Portrait Facility Image"
                                    fill
                                    className="object-cover"
                                    priority
                                    draggable={false}
                                />
                            </div>
                            {/* Mobile Image */}
                            <div className="block lg:hidden absolute inset-0">
                                <Image
                                    src={portraitSlides[portraitIndex].mobileImage}
                                    alt="Portrait Facility Image Mobile"
                                    fill
                                    className="object-cover"
                                    priority
                                    draggable={false}
                                />
                            </div>
                            {/* Optional Overlay to ensure text readability if needed, using the gradient as a subtle wash */}
                            {portraitSlides[portraitIndex].bgColor && (
                                <div className={`absolute inset-0 ${portraitSlides[portraitIndex].bgColor} opacity-90 mix-blend-multiply`} />
                            )}
                        </div>

                    </motion.div>
                </AnimatePresence>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-6 lg:left-12 flex gap-2 z-20">
                    {portraitSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                const direction = index > portraitIndex ? 1 : -1;
                                setPage([page + (index - portraitIndex), direction]);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${portraitIndex === index ? "w-8 bg-[#F98D1B]" : "w-2 bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Section1