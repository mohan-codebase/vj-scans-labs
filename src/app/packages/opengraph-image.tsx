import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'VJ Scans Health Checkup Packages';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'VJ Scans Health Packages',
        subtitle: 'Comprehensive Health Checkups for You',
    });
}
