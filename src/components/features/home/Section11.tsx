'use client';

import React from 'react';
import FAQAccordion from '@/components/common/FAQAccordion';

const Section11 = () => {

    const faqs = [
        {
            question: "How reliable is it to collect blood samples for diagnostic tests?",
            answer: "Our home diagnostic services are completely reliable since we follow all strict protocols and regulations. You can be confident that our lab professionals will preserve the integrity of your sample so that the test results will be accurate. Furthermore, all our lab professionals are skilled in using safe and error-free methods to draw blood samples. With VJ, you are in safe hands."
        },
        {
            question: "How long will it take to receive my test results?",
            answer: "Most test results are available within 24-48 hours after sample collection. You will receive a notification via email or SMS once your report is ready to be downloaded from our secure portal."
        },
        {
            question: "Will my medical information be kept confidential?",
            answer: "Yes, we adhere to strict data privacy policies and HIPAA guidelines to ensure your medical information remains confidential and secure at all times."
        },
        {
            question: "Do I need to schedule an appointment, or can I get tested on the go?",
            answer: "We recommend scheduling an appointment to ensure minimal waiting time and to guarantee that a phlebotomist is available to attend to you promptly."
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

export default Section11;