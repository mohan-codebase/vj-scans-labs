'use client';

import React from 'react';
import FAQAccordion from '@/components/common/FAQAccordion';

const Section6 = () => {

    const faqs = [
        {
            question: "What is an MRI scan?",
            answer: "MRI (Magnetic Resonance Imaging) is a non-invasive imaging technique that uses powerful magnets and radio waves to create detailed images of organs, tissues, and bones inside your body. Unlike CT scans, MRI does not use radiation."
        },
        {
            question: "Is MRI safe? Does it use radiation?",
            answer: "Yes, MRI is very safe and does not use any ionizing radiation. It uses magnetic fields and radio waves. However, you should inform us if you have any metal implants, pacemakers, or are pregnant."
        },
        {
            question: "How long does an MRI scan take?",
            answer: "Most MRI scans take between 30 to 60 minutes, depending on the area being examined. Some specialized scans may take longer. You'll need to lie still during the scan for the best image quality."
        },
        {
            question: "Will I need contrast dye for my MRI?",
            answer: "Some MRI scans require a contrast agent (usually gadolinium-based) to be injected into your vein to enhance the images. Your doctor will inform you if contrast is needed for your specific scan."
        },
        {
            question: "What should I do to prepare for my MRI?",
            answer: "Remove all metal objects including jewelry, watches, and hairpins. Wear comfortable, loose-fitting clothing without metal fasteners. Inform us about any implants, claustrophobia, or pregnancy. Specific preparation depends on the scan type."
        },
        {
            question: "What if I'm claustrophobic?",
            answer: "If you have claustrophobia, please inform us when booking. We can provide relaxation techniques, and in some cases, mild sedation may be arranged. Our modern MRI machines are more open and less confining than older models."
        },
        {
            question: "Can I have an MRI if I have metal in my body?",
            answer: "It depends on the type of metal. Most surgical implants are MRI-safe, but pacemakers, certain metal implants, or metallic foreign bodies may be contraindications. Please provide a complete list of any implants or previous surgeries."
        },
        {
            question: "How much does an MRI scan cost?",
            answer: "The cost varies depending on the type of MRI scan and whether contrast is used. Please contact our reception for specific pricing information. We accept various insurance plans and offer competitive rates."
        }
    ];

    return (
        <section className="bg-[#F0F8FF] py-16 px-4 md:px-8 md:my-18 lg:px-16 font-sans">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-[40px] font-bold text-[#0961A1] text-center mb-12">
                    Frequently Asked Questions
                </h2>

                <FAQAccordion items={faqs} />
            </div>
        </section>
    );
}

export default Section6;
