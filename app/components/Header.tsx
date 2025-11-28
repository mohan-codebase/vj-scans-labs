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
      link: "/scans",
      subItems: [
        { name: "MRI Scan", link: "/scans/mri" },
        { name: "CT Scan", link: "/scans/ct" },
        { name: "X-Ray", link: "/scans/xray" },
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

  return (
    <>
      <TopBar />
      <Navbar className="liquid-glass max-w-7xl mx-auto rounded-2xl mt-3">
        {/* Desktop Navigation */}
        <NavBody className="">
          <NavbarLogo />
          <NavItems items={navItems} className="" />
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
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#0961A1',
                  fontWeight: 500
                }}>
                <span className="block">{item.name}</span>
              </a>
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
