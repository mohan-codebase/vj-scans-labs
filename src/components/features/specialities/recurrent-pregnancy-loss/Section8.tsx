import React from 'react'
import FAQAccordion from '@/components/common/FAQAccordion'

const Section8 = () => {
    const faqData = [
        {
            question: "What is considered Recurrent Pregnancy Loss (RPL)?",
            answer: "RPL is generally defined as the loss of two or more consecutive clinical pregnancies before 20 weeks of gestation. It affects approximately 1-2% of women."
        },
        {
            question: "Is RPL always caused by genetic factors?",
            answer: "No. While genetic causes (like chromosomal translocations) account for a significant portion, RPL can also be caused by anatomical issues, hormonal imbalances, autoimmune disorders, or lifestyle factors. In about 50% of cases, the cause remains unexplained, yet successful pregnancy is providing supportive care."
        },
        {
            question: "What tests are done to evaluate RPL?",
            answer: "Evaluation typically includes parental karyotyping, thrombophilia screening, thyroid and prolactin testing, pelvic ultrasound/hysteroscopy for uterine anomalies, and sometimes sperm fragmentation analysis for the male partner."
        },
        {
            question: "Can I still have a healthy baby after multiple miscarriages?",
            answer: "Yes. Even after 3 consecutive losses, the chance of a successful future pregnancy is high (60-80%) with appropriate evaluation and supportive care."
        },
        {
            question: "How does VJ Scans & Labs help with RPL?",
            answer: "We offer comprehensive genetic and diagnostic testing to identify the root cause. Our experts provide genetic counseling to explain your results and guide you toward the most effective treatment pathways."
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
                        Common queries about Understanding and managing RPL.
                    </p>
                </div>
                <FAQAccordion items={faqData} />
            </div>
        </section>
    )
}

export default Section8
