
interface EmailTemplateProps {
  name: string;
  phone: string;
  email?: string;
  package?: string;
  message?: string;
  source?: string;
  siteUrl?: string;
}

export function generateEmailTemplate({
  name,
  phone,
  email,
  package: selectedPackage,
  message,
  source,
  siteUrl = 'https://vj-scans-labs.vercel.app',
}: EmailTemplateProps): string {
  const currentYear = new Date().getFullYear();
  const primaryColor = '#0961A1'; // VJ Scans Blue
  const accentColor = '#F98D1B'; // VJ Scans Orange
  const backgroundColor = '#f3f4f6';
  const containerColor = '#ffffff';

  // Changing the implementation to use the new colors and logo
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: ${backgroundColor};
      color: #333333;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: ${containerColor};
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    .header {
      background-color: #ffffff;
      padding: 32px 20px;
      text-align: center;
      border-bottom: 4px solid ${primaryColor};
    }
    .logo {
      max-height: 60px;
      width: auto;
      margin-bottom: 20px;
    }
    .header h1 {
      color: ${primaryColor};
      margin: 0;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
    .content {
      padding: 32px 24px;
    }
    .field-group {
      margin-bottom: 24px;
    }
    .label {
      display: block;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #6b7280;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .value {
      background-color: #f9fafb;
      border-left: 4px solid ${accentColor};
      padding: 12px 16px;
      font-size: 16px;
      color: #111827;
      background-color: #ffffff;
      border: 1px solid #e5e7eb;
      border-left: 4px solid ${accentColor};
    }
    .message-value {
      min-height: 80px;
      white-space: pre-wrap;
    }
    .footer {
      background-color: #f9fafb;
      padding: 24px;
      text-align: center;
      border-top: 1px solid #e5e7eb;
    }
    .footer p {
      margin: 0;
      font-size: 12px;
      color: #9ca3af;
    }
    .highlight {
      color: ${primaryColor};
      font-weight: 600;
    }
    a {
      color: ${primaryColor};
      text-decoration: none;
      font-weight: 500;
    }
    a:hover {
      text-decoration: underline;
    }
    .btn {
       display: inline-block;
       background-color: ${accentColor};
       color: white;
       padding: 10px 20px;
       border-radius: 6px;
       text-decoration: none;
       font-weight: bold;
       margin-top: 5px;
    }
  </style>
</head>
<body>
  <div style="background-color: ${backgroundColor}; padding: 20px;">
    <div class="container" style="background-color: #ffffff; max-width: 600px; margin: 0 auto; border-radius: 12px; overflow: hidden; font-family: sans-serif;">
      
      <!-- Header -->
      <div class="header" style="background-color: #ffffff; padding: 30px 20px; text-align: center; border-bottom: 4px solid ${primaryColor};">
        <!-- Logo -->
        <img src="${siteUrl}/images/vj-scans-logo.png" alt="VJ Scans & Labs" width="150" style="display: block; margin: 0 auto 15px auto; max-width: 200px; height: auto;" />
        
        <h1 style="color: ${primaryColor}; margin: 0; font-size: 24px;">New Request</h1>
        <p style="color: #6b7280; margin: 10px 0 0 0; font-size: 14px;">
          Received from: <span style="font-weight: bold; color: ${accentColor};">${source || 'Website'}</span>
        </p>
      </div>

      <!-- Content -->
      <div class="content" style="padding: 30px;">
        
        <div class="field-group" style="margin-bottom: 20px;">
          <div class="label" style="font-size: 11px; text-transform: uppercase; color: #6b7280; margin-bottom: 6px; font-weight: bold;">Client Name</div>
          <div class="value" style="background-color: #ffffff; padding: 12px; border: 1px solid #e5e7eb; border-left: 4px solid ${accentColor}; border-radius: 4px;">
            <strong>${name}</strong>
          </div>
        </div>

        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
            <div class="field-group" style="flex: 1; min-width: 200px; margin-bottom: 20px;">
            <div class="label" style="font-size: 11px; text-transform: uppercase; color: #6b7280; margin-bottom: 6px; font-weight: bold;">Phone Number</div>
            <div class="value" style="background-color: #ffffff; padding: 12px; border: 1px solid #e5e7eb; border-left: 4px solid ${accentColor}; border-radius: 4px;">
                <a href="tel:${phone}" style="color: ${primaryColor}; text-decoration: none;">${phone}</a>
            </div>
            </div>

            <div class="field-group" style="flex: 1; min-width: 200px; margin-bottom: 20px;">
            <div class="label" style="font-size: 11px; text-transform: uppercase; color: #6b7280; margin-bottom: 6px; font-weight: bold;">Email Address</div>
            <div class="value" style="background-color: #ffffff; padding: 12px; border: 1px solid #e5e7eb; border-left: 4px solid ${accentColor}; border-radius: 4px;">
                <a href="mailto:${email || ''}" style="color: ${primaryColor}; text-decoration: none;">${email || 'Not provided'}</a>
            </div>
            </div>
        </div>

        <div class="field-group" style="margin-bottom: 20px;">
          <div class="label" style="font-size: 11px; text-transform: uppercase; color: #6b7280; margin-bottom: 6px; font-weight: bold;">Selected Package / Service</div>
          <div class="value" style="background-color: #ffffff; padding: 12px; border: 1px solid #e5e7eb; border-left: 4px solid ${accentColor}; border-radius: 4px;">
            ${selectedPackage || 'None selected'}
          </div>
        </div>

        <div class="field-group" style="margin-bottom: 0;">
          <div class="label" style="font-size: 11px; text-transform: uppercase; color: #6b7280; margin-bottom: 6px; font-weight: bold;">Message</div>
          <div class="value message-value" style="background-color: #ffffff; padding: 12px; border: 1px solid #e5e7eb; border-left: 4px solid ${accentColor}; border-radius: 4px; min-height: 60px;">
            ${message || 'No additional message provided.'}
          </div>
        </div>

      </div>

      <!-- Footer -->
      <div class="footer" style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
        <p style="font-size: 14px; font-weight: 600; color: ${primaryColor}; margin-bottom: 5px;">VJ Scans & Labs</p>
        <p style="font-size: 12px; color: #9ca3af; margin-bottom: 5px;">Automated Notification System</p>
        <p style="font-size: 11px; color: #d1d5db;">&copy; ${currentYear} All rights reserved.</p>
      </div>
      
    </div>
  </div>
</body>
</html>
  `;
}
