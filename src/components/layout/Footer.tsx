"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full font-sans">


      {/* Bottom Section - White */}
      <div className="bg-white text-gray-600 py-12 px-4 md:px-12 border-t border-gray-100 font-bold">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Column 1: Menu */}
          <div className="text-center md:text-left">
            <h3 className="text-[#1e73be] font-bold text-lg mb-6">Menu</h3>
            <ul className="space-y-3">
              <li><Link href="/aboutus" className="hover:text-[#1e73be] transition-colors">About Us</Link></li>
              <li><Link href="/specialities" className="hover:text-[#1e73be] transition-colors">Specialities</Link></li>
              <li><Link href="/scans" className="hover:text-[#1e73be] transition-colors">Scans</Link></li>
              <li><Link href="/packages" className="hover:text-[#1e73be] transition-colors">Packages</Link></li>
              <li><Link href="/ourbranches" className="hover:text-[#1e73be] transition-colors">Our Branches</Link></li>
            </ul>
          </div>

          {/* Column 2: Scans */}
          <div className="text-center md:text-left">
            <h3 className="text-[#1e73be] font-bold text-lg mb-6">Scans</h3>
            <ul className="space-y-3">
              <li><Link href="/scans/mriscan" className="hover:text-[#1e73be] transition-colors">Magnetic Resonance Imaging (MRI) – 1.5 Tesla</Link></li>
              <li><Link href="/scans/ctscan" className="hover:text-[#1e73be] transition-colors">Multislice Computed Tomography (CT)</Link></li>
              <li><Link href="/scans/2d-3d-ultrasound" className="hover:text-[#1e73be] transition-colors">Ultrasonography (USG) – 2D/3D</Link></li>
              <li><Link href="/scans/x-ray" className="hover:text-[#1e73be] transition-colors">X-Ray</Link></li>
              <li><Link href="/scans/mammograms" className="hover:text-[#1e73be] transition-colors">Digital Mammography</Link></li>
              <li><Link href="/scans/echo" className="hover:text-[#1e73be] transition-colors">Echocardiography (ECHO)</Link></li>
              <li><Link href="/scans/ecg" className="hover:text-[#1e73be] transition-colors">Electrocardiogram (ECG)</Link></li>
              <li><Link href="/scans/tmt" className="hover:text-[#1e73be] transition-colors">Treadmill Test (TMT)</Link></li>
              <li><Link href="/scans" className="hover:text-[#1e73be] transition-colors">Laboratory Services (LAB)</Link></li>
              <li><Link href="/packages" className="hover:text-[#1e73be] transition-colors">Master Health Check-up</Link></li>
              <li><Link href="/scans" className="hover:text-[#1e73be] transition-colors">DEXA Scan (Bone Mineral Density – BMD)</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="text-center md:text-left">
            <h3 className="text-[#1e73be] font-bold text-lg mb-6">Contact us</h3>
            <ul className="space-y-3">
              <li><span className="font-extrabold">GSTIN</span></li>
              <li><a href="#" className="hover:text-[#1e73be] transition-colors">Linkedin</a></li>
              <li><a href="https://www.instagram.com/vj_scans_and_labs/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1e73be] transition-colors">Instagram</a></li>
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
            <address className="not-italic">
              <p className="text-sm leading-relaxed mb-1 text-center">
                NO.1, Bharani Gardens, Bhanumathi Ramakrishna Rd, Bharani Colony, Vijayaraghavapuram, Saligramam, Chennai, Tamil Nadu 600093
              </p>
              <p className="text-sm mb-6">
                <a href="tel:+919585335552" className="hover:text-[#1e73be]">+91 95853 35552</a>
              </p>
            </address>

            <h3 className="text-[#1e73be] font-bold text-lg mb-4">Follow Us:</h3>
            <div className="flex items-center gap-2">
              <div className=" rounded-full p-1 cursor-pointer flex items-center justify-center w-9 h-9 hover:bg-white/50 transition-colors">
                <a href="https://www.facebook.com/vjscans" target="_blank"
                  rel="noopener noreferrer" aria-label="Facebook"><Image src="/images/topbar/facebook.svg" alt="" width={22} height={22} /></a>
              </div>
              <div className="bg-black rounded-full p-1 cursor-pointer flex items-center justify-center w-9 h-9 hover:scale-105 transition-transform">
                <a href="https://x.com/vjscans" target="_blank"
                  rel="noopener noreferrer" aria-label="X (Twitter)"><Image src="/images/topbar/x.svg" alt="" width={20} height={20} /></a>
              </div>
              <div className=" rounded-full p-1 cursor-pointer flex items-center justify-center w-9 h-9 hover:bg-white/50 transition-colors">
                <a href="https://www.instagram.com/vj_scans_and_labs/" target="_blank"
                  rel="noopener noreferrer" aria-label="Instagram"><Image src="/images/topbar/instagram.svg" alt="" width={22} height={22} /></a>
              </div>
              <div className="bg-[#0077B5] rounded-full p-1 cursor-pointer flex items-center justify-center w-9 h-9 hover:scale-105 transition-transform">
                <a href="https://www.linkedin.com/company/vjscans/" target="_blank"
                  rel="noopener noreferrer" aria-label="LinkedIn"><Image src="/images/topbar/linkedin.svg" alt="" width={20} height={20} /></a>
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
            <p>© 2025 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;