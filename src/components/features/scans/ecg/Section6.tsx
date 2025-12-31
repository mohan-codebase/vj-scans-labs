'use client';

import React from 'react';
import FAQAccordion from '@/components/common/FAQAccordion';

const Section6 = () => {

    const faqs = [
        {
            question: "What is an ECG test?",
            answer: "An ECG (Electrocardiogram) is a simple, non-invasive test that records the electrical activity of your heart. It helps diagnose heart rhythm problems, heart attacks, heart disease, and other cardiac conditions. The test is painless and typically takes just a few minutes."
        },
        {
            question: "Is an ECG test painful or uncomfortable?",
            answer: "No, an ECG is completely painless. Small electrodes are placed on your chest, arms, and legs to detect electrical signals from your heart. You simply lie still during the test. The electrodes may feel slightly cool, but there's no discomfort."
        },
        {
            question: "How long does an ECG take?",
            answer: "A standard resting ECG takes only 5-10 minutes, including preparation time. The actual recording takes just a few seconds. If you're having a stress ECG (exercise ECG), the test may take 15-30 minutes."
        },
        {
            question: "How should I prepare for my ECG?",
            answer: "Wear loose, comfortable clothing that allows easy access to your chest. Avoid oily or greasy skin lotions on the day of your test as they can interfere with electrode contact. Remove jewelry from your neck and arms. No fasting is required for a standard ECG."
        },
        {
            question: "When will I get my ECG results?",
            answer: "ECG results are typically available immediately or within a few hours. A cardiologist will review your ECG and prepare a report. Your referring doctor will discuss the results with you and recommend any necessary follow-up care."
        },
        {
            question: "What conditions can an ECG detect?",
            answer: "An ECG can detect irregular heart rhythms (arrhythmias), previous or ongoing heart attacks, coronary artery disease, heart valve problems, heart enlargement, and electrolyte imbalances. It's also used to monitor the effects of heart medications or devices like pacemakers."
        },
        {
            question: "Do I need to stop my medications before an ECG?",
            answer: "Generally, you should continue taking your regular medications unless your doctor specifically advises otherwise. Some heart medications are important to detect on the ECG. Always bring a list of your current medications to your appointment."
        },
        {
            question: "Can I exercise before my ECG?",
            answer: "For a resting ECG, avoid vigorous exercise immediately before the test as it can affect your heart rate and rhythm. Arrive a few minutes early to relax. For a stress ECG, your doctor will provide specific preparation instructions."
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
