import React from 'react'
import FAQAccordion from '@/components/common/FAQAccordion'

const Section6 = () => {
    const faqData = [
        {
            question: "Why is newborn screening important?",
            answer: "It identifies potential health issues early, allowing for immediate treatment that can prevent severe health problems or developmental delays."
        },
        {
            question: "When should the screening be done?",
            answer: "The ideal time for newborn screening is between 24 and 48 hours after birth for the most accurate results."
        },
        {
            question: "Is the test painful for the baby?",
            answer: "The test involves a quick heel prick which may cause momentary discomfort, but it is safe and crucial for your baby's health."
        },
        {
            question: "How soon will results be available?",
            answer: "Results are typically available within 3-5 days. Your doctor will contact you immediately if any abnormalities are found."
        },
        {
            question: "What happens if a test is positive?",
            answer: "A positive result means further testing is needed to confirm a diagnosis. It does not always mean your baby has the condition."
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-[#F9FBFC] font-sans">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0961A1] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 font-medium">
                        Common questions about our services and procedures.
                    </p>
                </div>
                <FAQAccordion items={faqData} />
            </div>
        </section>
    )
}

export default Section6
