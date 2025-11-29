"use client";

import React from 'react';
import Image from 'next/image';
import { Home, Headset } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full font-sans">
      {/* Top Section - Blue */}
      <div className="bg-[#1e73be] text-white py-8 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left Side - Contact Info */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full">
                <Home className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-sm opacity-90">Book a Home Visit</p>
                <p className="text-[20px] font-[800]">044-40000000</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full">
                <Headset className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-sm opacity-90">Customer Care</p>
                <p className="text-2xl font-bold">044-40000000</p>
              </div>
            </div>
          </div>

          {/* Right Side - Quick Call Back Form */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
            <div className="text-center md:text-left mb-2 md:mb-0">
              <p className="font-semibold text-lg">Get a Quick Call Back</p>
            </div>
            <form className="flex flex-col md:flex-row gap-3 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                aria-label="Your Name"
                className="px-4 py-3 rounded-md text-gray-800 outline-none w-full md:w-48 bg-white"
              />
              <input
                type="text"
                placeholder="Phone Number"
                aria-label="Phone Number"
                className="px-4 py-3 rounded-md text-gray-800 outline-none w-full md:w-48 bg-white"
              />
              <button type="submit" className="bg-[#ff9f43] hover:bg-[#f39c12] text-white font-medium px-6 py-3 rounded-md transition-colors whitespace-nowrap cursor-pointer">
                Get a Quick Call
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Section - White */}
      <div className="bg-white text-gray-600 py-12 px-4 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Column 1: Menu */}
          <div>
            <h3 className="text-[#1e73be] font-bold text-lg mb-6">Menu</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">Specialities</a></li>
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">Scans</a></li>
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">Packages</a></li>
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">Our Branches</a></li>
            </ul>
          </div>

          {/* Column 2: Scans */}
          <div>
            <h3 className="text-[#1e73be] font-bold text-lg mb-6">Scans</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">Magnetic Resonance Imaging (MRI) – 1.5 Tesla</a></li>
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">Multislice Computed Tomography (CT)</a></li>
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">Ultrasonography (USG) – 2D/3D</a></li>
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">X-Ray</a></li>
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">Digital Mammography</a></li>
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">Echocardiography (ECHO)</a></li>
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">Electrocardiogram (ECG)</a></li>
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">Treadmill Test (TMT)</a></li>
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">Laboratory Services (LAB)</a></li>
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">Master Health Check-up</a></li>
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">DEXA Scan (Bone Mineral Density – BMD)</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-[#1e73be] font-bold text-lg mb-6">Contact us</h3>
            <ul className="space-y-3">
              <li><span className="font-extrabold">GSTIN</span></li>
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">Linkedin</a></li>
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">Telegram</a></li>
            </ul>
          </div>

          {/* Column 4: Logo & Address */}
          <div className="flex flex-col items-center md:items-center text-center md:text-right">
            <div className="mb-6">
              <Image
                src="/images/vj-scans-logo.png"
                alt="VJ Scans & Labs"
                width={200}
                height={60}
                className="object-contain"
              />
            </div>

            <h3 className="text-[#1e73be] font-bold text-lg mb-2">Address</h3>
            <p className="text-sm leading-relaxed mb-1 text-center">
              Velachery (Head Office)<br />
              No. 41, Arcot Road, Velachery, Chennai-600087.
            </p>
            <p className="text-sm mb-6">
              044-40000000 | +91 809 808 8090
            </p>

            <h3 className="text-[#1e73be] font-bold text-lg mb-4">Follow Us:</h3>
            <div className="flex items-center gap-2">
              <div className=" rounded-full p-1 cursor-pointer flex items-center justify-center w-9 h-9">
                <a href="https://www.facebook.com/vjscans" target="_blank"
                  rel="noopener noreferrer"><Image src="/images/topbar/facebook.svg" alt="facebook" width={22} height={22} /></a>
              </div>
              <div className="bg-black rounded-full p-1 cursor-pointer flex items-center justify-center w-6 h-6">
                <a href="https://x.com/vjscans" target="_blank"
                  rel="noopener noreferrer"><Image src="/images/topbar/x.svg" alt="x" width={22} height={22} /></a>
              </div>
              <div className=" rounded-full p-1 cursor-pointer flex items-center justify-center w-8 h-5">
                <a href="https://www.instagram.com/vjscans/" target="_blank"
                  rel="noopener noreferrer"><Image src="/images/topbar/instagram.svg" alt="instagram" width={50} height={50} /></a>
              </div>
              <div className="bg-[#0077B5] rounded-full p-1 cursor-pointer flex items-center justify-center w-6 h-6">
                <a href="https://www.linkedin.com/company/vjscans/" target="_blank"
                  rel="noopener noreferrer"><Image src="/images/topbar/linkedin.svg" alt="linkedin" width={20} height={20} /></a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-[#1e73be]">Privacy Policy</a>
            <a href="#" className="hover:text-[#1e73be]">Terms of Use</a>
            <a href="#" className="hover:text-[#1e73be]">Sales and Refunds</a>
          </div>
          <div>
            <p>© 2021 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;