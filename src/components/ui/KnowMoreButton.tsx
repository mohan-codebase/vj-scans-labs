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
            className={`!flex !items-center !justify-between font-extrabold !text-[15px] font-sans gap-2 cursor-pointer !ps-4 !pe-1 !py-1 !rounded-[50px] ${className}`}
            onClick={handleClick}
            {...props}
        >
            <span>{text}</span>
            <div className="bg-white rounded-full p-2 flex-shrink-0">
                <Icon size={iconSize} className="text-[#F98D1B]" />
            </div>
        </Button>
    );
};

export default KnowMoreButton;
