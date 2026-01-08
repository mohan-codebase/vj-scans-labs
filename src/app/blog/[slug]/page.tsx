import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';
import { Calendar, User, ChevronLeft, Share2 } from 'lucide-react';
import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>;
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | VJ Scans & Labs Blog`,
        description: post.excerpt,
    };
}

// Generate static params for classic SSG behavior
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white pt-32 pb-16 font-sans">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                {/* Breadcrumb / Back Link */}
                <div className="mb-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-gray-500 hover:text-[#0961A1] transition-colors mb-6"
                    >
                        <ChevronLeft size={20} />
                        <span className="font-medium">Back to Blog</span>
                    </Link>
                </div>

                {/* Article Header */}
                <header className="mb-10 text-center">
                    <div className="inline-block bg-blue-50 text-[#0961A1] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                        {post.category}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                            <User size={18} />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric',
                                })}
                            </span>
                        </div>
                    </div>
                </header>

                {/* Main Image */}
                {post.image && (
                    <div className="mb-10 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-sm">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Article Content */}
                <article className="max-w-none">
                    <div
                        dangerouslySetInnerHTML={{ __html: post.content }}
                        className="
                            [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:text-[#0961A1] [&>h2]:mb-4 [&>h2]:mt-8 
                            [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-bold [&>h3]:text-gray-800 [&>h3]:mb-3 [&>h3]:mt-6 
                            [&>p]:text-gray-600 [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-lg
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:text-gray-600 [&>ul]:text-lg
                            [&>li]:mb-2
                            [&>strong]:font-bold [&>strong]:text-gray-800
                        "
                    />
                </article>

                {/* Share / Footer of Article */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
                    <div className="text-gray-500 font-medium">
                        Share this article:
                    </div>
                    <div className="flex gap-4">
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-[#0961A1] transition-colors" aria-label="Share">
                            <Share2 size={20} />
                        </button>
                        {/* Add real share links if needed */}
                    </div>
                </div>
            </div>
        </main>
    );
}
