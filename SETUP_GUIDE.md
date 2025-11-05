# FinBiz Landing Page - Setup Guide

## 🚀 Getting Started

This guide will help you set up and start developing the FinBiz landing page with the newly organized folder structure.

---

## 📦 Prerequisites

- **Node.js**: v18 or higher
- **npm**: v9 or higher (or yarn/pnpm)
- **Code Editor**: VS Code recommended with extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/React-Native snippets

---

## 🛠️ Installation & Setup

### 1. Install Dependencies

Your project already has the core dependencies installed:
- ✅ React 19.1.1
- ✅ Tailwind CSS v4.1.16
- ✅ Vite 7.1.7

### 2. Install Recommended Additional Packages

For enhanced functionality, install these optional but recommended packages:

```bash
# Animation library
npm install framer-motion

# Headless UI components (accessible, unstyled components)
npm install @headlessui/react

# Icons (choose one or use both)
npm install @heroicons/react
# OR
npm install lucide-react

# Utilities
npm install clsx

# Form handling (optional, for contact/newsletter forms)
npm install react-hook-form
npm install zod  # For validation

# Development tools
npm install -D prettier prettier-plugin-tailwindcss
```

### 3. Configure Prettier (Optional but Recommended)

Create `.prettierrc` in the root:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### 4. Set Up Path Aliases

Update `vite.config.js` to add import aliases for cleaner imports:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@sections': path.resolve(__dirname, './src/sections'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@config': path.resolve(__dirname, './src/config'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
})
```

### 5. Configure Environment Variables

Create `.env` file in the root:

```env
# API Configuration
VITE_API_BASE_URL=https://api.finbiz.com

# Analytics (optional)
VITE_ANALYTICS_ID=

# Email Service (for newsletter)
VITE_EMAIL_SERVICE_KEY=

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DEBUG=true
```

Create `.env.example` for team reference:

```env
VITE_API_BASE_URL=
VITE_ANALYTICS_ID=
VITE_EMAIL_SERVICE_KEY=
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DEBUG=true
```

---

## 📁 Understanding the Folder Structure

### Quick Reference

```
src/
├── components/        → Reusable UI components
│   ├── ui/           → Design system primitives (Button, Card, Input)
│   ├── layout/       → Layout components (Navbar, Footer, Container)
│   ├── features/     → Composed feature components (PricingCard, TestimonialCard)
│   └── common/       → Shared utilities (Logo, ThemeToggle)
├── sections/         → Landing page sections (Hero, Features, Pricing)
├── pages/            → Top-level page components (Home)
├── hooks/            → Custom React hooks (useTheme, useMediaQuery)
├── contexts/         → React Context providers (ThemeContext)
├── utils/            → Helper functions (formatters, validators)
├── constants/        → App constants (navigation, routes, theme)
├── config/           → Configuration (site.config, env)
├── services/         → API calls and external services
├── lib/              → Third-party library configs
├── types/            → Type definitions (if using TypeScript)
├── assets/           → Static assets (images, fonts, data)
└── styles/           → Global styles (globals.css, theme.css, animations.css)
```

---

## 🎨 Development Workflow

### Phase 1: Foundation (Week 1)

1. **Set up Design System Components** (2-3 days)
   ```
   Priority components to build first:
   - components/ui/Button
   - components/ui/Card
   - components/ui/Input
   - components/layout/Container
   - components/layout/Section
   - components/common/Logo
   ```

2. **Create Layout Components** (1-2 days)
   ```
   - components/layout/Navbar
   - components/layout/Footer
   ```

3. **Set up Theme System** (1 day)
   ```
   - contexts/ThemeContext
   - hooks/useTheme
   - components/common/ThemeToggle
   - Test dark/light mode switching
   ```

### Phase 2: Content Sections (Week 2)

Build sections one at a time, testing as you go:

1. **Hero Section**
   - Create Hero component
   - Add animations with Framer Motion
   - Make responsive

2. **Statistics Section**
   - Build StatCard component
   - Add chart visualization
   - Implement counter animations

3. **Features Section**
   - Create FeatureCard component
   - Build three-column grid
   - Add scroll animations

4. **About/Services Section**
   - Layout content and image
   - Add transaction list UI

5. **Testimonials Section**
   - Build TestimonialCard
   - Implement carousel/slider
   - Add star ratings

6. **Pricing Section**
   - Create PricingCard component
   - Build three-tier layout
   - Add hover effects

7. **CTA Section**
   - Final call-to-action design
   - Button variants

### Phase 3: Polish & Optimization (Week 3)

1. **Responsiveness**
   - Test all breakpoints (mobile, tablet, desktop)
   - Adjust spacing and typography
   - Fix any layout issues

2. **Animations**
   - Scroll-triggered animations
   - Micro-interactions
   - Page transitions

3. **Performance**
   - Image optimization
   - Code splitting
   - Lazy loading

4. **Accessibility**
   - Keyboard navigation
   - Screen reader support
   - ARIA labels

---

## 🎯 Component Development Guide

### Example: Building a Button Component

1. **Create the structure**:
   ```
   src/components/ui/Button/
   ├── Button.jsx
   └── index.js
   ```

2. **Button.jsx** (concept - you'll write the actual code):
   ```javascript
   // Define variants using Tailwind classes
   // Props: variant, size, disabled, loading, onClick, children
   // Export default Button
   ```

3. **index.js**:
   ```javascript
   export { default } from './Button';
   ```

4. **Usage in other components**:
   ```javascript
   import Button from '@components/ui/Button';
   
   <Button variant="primary" size="lg">
     Get Started
   </Button>
   ```

### Component Best Practices

1. **Use Tailwind for Styling**: Avoid custom CSS unless absolutely necessary
2. **Props Interface**: Define clear prop types/interfaces
3. **Composition**: Build small, composable components
4. **Accessibility**: Always include ARIA labels, keyboard support
5. **Responsive**: Mobile-first approach
6. **Dark Mode**: Use `dark:` variants for all color-related classes

---

## 🌓 Implementing Dark Mode

### Step 1: Create ThemeContext

File: `src/contexts/ThemeContext.jsx`

Key responsibilities:
- Maintain theme state ('light' | 'dark')
- Toggle function
- Apply 'dark' class to document root
- Persist preference to localStorage

### Step 2: Create useTheme Hook

File: `src/hooks/useTheme.js`

Returns:
```javascript
{
  theme: 'light' | 'dark',
  toggleTheme: () => void,
  isDark: boolean
}
```

### Step 3: Wrap App with ThemeProvider

In `src/main.jsx`:
```javascript
import { ThemeProvider } from '@contexts/ThemeContext';

<ThemeProvider>
  <App />
</ThemeProvider>
```

### Step 4: Use Dark Mode in Components

```javascript
// Tailwind dark mode variants
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content
</div>

// Or use the hook
const { isDark, toggleTheme } = useTheme();
```

---

## 📊 Working with Static Data

All static data is in `src/assets/data/`:

### Loading Data Example

```javascript
import testimonials from '@assets/data/testimonials.json';
import pricingPlans from '@assets/data/pricing-plans.json';
import features from '@assets/data/features.json';

// Use in components
{testimonials.map(testimonial => (
  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
))}
```

### Adding Images

1. Place images in appropriate `src/assets/images/` subdirectory
2. Import in components:
   ```javascript
   import heroImage from '@assets/images/illustrations/hero-image.png';
   ```

---

## 🔧 Useful Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code (if Prettier is set up)
npx prettier --write "src/**/*.{js,jsx,css,json}"
```

---

## 📝 Import Path Examples

With path aliases configured:

```javascript
// Instead of: import Button from '../../components/ui/Button'
import Button from '@components/ui/Button';

// Instead of: import { NAV_ITEMS } from '../../constants/navigation'
import { NAV_ITEMS } from '@constants/navigation';

// Instead of: import useTheme from '../../hooks/useTheme'
import useTheme from '@hooks/useTheme';

// Instead of: import { cn } from '../../utils/cn'
import { cn } from '@utils/cn';
```

---

## 🎨 Tailwind CSS Tips

### Using CSS Variables

```javascript
// In JSX with CSS variables from theme.css
<div style={{ color: 'var(--color-primary)' }}>Text</div>

// Or better, use Tailwind's arbitrary values
<div className="text-[var(--color-primary)]">Text</div>
```

### Custom Utility Classes

You can extend Tailwind in `tailwind.config.js` if needed, but the goal is to use utility classes as much as possible.

---

## 🚢 Deployment Checklist

Before deploying:

- [ ] Update all placeholder URLs in constants
- [ ] Add real images to assets
- [ ] Configure production API endpoints
- [ ] Set up analytics (if enabled)
- [ ] Test all features in production build
- [ ] Optimize images (WebP format, compression)
- [ ] Test on multiple devices and browsers
- [ ] Check accessibility (Lighthouse audit)
- [ ] Verify SEO metadata
- [ ] Test dark mode thoroughly

---

## 📚 Additional Resources

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Framer Motion Docs**: https://www.framer.com/motion/
- **Headless UI Docs**: https://headlessui.com/
- **React Docs**: https://react.dev/
- **Vite Docs**: https://vitejs.dev/

---

## 🆘 Need Help?

Refer to:
1. `PROJECT_STRUCTURE.md` - Detailed architecture explanation
2. Component README files in each directory
3. Inline comments in configuration files

---

## 🎉 You're Ready!

Start by running:
```bash
npm run dev
```

Then begin building components in this order:
1. Design System (Button, Card, Input)
2. Layout (Navbar, Footer)
3. Sections (Hero, Features, etc.)
4. Compose in Home page
5. Add polish and animations

Happy coding! 🚀

