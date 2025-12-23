'use client';

import React from 'react';
import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';
import Button from '@/components/ui/Button';

interface KnowMoreButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    iconVariant?: 'right' | 'up-right';
    iconSize?: number;
    className?: string;
}

/**
 * Reusable "Know More" button with an icon in a circular background
 * Used across hero sections and call-to-action areas
 */
const KnowMoreButton: React.FC<KnowMoreButtonProps> = ({
    text = 'Know More',
    iconVariant = 'up-right',
    iconSize = 16,
    className = '',
    ...props
}) => {
    const Icon = iconVariant === 'up-right' ? IconArrowUpRight : IconArrowRight;

    return (
        <Button
            className={`flex items-center justify-between font-bold text-[18px] font-sans gap-3 cursor-pointer px-0.1 py-1 md:pe-1 md:ps-4 md:py-1 ${className}`}
            style={{ borderRadius: 50 }}
            {...props}
        >
            {text}
            <div className="bg-white rounded-full p-2 md:p-2">
                <Icon size={iconSize} className="text-[#F98D1B]" />
            </div>
        </Button>
    );
};

export default KnowMoreButton;
