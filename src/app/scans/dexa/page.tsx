"use client";
import React from 'react';
import RelatedScans from '@/components/common/RelatedScans';
import AppointmentSection from '@/components/common/AppointmentSection';

const DexaPage = () => {
    return (
        <main>
            <section className="py-20 px-4 text-center bg-linear-to-b from-blue-50 to-white">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#0961A1] mb-6">
                    DEXA Scan <span className="text-[#F98D1B]">(Bone Densitometry)</span>
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
                    Advanced bone density scanning to diagnose osteoporosis and assess fracture risk with precision and care.
                </p>
            </section>

            <section className="py-12 bg-white px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-[#0961A1] mb-4">Why Choose DEXA?</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Dual-Energy X-ray Absorptiometry (DEXA) is the gold standard for measuring bone mineral density.
                        It is a quick, painless, and low-dose X-ray procedure that helps in early detection of bone loss.
                    </p>
                </div>
            </section>

            <AppointmentSection />
            <RelatedScans currentScan="dexa" />
        </main>
    );
};

export default DexaPage;
