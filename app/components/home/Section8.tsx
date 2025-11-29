import React from "react";
import Image from "next/image";

const Section8 = () => {
    const featuresLeft = [
        {
            id: 1,
            title: "Advanced Diagnostic Technology",
            imageSrc: "/images/section-8/Diagnostic.avif",
        },
        {
            id: 2,
            title: "Fully Trained Expert Team",
            imageSrc: "/images/section-8/Trained.avif",
        },
        {
            id: 3,
            title: "Unmatched Customer Service",
            imageSrc: "/images/section-8/Unmatched.avif",
        },
    ];

    const featuresRight = [
        {
            id: 4,
            title: "Available Across Multiple Locations",
            imageSrc: "/images/section-8/Locations.avif",
        },
        {
            id: 5,
            title: "In-depth Health Insights",
            imageSrc: "/images/section-8/Insights.avif",
        },
        {
            id: 6,
            title: "Commitment to Safety",
            imageSrc: "/images/section-8/Commitment to.avif",
        },
    ];

    return (
        <section className="bg-[#F1F9FF] py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-[40px] font-[800] text-[#0961A1] mb-6">
                        Why VJ Scans & Labs?
                    </h2>
                    <p className="text-[#555555] max-w-3xl font-[600] mx-auto text-sm md:text-base leading-relaxed">
                        Your health deserves precision and care. At VJ Scans & Labs, our
                        dedicated team of Radiologists, Pathologists, Biochemists, and
                        Microbiologists employs advanced diagnostic tools to ensure accurate
                        results, every time. Driven by empathy and a commitment to your
                        well-being, we are proud to be a trusted partner in your health
                        journey.
                    </p>
                </div>

                {/* Main Content */}
                <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

                    {/* Left Column */}
                    <div className="flex flex-col gap-8 w-full lg:w-1/3 items-center lg:items-end">
                        {featuresLeft.map((feature) => (
                            <div
                                key={feature.id}
                                className="relative w-full max-w-[280px] h-[80px] hover:scale-105 transition-transform duration-300 md:my-13"
                            >
                                <Image
                                    src={feature.imageSrc}
                                    alt={feature.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Center Column (Image) */}
                    <div className="relative w-full max-w-[300px] h-[600px] lg:w-1/3 flex items-center justify-center my-8 lg:my-0">
                        <div className="relative w-full h-full">
                            <Image
                                src="/images/section-8/center.avif"
                                alt="VJ Scans Center Visual"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-8 w-full lg:w-1/3 items-center lg:items-start">
                        {featuresRight.map((feature) => (
                            <div
                                key={feature.id}
                                className="relative w-full max-w-[280px] h-[80px] hover:scale-105 transition-transform duration-300 md:my-13"
                            >
                                <Image
                                    src={feature.imageSrc}
                                    alt={feature.title}
                                    fill
                                    className="object-contain "
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Section8;