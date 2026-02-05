import React from 'react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import RelatedScans from '@/components/common/RelatedScans';
import AppointmentSection from '@/components/common/AppointmentSection';
import { Metadata } from 'next'
import { seoDatas, SITE_NAME } from '@/lib/seo'

const seo = seoDatas.scansLaboratory;

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

const LaboratoryPage = () => {
    return (
        <main className="overflow-hidden">
            <ScrollReveal direction="down">
                <section className="py-20 px-4 text-center bg-linear-to-b from-blue-50 to-white">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#0961A1] mb-6">
                        Laboratory <span className="text-[#F98D1B]">Services</span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
                        Our state-of-the-art laboratory in Chennai provides comprehensive clinical pathology and diagnostic testing services with accurate, timely reporting to support your healthcare journey.
                    </p>
                </section>
            </ScrollReveal>

            <ScrollReveal direction="up">
                <section className="py-12 bg-white px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-[#0961A1] mb-4">Advanced Laboratory Services</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            At VJ Scans & Labs in Chennai, our fully automated laboratory uses cutting-edge analyzers and strict quality control protocols to ensure accurate, reliable results. We provide comprehensive testing across Haematology (complete blood counts, coagulation studies), Biochemistry (liver function, kidney function, lipid profiles, diabetes screening), Microbiology (culture and sensitivity testing), and Clinical Pathology (urine analysis, stool examination, body fluid analysis).
                        </p>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal><AppointmentSection /></ScrollReveal>
            <ScrollReveal direction="up"><RelatedScans currentScan="laboratory" /></ScrollReveal>
        </main>
    );
};

export default LaboratoryPage;
