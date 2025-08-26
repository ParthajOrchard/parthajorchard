"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface BlobStyle {
  left: string;
  top: string;
  width: string;
  height: string;
  animation: string;
  animationDelay: string;
}

export function CTASection() {
  const [blobs, setBlobs] = useState<BlobStyle[]>([]);

  useEffect(() => {
    const generatedBlobs = [...Array(10)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 100 + 50}px`,
      height: `${Math.random() * 100 + 50}px`,
      animation: `float ${Math.random() * 6 + 8}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 4}s`,
    }));
    setBlobs(generatedBlobs);
  }, []);

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #059669, #0d9488, #7c3aed, #059669)',
          backgroundSize: '300% 300%',
          animation: 'gradientShift 12s ease infinite'
        }}
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 overflow-hidden">
        {blobs.map((style, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={style}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">
          Ready to Start Your Import Journey?
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow">
          Get in touch with our export specialists to discuss your requirements and receive a customized quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-lg mx-auto">
          <Button
            asChild
            size="lg"
            className="bg-white/95 text-gray-900 hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl w-full sm:w-auto backdrop-blur-sm font-semibold px-8 py-3"
          >
            <Link href="/contact">
              Get Quote Now
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/80 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 w-full sm:w-auto bg-transparent backdrop-blur-sm font-semibold px-8 py-3"
          >
            <Link href="/certificates">
              View Certifications
            </Link>
          </Button>
        </div>
      </div>
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.7; }
          50% { transform: translate(-20px, -20px) rotate(180deg); opacity: 1; }
        }
      `}</style>
    </section>
  )
}
