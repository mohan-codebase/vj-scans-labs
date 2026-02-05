import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'TMT Services';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'TMT (Treadmill Test)',
        subtitle: 'Cardiac Stress Testing Services',
    });
}
