import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'Infectious Disease Diagnostics';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'Infectious Disease',
        subtitle: 'Accurate Detection & Diagnosis',
    });
}
