import React from 'react';

import Image from 'next/image';

const Section4 = () => {
    const steps = [
        {
            id: 1,
            iconSrc: "/images/mriscan/section4/first.svg",
            alt: "First",
            text: "The patient lies down on a table that slides into a large and comfortable tube, open at both ends. Next, radio waves are used to scan the patient's body.",
            position: 'left'
        },
        {
            id: 2,
            iconSrc: "/images/mriscan/section4/second.svg",
            alt: "Second",
            text: "During this time, the machine makes tapping, buzzing and banging sounds. This is normal. We offer patients earplugs to dampen the noise.",
            position: 'right'
        },
        {
            id: 3,
            iconSrc: "/images/mriscan/section4/third.svg",
            alt: "Third",
            text: "An examination can take 30 to 60 minutes, based on what part is scanned. The patient may have to lie entirely still in batches of 10 minutes to produce accurate scans.",
            position: 'left'
        },
        {
            id: 4,
            iconSrc: "/images/mriscan/section4/fourth.svg",
            alt: "Fourth",
            text: "In some exams, you may be asked to hold your breath for a brief period. This becomes necessary when breathing or patient motion blurs the images.",
            position: 'right'
        },
        {
            id: 5,
            iconSrc: "/images/mriscan/section4/fifth.svg",
            alt: "Fifth",
            text: "An MRI scan is completely painless and thoroughly safe. There is a microphone in the MRI machine. A patient can use it to speak to the technician at any point during the scan.",
            position: 'left'
        }
    ];

    const restrictedItems = [
        { name: "Glasses", icon: "/images/mriscan/section4/bottom-section/Glasses.svg" },
        { name: "Watches", icon: "/images/mriscan/section4/bottom-section/Watches.svg" },
        { name: "Hairpins", icon: "/images/mriscan/section4/bottom-section/Hairpins.svg" },
        { name: "Credit Cards", icon: "/images/mriscan/section4/bottom-section/CreditCards.svg" },
        { name: "Hearing Aids", icon: "/images/mriscan/section4/bottom-section/HearingAids.svg" },
        { name: "Jewellery", icon: "/images/mriscan/section4/bottom-section/Jewellery.svg" },
        { name: "Dental removables", icon: "/images/mriscan/section4/bottom-section/Dental-removables.svg" },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20 font-sans">

            {/* Header */}
            <h2 className="text-3xl md:text-5xl font-[700] text-center text-[#005999] mb-16 md:mb-24">
                Steps Involved During the <span className="text-[#F97316]">MRI Scan</span>
            </h2>

            {/* Timeline Section */}
            <div className="relative flex flex-col items-center mb-24">
                {/* Central Line - Hidden on mobile, visible on md+ */}
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 h-full">
                    <Image
                        src="/images/mriscan/section4/center-line.png"
                        alt="Center Line"
                        width={10}
                        height={1000}
                        className="h-full w-auto object-cover"
                    />
                </div>

                <div className="w-full max-w-2xl flex flex-col gap-12 md:gap-0">
                    {steps.map((step) => (
                        <div key={step.id} className={`flex flex-col md:flex-row w-full ${step.position === 'right' ? 'md:justify-end' : 'md:justify-start'} relative md:mb-12 last:mb-0`}>

                            {/* Mobile Line Connector (Visual only) */}
                            <div className="md:hidden absolute left-6 top-12 bottom-[-40px] w-[2px] bg-[#005999] last:hidden"></div>

                            {/* Center Dot (Desktop) */}
                            <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-20 items-center justify-center">
                                <Image src="/images/mriscan/section4/fot.svg" alt="Dot" width={20} height={20} />
                            </div>

                            {/* Content Container */}
                            <div className={`w-full md:w-1/2 flex flex-col ${step.position === 'right' ? 'md:items-start md:pl-0' : 'md:items-end md:pr-0'} relative pl-16 md:pl-0`}>

                                {/* Mobile Icon (Absolute) */}
                                <div className={`md:hidden absolute top-0 left-0 z-10 flex items-center justify-center w-12 h-12 rounded-full`}>
                                    <Image src={step.iconSrc} alt={step.alt} width={24} height={24} className="w-6 h-6" />
                                </div>

                                {/* Desktop Header Row: Icon + Dotted Line */}
                                <div className={`hidden md:flex items-center w-full`}>
                                    {step.position === 'left' ? (
                                        <>
                                            {/* Icon on Far Left */}
                                            <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-xl shrink-0">
                                                <Image src={step.iconSrc} alt={step.alt} width={32} height={32} className="w-20 h-20" />
                                            </div>
                                            {/* Line to Center */}
                                            <div className="grow border-t-3 border-dotted border-[#005999] mx-0 mt-5"></div>
                                        </>
                                    ) : (
                                        <>
                                            {/* Line from Center */}
                                            <div className="grow border-t-3 border-dotted border-[#005999] mx-0 mt-5"></div>
                                            {/* Icon on Far Right */}
                                            <div className="relative z-10 flex items-center justify-center w-16 h-16  rounded-xl shrink-0 ">
                                                <Image src={step.iconSrc} alt={step.alt} width={32} height={32} className="w-20 h-20" />
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Text Content */}
                                <div className={`mt-4 text-left ${step.position === 'right' ? 'md:text-left' : 'md:text-right'}`}>
                                    <p className="text-gray-700 font-bold md:text-[16px] mt-4 leading-relaxed px-0 md:px-8">
                                        {step.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* What not to wear Section */}
            <div className="flex flex-col md:flex-row gap-12 items-start mt-16">
                {/* Left Side: Title and Description */}
                <div className="w-full md:w-1/3">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#005999] mb-4">
                        What not to wear <br />
                        during an <span className="text-[#F97316]">MRI scan?</span>
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-6">
                        After completing the check-in paperwork, patients may need to change into a gown. For safety, all metal objects must be removed before entering the MRI room. These items include:
                    </p>
                </div>

                {/* Right Side: Grid of Items */}
                <div className="w-full md:w-2/3">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {restrictedItems.map((item, index) => (
                            <div key={index} className="flex items-center bg-[linear-gradient(135deg,#F5F5F5_12.57%,#E5E5E5_86.98%)] rounded-[30px] p-2 pr-0 shadow-sm">
                                <div className="flex-shrink-0 w-10 h-10  rounded-full flex items-center justify-center mr-3">
                                    <Image src={item.icon} alt={item.name} width={20} height={20} className="w-10 h-10" />
                                </div>
                                <span className="text-[#005999] font-medium text-sm md:text-base">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Section4;