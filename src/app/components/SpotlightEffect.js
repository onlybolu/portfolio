"use client"
import React, { useState, useEffect } from 'react';

export const SpotlightEffect = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
        window.removeEventListener('resize', checkMobile);
        window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return !isMobile && (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(22, 163, 165, 0.1), transparent 80%)`,
      }}
    />
  );
};