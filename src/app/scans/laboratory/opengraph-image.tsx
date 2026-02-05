import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'Laboratory Services';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'Laboratory Services',
        subtitle: 'Comprehensive Pathology & Blood Tests',
    });
}
