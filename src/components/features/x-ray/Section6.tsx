'use client';

import React from 'react';
import FAQAccordion from '@/components/common/FAQAccordion';

const Section6 = () => {

    const faqs = [
        {
            question: "What is an X-ray?",
            answer: "An X-ray is a quick, painless imaging test that uses electromagnetic radiation to create pictures of the structures inside your body, particularly bones. X-rays are commonly used to detect fractures, infections, arthritis, dental problems, and other conditions."
        },
        {
            question: "Is X-ray radiation safe?",
            answer: "Yes, X-rays are generally very safe. The amount of radiation exposure from a single X-ray is minimal and considered acceptable for diagnostic purposes. The benefits of accurate diagnosis far outweigh the small radiation risk. However, inform us if you're pregnant or might be pregnant."
        },
        {
            question: "How long does an X-ray take?",
            answer: "X-rays are one of the fastest imaging procedures, typically taking only 5-10 minutes including preparation. The actual X-ray exposure lasts just a few seconds. You may need multiple images from different angles, which adds minimal time."
        },
        {
            question: "How should I prepare for my X-ray?",
            answer: "Most X-rays require no special preparation. Wear comfortable, loose-fitting clothing. You may need to remove jewelry, eyeglasses, or any metal objects that might interfere with the images. For some X-rays (like abdominal), you may need to fast or take a contrast agent."
        },
        {
            question: "Will the X-ray hurt?",
            answer: "No, X-rays are completely painless. You'll be asked to hold still in specific positions for a few seconds while the images are taken. If you're having an X-ray of an injured area, positioning might cause brief discomfort, but the procedure itself is painless."
        },
        {
            question: "When will I get my X-ray results?",
            answer: "X-ray results are typically available quickly, often within a few hours. A radiologist will review your images and prepare a report. Your referring doctor will receive the results and discuss the findings with you, along with any recommended treatment."
        },
        {
            question: "Can I get an X-ray if I'm pregnant?",
            answer: "X-rays are generally avoided during pregnancy, especially of the abdomen, unless absolutely necessary for your health. Always inform your doctor and our staff if you're pregnant or think you might be pregnant. Alternative imaging methods may be recommended."
        },
        {
            question: "What types of X-rays do you offer?",
            answer: "We offer various X-ray examinations including chest X-rays, bone X-rays (limbs, spine), dental X-rays, abdominal X-rays, and specialized studies. Our modern digital X-ray equipment provides high-quality images with reduced radiation exposure."
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
