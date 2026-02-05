import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'ECG Services';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'ECG',
        subtitle: 'Electrocardiogram Heart Monitoring',
    });
}
