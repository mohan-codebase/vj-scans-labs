"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  TopBar,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

import { useBooking } from "@/context/BookingContext";

export function Header() {
  const { openModal } = useBooking();
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Specialities",
      link: "#",
      subItems: [
        { name: "Onco Diagnostics", link: "/specialities/onco-diagnostics" },
        { name: "Clinical Genomics", link: "/specialities/clinical-genitics-home" },
        { name: "Newborn Screening", link: "/specialities/newborn-screening" },
        { name: "Infectious Disease", link: "/specialities/infectious-disease" },
      ],
    },
    {
      name: "Scans",
      link: "#",
      subItems: [
        { name: "MRI Scan", link: "/scans/mriscan" },
        { name: "CT Scan", link: "/scans/ctscan" },
        { name: "X-Ray", link: "/scans/x-ray" },
        { name: "2D & 3D Ultrasound", link: "/scans/2d-3d-ultrasound" },
        { name: "ECHO", link: "/scans/echo" },
        { name: "ECG", link: "/scans/ecg" },
        { name: "TMT", link: "/scans/tmt" },
        { name: "Mammograms", link: "/scans/mammograms" }
      ]
    },
    {
      name: "Packages",
      link: "/packages"

    },
    {
      name: "Our Branches",
      link: "/ourbranches",
    },
    {
      name: "Our Facility",
      link: "/our-facility"
    },
    {
      name: "About us",
      link: "/aboutus",
    }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<number | null>(null);

  return (
    <>
      <TopBar />
      <Navbar className="max-w-[1400px] mx-auto rounded-2xl mt-3 ">
        {/* Desktop Navigation */}
        <NavBody className="">
          <NavbarLogo />
          <NavItems items={navItems} className="bg-[linear-gradient(90deg,#ffebd6,#d1ebff)] p-1" />
          <div className="flex items-center gap-4">
            <NavbarButton href="#" onClick={(e) => { e.preventDefault(); openModal(); }} className="">Book Appointment</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <div key={`mobile-item-${idx}`} className="w-full">
                {item.subItems ? (
                  // Item with dropdown
                  <div className="w-full">
                    <button
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === idx ? null : idx)}
                      className="w-full text-left relative flex items-center justify-between "
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: '#0961A1',
                        fontWeight: 500
                      }}
                    >
                      <span className="block">{item.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${openMobileDropdown === idx ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {/* Dropdown subItems */}
                    {openMobileDropdown === idx && (
                      <div className="pl-4 mt-2 space-y-2 ">
                        {item.subItems.map((subItem, subIdx) => (
                          <a
                            key={`mobile-sublink-${idx}-${subIdx}`}
                            href={subItem.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-1"
                            style={{
                              fontFamily: "var(--font-sans)",
                              color: '#0961A1',
                              fontWeight: 400,
                              fontSize: '0.95rem'
                            }}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Regular item without dropdown
                  <a
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: '#0961A1',
                      fontWeight: 500
                    }}
                  >
                    <span className="block">{item.name}</span>
                  </a>
                )}
              </div>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  openModal();
                }}
                className="vj-btn-primary font-sans">
                Book Appointment
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </>
  );
}
