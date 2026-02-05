import React from 'react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import RelatedScans from '@/components/common/RelatedScans';
import AppointmentSection from '@/components/common/AppointmentSection';
import { Metadata } from 'next'
import { seoDatas, SITE_NAME } from '@/lib/seo'

const seo = seoDatas.scansDexa;

export const metadata: Metadata = {
    title: seo.title,
    description: seo.description,
    openGraph: {
        title: seo.title,
        description: seo.description,
        url: seo.url,
        siteName: SITE_NAME,
        type: "website"
    }
}

const DexaPage = () => {
    return (
        <main className="overflow-hidden">
            <ScrollReveal direction="down">
                <section className="py-20 px-4 text-center bg-linear-to-b from-blue-50 to-white">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#0961A1] mb-6">
                        DEXA Scan <span className="text-[#F98D1B]">(Bone Densitometry)</span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
                        Advanced bone density scanning at VJ Scans & Labs in Chennai to diagnose osteoporosis, assess fracture risk, and monitor bone health with precision and care.
                    </p>
                </section>
            </ScrollReveal>

            <ScrollReveal direction="up">
                <section className="py-12 bg-white px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-[#0961A1] mb-4">Why Choose DEXA at VJ Scans & Labs?</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Dual-Energy X-ray Absorptiometry (DEXA) is the gold standard for measuring bone mineral density and diagnosing osteoporosis. At our Chennai facility, DEXA scanning is a quick, painless, and low-dose X-ray procedure that helps detect bone loss early, before fractures occur. DEXA is particularly important for postmenopausal women, older adults, and individuals with risk factors for osteoporosis. The scan measures bone density at the hip and spine, providing a T-score that helps your doctor assess fracture risk and determine if treatment is needed.
                        </p>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal><AppointmentSection /></ScrollReveal>
            <ScrollReveal direction="up"><RelatedScans currentScan="dexa" /></ScrollReveal>
        </main>
    );
};

export default DexaPage;
