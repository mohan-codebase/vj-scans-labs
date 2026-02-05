const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

// 1. Load env vars manually
try {
    const envPath = path.resolve(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
        const envFile = fs.readFileSync(envPath, 'utf8');
        envFile.split('\n').forEach(line => {
            // Simple parsing: KEY=VALUE
            const match = line.match(/^([^#=]+)=(.*)$/);
            if (match) {
                const key = match[1].trim();
                let value = match[2].trim();
                // Remove quotes if present
                if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                    value = value.slice(1, -1);
                }
                process.env[key] = value;
            }
        });
        console.log('Environment variables loaded from .env.local');
    } else {
        console.warn('.env.local file not found!');
    }
} catch (e) {
    console.error('Error loading .env.local:', e.message);
}

// 2. Transporter setup
async function sendTestEmail() {
    console.log('Testing SMTP Configuration...');
    console.log(`Host: ${process.env.SMTP_HOST}`);
    console.log(`Port: ${process.env.SMTP_PORT}`);
    console.log(`User: ${process.env.SMTP_USER}`);

    // Check for spaces in password which might cause issues
    if (process.env.SMTP_PASS && process.env.SMTP_PASS.includes(' ')) {
        console.warn('⚠️  WARNING: SMTP_PASS contains spaces. This often causes issues with Gmail App Passwords. Try removing them.');
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        console.log('Verifying connection...');
        await transporter.verify();
        console.log('✅ SMTP Connection verified successfully!');

        // Send test email
        const mailOptions = {
            from: process.env.SMTP_FROM || '"Test Script" <no-reply@test.com>',
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
            subject: 'Test Email from Debug Script',
            text: 'If you receive this, the email configuration is working correctly.',
        };

        console.log(`Sending email to: ${mailOptions.to}`);
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully!');
        console.log('Message ID:', info.messageId);

    } catch (error) {
        console.error('❌ Error sending email:');
        console.error(error);
    }
}

sendTestEmail();
