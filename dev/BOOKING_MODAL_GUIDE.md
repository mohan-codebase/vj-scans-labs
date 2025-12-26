# Global Booking Modal Implementation Guide

This guide explains how to use the Global Booking Modal in the VJ Scans & Labs project. The modal is managed via a React Context (`BookingContext`) and is available throughout the application.

## Overview

- **Context**: `BookingContext` (located in `src/context/BookingContext.tsx`)
- **Hook**: `useBooking`
- **Component**: `BookingModal` (located in `src/components/ui/BookingModal.tsx`)
- **Provider**: `BookingProvider` (wraps the app in `src/app/layout.tsx`)

## How to Use

To trigger the booking modal from any component, follow these steps:

1. **Import the Hook**:

    ```tsx
    import { useBooking } from "@/context/BookingContext";
    ```

2. **Initialize the Hook**:
    Inside your component, call `useBooking` to access the `openModal` function.

    ```tsx
    const { openModal } = useBooking();
    ```

3. **Attach to Event Handler**:
    Add an `onClick` handler to your button or link to call `openModal`.

    ```tsx
    <button onClick={openModal} className="your-button-styles">
        Book Now
    </button>
    ```

## Example Usage

Here is a complete example of a simple component that triggers the modal:

```tsx
'use client';

import React from 'react';
import { useBooking } from "@/context/BookingContext";

const BookAppointmentButton = () => {
    const { openModal } = useBooking();

    return (
        <button 
            onClick={openModal}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
            Schedule Appointment
        </button>
    );
};

export default BookAppointmentButton;
```

## Important Notes

- **'use client' Directive**: Since `useBooking` uses React Context, any component using it must be a Client Component. Ensure you have the `'use client';` directive at the top of your file.
- **Provider Wrapping**: The `BookingProvider` is already set up in `src/app/layout.tsx`, so you don't need to wrap your individual components manually.
