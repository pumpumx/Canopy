import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-600 to-violet-700" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] -top-48 -left-48 bg-white/10 organic-blob animate-float blur-3xl" />
        <div className="absolute w-[500px] h-[500px] -bottom-32 -right-32 bg-white/10 organic-blob-2 animate-float-delayed blur-3xl" />
        <div className="absolute w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/5 organic-blob-3 animate-float-slow blur-2xl" />

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-float-delayed" />
        <div className="absolute top-1/2 left-2/3 w-4 h-4 bg-white/20 rounded-full animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-white/25 rounded-full animate-float" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">Limited Time Offer</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white leading-tight">
              Ready to Transform Your
              <span className="block">Kiosk Management?</span>
            </h2>
            <p className="text-lg sm:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
              Join 2,500+ businesses already using Canopy. Start your free 14-day trial today—no credit card required.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="group px-8 py-4 bg-white text-purple-700 rounded-2xl font-semibold shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-200 flex items-center gap-2">
              Start Free Trial
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="px-8 py-4 bg-purple-700/50 backdrop-blur-sm text-white rounded-2xl font-semibold border-2 border-white/30 hover:bg-purple-700/70 hover:border-white/50 transition-all duration-200 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
              </svg>
              Schedule Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-white/80">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-gradient-to-t from-purple-600/50 to-transparent blur-3xl" />
      </div>
    </section>
  );
};
