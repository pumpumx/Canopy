import React from 'react';
import { useMenuBuilder } from '../Store/menuBuilder.store';
import { CategoryCard } from './MenuCategory';
import { MenuItemForm } from './MenuItemForm';
import { MenuItemCard } from './MenuItemCard';
import { CategoryForm } from './CategoryForm';

export const MenuBuilderPage: React.FC = () => {
  const {
    categories,
    items,
    selectedCategory,
    isAddingCategory,
    isAddingItem,
    editingCategory,
    editingItem,
    addCategory,
    updateCategory,
    deleteCategory,
    setSelectedCategory,
    setIsAddingCategory,
    setEditingCategory,
    addItem,
    updateItem,
    deleteItem,
    setIsAddingItem,
    setEditingItem,
  } = useMenuBuilder();

  const selectedCategoryData = categories.find((cat) => cat.id === selectedCategory);
  const categoryItems = items.filter((item) => item.categoryId === selectedCategory);

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-purple-50/30 to-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700;800&family=Work+Sans:wght@400;500;600;700&display=swap');
        
        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }
        
        body {
          font-family: 'Work Sans', sans-serif;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
        
        /* Custom colors */
        .bg-purple-50 { background-color: #faf7ff; }
        .bg-purple-100 { background-color: #f3edff; }
        .bg-purple-500 { background-color: #a78bfa; }
        .bg-purple-600 { background-color: #8b5cf6; }
        .bg-purple-700 { background-color: #7c3aed; }
        .text-purple-600 { color: #8b5cf6; }
        .text-purple-700 { color: #7c3aed; }
        .border-purple-300 { border-color: #d8b4fe; }
        .border-purple-500 { border-color: #a78bfa; }
      `}</style>

      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold font-serif text-gray-900">Menu Builder</h1>
              <p className="text-gray-600 mt-1">Create and manage your menu categories and items</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAddingCategory(true)}
                className="px-6 py-3 bg-white border-2 border-purple-500 text-purple-700 rounded-xl font-semibold hover:bg-purple-50 transition-colors flex items-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Add Category
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {categories.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-purple-600">
                <path
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-2">No Categories Yet</h2>
            <p className="text-gray-600 mb-6 text-center max-w-md">
              Get started by creating your first category. Categories help organize your menu items.
            </p>
            <button
              onClick={() => setIsAddingCategory(true)}
              className="px-8 py-3 bg-linear-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all flex items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Create First Category
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Categories Sidebar */}
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Categories</h2>
                <span className="text-sm text-gray-500">{categories.length} total</span>
              </div>
              <div className="space-y-3">
                {categories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    isSelected={selectedCategory === category.id}
                    itemCount={items.filter((item) => item.categoryId === category.id).length}
                    onSelect={() => setSelectedCategory(category.id)}
                    onEdit={() => setEditingCategory(category)}
                    onDelete={() => deleteCategory(category.id)}
                    onToggleActive={() =>
                      updateCategory(category.id, { isActive: !category.isActive })
                    }
                  />
                ))}
              </div>
            </div>

            {/* Items Section */}
            <div className="lg:col-span-2">
              {selectedCategory ? (
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-200">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold font-serif text-gray-900">
                          {selectedCategoryData?.name}
                        </h2>
                        {selectedCategoryData?.description && (
                          <p className="text-gray-600 mt-1">{selectedCategoryData.description}</p>
                        )}
                      </div>
                      <button
                        onClick={() => setIsAddingItem(true)}
                        className="px-6 py-2.5 bg-linear-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl transition-all flex items-center gap-2"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        Add Item
                      </button>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                        <span>{categoryItems.length} items</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${selectedCategoryData?.isActive ? 'bg-emerald-500' : 'bg-gray-400'}`} />
                        <span>{selectedCategoryData?.isActive ? 'Active' : 'Inactive'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Items Grid */}
                  {categoryItems.length === 0 ? (
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 text-center border-2 border-dashed border-gray-300">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-purple-600">
                          <path
                            d="M12 5v14M5 12h14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">No Items Yet</h3>
                      <p className="text-gray-600 mb-4">
                        Add your first item to this category
                      </p>
                      <button
                        onClick={() => setIsAddingItem(true)}
                        className="px-6 py-2.5 bg-linear-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                      >
                        Add First Item
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {categoryItems.map((item) => (
                        <MenuItemCard
                          key={item.id}
                          item={item}
                          onEdit={() => setEditingItem(item)}
                          onDelete={() => deleteItem(item.id)}
                          onToggleAvailability={() =>
                            updateItem(item.id, { isAvailable: !item.isAvailable })
                          }
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* No Category Selected */
                <div className="flex flex-col items-center justify-center py-20 bg-white/60 backdrop-blur-sm rounded-2xl">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-purple-600">
                      <path
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">Select a Category</h3>
                  <p className="text-gray-600 text-center max-w-md">
                    Choose a category from the left to view and manage its items
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Forms */}
      <CategoryForm
        isOpen={isAddingCategory || editingCategory !== null}
        onClose={() => {
          setIsAddingCategory(false);
          setEditingCategory(null);
        }}
        onSubmit={(data) => {
          if (editingCategory) {
            updateCategory(editingCategory.id, data);
          } else {
            addCategory(data);
          }
        }}
        initialData={editingCategory}
      />

      <MenuItemForm
        isOpen={isAddingItem || editingItem !== null}
        onClose={() => {
          setIsAddingItem(false);
          setEditingItem(null);
        }}
        onSubmit={(data) => {
          if (editingItem) {
            updateItem(editingItem.id, data);
          } else {
            addItem(data);
          }
        }}
        categoryId={selectedCategory || ''}
        initialData={editingItem}
      />
    </div>
  );
};
