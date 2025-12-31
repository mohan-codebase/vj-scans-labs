'use client';

import React from 'react';
import FAQAccordion from '@/components/common/FAQAccordion';

const Section6 = () => {

    const faqs = [
        {
            question: "What is a CT scan?",
            answer: "CT (Computed Tomography) scan is an advanced imaging technique that uses X-rays and computer processing to create detailed cross-sectional images of your body. It provides more detailed information than regular X-rays, especially for bones, blood vessels, and soft tissues."
        },
        {
            question: "Is CT scan safe? How much radiation exposure is there?",
            answer: "CT scans are generally safe when used appropriately. While they do use ionizing radiation, the benefits typically outweigh the risks. Modern CT scanners use dose reduction technology. Inform your doctor if you're pregnant or might be pregnant."
        },
        {
            question: "How long does a CT scan take?",
            answer: "Most CT scans are quick, typically taking only 10-30 minutes including preparation time. The actual scanning process usually takes just a few minutes. You'll need to lie still during the scan for clear images."
        },
        {
            question: "Will I need contrast dye for my CT scan?",
            answer: "Some CT scans require contrast material (oral or IV) to highlight specific areas. Your doctor will inform you if contrast is needed. Please inform us about any allergies, especially to iodine or shellfish, and kidney problems."
        },
        {
            question: "How should I prepare for my CT scan?",
            answer: "Preparation depends on the scan type. You may need to fast for 4-6 hours before the scan, especially if contrast is being used. Wear comfortable, loose-fitting clothing and remove metal objects. Follow specific instructions provided by our staff."
        },
        {
            question: "What if I'm claustrophobic?",
            answer: "CT scanners are much more open than MRI machines, with a shorter tunnel that only surrounds you briefly. Most patients with claustrophobia tolerate CT scans well. If you're concerned, please inform us when booking."
        },
        {
            question: "When will I get my CT scan results?",
            answer: "A radiologist will analyze your CT images and prepare a detailed report, usually within 24-48 hours. Your referring doctor will discuss the results with you and recommend any necessary follow-up care."
        },
        {
            question: "Does insurance cover CT scans?",
            answer: "Most insurance plans cover medically necessary CT scans when prescribed by a doctor. Coverage varies by plan. Please check with your insurance provider and bring your insurance information to your appointment."
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
