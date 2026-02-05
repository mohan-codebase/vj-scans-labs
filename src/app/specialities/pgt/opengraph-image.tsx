import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';
export const alt = 'PGT Services';
export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'PGT',
        subtitle: 'Preimplantation Genetic Testing',
    });
}
