import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'Contact VJ Scans & Labs';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'Contact VJ Scans',
        subtitle: 'Get in Touch with Our Team',
    });
}
