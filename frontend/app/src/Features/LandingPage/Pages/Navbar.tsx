import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-purple-500/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 56 56" fill="none" className="text-purple-600">
                <path d="M28 10 C20 10, 16 14, 16 20 C16 26, 20 30, 28 30 C36 30, 40 26, 40 20 C40 14, 36 10, 28 10 Z" fill="currentColor" fillOpacity="0.9" />
                <path d="M28 18 C22 18, 19 21, 19 25 C19 29, 22 32, 28 32 C34 32, 37 29, 37 25 C37 21, 34 18, 28 18 Z" fill="currentColor" fillOpacity="0.7" />
                <path d="M28 24 C24 24, 22 26, 22 28 C22 30, 24 32, 28 32 C32 32, 34 30, 34 28 C34 26, 32 24, 28 24 Z" fill="currentColor" fillOpacity="0.5" />
                <rect x="26" y="32" width="4" height="14" rx="2" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold font-serif text-gray-900 tracking-tight">
                Canopy
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Testimonials
            </a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              About
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2.5 text-gray-700 font-semibold hover:text-purple-600 transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-purple-500/10 bg-white/95 backdrop-blur-xl">
          <div className="px-4 py-6 space-y-4">
            <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium transition-colors">
              Features
            </a>
            <a href="#pricing" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium transition-colors">
              Testimonials
            </a>
            <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium transition-colors">
              About
            </a>
            <div className="pt-4 space-y-3 border-t border-purple-500/10">
              <button className="w-full px-6 py-3 text-gray-700 font-semibold hover:bg-purple-50 rounded-lg transition-colors">
                Sign In
              </button>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
