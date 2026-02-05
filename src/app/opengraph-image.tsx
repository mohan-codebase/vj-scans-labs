import { ImageResponse } from 'next/og';
import OgImageGenerator from '@/lib/og-generator';

export const runtime = 'edge';

export const alt = 'VJ Scans & Labs';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return OgImageGenerator({
        title: 'VJ Scans & Labs',
        subtitle: 'Advanced Diagnostic Services',
    });
}
