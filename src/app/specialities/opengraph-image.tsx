import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'VJ Scans Specialities';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'Our Specialities',
        subtitle: 'Expert Medical Care Across Disciplines',
    });
}
