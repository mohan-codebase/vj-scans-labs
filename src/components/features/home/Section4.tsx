'use client';

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from 'next/link';
import "./Section4.css";
import { useBooking } from "@/context/BookingContext";


interface Package {
    name: string;
    price: number;
    oldPrice: number;
    off: string;
    testCount: string;
    tests: string;
}

const packages: Package[] = [
    {
        name: "Master Health Check Basic",
        price: 4590,
        oldPrice: 2499,
        off: "66% Off",
        testCount: "13 Tests",
        tests:
            "Complete Haemogram, FBS, PPBS, Total Bilirubin, Total Cholesterol, Triglycerides, Urea, Creatinine, Urine Routine, Digital X-Ray...",
    },
    {
        name: "TVital Health Male",
        price: 10100,
        oldPrice: 6299,
        off: "66% Off",
        testCount: "16 Tests",
        tests:
            "Complete Haemogram, FBS, PPBS, HbA1c, Lipid Profile, Urea, Creatinine, Uric Acid, Liver Function Test, Thyroid Function Test, Urine Routine...",
    },
    {
        name: "Vital Health Female",
        price: 13330,
        oldPrice: 6999,
        off: "66% Off",
        testCount: "18 Tests",
        tests:
            "Complete Haemogram, FBS, PPBS, HbA1c, Lipid Profile, Urea, Creatinine, Uric Acid, Liver Function Test, Thyroid Function Test, Pap Smear...",
    },
    {
        name: "Vital Heart Check",
        price: 13170,
        oldPrice: 7499,
        off: "66% Off",
        testCount: "18 Tests",
        tests:
            "Complete Haemogram, FBS, PPBS, HbA1c, Lipid Profile, Urea, Creatinine, Uric Acid, Liver Function Test, Thyroid Function Test, Urine Routine...",
    },
    {
        name: "Executive Check",
        price: 16500,
        oldPrice: 8999,
        off: "66% Off",
        testCount: "20 Tests",
        tests:
            "Complete Haemogram, FBS, PPBS, HbA1c, Lipid Profile, Urea, Creatinine, Uric Acid, Liver Function Test, Thyroid Function Test, Urine Routine...",
    },
    {
        name: "Complete Master Health Check Male ",
        price: 19500,
        oldPrice: 9999,
        off: "66% Off",
        testCount: "27 Tests",
        tests:
            "Complete Haemogram, FBS, PPBS, HbA1c, Lipid Profile, Urea, Creatinine, Uric Acid, Liver Function Test, Thyroid Function Test, Pap Smear...",
    }
];

const PrevIcon = () => (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path d="M15 18l-6-6 6-6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const NextIcon = () => (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path d="M9 6l6 6-6 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Section4 = () => {
    const { openModal } = useBooking()


    // By default, show three cards per view
    // At <768px fallback to 1 card for mobile usability
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        slidesToScroll: 1, // scroll 1 card at a time
        // We will handle slidesPerView with CSS via flex
    });

    const chunkedPackages: Package[][] = [];
    for (let i = 0; i < packages.length; i += 2) {
        chunkedPackages.push(packages.slice(i, i + 2));
    }

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="section4-wrapper mt-4 my-0 md:my-0">
            <h2 className="section4-title-main">Popular Health Packages</h2>
            <div className="section4-container">
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        {chunkedPackages.map((packagePair, idx) => (
                            <div
                                className="embla__slide"
                                key={idx}
                            >
                                <div className="flex flex-col gap-8">
                                    {/* First Package in the Pair */}
                                    <div className="section4-card first">
                                        <div className="section4-header">
                                            <div className="section4-title-container">
                                                <div className="section4-title-line1">
                                                    {packagePair[0].name.split(' ').slice(0, -1).join(' ')}
                                                </div>
                                                <div className="section4-title-line2">
                                                    {packagePair[0].name.split(' ').slice(-1)[0]}
                                                </div>
                                            </div>
                                            <div className="section4-price-section">
                                                <div className="section4-price-wrapper">
                                                    <span className="section4-old-price">
                                                        ₹{packagePair[0].oldPrice}
                                                    </span>
                                                    <span className="section4-price">
                                                        ₹{packagePair[0].price}
                                                    </span>
                                                </div>
                                                <span className="section4-off-badge">
                                                    {packagePair[0].off}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="section4-content">
                                            <div className="section4-test-count">
                                                {packagePair[0].testCount}
                                            </div>
                                            <div className="section4-tests">
                                                {packagePair[0].tests}
                                            </div>
                                            <div className="section4-buttons">
                                                <Link href="/packages" className="section4-btn-view flex items-center justify-center text-center no-underline">
                                                    View Details
                                                </Link>
                                                <button className="section4-btn-book" onClick={openModal}>
                                                    Book Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Second Package in the Pair (if exists) */}
                                    {packagePair[1] && (
                                        <div className="section4-card ">
                                            <div className="section4-header">
                                                <div className="section4-title-container">
                                                    <div className="section4-title-line1">
                                                        {packagePair[1].name.split(' ').slice(0, -1).join(' ')}
                                                    </div>
                                                    <div className="section4-title-line2">
                                                        {packagePair[1].name.split(' ').slice(-1)[0]}
                                                    </div>
                                                </div>
                                                <div className="section4-price-section">
                                                    <div className="section4-price-wrapper">
                                                        <span className="section4-old-price">
                                                            ₹{packagePair[1].oldPrice}
                                                        </span>
                                                        <span className="section4-price">
                                                            ₹{packagePair[1].price}
                                                        </span>
                                                    </div>
                                                    <span className="section4-off-badge">
                                                        {packagePair[1].off}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="section4-content">
                                                <div className="section4-test-count">
                                                    {packagePair[1].testCount}
                                                </div>
                                                <div className="section4-tests">
                                                    {packagePair[1].tests}
                                                </div>
                                                <div className="section4-buttons">
                                                    <Link href="/packages" className="section4-btn-view flex items-center justify-center text-center no-underline">
                                                        View Details
                                                    </Link>
                                                    <button  onClick={openModal} className="section4-btn-book flex items-center justify-center text-center no-underline">
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                {/* Carousel Prev/Next Buttons Centered Under Carousel */}
                <div className="section4-carousel-controls">
                    <button
                        onClick={scrollPrev}
                        className="section4-carousel-btn"
                        aria-label="Previous"
                    >
                        <PrevIcon />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="section4-carousel-btn"
                        aria-label="Next"
                    >
                        <NextIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Section4;