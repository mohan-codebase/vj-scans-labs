import React from 'react'
import AppointmentSection from '@/components/common/AppointmentSection'
import { MapPin, Phone, Clock } from 'lucide-react'
import { Metadata } from 'next'
import { SITE_NAME } from '@/lib/seo'


export const metadata: Metadata = {
    title: "Our Branches - VJ Scans & Labs",
    description: "Visit our customized diagnostic center in Saligramam, Chennai. Open 24/7 for your convenience.",
    openGraph: {
        title: "Our Branches - VJ Scans & Labs",
        description: "Visit our customized diagnostic center in Saligramam, Chennai. Open 24/7 for your convenience.",
        url: `${SITE_NAME}/ourbranches`,
        siteName: SITE_NAME,
        type: "website"
    }
}

const branches = [
    {
        id: 1,
        name: "VJ Scans & Labs - Saligramam (Headquarters)",
        address: "NO.1, Bharani Gardens, Bhanumathi Ramakrishna Rd, Bharani Colony, Vijayaraghavapuram, Saligramam, Chennai, Tamil Nadu 600093",
        phone: "+91 958 5335 552",
        timings: "Open 24 Hours",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.685324209977!2d80.2030999!3d13.0556819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266eb71c19dcd%3A0xc30e2f3d5367303c!2sVJ%20Scans%20%26%20Labs!5e0!3m2!1sen!2sin!4v1703576000000!5m2!1sen!2sin"
    }
]

const page = () => {
    return (
        <main className=" font-sans">
            <div className="py-20 px-4 text-center bg-linear-to-b from-blue-50 to-white">
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#0961A1] mb-6">Our <span className='text-[#f98d1b]'>Branches</span> </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg ">
                    Conveniently located to serve you better.
                </p>
            </div>

            <section className="py-10 md:py-10 md:mb-10">
                <div className="max-w-[1400px] mx-auto px-4">
                    <div className="grid grid-cols-1 gap-12">
                        {branches.map((branch) => (
                            <div key={branch.id} className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row">
                                <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-bold text-sm w-fit mb-6">
                                        Main Centre
                                    </span>
                                    <h2 className="text-4xl font-bold text-[#0961A1] mb-6">{branch.name}</h2>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                                <MapPin className="text-[#0961A1] w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-800 mb-1">Address</p>
                                                <p className="text-gray-600 leading-relaxed text-lg">{branch.address}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                                <Phone className="text-[#0961A1] w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-800 mb-1">Phone</p>
                                                <p className="text-gray-600 text-lg font-medium">{branch.phone}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                                <Clock className="text-[#0961A1] w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-800 mb-1">Timings</p>
                                                <p className="text-gray-600 text-lg">{branch.timings}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 bg-gray-100 relative min-h-[400px]">
                                    <iframe
                                        src={branch.mapEmbedUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="absolute inset-0"
                                    ></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                    <AppointmentSection className='my-14' />

                </div>
            </section>

        </main>
    )
}

export default page
