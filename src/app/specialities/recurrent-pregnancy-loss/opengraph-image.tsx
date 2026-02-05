import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'RPL Services';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'Recurrent Pregnancy Loss',
        subtitle: 'Advanced Diagnostic Investigation',
    });
}
