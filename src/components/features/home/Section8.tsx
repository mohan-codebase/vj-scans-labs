import React from "react";
import Image from "next/image";
import { Cpu, Users, HeartHandshake, MapPin, Microscope, ShieldCheck } from "lucide-react";

const Section8 = () => {
    const features = [
        {
            id: 1,
            title: "Advanced Diagnostic Technology",
            description: "Equipped with state-of-the-art imaging and laboratory systems for precise results.",
            icon: <Cpu className="w-8 h-8 text-[#0961A1]" />,
        },
        {
            id: 2,
            title: "Fully Trained Expert Team",
            description: "Our dedicated specialists bring years of experience and compassionate care.",
            icon: <Users className="w-8 h-8 text-[#0961A1]" />,
        },
        {
            id: 3,
            title: "Unmatched Customer Service",
            description: "Seamless, patient-first approach ensuring a smooth diagnostic journey.",
            icon: <HeartHandshake className="w-8 h-8 text-[#0961A1]" />,
        },
        {
            id: 4,
            title: "Available Across Multiple Locations",
            description: "Conveniently located centres to serve you better and closer to home.",
            icon: <MapPin className="w-8 h-8 text-[#0961A1]" />,
        },
        {
            id: 5,
            title: "In-depth Health Insights",
            description: "Comprehensive reports and expert analysis to guide your medical decisions.",
            icon: <Microscope className="w-8 h-8 text-[#0961A1]" />,
        },
        {
            id: 6,
            title: "Commitment to Safety",
            description: "Rigorous quality checks and safety protocols for every patient interaction.",
            icon: <ShieldCheck className="w-8 h-8 text-[#0961A1]" />,
        },
    ];

    return (
        <section className="font-sans relative bg-[linear-gradient(135deg,#E0F2FE_0%,#F1F9FF_50%,#E0F2FE_100%)] md:py-16 py-12 my-8 md:px-8 px-4 lg:px-16 overflow-hidden md:my-14 rounded-[30px] max-w-[1400px] mx-auto">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 blur-[100px] rounded-full -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 blur-[100px] rounded-full -ml-48 -mb-48" />

            <div className="relative max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-[40px] font-extrabold text-[#0961A1] mb-6">
                        Why VJ Scans & Labs?
                    </h2>
                    <p className="text-[#555555] max-w-3xl font-medium mx-auto text-sm md:text-base leading-relaxed opacity-90">
                        Your health deserves precision and care. At VJ Scans & Labs, our
                        dedicated team employs advanced diagnostic tools to ensure accurate
                        results, every time.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left side visual */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-[550px] aspect-4/5">
                            <Image
                                src="/images/section-8/center.avif"
                                alt="VJ Scans Laboratory Excellence"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right side cards */}
                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="backdrop-blur-md bg-white/40 p-6 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07) transition-all duration-300 group border border-white/40"
                            >
                                <div className="mb-4 bg-white/30 backdrop-blur-sm w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 border border-white/20">
                                    <div className="transition-colors duration-300">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-[#092641] mb-2 leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-[#4A5568] leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section8;