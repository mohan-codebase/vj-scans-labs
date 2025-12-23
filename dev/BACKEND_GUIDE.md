# Backend Guide: Contact Form API

This guide documents how to use the backend API route for handling contact form submissions in the VJ Scans & Labs application.

## Overview

The application uses a **Next.js API Route** to handle form submissions.
**Path:** `/src/app/api/contact/route.ts`
**Endpoint:** `/api/contact`
**Method:** `POST`

This endpoint validates the input data using `zod` and sends an email notification using `nodemailer`.

## Configuration (Environment Variables)

To use this API, you must configure the following environment variables in your `.env.local` (local development) or your production environment settings.

```env
# SMTP Configuration for sending emails
SMTP_HOST=smtp.gmail.com          # e.g., smtp.gmail.com for Gmail
SMTP_PORT=587                     # 587 for TLS, 465 for SSL
SMTP_SECURE=false                 # true for port 465, false for other ports
SMTP_USER=your-email@gmail.com    # Your email address used for sending
SMTP_PASS=your-app-password       # App Password (not your login password)

# Email Routing
SMTP_FROM='"VJ Scans Website" <no-reply@vjscans.com>' # Custom "From" name/address
CONTACT_EMAIL=info@vjscans.com    # Where the contact form emails should be sent to
```

> **Note:** If using Gmail, you must use an **App Password**. Go to Google Account > Security > 2-Step Verification > App Passwords to generate one.

## API Specification

### Request

**URL:** `/api/contact`
**Method:** `POST`
**Headers:**

- `Content-Type: application/json`

**Body Parameters (JSON):**

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | string | **Yes** | The user's full name. |
| `phone` | string | **Yes** | Phone number (at least 10 digits). |
| `email` | string | No | User's email address. |
| `package`| string | No | Specific package selected (if applicable). |
| `message`| string | No | Additional message/notes from the user. |
| `source` | string | No | Origin of the form (e.g., "Footer", "Home", "Get Your Appointment Section"). |

**Example Request Body:**

```json
{
  "name": "John Doe",
  "phone": "9876543210",
  "email": "john@example.com",
  "source": "Footer Quick Call Back"
}
```

### Responses

**Success (200 OK):**

```json
{
  "message": "Request submitted successfully"
}
```

**Validation Error (400 Bad Request):**
Returns details if fields are missing or invalid (e.g., phone too short).

```json
{
  "error": "Validation failed",
  "details": {
    "fieldErrors": {
      "phone": ["Phone number must be at least 10 digits"]
    }
  }
}
```

**Server Error (500 Internal Server Error):**
Occurs if email sending fails (e.g., wrong SMTP credentials).

```json
{
  "error": "Internal server error. Please try again later."
}
```

## Frontend Integration Example

Here is a standard pattern for using this API in a React/Next.js Client Component:

```tsx
"use client";

import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    source: 'Contact Page' // Helps track where the lead came from
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', email: '', message: '' }); // Reset form
            } else {
                const data = await response.json();
                console.error("Validation errors:", data.details);
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Inputs here... */}
            <button disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Submit'}
            </button>
            {status === 'success' && <p>Message sent successfully!</p>}
            {status === 'error' && <p>Something went wrong.</p>}
        </form>
    );
}
```
