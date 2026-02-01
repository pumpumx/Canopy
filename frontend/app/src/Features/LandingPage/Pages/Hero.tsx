import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 pb-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] -top-48 -right-48 bg-gradient-to-br from-purple-500/20 to-purple-400/20 organic-blob animate-float blur-3xl" />
        <div className="absolute w-[500px] h-[500px] -bottom-32 -left-32 bg-gradient-to-tr from-purple-600/15 to-violet-500/15 organic-blob-2 animate-float-delayed blur-3xl" />
        <div className="absolute w-[400px] h-[400px] top-1/3 left-1/2 bg-gradient-to-bl from-purple-500/10 to-purple-500/10 organic-blob-3 animate-float-slow blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fadeIn">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm border border-purple-300/50">
              <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-purple-700">Now Available</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif text-gray-900 leading-tight">
                Elevate Your
                <span className="block bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                  Kiosk Management
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Streamline your menu inventory with elegant simplicity. Manage multiple businesses, track real-time inventory, and grow with confidence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2">
                Get Started Free
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 rounded-2xl font-semibold border-2 border-gray-300 hover:border-purple-500 hover:bg-purple-50 transition-all duration-200 flex items-center justify-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-purple-600">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 border-2 border-white" />
                </div>
                <span className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">2,500+</span> businesses
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className="text-amber-400">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-1">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Right Content - Device Mockup */}
          <div className="relative lg:ml-auto animate-fadeIn animation-delay-200">
            {/* Floating stats cards */}
            <div className="absolute -top-4 -left-4 z-20 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-purple-200/50 animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">+32%</p>
                  <p className="text-xs text-gray-600">Sales Growth</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-4 z-20 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-purple-200/50 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">Real-time</p>
                  <p className="text-xs text-gray-600">Sync Updates</p>
                </div>
              </div>
            </div>

            {/* Main device mockup */}
            <div className="relative">
              {/* Tablet/iPad mockup */}
              <div className="relative mx-auto" style={{ maxWidth: '600px' }}>
                {/* Device frame */}
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
                  {/* Screen */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-50 rounded-[2.3rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="bg-white/80 backdrop-blur-sm px-6 py-3 flex items-center justify-between border-b border-purple-200/30">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 56 56" fill="none" className="text-white">
                            <path d="M28 10 C20 10, 16 14, 16 20 C16 26, 20 30, 28 30 C36 30, 40 26, 40 20 C40 14, 36 10, 28 10 Z" fill="currentColor" fillOpacity="0.9" />
                            <rect x="26" y="30" width="4" height="10" rx="2" fill="currentColor" />
                          </svg>
                        </div>
                        <span className="font-bold text-gray-900 text-sm">Canopy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      </div>
                    </div>

                    {/* Content area */}
                    <div className="p-6 space-y-4">
                      {/* Menu cards grid */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-purple-200/50 shadow-sm">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-3" />
                          <div className="h-2 bg-gray-200 rounded w-3/4 mb-2" />
                          <div className="h-1.5 bg-gray-100 rounded w-1/2" />
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-purple-200/50 shadow-sm">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-3" />
                          <div className="h-2 bg-gray-200 rounded w-3/4 mb-2" />
                          <div className="h-1.5 bg-gray-100 rounded w-1/2" />
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-purple-200/50 shadow-sm">
                          <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl mb-3" />
                          <div className="h-2 bg-gray-200 rounded w-3/4 mb-2" />
                          <div className="h-1.5 bg-gray-100 rounded w-1/2" />
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border-2 border-dashed border-purple-400 flex items-center justify-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Stats row */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-purple-200/30">
                          <div className="h-1.5 bg-purple-200 rounded w-2/3 mb-1.5" />
                          <div className="h-2.5 bg-purple-400 rounded w-full" />
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-purple-200/30">
                          <div className="h-1.5 bg-purple-200 rounded w-2/3 mb-1.5" />
                          <div className="h-2.5 bg-purple-400 rounded w-full" />
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-purple-200/30">
                          <div className="h-1.5 bg-violet-200 rounded w-2/3 mb-1.5" />
                          <div className="h-2.5 bg-violet-400 rounded w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Device glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-500/20 blur-3xl -z-10 rounded-full scale-105" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
