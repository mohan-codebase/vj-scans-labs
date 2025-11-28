'use client';

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./Section4.css";

const packages = [
    {
        name: "Diabetes Care Package",
        price: 395,
        oldPrice: 1170,
        off: "66% Off",
        testCount: "25 to 38 Tests",
        tests:
            "Glucose (F), Glucose (PP), HbA1c, Lipid Profile, Thyroid Function Te...",
    },
    {
        name: "Thyroid Diagnostic Package",
        price: 349,
        oldPrice: 800,
        off: "66% Off",
        testCount: "05 to 15 Tests",
        tests:
            "Lipid Profile, Thyroid Profile & Anti Thyroid Anti Body (Anti TG/Anti...",
    },
    {
        name: "Healthy Living Package",
        price: 395,
        oldPrice: 1170,
        off: "66% Off",
        testCount: "05 to 15 Tests",
        tests:
            "Lipid Profile, Thyroid Profile & Anti Thyroid Anti Body (Anti TG/Anti...",
    },
    {
        name: "Food Package",
        price: 499,
        oldPrice: 1200,
        off: "58% Off",
        testCount: "30 Tests",
        tests:
            "Lipid Profile, Thyroid Profile & Anti Thyroid Anti Body (Anti TG/Anti...",
    },
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
    // By default, show three cards per view
    // At <768px fallback to 1 card for mobile usability
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        slidesToScroll: 1, // scroll 1 card at a time
        // We will handle slidesPerView with CSS via flex
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="section4-wrapper mt-5 my-0 md:my-20">
            <h2 className="section4-title-main">Popular Health Packages</h2>
            <div className="section4-container">
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        {packages.map((pkg, idx) => (
                            <div
                                className="embla__slide"
                                key={idx}
                            >
                                <div className="flex flex-col gap-8">
                                    <div className="section4-card first">
                                        <div className="section4-header">
                                            <div className="section4-title-container">
                                                <div className="section4-title-line1">
                                                    {pkg.name.split(' ').slice(0, -1).join(' ')}
                                                </div>
                                                <div className="section4-title-line2">
                                                    {pkg.name.split(' ').slice(-1)[0]}
                                                </div>
                                            </div>
                                            <div className="section4-price-section">
                                                <div className="section4-price-wrapper">
                                                    <span className="section4-old-price">
                                                        ₹{pkg.oldPrice}
                                                    </span>
                                                    <span className="section4-price">
                                                        ₹{pkg.price}
                                                    </span>
                                                </div>
                                                <span className="section4-off-badge">
                                                    {pkg.off}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="section4-content">
                                            <div className="section4-test-count">
                                                {pkg.testCount}
                                            </div>
                                            <div className="section4-tests">
                                                {pkg.tests}
                                            </div>
                                            <div className="section4-buttons">
                                                <button className="section4-btn-view">
                                                    View Details
                                                </button>
                                                <button className="section4-btn-book">
                                                    Book Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section4-card ">
                                        <div className="section4-header">
                                            <div className="section4-title-container">
                                                <div className="section4-title-line1">
                                                    {pkg.name.split(' ').slice(0, -1).join(' ')}
                                                </div>
                                                <div className="section4-title-line2">
                                                    {pkg.name.split(' ').slice(-1)[0]}
                                                </div>
                                            </div>
                                            <div className="section4-price-section">
                                                <div className="section4-price-wrapper">
                                                    <span className="section4-old-price">
                                                        ₹{pkg.oldPrice}
                                                    </span>
                                                    <span className="section4-price">
                                                        ₹{pkg.price}
                                                    </span>
                                                </div>
                                                <span className="section4-off-badge">
                                                    {pkg.off}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="section4-content">
                                            <div className="section4-test-count">
                                                {pkg.testCount}
                                            </div>
                                            <div className="section4-tests">
                                                {pkg.tests}
                                            </div>
                                            <div className="section4-buttons">
                                                <button className="section4-btn-view">
                                                    View Details
                                                </button>
                                                <button className="section4-btn-book">
                                                    Book Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
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