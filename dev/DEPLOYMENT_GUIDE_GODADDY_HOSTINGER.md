# Deployment Guide: Hostinger & GoDaddy

Since this is a **Next.js application** with a **backend API route** (`/api/contact`) for sending emails, it requires a **Node.js server** to run. You cannot simply upload files to a standard "file manager" like a static HTML website.

Here are the two ways to host this on Hostinger or GoDaddy.

## Option 1: VPS Hosting (Recommended)

**Best for:** Flexibility, Performance, Reliability.
**Product:** Hostinger "KVM VPS" or GoDaddy "Navigated/Generic VPS".

### Steps

1. **Get a VPS**: Purchase a VPS plan (Ubuntu 22.04 or 24.04 is recommended).
2. **Connect via SSH**: Use your terminal: `ssh root@your_server_ip`.
3. **Install Node.js & Nginx**:

    ```bash
    # Update system
    sudo apt update && sudo apt upgrade -y

    # Install Node.js (v18 or v20)
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs

    # Install Nginx (Web Server)
    sudo apt install -y nginx

    # Install PM2 (Process Manager to keep app alive)
    sudo npm install -g pm2
    ```

4. **Deploy Code**:
    * Clone your code to the server (using Git) or upload it using FileZilla/SCP.
    * Navigate to the folder: `cd /path/to/vj-scans-labs`.
    * Install dependencies: `npm install`.
    * Build the app: `npm run build`.
5. **Start Application**:

    ```bash
    pm2 start npm --name "vj-scans" -- start
    pm2 save
    pm2 startup
    ```

6. **Configure Nginx (Reverse Proxy)**:
    * Edit default config: `sudo nano /etc/nginx/sites-available/default`
    * Replace content with:

        ```nginx
        server {
            listen 80;
            server_name yourdomain.com; # Replace with your domain

            location / {
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
            }
        }
        ```

    * Restart Nginx: `sudo systemctl restart nginx`.

---

## Option 2: Shared Hosting with Node.js

**Best for:** Lower cost, easier interface (cPanel/hPanel), but simpler apps.
**Product:** Hostinger "Business Web Hosting" or GoDaddy "cPanel Hosting" (Verify Node.js support first!).

**Steps for Hostinger (hPanel):**

1. **Access hPanel**: Go to Websites > Manage.
2. **Git Configuration**: connect your GitHub repository to pull the latest code.
3. **App Setup**:
    * Navigate to **"Node.js"** in the sidebar.
    * Create a specific Node.js environment (Choose v18 or v20).
    * **Application Root**: Set to your uploaded folder.
    * **Application Startup File**: `node_modules/next/dist/bin/next` (This is tricky on shared hosting, often it is easier to create a custom `server.js`).
4. **Alternative Custom Server**:
    * Since Next.js shared hosting support can be flaky, you might need to create a `server.js` file in your project root:

        ```javascript
        const { createServer } = require('http');
        const { parse } = require('url');
        const next = require('next');

        const dev = process.env.NODE_ENV !== 'production';
        const hostname = 'localhost';
        const port = 3000;
        const app = next({ dev, hostname, port });
        const handle = app.getRequestHandler();

        app.prepare().then(() => {
          createServer(async (req, res) => {
            try {
              const parsedUrl = parse(req.url, true);
              await handle(req, res, parsedUrl);
            } catch (err) {
              console.error('Error occurred handling', req.url, err);
              res.statusCode = 500;
              res.end('internal server error');
            }
          }).listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://${hostname}:${port}`);
          });
        });
        ```

    * Update `package.json` scripts: `"start": "node server.js"`.
    * Build locally (`npm run build`) and upload the `.next`, `public`, `node_modules`, `package.json`, and `server.js` folders/files.
5. **Environment Variables**: Input your `SMTP_HOST`, `SMTP_USER`, etc., in the hosting panel's environment variable section.

---

## Important Nginx/Apache Note

If using **cPanel (GoDaddy)**, you might need an `.htaccess` file if you are not using their Node.js UI manager. However, the Node.js UI manager is the standard way.

## Why not just "Upload Files"?

If you simply "Build Static" (`output: 'export'`), your **Contact Form** and the **"Get Your Appointment" form** (on Home and Packages pages) will stop working because the `/api/contact` code requires a running server to send emails. If you strictly want basic static hosting, you must switch your contact form to a 3rd party service like Formspree or EmailJS and remove the API route.
