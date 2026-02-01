import React from 'react';
import { Navbar } from './Navbar.tsx';
import { Hero } from './Hero.tsx';
import { Stats } from './Stats.tsx';
import { Features } from './Features.tsx';
import { CTA } from './Cta.tsx';
import { LandingFooter } from './Footer.tsx';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-white via-purple-50/30 to-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700;800&family=Work+Sans:wght@400;500;600;700&display=swap');
        
        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }
        
        body {
          font-family: 'Work Sans', sans-serif;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 15s ease-in-out infinite;
          animation-delay: -5s;
        }
        
        .animate-float-slow {
          animation: float 18s ease-in-out infinite;
          animation-delay: -10s;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        
        /* Custom lavender colors */
        .bg-lavender-50 { background-color: #faf7ff; }
        .bg-lavender-100 { background-color: #f3edff; }
        .bg-lavender-200 { background-color: #e9d5ff; }
        .bg-lavender-300 { background-color: #d8b4fe; }
        .bg-lavender-400 { background-color: #c084fc; }
        .bg-lavender-500 { background-color: #a78bfa; }
        .bg-lavender-600 { background-color: #8b5cf6; }
        .bg-lavender-700 { background-color: #7c3aed; }
        .text-lavender-600 { color: #8b5cf6; }
        .text-lavender-700 { color: #7c3aed; }
        .text-lavender-100 { color: #f3edff; }
        .border-lavender-200 { border-color: #e9d5ff; }
        .border-lavender-300 { border-color: #d8b4fe; }
        .border-lavender-500 { border-color: #a78bfa; }
        .ring-lavender-100 { --tw-ring-color: #f3e8ff; }
        
        /* Organic shapes */
        .organic-blob {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }
        
        .organic-blob-2 {
          border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
        }
        
        .organic-blob-3 {
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}
        <Stats />

        {/* Features Section */}
        <Features />

        {/* CTA Section */}
        <CTA />
      </main>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
};
