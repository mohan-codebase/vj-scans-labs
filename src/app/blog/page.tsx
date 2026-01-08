import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Health & Wellness Blog | VJ Scans & Labs',
    description: 'Stay informed with the latest health tips, diagnostic insights, and wellness updates from VJ Scans & Labs Chennai.',
};

export default function BlogListingPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-16 font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#0961A1] mb-6">
                        Health & Wellness Blog
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Expert insights, health tips, and the latest updates from VJ Scans & Labs to help you make informed decisions about your well-being.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                        >
                            {/* Image Placeholder - Since we don't have real images yet, we'll use a gradient or pattern */}
                            <div className="h-48 relative bg-gray-200">
                                {post.image ? (
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="h-full w-full bg-gradient-to-r from-[#0B62A1] to-[#42A5ED] flex items-center justify-center">
                                        <span className="text-white font-bold text-2xl opacity-20">{post.category}</span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <span className="bg-blue-50 text-[#0961A1] px-3 py-1 rounded-full text-xs font-semibold">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </div>
                                </div>

                                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-[#0961A1] transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-1">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <User size={14} />
                                        <span>{post.author}</span>
                                    </div>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="flex items-center gap-1 text-[#0961A1] font-semibold text-sm hover:translate-x-1 transition-transform"
                                    >
                                        Read More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
