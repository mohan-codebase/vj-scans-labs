import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

import { generateEmailTemplate } from '@/lib/email-template';
import connectDB from '@/lib/db';
import Contact from '@/models/Contact';

// Schema for validation
const contactSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address').optional().or(z.literal('')),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    package: z.string().optional(),
    message: z.string().optional(),
    source: z.string().optional(), // 'Home', 'Footer', 'CT Scan', etc.
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate input
        const result = contactSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { error: 'Validation failed', details: result.error.flatten() },
                { status: 400 }
            );
        }

        const { name, email, phone, package: selectedPackage, message, source } = result.data;

        // 1. Connect to Database and Save Contact
        try {
            await connectDB();
            await Contact.create({
                name,
                email: email || undefined, // Save as undefined if empty string for cleaner DB
                phone,
                package: selectedPackage,
                message,
                source,
            });
            console.log('Contact saved to MongoDB');
        } catch (dbError) {
            console.error('Database save error:', dbError);
            // We continue to send email even if DB fails, but we log it.
            // Alternatively, you could throw to stop everything.
        }

        // 2. Create transporter for Email
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const siteUrl = request.headers.get('origin') || 'https://vj-scans-labs.vercel.app';

        // Email content
        const mailOptions = {
            from: process.env.SMTP_FROM || '"VJ Scans Website" <no-reply@vjscans.com>',
            to: process.env.CONTACT_EMAIL || 'info@vjscans.com',
            subject: `New Appointment Request from ${name} (${source || 'Website'})`,
            text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email || 'Not provided'}
        Package: ${selectedPackage || 'Not selected'}
        Source: ${source || 'General'}
        
        Message:
        ${message || 'No additional message'}
      `,
            html: generateEmailTemplate({
                name,
                phone,
                email,
                package: selectedPackage,
                message,
                source,
                siteUrl
            }),
        };

        // 3. Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Request submitted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { error: 'Internal server error. Please try again later.' },
            { status: 500 }
        );
    }
}
