import React, { useState } from 'react';
import { Header } from '../../Header/Header';
import { Footer } from '../../Footer/Footer';
import { MenuCreationBox } from './MenuBox';
import { MenuCard } from './MenuCard';
import type { Menu } from './MenuCard';
import { addMenu } from '../Api/MenuApi';

type addMenuResponseType = {
  data: {
    createMenuResponse: Menu
  }
}
export const MenuCreationPage: React.FC = () => {
  // State to hold existing menus - you'll fetch this from backend
  const [menus, setMenus] = useState<Menu[]>([]);

  // Handler for menu creation - you'll replace this with actual backend call
  const handleCreateMenu = async (menuName: string, creationDate: string) => {

    const menuData = {
      menuName: menuName,
      createdAt: creationDate
    }
    try {
      const addMenuResponse: addMenuResponseType = await addMenu(menuData)

      console.log("m response", addMenuResponse)
      const newMenu = addMenuResponse.data.createMenuResponse

      setMenus([...menus, newMenu]);

      // TODO: Add your redirect logic here if needed
      // Example:
      // router.push(`/menu/${newMenu.id}`);
    } catch (error) {
      console.warn("Error while adding menu", error)
    }

  };

  // Handler for when a menu card is clicked
  const handleMenuClick = (menuId: string) => {
    console.log('Menu clicked:', menuId);
    // TODO: Add your navigation logic here
    // Example:
    // router.push(`/menu/${menuId}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-purple-100 to-purple-100 flex flex-col relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Work+Sans:wght@400;500;600;700&display=swap');
        
        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }
        
        body {
          font-family: 'Work Sans', sans-serif;
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
        
        /* Custom purple colors */
        .bg-purple-50 { background-color: #faf7ff; }
        .bg-purple-100 { background-color: #f3edff; }
        .bg-purple-200 { background-color: #e9d5ff; }
        .bg-purple-400 { background-color: #c084fc; }
        .bg-purple-500 { background-color: #a78bfa; }
        .bg-purple-600 { background-color: #8b5cf6; }
        .bg-purple-700 { background-color: #7c3aed; }
        .text-purple-600 { color: #8b5cf6; }
        .text-purple-700 { color: #7c3aed; }
        .border-purple-200 { border-color: #e9d5ff; }
        .border-purple-400 { border-color: #c084fc; }
        .border-purple-500 { border-color: #a78bfa; }
        .ring-purple-100 { --tw-ring-color: #f3e8ff; }
        
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
        <div className="absolute w-[500px] h-[500px] -top-32 -right-32 bg-linear-to-br from-purple-500/15 to-purple-400/15 organic-blob animate-float blur-3xl" />
        <div className="absolute w-[400px] h-[400px] -bottom-24 -left-24 bg-linear-to-tr from-purple-600/10 to-violet-500/10 organic-blob-2 animate-float-delayed blur-3xl" />
        <div className="absolute w-[350px] h-[350px] top-1/3 right-1/4 bg-linear-to-bl from-purple-500/8 to-purple-500/8 organic-blob-3 animate-float-slow blur-2xl" />

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500/30 rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-purple-500/30 rounded-full animate-float-delayed" />
        <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-purple-600/25 rounded-full animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-violet-500/25 rounded-full animate-float" />

        {/* linear mesh effect */}
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-purple-500/5 to-transparent animate-pulse-slow" />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 px-4 py-12 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold font-serif text-gray-900 mb-4">
              Menu Management
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create and manage your business menus. Each menu represents an isolated business with its own inventory.
            </p>
          </div>

          {/* Menus Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {/* Existing Menu Cards */}
            {menus.map((menu, index) => (
              <MenuCard
                key={index}
                menu={menu}
                onMenuClick={handleMenuClick}
              />
            ))}

            {/* Create New Menu Box */}
            <MenuCreationBox onCreateMenu={handleCreateMenu} />
          </div>

          {/* Info Cards - Only show if no menus exist */}
          {menus.length === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Isolated Menus</h3>
                <p className="text-sm text-gray-600">Each menu is completely separate with its own items and inventory tracking.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Setup</h3>
                <p className="text-sm text-gray-600">Get started in seconds. Create your menu and start adding items immediately.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
                <p className="text-sm text-gray-600">Track performance and inventory levels across all your menus in real-time.</p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
