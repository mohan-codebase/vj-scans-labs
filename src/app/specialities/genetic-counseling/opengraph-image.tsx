import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'Genetic Counseling Services';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'Genetic Counseling',
        subtitle: 'Expert Guidance for Genetic Conditions',
    });
}
