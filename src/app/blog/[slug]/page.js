"use client";

import React from 'react';
import { notFound } from 'next/navigation';
import { blogData } from '@/app/data/blogData';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { SpotlightEffect } from '@/app/components/SpotlightEffect';
import { AOSInit } from '@/app/components/AOSInit';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const Badge = ({ children, icon: Icon, className = "" }) => (
  <span className={`inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 ring-1 ring-inset ring-cyan-500/20 ${className}`}>
    {Icon && <Icon size={12} className="text-cyan-400" />}
    {children}
  </span>
);

const BlogPostPage = ({ params }) => {
  const { slug } = params;
  const post = blogData.find((p) => p.slug === slug);

  // If no post is found, render the 404 page
  if (!post) {
    notFound();
  }

  return (
    <div className="bg-slate-900 text-gray-300 min-h-screen font-sans selection:bg-cyan-500/30">
      <AOSInit />
      <SpotlightEffect />
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="mb-8" data-aos="fade-right">
          <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            <ArrowLeft size={18} />
            Back to all posts
          </Link>
        </div>

        <article>
          <header>
            <h1 
              data-aos="fade-down"
              className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4"
            >
              {post.title}
            </h1>
            <div 
              data-aos="fade-down" data-aos-delay="100"
              className="flex md:flex-row flex-col items-center gap-6 text-slate-400 mb-8"
            >
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Tag size={16} />
                {post.tags.map(tag => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          </header>

          <div
            data-aos="fade-up" data-aos-delay="200"
            className="prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-headings:text-white prose-a:text-cyan-400 hover:prose-a:text-cyan-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
