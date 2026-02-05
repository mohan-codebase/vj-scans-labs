import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'VJ Scans & Labs Health Packages';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'Health Packages',
        subtitle: 'Comprehensive Health Checkups for You',
    });
}
