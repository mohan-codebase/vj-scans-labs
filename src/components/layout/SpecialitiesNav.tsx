'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { IconChevronDown } from '@tabler/icons-react';

interface NavItem {
    name: string;
    link: string;
}

const navItems: NavItem[] = [
    { name: 'Home', link: '/specialities/clinical-genitics-home' },
    { name: "Male Infertility", link: "/specialities/male-infertility" },
    { name: 'PGT', link: '/specialities/pgt' },
    { name: 'Recurrent Pregnancy Loss', link: '/specialities/recurrent-pregnancy-loss' },
    { name: 'Genetic Counseling', link: '/specialities/genetic-counseling' },
    { name: 'Contact', link: '/contact' },
];

export function SpecialitiesNav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const getActiveItem = () => {
        return navItems.find(item => item.link === pathname) || navItems[0];
    };

    return (
        <nav className="w-full bg-[#0A4A6E] sticky top-[60px] md:top-[99px] z-40 max-w-[1400px] mx-auto ">
            <div className="max-w-[1400px] mx-auto">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-center gap-1 px-4 py-3">
                    {navItems.map((item, idx) => {
                        const isActive = pathname === item.link;
                        return (
                            <Link
                                key={idx}
                                href={item.link}
                                className={`px-4 py-2 text-sm font-semibold transition-colors rounded-lg ${isActive
                                    ? 'text-[#F98D1B] bg-white/10'
                                    : 'text-white hover:text-[#F98D1B]'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-white"
                    >
                        <span className="font-semibold text-[#F98D1B]">
                            {getActiveItem().name}
                        </span>
                        <IconChevronDown
                            size={20}
                            className={`transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}
                        />
                    </button>

                    {isMobileMenuOpen && (
                        <div className="border-t border-white/10">
                            {navItems.map((item, idx) => {
                                const isActive = pathname === item.link;
                                return (
                                    <Link
                                        key={idx}
                                        href={item.link}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block px-4 py-3 text-sm font-semibold border-b border-white/10 transition-colors ${isActive
                                            ? 'text-[#F98D1B] bg-white/5'
                                            : 'text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
