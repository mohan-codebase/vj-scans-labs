import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'Clinical Genetics Services';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'Clinical Genetics',
        subtitle: 'Advanced Genetic Diagnostic Services',
    });
}
