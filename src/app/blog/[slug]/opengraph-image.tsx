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
                    background: 'linear-gradient(to bottom right, #0F172A, #1E293B)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    fontFamily: 'sans-serif',
                    padding: '60px',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div
                        style={{
                            background: '#2563EB',
                            color: 'white',
                            padding: '8px 20px',
                            borderRadius: '50px',
                            fontSize: 20,
                            fontWeight: 600,
                        }}
                    >
                        {category}
                    </div>
                    <div style={{ color: '#94A3B8', fontSize: 20 }}>{date}</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <h1
                        style={{
                            fontSize: 60,
                            fontWeight: 900,
                            color: '#fff',
                            lineHeight: 1.1,
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        {title}
                    </h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '20px' }}>
                        <img
                            src={logoData as any}
                            alt="VJ Scans Logo"
                            width={50}
                            height={50}
                            style={{
                                borderRadius: '50%'
                            }}
                        />
                        <span style={{ color: '#E2E8F0', fontSize: 24, fontWeight: 500 }}>
                            VJ Scans & Labs
                        </span>
                    </div>
                </div>

                <div style={{
                    position: 'absolute',
                    bottom: '60px',
                    right: '60px',
                    opacity: 0.1,
                    fontSize: '150px',
                    fontWeight: 900,
                    color: 'white',
                    transform: 'rotate(-20deg)',
                    zIndex: -1,
                }}>
                    BLOG
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
