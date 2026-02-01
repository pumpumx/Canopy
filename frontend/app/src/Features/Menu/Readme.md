# Canopy Menu Creation Page

A production-ready menu creation page for the Canopy kiosk management system with elegant lavender theming.

## 📁 File Structure

```
├── Menu /
│   └── MenuCreationPage.tsx       # Main page component
├── Features/
│   ├── Header.tsx                 # Reusable header component
│   ├── Footer.tsx                 # Reusable footer component
│   └── MenuCreationBox.tsx        # Menu creation modal component
```

## 🎨 Design Features

- **Lavender Theme**: Consistent lavender color palette throughout
- **Abstract Background**: Floating organic shapes with blur effects
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Glass Morphism**: Modern frosted glass effects
- **Smooth Animations**: Floating particles and smooth transitions
- **Production Ready**: Clean, modular, and type-safe code

## 🚀 Usage

### Basic Implementation

```tsx
import { MenuCreationPage } from './pages/MenuCreationPage';

function App() {
  return <MenuCreationPage />;
}
```

### Backend Integration

The `handleCreateMenu` function in `MenuCreationPage.tsx` is where you'll add your backend logic:

```typescript
const handleCreateMenu = async (menuName: string, creationDate: string) => {
  // Add your API call here
  try {
    const response = await fetch('/api/menus', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: menuName, createdAt: creationDate })
    });
    
    const data = await response.json();
    
    // Redirect to the new menu
    router.push(`/menu/${data.id}`);
  } catch (error) {
    console.error('Error creating menu:', error);
  }
};
```

## 📦 Components

### Header
- Logo with Canopy branding
- Admin user indicator
- Responsive navigation

### Footer
- Brand information
- Quick links section
- Support links
- Social media icons
- Copyright notice

### MenuCreationBox
- Interactive creation button
- Modal with form
- Menu name input
- Auto-generated timestamp info
- Loading states
- Form validation

### MenuCreationPage
- Full page layout
- Background animations
- Info cards
- Integrates all components

## 🎯 Features

1. **Menu Creation**
   - Click the plus icon to open creation modal
   - Enter menu name
   - Auto-generated creation timestamp
   - Form validation

2. **User Experience**
   - Smooth animations
   - Clear visual feedback Responsive design
   - Accessible components

3. **Production Ready**
   - TypeScript for type safety
   - Modular component structure
   - Clean separation of concerns
   - Easy to maintain and extend

## 🛠️ Customization

### Colors
All lavender colors are defined in the style tag and can be easily modified:
```css
.bg-lavender-50 { background-color: #faf7ff; }
.bg-lavender-100 { background-color: #f3edff; }
/* etc. */
```

### Fonts
Current fonts: Cormorant Garamond (serif) and Work Sans (sans-serif)
Change in the style import:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont...
```

### Animations
Adjust animation timing in keyframes:
```css
.animate-float {
  animation: float 12s ease-in-out infinite;
}
```

## 📋 Next Steps

1. **Backend Integration**: Replace the `handleCreateMenu` placeholder with your actual API call
2. **Routing**: Add redirect logic after menu creation
3. **Authentication**: Implement proper user authentication
4. **Error Handling**: Add error states and user feedback
5. **Loading States**: Enhance loading indicators during API calls

## 🎨 Color Palette

- Primary: Lavender (#8b5cf6, #a78bfa)
- Secondary: Purple (#7c3aed, #9333ea)
- Background: Light lavender gradients (#faf7ff, #f3edff)
- Text: Gray scale (#1f2937, #6b7280)

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Dependencies

- React 18+
- TypeScript
- Tailwind CSS (core utilities only)
- Google Fonts (Cormorant Garamond, Work Sans)

## 📝 Notes

- The creation timestamp is auto-generated on the frontend
- You'll need to handle the actual database insertion on the backend
- The component is designed to be easily integrated into larger applications
- All components are fully typed with TypeScript interfaces
