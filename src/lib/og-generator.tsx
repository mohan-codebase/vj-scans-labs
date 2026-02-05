import { ImageResponse } from 'next/og';

export const alt = 'VJ Scans & Labs';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function OgImageGenerator({
    title,
    subtitle = 'Advanced Diagnostic Services',
}: {
    title: string;
    subtitle?: string;
}) {
    // Fetch the local image. 
    // Note: logic relies on the file being at public/images/vj-scans-logo.png relative to project root
    // We use import.meta.url which is in src/lib, so we go up two levels to get to src, then up one to root, then public.
    // actually ../../public works from src/lib
    const logoData = await fetch(new URL('../../public/images/vj-scans-logo.png', import.meta.url)).then(
        (res) => res.arrayBuffer()
    );

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* @ts-ignore */}
                <img
                    src={logoData as any}
                    alt="VJ Scans Logo"
                    width={300}
                    height={100}
                    style={{
                        objectFit: 'contain',
                        marginBottom: '40px'
                    }}
                />
                <h1
                    style={{
                        fontSize: 60,
                        fontWeight: 900,
                        color: '#0F172A',
                        margin: 0,
                        padding: '0 20px',
                        textAlign: 'center',
                        lineHeight: 1.2,
                    }}
                >
                    {title}
                </h1>
                <p
                    style={{
                        fontSize: 30,
                        color: '#64748B',
                        margin: '20px 0 0 0',
                        fontWeight: 500,
                        textAlign: 'center',
                        padding: '0 40px',
                    }}
                >
                    {subtitle}
                </p>
            </div>
        ),
        {
            ...size,
        }
    );
}
