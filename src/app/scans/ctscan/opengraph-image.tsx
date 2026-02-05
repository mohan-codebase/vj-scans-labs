import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'CT Scan Services';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'CT Scan',
        subtitle: 'High-Precision Computed Tomography',
    });
}
