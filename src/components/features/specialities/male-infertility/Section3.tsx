import React from 'react'

import Image from 'next/image'

const causes = [
    {
        title: "Oxidative Stress",
        description: "An imbalance between free radicals and antioxidants in the body can damage sperm DNA."
    },
    {
        title: "Environmental Exposures",
        description: "Exposure to toxins, chemicals, heat, or radiation can negatiely affect sperm health."
    },
    {
        title: "Lifestyle - Related Factors",
        description: "Smoking, alcohol consumption, obesity, and poor diet contribute to DNA fragmentation."
    },
    {
        title: "Chromosomal Abnormalities",
        description: "Inherited genetic conditions can disrupt sperm production and integrity."
    },
    {
        title: "Inflammation and Infections",
        description: "Infections in the reproductive tract can impair sperm quality and DNA integrity."
    },
    {
        title: "Varicocele",
        description: "Enlarged veins within the scrotum can raise testicular temperature, damaging sperm DNA."
    }
]

const Section3 = () => {
    return (
        <section className="py-12 bg-[#F1F9FF] font-sans"> {/* Light blue background like design */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0961A1]">
                        Causes of Sperm <span className="text-[#FF9D00]">DNA <br />  Fragmentation</span>
                    </h2>
                    <p className="mt-4 text-[#393939] font-medium max-w-3xl mx-auto font-secondary">
                        Sperm DNA fragmentation is a multifactorial condition resulting from intrinsic and extrinsic influences that compromise sperm genomic integrity. The major contributing factors include:                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
                    {causes.map((cause, idx) => (
                        <div key={idx} className="bg-[url('/images/specialities/male-infertility/section3/bg-overlay.png')] bg-cover bg-center md:p-16 p-10 rounded-2xl shadow-sm transition-shadow border border-gray-100 flex flex-col items-center text-start gap-3">
                            <h3 className="text-[20px] font-bold text-[#FF9D00]">{cause.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed text-[15px] font-secondary font-medium flex items-start gap-2">
                                <span className="text-[#FF9D00] shrink-0 mt-[2px]">
                                    <Image src="/images/specialities/male-infertility/section3/hand-icon.svg" alt="Hand Icon" width={20} height={20} />
                                </span>
                                {cause.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Section3
