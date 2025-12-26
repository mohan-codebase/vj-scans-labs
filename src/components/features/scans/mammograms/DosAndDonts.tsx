import React from 'react';
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const DosAndDonts = () => {
    const dos = [
        "Continue your regular meals and medications. You don’t need to change your routine before the scan.",
        "Notify your doctor if you’re taking hormones or steroids. Sharing this beforehand ensures accurate evaluation.",
        "Carry any previous breast-related medical reports. Prior test results help doctors compare and interpret images better.",
        "Request a female technician if you prefer. Your comfort is important, and most centers are happy to accommodate.",
        "Share any family history of breast issues or risk factors. This information can guide the doctor during assessment."
    ];

    const donts = [
        "Avoid perfumes, deodorants, antiperspirants, or sprays. These products can interfere with image clarity.",
        "Don’t schedule the scan immediately before or right after your period. Around 10 days post-period is typically the most comfortable and ideal time.",
        "Stay away from fizzy drinks or beverages high in caffeine for at least a week prior. They may increase breast tenderness.",
        "Skip wearing a one-piece dress. A two-piece outfit (shirt/top with bottoms) is much easier for the technician during the scan.",
        "Don’t forget to collect your results and images afterward. They are important for future reference and follow-ups."
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-[#0961A1]">
                Do’s And Don’ts Before Your <span className="text-[#F98D1B]">Mammography</span>
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
                Preparing for a mammogram and unsure what steps to follow? Don’t worry — these simple guidelines can help you have a smooth, comfortable experience.
            </p>

            <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                {/* Do's Column */}
                <div className="flex-1 bg-[#EAF6FF] rounded-[30px] p-8 md:p-10 shadow-sm border border-blue-50">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <h3 className="text-3xl font-bold text-[#0961A1]">Do&apos;s</h3>
                        <FaCheckCircle className="text-[#4CC242] text-3xl" />
                    </div>
                    <ul className="space-y-6">
                        {dos.map((item, index) => (
                            <li key={index} className="flex gap-4 items-start">
                                <div className="mt-1 shrink-0">
                                    <FaCheckCircle className="text-[#4CC242] text-xl" />
                                </div>
                                <p className="text-[#374151] font-medium text-lg leading-relaxed">
                                    {item}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Don'ts Column */}
                <div className="flex-1 bg-[#EAF6FF] rounded-[30px] p-8 md:p-10 shadow-sm border border-blue-50">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <h3 className="text-3xl font-bold text-[#0961A1]">Dont&apos;s</h3>
                        <FaTimesCircle className="text-[#FF4D4D] text-3xl" />
                    </div>
                    <ul className="space-y-6">
                        {donts.map((item, index) => (
                            <li key={index} className="flex gap-4 items-start">
                                <div className="mt-1 shrink-0">
                                    <FaTimesCircle className="text-[#FF4D4D] text-xl" />
                                </div>
                                <p className="text-[#374151] font-medium text-lg leading-relaxed">
                                    {item}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default DosAndDonts;
