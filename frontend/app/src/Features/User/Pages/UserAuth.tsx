import { SignupForm } from "./SignUp";
import { LoginForm } from "./Login";
import { useAuthStore } from "../../../store/userAuth.store";

// Main Auth Page Component
export const UserAuthPage: React.FC = () => {
  const { isLogin } = useAuthStore();

  return (
    <div className="min-h-screen bg-linear-to-l from-purple-200 via-lavender-100 to-purple-200 flex items-center justify-center p-4 lg:p-8 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Work+Sans:wght@400;500;600;700&display=swap');
        
        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }
        
        body {
          font-family: 'Work Sans', sans-serif;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
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
        
        .animate-rotate {
          animation: rotate 30s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        
        /* Custom lavender colors */
        .bg-lavender-50 { background-color: #faf7ff; }
        .bg-lavender-100 { background-color: #f3edff; }
        .bg-lavender-500 { background-color: #a78bfa; }
        .bg-lavender-600 { background-color: #8b5cf6; }
        .bg-lavender-700 { background-color: #7c3aed; }
        .text-lavender-600 { color: #8b5cf6; }
        .text-lavender-700 { color: #7c3aed; }
        .border-lavender-500 { border-color: #a78bfa; }
        .shadow-lavender { box-shadow: 0 20px 60px rgba(139, 92, 246, 0.15); }
        
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
      `}</style>

      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large organic shapes */}
        <div className="absolute w-[600px] h-[600px] -top-48 -right-48 bg-gradient-to-br from-lavender-500/20 to-purple-400/20 organic-blob animate-float blur-3xl" />
        <div className="absolute w-[500px] h-[500px] -bottom-32 -left-32 bg-gradient-to-tr from-lavender-600/15 to-violet-500/15 organic-blob-2 animate-float-delayed blur-3xl" />
        <div className="absolute w-[400px] h-[400px] top-1/3 right-1/4 bg-gradient-to-bl from-purple-500/10 to-lavender-500/10 organic-blob-3 animate-float-slow blur-2xl" />

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-lavender-500/40 rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-purple-500/40 rounded-full animate-float-delayed" />
        <div className="absolute top-1/2 left-2/3 w-4 h-4 bg-lavender-600/30 rounded-full animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-violet-500/35 rounded-full animate-float" />

        {/* Geometric accents */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-lavender-500/20 organic-blob animate-rotate" />
        <div className="absolute bottom-32 left-32 w-24 h-24 border border-purple-500/15 organic-blob-2 animate-rotate" style={{ animationDirection: 'reverse' }} />

        {/* Gradient mesh effect */}
        <div className="absolute inset-0 bg-linear-to-tr from-purple-500 via-lavender-500/5 to-transparent animate-pulse-slow" />
      </div>

      <div className="w-full max-w-6xl bg-black/10 backdrop-blur-xl rounded-[2rem] shadow-lavender overflow-hidden grid lg:grid-cols-2 animate-slideUp relative z-10 border border-lavender-500/10">
        {/* Brand Side */}
        <div className="relative bg-gradient-to-br from-lavender-600 via-lavender-700 to-purple-700 p-8 lg:p-16 text-white overflow-hidden flex items-center justify-center">
          <div className="relative z-10 max-w-md">
            <div className="flex items-center gap-4 mb-10 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
              {/* Canopy Logo - Tree/Umbrella inspired */}
              <div className="relative w-14 h-14 flex items-center justify-center">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="text-white drop-shadow-lg">
                  {/* Tree canopy layers */}
                  <path d="M28 10 C20 10, 16 14, 16 20 C16 26, 20 30, 28 30 C36 30, 40 26, 40 20 C40 14, 36 10, 28 10 Z" fill="currentColor" fillOpacity="0.9" />
                  <path d="M28 18 C22 18, 19 21, 19 25 C19 29, 22 32, 28 32 C34 32, 37 29, 37 25 C37 21, 34 18, 28 18 Z" fill="currentColor" fillOpacity="0.7" />
                  <path d="M28 24 C24 24, 22 26, 22 28 C22 30, 24 32, 28 32 C32 32, 34 30, 34 28 C34 26, 32 24, 28 24 Z" fill="currentColor" fillOpacity="0.5" />
                  {/* Trunk */}
                  <rect x="26" y="32" width="4" height="14" rx="2" fill="currentColor" />
                </svg>
              </div>
              <div>
                <h1 className="text-5xl font-bold font-serif tracking-tight leading-none">
                  Canopy
                </h1>
                <p className="text-xs tracking-[0.2em] uppercase opacity-90 mt-0.5 font-medium">Kiosk Management</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-12 opacity-95 opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards]">
              Streamline your menu inventory with elegant simplicity. Manage your kiosk operations under one beautiful canopy.
            </p>

            <div className="space-y-5 opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
                    <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-base mb-1">Real-time Inventory</div>
                  <div className="text-sm opacity-80">Track stock levels instantly</div>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
                    <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M7 3v14M13 3v14M3 7h14M3 13h14" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-base mb-1">Menu Management</div>
                  <div className="text-sm opacity-80">Update menus effortlessly</div>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
                    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2" />
                    <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-base mb-1">Analytics Dashboard</div>
                  <div className="text-sm opacity-80">Insights at your fingertips</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements on brand side */}
          <div className="absolute w-80 h-80 -top-32 -right-32 bg-white/10 organic-blob backdrop-blur-2xl animate-float opacity-60" />
          <div className="absolute w-64 h-64 -bottom-20 -left-20 bg-white/10 organic-blob-2 backdrop-blur-2xl animate-float-delayed opacity-40" />
          <div className="absolute w-48 h-48 top-1/2 -right-12 bg-white/10 organic-blob-3 backdrop-blur-2xl animate-float-slow opacity-30" />

          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
              backgroundSize: '32px 32px'
            }} />
          </div>
        </div>

        {/* Form Side */}
        <div className="p-8 lg:p-16 flex items-center justify-center bg-gradient-to-br from-white/95 to-lavender-50/50 backdrop-blur-sm">
          <div className="w-full max-w-md">
            {isLogin ? <LoginForm /> : <SignupForm />}
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lavender-500/30 to-transparent" />
    </div>
  );
};
