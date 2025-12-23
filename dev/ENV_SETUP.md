# Environment Setup Guide

To run the application with full functionality (specifically the contact forms), you need to set up your environment variables.

## 1. Create the Environment File

Create a file named `.env.local` in the root directory of the project.

```bash
touch .env.local
```

## 2. Copy Configuration

Copy the contents of `dev/env.example` into your new `.env.local` file.

## 3. Configure SMTP (Email)

The application uses `nodemailer` to send emails from the contact forms. You need to provide SMTP credentials.

### Using Gmail

If you are using Gmail:

1. Go to your Google Account settings.
2. Enable 2-Step Verification if not already enabled.
3. Search for "App Passwords".
4. Create a new App Password for "Mail" / "Other (Custom name: NextJS App)".
5. Use your Gmail address as `SMTP_USER`.
6. Use the generated 16-character App Password as `SMTP_PASS`.

**Example .env.local:**

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=yourname@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
SMTP_FROM="VJ Scans Website" <no-reply@vjscans.com>
CONTACT_EMAIL=admin@vjscans.com
```

## 4. Other Requirements

- **Favicon**: Ensure `public/favicon.ico` exists or is correctly referenced in `src/app/layout.tsx`. currently `public/vj-favicon.svg` is present.
- **Node Modules**: Ensure you have run `npm install`.
