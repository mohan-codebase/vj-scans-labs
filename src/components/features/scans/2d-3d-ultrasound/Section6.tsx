'use client';

import React from 'react';
import FAQAccordion from '@/components/common/FAQAccordion';

const Section6 = () => {

    const faqs = [
        {
            question: "What is a 2D/3D ultrasound?",
            answer: "Ultrasound imaging uses high-frequency sound waves to create images of internal body structures. 2D ultrasound provides flat, two-dimensional images, while 3D ultrasound creates three-dimensional static images, and 4D adds real-time movement. These are safe, non-invasive procedures with no radiation exposure."
        },
        {
            question: "Is ultrasound safe during pregnancy?",
            answer: "Yes, ultrasound is considered very safe during pregnancy. It doesn't use ionizing radiation and has been used for decades without any known harmful effects to mother or baby. Prenatal ultrasounds are standard practice for monitoring fetal development."
        },
        {
            question: "How long does an ultrasound take?",
            answer: "Most ultrasound examinations take 20-45 minutes, depending on the area being examined and the complexity of the case. Obstetric ultrasounds may take longer if detailed measurements or multiple images are needed."
        },
        {
            question: "Do I need to prepare for my ultrasound?",
            answer: "Preparation varies by exam type. For abdominal ultrasounds, you may need to fast for 6-8 hours. For pelvic ultrasounds, a full bladder is often required. For pregnancy ultrasounds, drink 4-6 glasses of water 1 hour before. We'll provide specific instructions when you book."
        },
        {
            question: "What can ultrasound detect?",
            answer: "Ultrasound can examine organs like the liver, kidneys, gallbladder, pancreas, spleen, and blood vessels. It's widely used in pregnancy to monitor fetal development. It can detect cysts, tumors, blockages, and other abnormalities in soft tissues."
        },
        {
            question: "Will the ultrasound hurt?",
            answer: "No, ultrasound is painless. You'll feel the technologist moving a handheld transducer over your skin with gel applied for better contact. Some pressure may be applied for better images, which might cause slight discomfort but not pain."
        },
        {
            question: "Can I get copies of my ultrasound images?",
            answer: "Yes, you'll receive a detailed report with relevant images. For pregnancy ultrasounds, we can provide keepsake photos. Digital copies can be shared with your referring physician. Please ask our staff about image options."
        },
        {
            question: "When will I get my ultrasound results?",
            answer: "A radiologist will review your ultrasound images and prepare a report, typically within 24-48 hours. Your referring doctor will receive the report and discuss the findings with you, along with any recommended follow-up."
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
