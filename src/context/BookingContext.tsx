'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import SuccessModal from '@/components/ui/SuccessModal';

interface BookingContextType {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    isSuccessModalOpen: boolean;
    openSuccessModal: () => void;
    closeSuccessModal: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openSuccessModal = () => setIsSuccessModalOpen(true);
    const closeSuccessModal = () => setIsSuccessModalOpen(false);

    return (
        <BookingContext.Provider value={{
            isModalOpen,
            openModal,
            closeModal,
            isSuccessModalOpen,
            openSuccessModal,
            closeSuccessModal
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
