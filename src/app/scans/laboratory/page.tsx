"use client";
import React from 'react';
import RelatedScans from '@/components/common/RelatedScans';
import AppointmentSection from '@/components/common/AppointmentSection';

const LaboratoryPage = () => {
    return (
        <main>
            <section className="py-20 px-4 text-center bg-linear-to-b from-blue-50 to-white">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#0961A1] mb-6">
                    Laboratory <span className="text-[#F98D1B]">Services</span>
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
                    Comprehensive clinical pathology and diagnostic testing services with accurate and timely reporting.
                </p>
            </section>

            <section className="py-12 bg-white px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-[#0961A1] mb-4">Our Lab Features</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Our state-of-the-art laboratory is equipped with fully automated analyzers to ensure zero-error reporting.
                        We cover a wide range of tests including Haematology, Biochemistry, Microbiology, and Clinical Pathology.
                    </p>
                </div>
            </section>

            <AppointmentSection />
            <RelatedScans currentScan="laboratory" />
        </main>
    );
};

export default LaboratoryPage;
