import { create } from 'zustand';
import type { Category, MenuItem, MenuBuilderState } from '../Types/menuBuilder.type';

interface MenuBuilderStore extends MenuBuilderState {
  // Category actions
  addCategory: (category: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateCategory: (id: string, category: Partial<Category>) => void;
  deleteCategory: (id: string) => void;
  setSelectedCategory: (categoryId: string | null) => void;
  setIsAddingCategory: (isAdding: boolean) => void;
  setEditingCategory: (category: Category | null) => void;

  // Item actions
  addItem: (item: Omit<MenuItem, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateItem: (id: string, item: Partial<MenuItem>) => void;
  deleteItem: (id: string) => void;
  setIsAddingItem: (isAdding: boolean) => void;
  setEditingItem: (item: MenuItem | null) => void;

  // Utility actions
  loadMenu: (categories: Category[], items: MenuItem[]) => void;
  reorderCategories: (categories: Category[]) => void;
  reorderItems: (categoryId: string, items: MenuItem[]) => void;
}

export const useMenuBuilder = create<MenuBuilderStore>((set, get) => ({
  // Initial state
  categories: [],
  items: [],
  selectedCategory: null,
  isAddingCategory: false,
  isAddingItem: false,
  editingCategory: null,
  editingItem: null,

  // Category actions
  addCategory: (categoryData) => {
    const newCategory: Category = {
      ...categoryData,
      id: Date.now().toString(), // Replace with actual ID from backend
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    set((state) => ({
      categories: [...state.categories, newCategory],
      isAddingCategory: false,
    }));

    // TODO: Add backend API call
    // await api.createCategory(categoryData);
  },

  updateCategory: (id, updates) => {
    set((state) => ({
      categories: state.categories.map((cat) =>
        cat.id === id
          ? { ...cat, ...updates, updatedAt: new Date().toISOString() }
          : cat
      ),
      editingCategory: null,
    }));

    // TODO: Add backend API call
    // await api.updateCategory(id, updates);
  },

  deleteCategory: (id) => {
    set((state) => ({
      categories: state.categories.filter((cat) => cat.id !== id),
      items: state.items.filter((item) => item.categoryId !== id),
      selectedCategory: state.selectedCategory === id ? null : state.selectedCategory,
    }));

    // TODO: Add backend API call
    // await api.deleteCategory(id);
  },

  setSelectedCategory: (categoryId) => set({ selectedCategory: categoryId }),
  setIsAddingCategory: (isAdding) => set({ isAddingCategory: isAdding }),
  setEditingCategory: (category) => set({ editingCategory: category }),

  // Item actions
  addItem: (itemData) => {
    const newItem: MenuItem = {
      ...itemData,
      id: Date.now().toString(), // Replace with actual ID from backend
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    set((state) => ({
      items: [...state.items, newItem],
      isAddingItem: false,
    }));

    // TODO: Add backend API call
    // await api.createItem(itemData);
  },

  updateItem: (id, updates) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id
          ? { ...item, ...updates, updatedAt: new Date().toISOString() }
          : item
      ),
      editingItem: null,
    }));

    // TODO: Add backend API call
    // await api.updateItem(id, updates);
  },

  deleteItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));

    // TODO: Add backend API call
    // await api.deleteItem(id);
  },

  setIsAddingItem: (isAdding) => set({ isAddingItem: isAdding }),
  setEditingItem: (item) => set({ editingItem: item }),

  // Utility actions
  loadMenu: (categories, items) => {
    set({ categories, items });
  },

  reorderCategories: (categories) => {
    set({ categories });

    // TODO: Add backend API call to save new order
    // await api.updateCategoryOrder(categories.map(c => c.id));
  },

  reorderItems: (categoryId, items) => {
    set((state) => ({
      items: [
        ...state.items.filter((item) => item.categoryId !== categoryId),
        ...items,
      ],
    }));

    // TODO: Add backend API call to save new order
    // await api.updateItemOrder(categoryId, items.map(i => i.id));
  },
}));
