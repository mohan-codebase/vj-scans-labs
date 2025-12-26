import React from 'react'
import Image from 'next/image'

const causes = [
    {
        title: "Genetic Factors",
        description: "Chromosomal abnormalities in one or both parents can lead to non-viable pregnancies."
    },
    {
        title: "Anatomical Issues",
        description: "Uterine abnormalities such as septums or fibroids can interfere with implantation."
    },
    {
        title: "Hormonal Imbalances",
        description: "Issues like PCOS, thyroid disorders, or luteal phase defects can affect pregnancy maintenance."
    },
    {
        title: "Immunological Factors",
        description: "Autoimmune conditions (like antiphospholipid syndrome) can lead to clot formation affecting the placenta."
    }
]

const Section3 = () => {
    return (
        <section className="py-12 bg-[#F1F9FF] font-sans">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0961A1]">
                        Common <span className="text-[#FF9D00]">Causes</span>
                    </h2>
                    <p className="mt-4 text-[#393939] font-medium max-w-3xl mx-auto font-secondary">
                        Identifying the root cause is the first step towards a successful pregnancy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 font-sans">
                    {causes.map((item, idx) => (
                        <div key={idx} className="bg-[url('/images/specialities/male-infertility/section3/bg-overlay.png')] bg-cover bg-center md:p-16 p-10 rounded-2xl shadow-sm transition-shadow border border-gray-100 flex flex-col items-center text-start gap-3">
                            <h3 className="text-[20px] font-bold text-[#FF9D00]">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed text-[15px] font-secondary font-medium flex items-start gap-2">
                                <span className="text-[#FF9D00] shrink-0 mt-[2px]">
                                    <Image src="/images/specialities/male-infertility/section3/hand-icon.svg" alt="Hand Icon" width={20} height={20} />
                                </span>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Section3
