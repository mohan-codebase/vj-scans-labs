import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'Male Infertility Services';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'Male Infertility',
        subtitle: 'Comprehensive Diagnostic Support',
    });
}
