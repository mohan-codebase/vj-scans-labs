'use client';

import React from 'react';
import FAQAccordion from '@/components/common/FAQAccordion';

const Section6 = () => {

    const faqs = [
        {
            question: "What is a TMT (Treadmill Test)?",
            answer: "TMT (Treadmill Test) or Exercise Stress Test evaluates how your heart performs during physical activity. You'll walk on a treadmill while your heart rate, blood pressure, and ECG are monitored. It helps diagnose coronary artery disease and assess heart function under stress."
        },
        {
            question: "How should I prepare for a TMT?",
            answer: "Wear comfortable clothing and athletic shoes suitable for walking/running. Avoid eating a heavy meal 2-3 hours before the test. Continue your regular medications unless your doctor advises otherwise. Bring a list of your current medications and any previous heart test results."
        },
        {
            question: "How long does a TMT take?",
            answer: "The entire TMT appointment takes about 30-45 minutes. This includes preparation time (attaching electrodes), the actual exercise portion (8-12 minutes of walking on the treadmill), and a recovery period where you'll be monitored for a few minutes after exercising."
        },
        {
            question: "Is the TMT safe?",
            answer: "Yes, TMT is generally very safe when performed under medical supervision. Our trained staff monitors you continuously throughout the test. Rare complications can include abnormal heart rhythms or chest pain, but emergency equipment and personnel are always available."
        },
        {
            question: "Who should not take a TMT?",
            answer: "TMT may not be suitable if you have recent heart attack, unstable angina, severe heart valve disease, uncontrolled high blood pressure, or certain arrhythmias. Your doctor will evaluate your condition and may recommend alternative stress tests if needed."
        },
        {
            question: "What happens during the TMT?",
            answer: "Electrodes will be placed on your chest to monitor your heart. You'll start walking slowly on the treadmill, and the speed and incline will gradually increase. The test continues until you reach your target heart rate, experience symptoms, or show ECG changes. You can stop anytime if needed."
        },
        {
            question: "When will I get my TMT results?",
            answer: "A cardiologist will analyze your TMT data including ECG changes, heart rate response, blood pressure, and symptoms. Results are typically available within 24-48 hours. Your referring doctor will discuss the findings and recommend any necessary follow-up care or treatment."
        },
        {
            question: "Should I stop my heart medications before TMT?",
            answer: "Generally, continue your regular medications unless specifically instructed by your doctor. Some medications like beta-blockers may affect test results, so your doctor will advise whether to adjust them. Never stop medications without consulting your physician first."
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
