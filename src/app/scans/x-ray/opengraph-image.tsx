import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'X-Ray Services';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'Digital X-Ray',
        subtitle: 'High-Resolution Radiography',
    });
}
