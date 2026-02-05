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
                    background: 'linear-gradient(to bottom right, #0F172A, #1E293B)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#fff',
                        padding: '20px 40px',
                        borderRadius: '20px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                        marginBottom: '40px',
                    }}
                >
                    <img
                        src={logoData as any}
                        alt="VJ Scans Logo"
                        width={80}
                        height={80}
                        style={{
                            marginRight: '20px',
                            objectFit: 'contain'
                        }}
                    />
                    <h1
                        style={{
                            fontSize: 40,
                            fontWeight: 900,
                            color: '#0F172A',
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        VJ Scans & Labs
                    </h1>
                </div>

                <h2
                    style={{
                        fontSize: 70,
                        fontWeight: 900,
                        background: 'linear-gradient(to right, #60A5FA, #2DD4BF)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        margin: 0,
                        padding: '0 40px',
                        textAlign: 'center',
                        lineHeight: 1.1,
                    }}
                >
                    {title}
                </h2>

                <p
                    style={{
                        fontSize: 30,
                        color: '#94A3B8',
                        marginTop: 30,
                        fontWeight: 500,
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
