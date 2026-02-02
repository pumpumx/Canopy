// Menu Builder Types

export interface Category {
  id: string;
  name: string;
  description?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface MenuItem {
  id: string;
  categoryId: string; name: string;
  description: string;
  price: number;
  image?: string;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface MenuBuilderState {
  categories: Category[];
  items: MenuItem[];
  selectedCategory: string | null;
  isAddingCategory: boolean;
  isAddingItem: boolean;
  editingCategory: Category | null;
  editingItem: MenuItem | null;
}

export type CategoryFormData = Omit<Category, 'id' | 'createdAt' | 'updatedAt'>;
export type ItemFormData = Omit<MenuItem, 'id' | 'createdAt' | 'updatedAt'>;
