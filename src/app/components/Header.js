"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { portfolioData } from '@/app/data/portfolioData';
import Link from "next/link";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) { // if scroll down hide the navbar
          setIsVisible(false);
        } else { // if scroll up show the navbar
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Blog', 'Contact'];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md z-50 shadow-lg shadow-black/20 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white tracking-widest">
            {portfolioData.name.split(' ')[0]}.
          </Link>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={item === 'Blog' ? '/blog' : `/#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition duration-300 font-medium"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(true)} className="text-gray-300 hover:text-cyan-400" aria-label="Open menu">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: mobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-full max-w-xs bg-slate-900/95 backdrop-blur-lg z-50 p-8 md:hidden"
      >
        <div className="flex justify-end mb-12">
          <button onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-cyan-400" aria-label="Close menu">
            <X size={32} />
          </button>
        </div>
        <nav className="flex flex-col space-y-8 text-center">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={item === 'Blog' ? '/blog' : `/#${item.toLowerCase()}`}
              className="text-2xl font-semibold text-gray-200 hover:text-cyan-400 transition duration-300"
              onClick={() => setMobileMenuOpen(false)} // Close menu on click
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-6">
           <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400"><Linkedin size={24} /></a>
           <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400"><Github size={24} /></a>
           <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-400 hover:text-cyan-400"><Mail size={24} /></a>
        </div>
      </motion.div>
    </>
  );
};