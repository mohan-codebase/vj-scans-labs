import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'VJ Scans & Labs Branches';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'VJ Scans Branches',
        subtitle: 'Find a VJ Scans Center Near You',
    });
}
