import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'About VJ Scans & Labs';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'About VJ Scans',
        subtitle: 'Leading Diagnostic Centre in Chennai',
    });
}
