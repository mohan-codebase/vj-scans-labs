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
  NavbarSearch,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Specialities",
      link: "/specialities",
    },
    {
      name: "Scans",
      link: "#",
      subItems: [
        { name: "MRI Scan", link: "/mriscan" },
        { name: "CT Scan", link: "/ctscan" },
        { name: "X-Ray", link: "/x-ray" },
        { name: "2D & 3D Ultrasound", link: "/2d-3d-ultrasound" },
        { name: "ECHO", link: "/echo" },
        { name: "ECG", link: "/ecg" },
        { name:"TMT" , link:"/tmt"}
      ]
    },
    {
      name: "Packages",
      link: "/packages",
    },
    {
      name: "Our Branches",
      link: "/ourbranches",
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
      <Navbar className="max-w-7xl mx-auto rounded-2xl mt-3 ">
        {/* Desktop Navigation */}
        <NavBody className="">
          <NavbarLogo />
          <NavItems items={navItems} className="bg-[linear-gradient(90deg,#ffebd6,#d1ebff)] p-1" />
          <div className="flex items-center gap-4">
            <NavbarSearch />
            <NavbarButton href="#" className="">Book Appointment</NavbarButton>
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
                        fontFamily: "'DM Sans', sans-serif",
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
                              fontFamily: "'DM Sans', sans-serif",
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
                      fontFamily: "'DM Sans', sans-serif",
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
                onClick={() => setIsMobileMenuOpen(false)}
                className="vj-btn-primary">
                Book Appointment
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </>
  );
}
