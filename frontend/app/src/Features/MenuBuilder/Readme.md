# Canopy Menu Builder Service

A comprehensive menu builder interface for admins to create categories and manage menu items, styled with modern Burger King-inspired aesthetics and lavender theming.

## 📁 File Structure

```
menu-builder/
├── types/
│   └── index.ts                    # TypeScript interfaces and types
├── store/
│   └── menuBuilder.store.ts        # Zustand state management
├── components/
│   ├── CategoryCard.tsx            # Category display card
│   ├── MenuItemCard.tsx            # Menu item card (BK style)
│   ├── CategoryForm.tsx            # Add/Edit category modal
│   └── MenuItemForm.tsx            # Add/Edit item modal
└── pages/
    └── MenuBuilderPage.tsx         # Main menu builder page
```

## 🎨 Design Features

### Visual Style
- **Lavender Theme**: Consistent purple/lavender gradient palette
- **Burger King Inspiration**: Large food images, bold typography, clear pricing
- **Modern Cards**: Rounded corners, shadows, hover effects
- **Glass Morphism**: Backdrop blur effects
- **Responsive Grid**: Adapts from mobile to desktop

### Color Palette
```css
Primary Lavender:
- #faf7ff (lavender-50)
- #f3edff (lavender-100)
- #a78bfa (lavender-500)
- #8b5cf6 (lavender-600) - Main brand color
- #7c3aed (lavender-700)

Accent Colors:
- Emerald: For active/available status
- Red: For delete actions, spicy tags
- Green: For vegetarian tags
```

## 🏗️ Architecture

### State Management (Zustand)
Clean separation of concerns with centralized state:

```typescript
interface MenuBuilderState {
  categories: Category[];
  items: MenuItem[];
  selectedCategory: string | null;
  isAddingCategory: boolean;
  isAddingItem: boolean;
  editingCategory: Category | null;
  editingItem: MenuItem | null;
}
```

### Data Models

**Category:**
```typescript
{
  id: string;
  name: string;
  description?: string;
  displayOrder: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
```

**MenuItem:**
```typescript
{
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  isAvailable: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  calories?: number;
  preparationTime?: number;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}
```

## 🚀 Usage

### Basic Implementation

```tsx
import { MenuBuilderPage } from './menu-builder/pages/MenuBuilderPage';

function AdminPanel() {
  return <MenuBuilderPage />;
}
```

### Backend Integration

#### 1. Loading Existing Data

```typescript
import { useMenuBuilder } from './store/menuBuilder.store';

// In your component or on mount
useEffect(() => {
  const loadData = async () => {
    const categories = await api.getCategories();
    const items = await api.getMenuItems();
    useMenuBuilder.getState().loadMenu(categories, items);
  };
  loadData();
}, []);
```

#### 2. Category Operations

Replace the TODO comments in `menuBuilder.store.ts`:

```typescript
// Add Category
addCategory: async (categoryData) => {
  const response = await fetch('/api/categories', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoryData)
  });
  const newCategory = await response.json();
  
  set((state) => ({
    categories: [...state.categories, newCategory],
    isAddingCategory: false,
  }));
},

// Update Category
updateCategory: async (id, updates) => {
  await fetch(`/api/categories/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates)
  });
  
  set((state) => ({
    categories: state.categories.map((cat) =>
      cat.id === id ? { ...cat, ...updates } : cat
    ),
  }));
},

// Delete Category
deleteCategory: async (id) => {
  await fetch(`/api/categories/${id}`, { method: 'DELETE' });
  
  set((state) => ({
    categories: state.categories.filter((cat) => cat.id !== id),
    items: state.items.filter((item) => item.categoryId !== id),
  }));
},
```

#### 3. Menu Item Operations

```typescript
// Add Item
addItem: async (itemData) => {
  const response = await fetch('/api/items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemData)
  });
  const newItem = await response.json();
  
  set((state) => ({
    items: [...state.items, newItem],
    isAddingItem: false,
  }));
},

// Update Item
updateItem: async (id, updates) => {
  await fetch(`/api/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates)
  });
  
  set((state) => ({
    items: state.items.map((item) =>
      item.id === id ? { ...item, ...updates } : item
    ),
  }));
},

// Delete Item
deleteItem: async (id) => {
  await fetch(`/api/items/${id}`, { method: 'DELETE' });
  
  set((state) => ({
    items: state.items.filter((item) => item.id !== id),
  }));
},
```

## 🎯 Features

### Category Management
- ✅ Create categories with name, description, display order
- ✅ Edit category details
- ✅ Delete categories (with confirmation)
- ✅ Toggle active/inactive status
- ✅ View item count per category
- ✅ Visual selection indicator

### Menu Item Management
- ✅ Add items to categories
- ✅ Edit item details
- ✅ Delete items (with confirmation)
- ✅ Toggle availability
- ✅ Set pricing
- ✅ Add images (URL-based)
- ✅ Mark as vegetarian/spicy
- ✅ Add nutritional info (calories)
- ✅ Set preparation time
- ✅ Display order management

### User Interface
- ✅ Split view: Categories sidebar + Items grid
- ✅ Empty states with helpful guidance
- ✅ Modal forms for adding/editing
- ✅ Hover effects and animations
- ✅ Status indicators (active, available, etc.)
- ✅ Responsive design
- ✅ Quick action buttons

## 📱 Responsive Behavior

### Desktop (1024px+)
- 3-column layout (categories + 2-column item grid)
- Full modals centered
- Hover effects enabled

### Tablet (768px - 1023px)
- 2-column layout
- Single-column item grid
- Touch-friendly buttons

### Mobile (<768px)
- Stacked layout
- Full-width cards
- Bottom sheets for modals
- Larger touch targets

## 🎨 Burger King Style Elements

### Menu Item Cards
- **Large Images**: Prominent food photography
- **Bold Pricing**: Large, clear price display
- **Description**: Appetizing descriptions
- **Tags**: Visual indicators (🌱 Veg, 🌶️ Spicy)
- **Availability Badge**: Clear stock status
- **Nutritional Info**: Calories and prep time
- **Quick Actions**: Edit and delete buttons

### Design Philosophy
- **Food-First**: Images are the hero
- **Clear Hierarchy**: Price and name prominent
- **Quick Scanning**: Easy to browse items
- **Action-Oriented**: CTAs are obvious
- **Status Clear**: Availability always visible

## 🛠️ Customization

### Change Colors

In `MenuBuilderPage.tsx` style section:
```css
.bg-lavender-600 { background-color: #your-color; }
.text-lavender-600 { color: #your-color; }
.border-lavender-500 { border-color: #your-color; }
```

### Modify Card Layout

Edit `MenuItemCard.tsx`:
```tsx
// Change image height
<div className="relative h-48"> // Change h-48 to h-64, etc.

// Change grid columns
<div className="grid-cols-1 md:grid-cols-2"> // Add lg:grid-cols-3
```

### Add Custom Fields

1. Update types in `types/index.ts`
2. Add to store actions in `menuBuilder.store.ts`
3. Add form fields in `MenuItemForm.tsx`
4. Display in `MenuItemCard.tsx`

## 🔧 Advanced Features

### Image Upload

Replace URL input with file upload:

```tsx
// In MenuItemForm.tsx
const [imageFile, setImageFile] = useState<File | null>(null);

const handleImageUpload = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);
  
  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData
  });
  
  const { url } = await response.json();
  setFormData({ ...formData, image: url });
};

// In the form
<input
  type="file"
  accept="image/*"
  onChange={(e) => {
    if (e.target.files?.[0]) {
      handleImageUpload(e.target.files[0]);
    }
  }}
/>
```

### Drag-and-Drop Reordering

```tsx
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

// Wrap your items in sortable context
<SortableContext items={items} strategy={verticalListSortingStrategy}>
  {items.map((item) => (
    <SortableItem key={item.id} item={item} />
  ))}
</SortableContext>
```

### Bulk Operations

Add to store:
```typescript
bulkUpdateItems: (ids: string[], updates: Partial<MenuItem>) => {
  set((state) => ({
    items: state.items.map((item) =>
      ids.includes(item.id) ? { ...item, ...updates } : item
    ),
  }));
},
```

## 📊 Data Flow

```
User Action → Component → Zustand Store → Backend API → Update Store → Re-render
```

Example:
```
Click "Add Item" 
  → MenuItemForm opens
  → Fill form & submit
  → addItem() in store
  → POST to /api/items
  → Response received
  → Store updated with new item
  → UI re-renders with new item card
```

## 🔒 Security Considerations

1. **Validate Input**: Always validate on backend
2. **Sanitize Data**: Clean user input before display
3. **Auth Check**: Verify admin permissions
4. **Rate Limiting**: Prevent abuse
5. **Image Validation**: Check file types and sizes

## 📝 Best Practices

### Performance
- Lazy load images
- Virtualize long lists
- Debounce search/filter inputs
- Optimize re-renders with memo

### UX
- Loading states during operations
- Success/error toasts
- Undo functionality for deletes
- Keyboard shortcuts
- Auto-save drafts

### Accessibility
- Proper ARIA labels
- Keyboard navigation
- Focus management in modals
- Color contrast compliance
- Screen reader support

## 🚀 Production Checklist

- [ ] Connect to real backend API
- [ ] Add loading indicators
- [ ] Implement error handling
- [ ] Add success notifications
- [ ] Image upload functionality
- [ ] Search/filter categories
- [ ] Search/filter items
- [ ] Bulk operations
- [ ] Export menu data
- [ ] Import menu data
- [ ] Audit logging
- [ ] Permission checks
- [ ] Rate limiting
- [ ] Input validation
- [ ] Accessibility audit
- [ ] Performance testing
- [ ] Mobile testing
- [ ] Cross-browser testing

## 🎓 Usage Tips

1. **Start with Categories**: Create categories before items
2. **Use Display Order**: Control how items appear
3. **Toggle Availability**: Hide sold-out items quickly
4. **Rich Descriptions**: Help customers decide
5. **Quality Images**: Use high-res food photos
6. **Regular Updates**: Keep menu current
7. **Test on Mobile**: Many admins use tablets

## 📞 Support

For customization help or questions:
- Documentation: Check inline comments
- Issues: File on GitHub
- Email: dev@canopy.com
