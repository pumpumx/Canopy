import React, { useState, useEffect } from 'react';
import type { MenuItem } from '../Types/menuBuilder.type.ts';

interface MenuItemFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<MenuItem, 'id' | 'createdAt' | 'updatedAt'>) => void;
  categoryId: string;
  initialData?: MenuItem | null;
}

export const MenuItemForm: React.FC<MenuItemFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  categoryId,
  initialData,
}) => {
  const [formData, setFormData] = useState({
    categoryId: categoryId,
    name: '',
    description: '',
    price: 0,
    image: '',
    isAvailable: true,
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        categoryId: initialData.categoryId,
        name: initialData.name,
        description: initialData.description,
        price: initialData.price,
        image: initialData.image || '',
        isAvailable: initialData.isAvailable,
      });
    } else {
      setFormData({
        categoryId: categoryId,
        name: '',
        description: '',
        price: 0,
        image: '',
        isAvailable: true,
      });
    }
  }, [initialData, categoryId, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-scaleIn my-8">
        {/* Header */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-700 px-8 py-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold font-serif">
                {initialData ? 'Edit Menu Item' : 'Add New Item'}
              </h2>
              <p className="text-sm opacity-90 mt-1">
                {initialData ? 'Update item details' : 'Add a new item to your menu'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Item Name */}
          <div className="space-y-2">
            <label htmlFor="itemName" className="block text-sm font-semibold text-gray-700">
              Item Name <span className="text-red-500">*</span>
            </label>
            <input
              id="itemName"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., Whopper Burger"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label htmlFor="itemDescription" className="block text-sm font-semibold text-gray-700">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="itemDescription"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your item..."
              rows={3}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none"
              required
            />
          </div>

          {/* Price and Image URL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="price" className="block text-sm font-semibold text-gray-700">
                Price ($) <span className="text-red-500">*</span>
              </label>
              <input
                id="price"
                type="number"
                step="0.01"
                min="0"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                placeholder="0.00"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="image" className="block text-sm font-semibold text-gray-700">
                Image URL
              </label>
              <input
                id="image"
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
              />
            </div>
          </div>


          {/* Checkboxes */}
          <div className="space-y-3 p-4 bg-purple-50/50 rounded-xl">
            <div className="flex items-center gap-3">
              <input
                id="isAvailable"
                type="checkbox"
                checked={formData.isAvailable}
                onChange={(e) => setFormData({ ...formData, isAvailable: e.target.checked })}
                className="w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <label htmlFor="isAvailable" className="text-sm font-medium text-gray-700">
                Available for order
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all"
            >
              {initialData ? 'Update Item' : 'Add Item'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
