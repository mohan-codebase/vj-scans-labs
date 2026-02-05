import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'Onco Diagnostics Services';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'Onco Diagnostics',
        subtitle: 'Advanced Cancer Screening & Diagnosis',
    });
}
