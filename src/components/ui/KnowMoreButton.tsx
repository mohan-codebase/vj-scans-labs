'use client';

import React from 'react';
import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';
import Button from '@/components/ui/Button';
import { useBooking, KnowMoreContent } from '@/context/BookingContext';

interface KnowMoreButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'content'> {
    text?: string;
    iconVariant?: 'right' | 'up-right';
    iconSize?: number;
    className?: string;
    content?: KnowMoreContent;
}

/**
 * Reusable "Know More" button with an icon in a circular background
 * Used across hero sections and call-to-action areas
 * Opens a modal with related content when clicked (if content is provided)
 */
const KnowMoreButton: React.FC<KnowMoreButtonProps> = ({
    text = 'Know More',
    iconVariant = 'up-right',
    iconSize = 16,
    className = '',
    content,
    onClick,
    ...props
}) => {
    const { openKnowMoreModal } = useBooking();
    const Icon = iconVariant === 'up-right' ? IconArrowUpRight : IconArrowRight;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (content) {
            e.preventDefault();
            openKnowMoreModal(content);
        }
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <Button
            className={`flex items-center justify-between font-bold text-[18px] font-sans gap-3 cursor-pointer pe-1 ps-4 py-1 ${className}`}
            style={{ borderRadius: 50 }}
            onClick={handleClick}
            {...props}
        >
            {text}
            <div className="bg-white rounded-full p-2">
                <Icon size={iconSize} className="text-[#F98D1B]" />
            </div>
        </Button>
    );
};

export default KnowMoreButton;
