import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'Echocardiogram Services';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'Echocardiogram',
        subtitle: 'Advanced Heart Imaging',
    });
}
