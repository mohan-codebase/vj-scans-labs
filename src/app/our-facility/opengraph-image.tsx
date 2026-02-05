import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'VJ Scans & Labs Facilities';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'Our Facility',
        subtitle: 'State-of-the-Art Diagnostic Equipment',
    });
}
