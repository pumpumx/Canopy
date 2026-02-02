import React from 'react';
import type { MenuItem } from '../Types/menuBuilder.type.ts';

interface MenuItemCardProps {
  item: MenuItem;
  onEdit: () => void;
  onDelete: () => void;
  onToggleAvailability: () => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  onEdit,
  onDelete,
  onToggleAvailability,
}) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200">
      {/* Image Section */}
      <div className="relative h-48 bg-linear-to-br from-purple-100 to-purple-100 overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-purple-400">
              <path
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}

        {/* Availability Badge */}
        <div className="absolute top-3 right-3">
          <button
            onClick={onToggleAvailability}
            className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm transition-colors ${item.isAvailable
              ? 'bg-emerald-500/90 text-white'
              : 'bg-gray-800/90 text-white'
              }`}
          >
            {item.isAvailable ? 'Available' : 'Out of Stock'}
          </button>
        </div>

        {/* Content Section */}
        <div className="p-5 space-y-3">
          {/* Title and Price */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold text-gray-900 font-serif flex-1">
              {item.name}
            </h3>
            <div className="flex flex-col items-end">
              <span className="text-2xl font-bold text-purple-600">
                ${item.price.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {item.description}
          </p>


          {/* Action Buttons */}
          <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
            <button
              onClick={onEdit}
              className="flex-1 px-4 py-2.5 bg-purple-50 text-purple-700 rounded-xl font-semibold hover:bg-purple-100 transition-colors text-sm flex items-center justify-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Edit
            </button>
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to delete this item?')) {
                  onDelete();
                }
              }}
              className="px-4 py-2.5 bg-red-50 text-red-600 rounded-xl font-semibold hover:bg-red-100 transition-colors text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </div>
  );
};
