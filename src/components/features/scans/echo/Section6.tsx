'use client';

import React from 'react';
import FAQAccordion from '@/components/common/FAQAccordion';

const Section6 = () => {

    const faqs = [
        {
            question: "What is an echocardiogram?",
            answer: "An echocardiogram (echo) is an ultrasound of the heart that uses sound waves to create moving images of your heart. It shows the heart's structure, chambers, valves, and blood flow, helping diagnose various heart conditions. It's completely safe and non-invasive with no radiation."
        },
        {
            question: "Is an echocardiogram painful?",
            answer: "No, an echocardiogram is painless. A technologist will apply gel to your chest and move a transducer over the area to capture images. You may be asked to change positions or breathe in specific ways. Some pressure may be applied for better images, but it doesn't hurt."
        },
        {
            question: "How long does an echocardiogram take?",
            answer: "A standard transthoracic echocardiogram typically takes 30-60 minutes. The actual imaging takes about 20-30 minutes, with additional time for preparation and setup. More complex echo studies may take longer."
        },
        {
            question: "How should I prepare for my echocardiogram?",
            answer: "For most echocardiograms, no special preparation is needed. Wear comfortable, loose-fitting clothing. You may need to undress from the waist up and wear a gown. Continue taking your regular medications unless instructed otherwise by your doctor."
        },
        {
            question: "What can an echocardiogram detect?",
            answer: "An echo can detect heart valve problems, heart muscle damage, abnormal heart rhythms, heart enlargement, fluid around the heart, blood clots, congenital heart defects, and assess overall heart function including pumping strength and blood flow."
        },
        {
            question: "When will I receive my echo results?",
            answer: "A cardiologist will analyze your echocardiogram images and prepare a detailed report, usually within 24-48 hours. Your referring physician will receive the results and discuss the findings with you, along with any recommended treatment or follow-up."
        },
        {
            question: "Are there different types of echocardiograms?",
            answer: "Yes, there are several types: Transthoracic (standard, through chest wall), Transesophageal (through esophagus for detailed images), Stress echo (combined with exercise or medication), and 3D echo. Your doctor will recommend the most appropriate type for your needs."
        },
        {
            question: "Can I eat before my echocardiogram?",
            answer: "For a standard transthoracic echo, you can eat and drink normally. However, if you're having a transesophageal echo or stress echo, you may need to fast for several hours beforehand. We'll provide specific instructions when you schedule your appointment."
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
