'use client';

import Link from 'next/link';
import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';

interface NavItem {
    name: string;
    link: string;
    active?: boolean;
}

const navItems: NavItem[] = [
    { name: 'Home', link: '/specialities/clinical-genitics-home', active: true },
    { name: "Male Infertility", link: "/specialities/male-infertility" },

    { name: 'PGT', link: '#' },
    { name: 'Recurrent Pregnancy Loss', link: '#' },
    { name: 'Genetic Counseling', link: '#' },
    { name: 'Contact', link: '#' },
];

export function SpecialitiesNav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-[#0A4A6E] sticky top-[60px] md:top-[99px] z-40 max-w-[1400px] mx-auto ">
            <div className="max-w-[1400px] mx-auto">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-center gap-1 px-4 py-3">
                    {navItems.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.link}
                            className={`px-4 py-2 text-sm font-semibold transition-colors rounded-lg ${item.active
                                ? 'text-[#ffffff]'
                                : 'text-white hover:text-[#F98D1B]'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-white"
                    >
                        <span className="font-semibold">
                            {navItems.find(item => item.active)?.name || 'Menu'}
                        </span>
                        <IconChevronDown
                            size={20}
                            className={`transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}
                        />
                    </button>

                    {isMobileMenuOpen && (
                        <div className="border-t border-white/10">
                            {navItems.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.link}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block px-4 py-3 text-sm font-semibold border-b border-white/10 transition-colors ${item.active
                                        ? 'text-[#F98D1B] bg-white/5'
                                        : 'text-white hover:bg-white/5'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
