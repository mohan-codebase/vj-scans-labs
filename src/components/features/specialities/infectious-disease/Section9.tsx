import React from 'react'
import FAQAccordion from '@/components/common/FAQAccordion'

const Section6 = () => {
    const faqData = [
        {
            question: "How do I book an appointment?",
            answer: "You can book an appointment by calling our reception, visiting our center, or using the 'Book Appointment' button on our website."
        },
        {
            question: "What should I bring for my scan?",
            answer: "Please bring your doctor's prescription, any previous medical reports, and a valid ID proof."
        },
        {
            question: "When will I get my reports?",
            answer: "Most reports are available on the same day. However, some specialized tests may take longer. Our staff will inform you about the expected time."
        },
        {
            question: "Is fasting required for the scan?",
            answer: "Fasting requirements vary depending on the scan. Please check with our staff or your doctor for specific instructions related to your test."
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
