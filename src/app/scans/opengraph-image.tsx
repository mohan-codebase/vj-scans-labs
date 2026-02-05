import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'VJ Scans Diagnostics';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'Our Scans',
        subtitle: 'Advanced Imaging & Diagnostic Services',
    });
}
