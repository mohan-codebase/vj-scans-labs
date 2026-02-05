import { ImageResponse } from 'next/og';
import { blogPosts } from '@/lib/blog-data';

export const runtime = 'edge';

export const alt = 'VJ Scans & Labs Blog';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    const title = post?.title || 'VJ Scans & Labs Blog';
    const category = post?.category || 'Healthcare';
    const date = post?.date || new Date().toISOString().split('T')[0];

    // Fetch logo: src/app/blog/[slug] -> ../../../public
    const logoData = await fetch(new URL('../../../../public/images/vj-scans-logo.png', import.meta.url)).then(
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
                    padding: '40px',
                    textAlign: 'center',
                }}
            >
                {/* @ts-ignore */}
                <img
                    src={logoData as any}
                    alt="VJ Scans Logo"
                    width={250}
                    height={80}
                    style={{
                        objectFit: 'contain',
                        marginBottom: '40px'
                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '30px',
                    }}
                >
                    <div
                        style={{
                            background: '#EFF6FF',
                            color: '#2563EB',
                            padding: '8px 20px',
                            borderRadius: '50px',
                            fontSize: 20,
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                        }}
                    >
                        {category}
                    </div>
                </div>

                <h1
                    style={{
                        fontSize: 60,
                        fontWeight: 900,
                        color: '#0F172A',
                        lineHeight: 1.2,
                        margin: '0 0 20px 0',
                        padding: 0,
                        maxWidth: '900px',
                    }}
                >
                    {title}
                </h1>

                <div style={{ color: '#64748B', fontSize: 24, fontWeight: 500 }}>
                    {date}
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
