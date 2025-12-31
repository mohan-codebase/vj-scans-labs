"use client"
import React, { useRef } from 'react'
import { IconChevronLeft, IconChevronRight, IconPlus } from '@tabler/icons-react'

const packages = [
    {
        id: 1,
        name: "Master Health Check Basic",
        testsCount: 13,
        tests: [
            "Complete Haemogram",
            "FBS,PPBS",
            "Total Bilirubin",
            "Total Cholesterol",
            "Triglycerides",
            "Urea",
            "Creatinine",
            "Urine Routine",
            "Digital X-Ray",
            "ECG",
            "USG Abdomen",
        ],
        originalPrice: 7500,
        discountedPrice: 2499,
        discount: "66% Off",
        headerColor: "bg-[#0961A1]"
    },
    {
        id: 2,
        name: "Vital Health Male",
        testsCount: 16,
        tests: [
            "Complete Haemogram",
            "FBS,PPBS, HbA1c",
            "Lipid Profile",
            "Urea",
            "Creatinine",
            "Uric Acid",
            "Liver Function Test",
            "Thyroid Function Test",
            "Urine Routine",
            "Digital X-Ray Chest",
            "ECG",
            "USG Abdomen",
            "Echocardiogram"
        ],
        originalPrice: 18480,
        discountedPrice: 6299,
        discount: "66% Off",
        headerColor: "bg-[#0961A1]"
    },
    {
        id: 3,
        name: "Vital Health Female",
        testsCount: 18,
        tests: [
            "Complete Haemogram",
            "FBS,PPBS, HbA1c",
            "Lipid Profile",
            "Urea",
            "Creatinine",
            "Uric Acid",
            "Liver Function Test",
            "Thyroid Function Test",
            "Pap Smear",
            "Digital X-Ray Chest",
            "ECG",
            "USG Abdomen",
            "Echocardiogram"
        ],
        originalPrice: 19930,
        discountedPrice: 6999,
        discount: "66% Off",
        headerColor: "bg-[#0961A1]"
    }
    ,
    {
        id: 4,
        name: "Vital Health Female",
        testsCount: 18,
        tests: [
            "Complete Haemogram",
            "FBS,PPBS, HbA1c",
            "Lipid Profile",
            "Urea",
            "Creatinine",
            "Uric Acid",
            "Liver Function Test",
            "Thyroid Function Test",
            "Pap Smear",
            "Digital X-Ray Chest",
            "ECG",
            "USG Abdomen",
            "Echocardiogram"
        ],
        originalPrice: 19930,
        discountedPrice: 6999,
        discount: "66% Off",
        headerColor: "bg-[#0961A1]"
    }
]

const Section3 = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-16 bg-white overflow-hidden font-sans">
            <div className="max-w-[1400px] mx-auto px-4">
                <h2 className="text-[28px] md:text-[40px] font-bold text-[#0961A1] text-center mb-12">
                    Popular Health Packages
                </h2>

                <div className="relative group">


                    {/* Scrollable Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {packages.map((pkg) => (
                            <div
                                key={pkg.id}
                                className="min-w-full md:min-w-[calc(31.333%-16px)] snap-center bg-dark rounded-[22px] overflow-hidden shadow-[0px_2px_12px_0px_#0000001A]  border-2 border[ #D6D6D6] flex flex-col group/card"
                            >
                                {/* Header */}
                                <div className="bg-[#0961A1] p-5 text-center relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                                    <h3 className="text-white text-lg font-bold relative z-10">{pkg.name}</h3>
                                </div>

                                {/* Body */}
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="mb-6">
                                        <p className="text-[#1E1E1E] font-bold text-lg mb-4">{pkg.testsCount} Tests</p>
                                        <ul className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                            {pkg.tests.map((test, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <IconPlus size={16} className="text-[#F98D1B] mt-0.5 shrink-0" />
                                                    <span>{test}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Footer */}
                                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                        <div>
                                            <span className="bg-[#00B67A] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm block w-fit mb-1">
                                                {pkg.discount}
                                            </span>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-gray-400 line-through text-sm">₹{pkg.originalPrice.toLocaleString()}</span>
                                                <span className="text-xl font-bold text-[#1E1E1E]">₹{pkg.discountedPrice.toLocaleString()}</span>
                                            </div>
                                        </div>
                                        <button className="bg-[linear-gradient(84.92deg,#F98D1B_34.11%,#FFC180_105.58%)] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity active:scale-95 shadow-md shadow-orange-100">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mb-8">
                        <button
                            onClick={() => scroll('left')}
                            className="p-3 rounded-full bg-gray-200 hover:bg-[#F98D1B] hover:text-white transition-all shadow-md"
                        >
                            <IconChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-3 rounded-full bg-gray-200 hover:bg-[#F98D1B] hover:text-white transition-all shadow-md"
                        >
                            <IconChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #BABABA;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #797979;
                    border-radius: 10px;
                }
            `}</style>
        </section>
    )
}

export default Section3
