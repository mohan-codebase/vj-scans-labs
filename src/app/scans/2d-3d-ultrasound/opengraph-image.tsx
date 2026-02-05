import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'Ultrasound Scan Services';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: '2D & 3D Ultrasound',
        subtitle: 'Safe & Accurate Ultrasound Imaging',
    });
}
