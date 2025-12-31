'use client';

import React from 'react';
import FAQAccordion from '@/components/common/FAQAccordion';

const Section6 = () => {

    const faqs = [
        {
            question: "What is a mammogram?",
            answer: "A mammogram is a specialized X-ray examination of the breast used to detect breast cancer early, often before symptoms appear. It's one of the most effective tools for early breast cancer detection and can significantly improve treatment outcomes."
        },
        {
            question: "Is a mammogram painful?",
            answer: "While mammograms involve breast compression which can cause brief discomfort, the procedure is generally not painful. The compression lasts only a few seconds and is necessary for clear images. Scheduling your mammogram when breasts are less tender (avoid the week before your period) can help minimize discomfort."
        },
        {
            question: "How long does a mammogram take?",
            answer: "The entire mammogram appointment typically takes about 20-30 minutes. The actual imaging process takes only a few minutes, with about 2-4 images taken of each breast."
        },
        {
            question: "How should I prepare for my mammogram?",
            answer: "Don't use deodorant, powder, lotion, or perfume under your arms or on your breasts on the day of your exam, as these can interfere with the images. Wear a two-piece outfit for easier undressing. Bring previous mammogram images if done elsewhere."
        },
        {
            question: "When should I get a mammogram?",
            answer: "Women should begin annual screening mammograms at age 40, or earlier if there's a family history of breast cancer. Your doctor may recommend earlier or more frequent screening based on your individual risk factors."
        },
        {
            question: "What does breast density mean?",
            answer: "Breast density refers to the proportion of fibrous and glandular tissue versus fatty tissue in your breasts. Dense breast tissue can make it harder to detect cancer on a mammogram and may slightly increase breast cancer risk. Your mammogram report will include breast density information."
        },
        {
            question: "What if I'm called back after my mammogram?",
            answer: "A callback doesn't necessarily mean cancer. Additional images or an ultrasound may be needed for various reasons, including overlapping tissue or unclear areas. About 10% of women are called back for additional imaging, and most results are normal."
        },
        {
            question: "Can I get a mammogram if I have breast implants?",
            answer: "Yes, women with breast implants should still get regular mammograms. Inform the technologist about your implants beforehand, as special techniques are used to get the best possible images while avoiding damage to the implants."
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
