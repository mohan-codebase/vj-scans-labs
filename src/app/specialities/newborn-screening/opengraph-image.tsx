import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'Newborn Screening Services';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'Newborn Screening',
        subtitle: 'Early Detection for Better Health',
    });
}
