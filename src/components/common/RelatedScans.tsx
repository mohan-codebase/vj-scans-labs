"use client";
import React from 'react';
import Link from 'next/link';
import { Activity, Brain, Heart, Zap, FileText } from 'lucide-react';

const allScans = [
    {
        name: "MRI Scan",
        link: "/scans/mriscan",
        icon: <Brain className="w-8 h-8" />,
        description: "High-field 1.5 Tesla MRI."
    },
    {
        name: "CT Scan",
        link: "/scans/ctscan",
        icon: <Zap className="w-8 h-8" />,
        description: "Multislice CT technology."
    },
    {
        name: "Ultrasound",
        link: "/scans/2d-3d-ultrasound",
        icon: <Activity className="w-8 h-8" />,
        description: "Advanced 2D/3D diagnostics."
    },
    {
        name: "Mammography",
        link: "/scans/mammograms",
        icon: <FileText className="w-8 h-8" />,
        description: "Digital breast screening."
    },
    {
        name: "ECHO",
        link: "/scans/echo",
        icon: <Heart className="w-8 h-8" />,
        description: "Heart function assessment."
    },
    {
        name: "X-Ray",
        link: "/scans/x-ray",
        icon: <FileText className="w-8 h-8" />,
        description: "Digital radiography."
    },
    {
        name: "ECG",
        link: "/scans/ecg",
        icon: <Activity className="w-8 h-8" />,
        description: "Cardiac rhythm monitoring."
    },
    {
        name: "TMT",
        link: "/scans/tmt",
        icon: <Activity className="w-8 h-8" />,
        description: "Treadmill stress test."
    }
];

interface RelatedScansProps {
    currentScan: string; // The name or link of the current scan to exclude
}

const RelatedScans = ({ currentScan }: RelatedScansProps) => {
    // Filter out the current scan and take first 4 of the rest (or random/shuffled if preferred)
    const related = allScans.filter(s => !s.link.includes(currentScan)).slice(0, 4);

    return (
        <section className="py-16 bg-white border-t border-gray-100 font-sans">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-[#0961A1] text-center mb-10">
                    Explore Other <span className="text-[#F98D1B]">Services</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {related.map((scan) => (
                        <Link
                            key={scan.name}
                            href={scan.link}
                            className="bg-blue-50/50 p-6 rounded-2xl hover:bg-white hover:shadow-lg hover:border-blue-100 border border-transparent transition-all group flex flex-col items-center text-center"
                        >
                            <div className="text-[#0961A1] mb-4 group-hover:scale-110 transition-transform bg-white p-3 rounded-full shadow-sm">
                                {scan.icon}
                            </div>
                            <h3 className="font-bold text-lg text-gray-800 mb-2">{scan.name}</h3>
                            <p className="text-gray-500 text-sm">{scan.description}</p>
                            <span className="mt-4 text-[#F98D1B] text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">View Details</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedScans;
