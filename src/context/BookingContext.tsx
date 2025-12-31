'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import SuccessModal from '@/components/ui/SuccessModal';

export interface KnowMoreContent {
    title: string;
    description: string | React.ReactNode;
    additionalInfo?: string | React.ReactNode;
}

interface BookingContextType {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    isSuccessModalOpen: boolean;
    openSuccessModal: () => void;
    closeSuccessModal: () => void;
    isKnowMoreModalOpen: boolean;
    knowMoreContent: KnowMoreContent | null;
    openKnowMoreModal: (content: KnowMoreContent) => void;
    closeKnowMoreModal: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isKnowMoreModalOpen, setIsKnowMoreModalOpen] = useState(false);
    const [knowMoreContent, setKnowMoreContent] = useState<KnowMoreContent | null>(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openSuccessModal = () => setIsSuccessModalOpen(true);
    const closeSuccessModal = () => setIsSuccessModalOpen(false);

    const openKnowMoreModal = (content: KnowMoreContent) => {
        setKnowMoreContent(content);
        setIsKnowMoreModalOpen(true);
    };

    const closeKnowMoreModal = () => {
        setIsKnowMoreModalOpen(false);
        setKnowMoreContent(null);
    };

    return (
        <BookingContext.Provider value={{
            isModalOpen,
            openModal,
            closeModal,
            isSuccessModalOpen,
            openSuccessModal,
            closeSuccessModal,
            isKnowMoreModalOpen,
            knowMoreContent,
            openKnowMoreModal,
            closeKnowMoreModal
        }}>
            {children}
            <SuccessModal />
        </BookingContext.Provider>
    );
};

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};
