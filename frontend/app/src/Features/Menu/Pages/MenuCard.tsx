import React from 'react';

export interface Menu {
  menuName: string;
  id?: string
  createdAt?: string;
}

interface MenuCardProps {
  menu: Menu;
  onMenuClick: (menuName: string) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ menu, onMenuClick }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  return (
    <button
      onClick={() => onMenuClick(menu.menuName)}
      className="group relative w-full aspect-square rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-purple-300/50 hover:border-purple-500 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-between p-6">
        {/* Top Section - Icon */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-purple-500 to-purple-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Bottom Section - Info */}
        <div className="w-full space-y-3">
          {/* Menu Name */}
          <h3 className="text-xl font-bold font-serif text-gray-900 truncate px-2">
            {menu.menuName}
          </h3>

          {/* Metadata */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>Created {formatDate(menu.createdAt as string)}</span>
            </div>
          </div>

          {/* Action Indicator */}
          <div className="flex items-center justify-center gap-2 text-purple-600 font-medium text-sm group-hover:gap-3 transition-all">
            <span>Manage Menu</span>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-purple-400/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-purple-400/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-purple-400/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-purple-400/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </button>
  );
};
