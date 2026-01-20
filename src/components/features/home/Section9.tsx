'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const testimonialsData = [
    {
        id: 1,
        name: 'Viswanathan TR',
        image: '/images/testimonials/viswanathan.png',
        review: "While the CT scan films were got immediately, the doctor's report took little more than expected, that is approximately two hours. In my opinion, this could have been reduced to one hour. Time element in respect of the patient and",
        rating: 4,
    },
    {
        id: 2,
        name: 'Kanishka S',
        image: '/images/testimonials/kanishka.png',
        review: '✅ 📌Clean, modern facility with state‑of‑the‑art MRI, CT, Ultrasound & X‑ray machines 🩻 👩‍💻Friendly, knowledgeable staff – especially the radiologists & technicians.',
        rating: 4,
    },
    {
        id: 3,
        name: 'Aravinth Uthamanathan',
        image: '/images/testimonials/aravinth.png',
        review: 'Good Ambience, Staffs at reception and lab very friendly and polite, front office response is good and quick. Places are neat and clean. Mri and CT reports They will give within one hour. I am satisfied with their service. Highly recommend to VJ Scans and Labs,Thank you...!',
        rating: 5,
    },
    {
        id: 4,
        name: 'Aruna Jothinayagam',
        image: '/images/testimonials/aruna.png',
        review: "We had a great experience in VJ SCAN well maintainance ,quick response and a person's handling very caring especially Staff Vedha sister Instructed very clearly about our procedures Highly recommended i feel comfortable",
        rating: 5,
    }
];

// Duplicate testimonials to ensure smooth looping
const testimonials = [...testimonialsData, ...testimonialsData];

const Section9 = () => {
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
                    <h2 className="md:text-[40px] text-3xl font-sans font-[800] text-[#005a9c] mb-4">
                        Our Patients Feedback
                    </h2>
                    <p className="text-gray-600 font-[500] font-[20px] max-w-2xl mx-auto font-sans">
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
                                        {/* Google Logo Circle */}
                                        <div
                                            className="absolute -top-8 left-1/2 transform -translate-x-1/2 md:w-22 md:h-22 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md border-4 border-white overflow-hidden"
                                        >
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                width={96}
                                                height={96}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="text-center mt-4">
                                            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base font-sans">
                                                {testimonial.review}
                                            </p>

                                            <h3 className="text-xl font-bold text-[#005a9c] mb-2 font-sans">
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

                    {/* Navigation Buttons */}
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

export default Section9;