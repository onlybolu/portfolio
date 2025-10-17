"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Tag } from 'lucide-react';
import { blogData } from '@/app/data/blogData';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { SpotlightEffect } from '@/app/components/SpotlightEffect';

const Badge = ({ children, icon: Icon, className = "" }) => (
  <span className={`inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 ring-1 ring-inset ring-cyan-500/20 ${className}`}>
    {Icon && <Icon size={12} className="text-cyan-400" />}
    {children}
  </span>
);

const BlogPostCard = ({ post, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 group"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          <Link href={`/blog/${post.slug}`} className="stretched-link">{post.title}</Link>
        </h3>
        <p className="text-slate-300 mb-4 leading-relaxed">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <Badge key={tag} icon={Tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const BlogPage = () => {
  return (
    <div className="bg-slate-900 text-gray-300 min-h-screen font-sans selection:bg-cyan-500/30">
      <SpotlightEffect />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-extrabold text-white text-center mb-4"
        >
          The Digital Ledger
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-slate-400 text-center mb-16"
        >
          Thoughts on code, design, and the future of the web.
        </motion.p>
        <motion.div 
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {blogData.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;