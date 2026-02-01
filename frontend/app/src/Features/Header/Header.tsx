import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="relative bg-white/80 backdrop-blur-xl border-b border-lavender-500/10 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 56 56" fill="none" className="text-lavender-600">
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
              <p className="text-[10px] tracking-[0.15em] uppercase text-lavender-600 font-medium -mt-0.5">
                Kiosk Management
              </p>
            </div>
          </div>

          {/* User Info / Actions */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-lavender-600 transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-current">
                <path d="M10 3a4 4 0 100 8 4 4 0 000-8zM4 15a6 6 0 0112 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="hidden sm:inline">Admin</span>
            </button>
            <button className="p-2 text-gray-500 hover:text-lavender-600 transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-current">
                <path d="M3 10h14M10 3l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
