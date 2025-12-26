# Backend Learning Guide: API Routes & Form Handling

This guide explains the code used in `src/app/api/contact/route.ts`. Understanding these concepts will help you build your own backend features.

## 1. Next.js App Router API Routes (`route.ts`)

In Next.js (App Router), we create API endpoints by creating a file named `route.ts` inside a folder in `src/app/api/`.

- **Path:** `src/app/api/contact/route.ts` creates an endpoint at `/api/contact`.
- **Method:** We export an async function named `POST` to handle POST requests. You can also export `GET`, `PUT`, `DELETE`, etc.
- **Request & Response:**
  - `request.json()`: Reads the data sent from the frontend.
  - `NextResponse.json()`: Sends a JSON response back to the frontend.

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json(); // Get data
  // ... do something ...
  return NextResponse.json({ message: "Success" }); // rSend response
}
```

## 2. Validation with Zod

We use a library called **Zod** to check if the data sent by the user is correct. This prevents bad data from crashing our server.

- **Schema:** We define a "shape" (schema) that the data *must* match.
- **`safeParse`:** We use this to check the data. If it fails, `result.success` will be false.

```typescript
import { z } from 'zod';

// Define the rule
const contactSchema = z.object({
    name: z.string().min(1, 'Name is required'), // Must be a string, at least 1 char
    email: z.string().email(), // Must be a valid email format
});

// Check the data
const result = contactSchema.safeParse(body);
```

## 3. Sending Emails with Nodemailer

**Nodemailer** is the standard library for sending emails from Node.js applications.

1. **Transporter:** This is the configuration for your email provider (like Gmail, Outlook, or a custom SMTP). We use environment variables (`process.env...`) so we don't accidentally share passwords.
2. **Mail Options:** Defines who sends it, who receives it, and the content (`subject`, `text`, `html`).
3. **`transporter.sendMail`:** The function that actually sends the email.

## 4. Environment Variables (`.env`)

Never write secrets (passwords, API keys) directly in your code.

- **Bad:** `pass: "mySecretPassword123"`
- **Good:** `pass: process.env.SMTP_PASS`

These are stored in your `.env` file (which is hidden from Git) and loaded automatically by Next.js.

---

## 5. Practice Challenge

To ensure you understand the code, try this challenge:

**Goal:** Add a "Company Name" field to the contact form.

1. **Update validation:** Add `companyName: z.string().optional()` to the schema in `route.ts`.
2. **Update destructuring:** Add `companyName` to the line `const { name, ... } = result.data`.
3. **Update email:** Pass `companyName` to the `generateEmailTemplate` function.
4. **Update Template:** Edit `src/lib/email-template.ts` to accept the new prop and display it in the HTML.
