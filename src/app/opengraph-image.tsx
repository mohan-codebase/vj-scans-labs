import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'VJ Scans & Labs';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
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
                    }}
                >
                    <h1
                        style={{
                            fontSize: 60,
                            fontWeight: 900,
                            background: 'linear-gradient(to right, #2563EB, #06B6D4)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        VJ Scans & Labs
                    </h1>
                </div>
                <p
                    style={{
                        fontSize: 30,
                        color: '#94A3B8',
                        marginTop: 40,
                        fontWeight: 500,
                    }}
                >
                    Advanced Diagnostic Services
                </p>
            </div>
        ),
        {
            ...size,
        }
    );
}
