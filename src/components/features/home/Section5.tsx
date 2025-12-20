'use client';

import React from 'react';
import Image from 'next/image';

const categories = [
    { name: 'Men', icon: '/images/section-5/Men.svg' },
    { name: 'Women', icon: '/images/section-5/Women.svg' },
    { name: 'Pregnancy', icon: '/images/section-5/Pregnancy.svg' },
    { name: 'Bone', icon: '/images/section-5/Bone.svg' },
    { name: 'Heart', icon: '/images/section-5/Heart.svg' },
    { name: 'Infectious Disease', icon: '/images/section-5/Infectious Disease.svg' },
];

const Section5 = () => {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-5 mt-20 mb-20">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-[26px] font-[800] text-[#0961A1] md:text-[48px]">Book a Test by Category</h2>
                <button className="bg-[#005596] text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-[#00447a] transition-colors duration-300">
                    View All
                </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className=" rounded-2xl p-2 md;p-[30px] md:px-5 flex flex-col items-center justify-center gap-[15px] cursor-pointer transition-transform duration-300"
                    >
                        <div className="w-[150px] md:w-[150px] flex flex-wrap items-center justify-center">
                            <Image
                                src={category.icon}
                                alt={category.name}
                                width={100}
                                height={100}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="text-base font-semibold text-[#555] text-center">{category.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section5;