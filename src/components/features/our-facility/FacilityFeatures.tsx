"use client";
import React from "react";
import { Stethoscope, Armchair, Wifi, Coffee, Users, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: <ShieldCheck size={40} />,
        title: "Advanced Technology",
        description: "Equipped with 1.5T MRI, 128-Slice CT, and digital X-ray systems for precise imaging."
    },
    {
        icon: <Armchair size={40} />,
        title: "Premium Waiting Lounge",
        description: "Spacious, air-conditioned waiting areas designed for your comfort and relaxation."
    },
    {
        icon: <Users size={40} />,
        title: "Expert Team",
        description: "A collaborative environment housing experienced radiologists and technicians."
    },
    {
        icon: <Stethoscope size={40} />,
        title: "Private Suites",
        description: "Dedicated consultation rooms ensuring patient privacy and confidential discussions."
    },
    {
        icon: <Wifi size={40} />,
        title: "Free Wi-Fi",
        description: "Stay connected while you wait with our complimentary high-speed internet access."
    },
    {
        icon: <Coffee size={40} />,
        title: "Cafeteria",
        description: "Hygienic refreshments available for patients and their accompanying family members."
    }
];

const FacilityFeatures = () => {
    return (
        <section className="py-16 bg-[#F8FAFC]">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0961A1] mb-4">World-Class Amenities</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">We go beyond diagnostics to provide a superior healthcare experience.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
                        >
                            <div className="w-16 h-16 rounded-xl bg-[#E2F2FF] text-[#0961A1] flex items-center justify-center mb-6 group-hover:bg-[#F98D1B] group-hover:text-white transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#1E1E1E] mb-3">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FacilityFeatures;
