import React from 'react';
import type { Category } from '../Types/menuBuilder.type';

interface CategoryCardProps {
  category: Category;
  isSelected: boolean;
  itemCount: number;
  onSelect: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onToggleActive: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  isSelected,
  itemCount,
  onSelect,
  onEdit,
  onDelete,
  onToggleActive,
}) => {
  return (
    <div
      onClick={onSelect}
      className={`group relative bg-white rounded-2xl p-6 border-2 transition-all duration-200 cursor-pointer ${isSelected
        ? 'border-purple-500 shadow-lg shadow-purple-500/20'
        : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
        }`}
    >
      {/* Active status indicator */}
      <div className="absolute top-4 right-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleActive();
          }}
          className={`w-3 h-3 rounded-full transition-colors ${category.isActive ? 'bg-emerald-500' : 'bg-gray-300'
            }`}
          title={category.isActive ? 'Active' : 'Inactive'}
        />
      </div>

      {/* Category Icon */}
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
          <path
            d="M4 6h16M4 12h16M4 18h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Category Info */}
      <div className="space-y-2 mb-4">
        <h3 className="text-xl font-bold text-gray-900 font-serif">
          {category.name}
        </h3>
        {category.description && (
          <p className="text-sm text-gray-600 line-clamp-2">
            {category.description}
          </p>
        )}
      </div>

      {/* Item Count */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span>{itemCount} {itemCount === 1 ? 'item' : 'items'}</span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          className="flex-1 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg font-medium hover:bg-purple-100 transition-colors text-sm"
        >
          Edit
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (window.confirm('Are you sure you want to delete this category?')) {
              onDelete();
            }
          }}
          className="px-4 py-2 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-colors text-sm"
        >
          Delete
        </button>
      </div>

      {/* Selected Indicator */}
      {isSelected && (
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" className="text-white">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  );
};
