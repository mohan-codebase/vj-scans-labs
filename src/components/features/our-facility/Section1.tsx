"use client"
import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion' // Corrected import for motion
// import { IconArrowUpRight, IconChevronDown } from '@tabler/icons-react'

const landscapeSlides = [
    {
        id: 1,
        image: "/images/our-fecility/facility-landscape-01.avif",
        mobileImage: "/images/our-fecility/facility-landscape-01.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 2,
        image: "/images/our-fecility/facility-landscape-02.avif",
        mobileImage: "/images/our-fecility/facility-landscape-02.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 3,
        image: "/images/our-fecility/facility-landscape-03.avif",
        mobileImage: "/images/our-fecility/facility-landscape-03.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 4,
        image: "/images/our-fecility/facility-landscape-04.avif",
        mobileImage: "/images/our-fecility/facility-landscape-04.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 5,
        image: "/images/our-fecility/facility-landscape-05.avif",
        mobileImage: "/images/our-fecility/facility-landscape-05.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 6,
        image: "/images/our-fecility/facility-landscape-06.avif",
        mobileImage: "/images/our-fecility/facility-landscape-06.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 7,
        image: "/images/our-fecility/facility-landscape-07.avif",
        mobileImage: "/images/our-fecility/facility-landscape-07.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 8,
        image: "/images/our-fecility/facility-landscape-08.avif",
        mobileImage: "/images/our-fecility/facility-landscape-08.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 9,
        image: "/images/our-fecility/facility-landscape-09.avif",
        mobileImage: "/images/our-fecility/facility-landscape-09.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 10,
        image: "/images/our-fecility/facility-landscape-10.avif",
        mobileImage: "/images/our-fecility/facility-landscape-10.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 11,
        image: "/images/our-fecility/facility-landscape-11.avif",
        mobileImage: "/images/our-fecility/facility-landscape-11.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 12,
        image: "/images/our-fecility/facility-landscape-12.avif",
        mobileImage: "/images/our-fecility/facility-landscape-12.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 13,
        image: "/images/our-fecility/facility-landscape-13.avif",
        mobileImage: "/images/our-fecility/facility-landscape-13.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 14,
        image: "/images/our-fecility/facility-landscape-14.avif",
        mobileImage: "/images/our-fecility/facility-landscape-14.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 15,
        image: "/images/our-fecility/facility-landscape-15.avif",
        mobileImage: "/images/our-fecility/facility-landscape-15.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 16,
        image: "/images/our-fecility/facility-landscape-16.avif",
        mobileImage: "/images/our-fecility/facility-landscape-16.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 17,
        image: "/images/our-fecility/facility-landscape-17.avif",
        mobileImage: "/images/our-fecility/facility-landscape-17.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 18,
        image: "/images/our-fecility/facility-landscape-18.avif",
        mobileImage: "/images/our-fecility/facility-landscape-18.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 19,
        image: "/images/our-fecility/facility-landscape-19.avif",
        mobileImage: "/images/our-fecility/facility-landscape-19.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 20,
        image: "/images/our-fecility/facility-landscape-20.avif",
        mobileImage: "/images/our-fecility/facility-landscape-20.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 21,
        image: "/images/our-fecility/facility-landscape-21.avif",
        mobileImage: "/images/our-fecility/facility-landscape-21.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 22,
        image: "/images/our-fecility/facility-landscape-22.avif",
        mobileImage: "/images/our-fecility/facility-landscape-22.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 23,
        image: "/images/our-fecility/facility-landscape-23.avif",
        mobileImage: "/images/our-fecility/facility-landscape-23.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 24,
        image: "/images/our-fecility/facility-landscape-24.avif",
        mobileImage: "/images/our-fecility/facility-landscape-24.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 25,
        image: "/images/our-fecility/facility-landscape-25.avif",
        mobileImage: "/images/our-fecility/facility-landscape-25.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 26,
        image: "/images/our-fecility/facility-landscape-26.avif",
        mobileImage: "/images/our-fecility/facility-landscape-26.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    }
]

const portraitSlides = [
    {
        id: 1,
        image: "/images/our-fecility/facility-portrait-01.avif",
        mobileImage: "/images/our-fecility/facility-portrait-01.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 2,
        image: "/images/our-fecility/facility-portrait-02.avif",
        mobileImage: "/images/our-fecility/facility-portrait-02.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 3,
        image: "/images/our-fecility/facility-portrait-03.avif",
        mobileImage: "/images/our-fecility/facility-portrait-03.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 4,
        image: "/images/our-fecility/facility-portrait-04.avif",
        mobileImage: "/images/our-fecility/facility-portrait-04.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 5,
        image: "/images/our-fecility/facility-portrait-05.avif",
        mobileImage: "/images/our-fecility/facility-portrait-05.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 6,
        image: "/images/our-fecility/facility-portrait-06.avif",
        mobileImage: "/images/our-fecility/facility-portrait-06.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 7,
        image: "/images/our-fecility/facility-portrait-07.avif",
        mobileImage: "/images/our-fecility/facility-portrait-07.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 8,
        image: "/images/our-fecility/facility-portrait-08.avif",
        mobileImage: "/images/our-fecility/facility-portrait-08.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 9,
        image: "/images/our-fecility/facility-portrait-09.avif",
        mobileImage: "/images/our-fecility/facility-portrait-09.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 10,
        image: "/images/our-fecility/facility-portrait-10.avif",
        mobileImage: "/images/our-fecility/facility-portrait-10.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 11,
        image: "/images/our-fecility/facility-portrait-11.avif",
        mobileImage: "/images/our-fecility/facility-portrait-11.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 12,
        image: "/images/our-fecility/facility-portrait-12.avif",
        mobileImage: "/images/our-fecility/facility-portrait-12.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 13,
        image: "/images/our-fecility/facility-portrait-13.avif",
        mobileImage: "/images/our-fecility/facility-portrait-13.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 14,
        image: "/images/our-fecility/facility-portrait-14.avif",
        mobileImage: "/images/our-fecility/facility-portrait-14.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 15,
        image: "/images/our-fecility/facility-portrait-15.avif",
        mobileImage: "/images/our-fecility/facility-portrait-15.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 16,
        image: "/images/our-fecility/facility-portrait-16.avif",
        mobileImage: "/images/our-fecility/facility-portrait-16.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
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