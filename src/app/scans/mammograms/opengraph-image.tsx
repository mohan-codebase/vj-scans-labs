import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'Mammogram Services';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'Mammogram',
        subtitle: 'Breast Cancer Screening & Diagnostics',
    });
}
