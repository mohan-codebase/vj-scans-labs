import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'MRI Scan Services';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'MRI Scan',
        subtitle: 'Advanced Magnetic Resonance Imaging',
    });
}
