import React from 'react'
import FAQAccordion from '@/components/common/FAQAccordion'

const Section8 = () => {
    const faqData = [
        {
            question: "Do I need a referral for genetic counseling?",
            answer: "While many patients are referred by their doctors (OB/GYN, Oncologist), you can also self-refer if you have concerns about your family history or personal risk factors."
        },
        {
            question: "Is genetic testing mandatory after counseling?",
            answer: "No. Genetic counseling is about providing information and support. Whether or not to proceed with testing is entirely your personal decision. Our counselors will support whatever choice you make."
        },
        {
            question: "Will my insurance cover genetic counseling?",
            answer: "Many insurance plans do cover genetic counseling and testing, especially if there is a medical indication (like family history). We recommend checking with your provider, and our team can assist with pre-authorization."
        },
        {
            question: "How long does a session take?",
            answer: "An initial session typically lasts about 30 to 60 minutes. This allows ample time to review your history, explain concepts, and answer all your questions thoroughly."
        },
        {
            question: "Is my genetic information kept private?",
            answer: "Yes. We adhere to strict privacy laws (like HIPAA) and ethical guidelines. Your genetic information is confidential and will not be shared without your explicit consent."
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0961A1] mb-4">
                        Frequently Asked <span className="text-[#FF9D00]">Questions</span>
                    </h2>
                    <p className="text-gray-600 font-medium">
                        Common queries about our counseling services.
                    </p>
                </div>
                <FAQAccordion items={faqData} />
            </div>
        </section>
    )
}

export default Section8
