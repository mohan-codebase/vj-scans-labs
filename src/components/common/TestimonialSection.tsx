'use client';

import React, { useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { FcGoogle } from "react-icons/fc";

const testimonialsData = [
    {
        id: 1,
        name: 'Ganesh Ramalingam',
        initial: 'M',
        initialColor: 'bg-[#10a35d]',
        review: 'Immediate attention to patient queries. Reception staffs are prompt in their service, mention ist Reshma 1st floor Room no. 13. branch. Especially for Good customer manager relationship.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Bharathi S',
        initial: 'B',
        initialColor: 'bg-[#d9822b]',
        review: 'Thank you Mr Karl Marx, the patient care coordinator for being so kind and caring throughout my dad’s diagnosis. Your gentle nature and attention to every detail made us feel comfortable. I truly appreciate all your help and support.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Karthik R',
        initial: 'K',
        initialColor: 'bg-[#10a35d]',
        review: 'Good patient care. Fast billing and report delivery. The environment is very hygienic and clean. Highly recommended for all kinds of scans and lab tests.',
        rating: 5,
    },
    {
        id: 4,
        name: 'Anitha K',
        initial: 'A',
        initialColor: 'bg-[#d9822b]',
        review: 'Excellent service and very professional staff. The reports were delivered on time and the facility is well maintained. Will definitely recommend to others.',
        rating: 5,
    }
];

const testimonials = [...testimonialsData, ...testimonialsData];

const TestimonialSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-0">
                    <h2 className="text-[40px] font-extrabold text-[#005a9c] mb-4">
                        Our Patients Feedback
                    </h2>
                    <p className="text-gray-600 font-medium max-w-2xl mx-auto">
                        These are some customer testimonials who are <br /> satisifed with the place & service we have provied
                    </p>
                </div>

                <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
                    <div className="overflow-hidden py-8" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={`${testimonial.id}-${index}`}
                                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 min-w-0"
                                >
                                    <div className="relative bg-[#eaf4f8] rounded-3xl p-8 pt-12 mt-8 h-full mx-2">
                                        <div
                                            className="absolute -top-8 left-1/2 transform -translate-x-1/2 md:w-22 md:h-22 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md border-4 border-white"
                                        >
                                            <FcGoogle size={48} />
                                        </div>

                                        <div className="text-center mt-4">
                                            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                                                {testimonial.review}
                                            </p>

                                            <h3 className="text-xl font-bold text-[#005a9c] mb-2">
                                                {testimonial.name}
                                            </h3>

                                            <div className="flex justify-center gap-1 text-[#f4c10f]">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} fill="currentColor" className="w-5 h-5" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={scrollPrev}
                            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
