import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'DEXA Scan Services';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'DEXA Scan',
        subtitle: 'Bone Density & Body Composition Analysis',
    });
}
