import React from 'react';
const homeIcon = '/images/ctscan/Section7/home-icon.png';
const customerIcon = '/images/ctscan/Section7/customer-care-icon.png';

import Image from 'next/image';

const FooterTop = () => {
    return (
        <div className="w-full font-sans bg-linear-to-r from-[#0961A1] to-[#0B76BC]">
            <div className="px-[15px] py-[20px] flex flex-col gap-[25px] max-w-[1400px] mx-auto md:px-[30px] md:gap-[30px] lg:flex-row lg:justify-between lg:items-center lg:px-[50px] lg:py-[40px] lg:gap-[40px]">
                <div className="flex items-center flex-1 w-full justify-center lg:w-auto lg:justify-start">
                    <div className="flex flex-col items-center gap-[20px] w-full md:flex-row md:gap-[40px] lg:gap-[50px]">
                        <div className="flex items-center gap-[15px] w-full justify-center lg:w-auto lg:justify-start">
                            <div className="flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px]">
                                <Image src={homeIcon} alt="Home Icon" width={50} height={50} />
                            </div>
                            <div className="flex flex-col gap-[2px] items-center lg:items-start">
                                <p className="text-white font-medium leading-[1.2] text-[12px] md:text-[13px] lg:text-[14px]">Book a Home Visit</p>
                                <h3 className="text-white font-bold leading-[1.2] text-[15px] md:text-[16px] lg:text-[18px]">+91 958 5335 552</h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-[15px] w-full justify-center lg:w-auto lg:justify-start">
                            <div className="flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px]">
                                <Image src={customerIcon} alt="Customer Icon" width={50} height={50} />
                            </div>
                            <div className="flex flex-col gap-[2px] items-center lg:items-start">
                                <p className="text-white font-medium leading-[1.2] text-[12px] md:text-[13px] lg:text-[14px]">Customer Care</p>
                                <h3 className="text-white font-bold leading-[1.2] text-[15px] md:text-[16px] lg:text-[18px]">+91 958 5335 552</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full justify-center lg:w-auto lg:justify-start">
                    <div className="flex flex-col gap-[10px] w-full max-w-[500px] lg:max-w-none md:gap-[15px]">
                        <h3 className="text-white font-semibold whitespace-nowrap text-[15px] md:text-[16px] lg:text-[18px] text-center lg:text-left">Get a Quick Call Back</h3>
                        <form className="flex flex-col gap-[12px] w-full items-center lg:flex-row lg:w-auto">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full lg:w-auto min-w-0 lg:min-w-[180px] px-[16px] py-[10px] md:py-[16px] md:px-[20px] border-none rounded-[8px] bg-white text-[#1E1E1E] text-[13px] md:text-[14px] placeholder-[#3E4D5C] focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full lg:w-auto min-w-0 lg:min-w-[180px] px-[16px] py-[10px] md:py-[16px] md:px-[20px] border-none rounded-[8px] bg-white text-[#1E1E1E] text-[13px] md:text-[14px] placeholder-[#3E4D5C] focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                                required
                            />
                            <button type="submit" className="w-full lg:w-auto px-[20px] py-[10px] md:px-[28px] md:py-[12px] bg-linear-to-r from-[#F98D1B] to-[#FFC180] text-white border-none rounded-[8px] text-[14px] md:text-[15px] font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-[2px] hover:shadow-lg whitespace-nowrap">
                                Get a Quick Call
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;