# FinBiz Landing Page - Project Structure & Architecture Plan

## 📋 Overview
This document outlines the complete folder structure, architectural decisions, and organizational strategy for the FinBiz finance landing page built with React + Vite + Tailwind CSS v4.

---

## 🏗️ Clean Architecture Principles Applied

### Layer Separation:
1. **Presentation Layer** (`src/components`, `src/pages`, `src/sections`)
   - UI components, page layouts, visual elements
   - No business logic, only presentation concerns

2. **Application Layer** (`src/hooks`, `src/contexts`, `src/services`)
   - Business logic, state management, data fetching
   - Reusable application-level functionality

3. **Domain Layer** (`src/types`, `src/constants`, `src/config`)
   - Core business entities, type definitions, constants
   - Framework-agnostic pure logic

4. **Infrastructure Layer** (`src/utils`, `src/lib`)
   - External integrations, utilities, helper functions
   - Third-party library configurations

---

## 📁 Complete Folder Structure

```
src/
├── assets/                          # Static assets
│   ├── images/                      # Image files
│   │   ├── logos/                   # Brand logos
│   │   ├── icons/                   # Custom icon files
│   │   ├── illustrations/           # SVG illustrations
│   │   └── photos/                  # Photo assets
│   ├── fonts/                       # Custom fonts (if any)
│   └── data/                        # Static JSON data
│       ├── testimonials.json
│       ├── features.json
│       └── pricing-plans.json
│
├── components/                      # Reusable components
│   ├── ui/                          # Design System - Base UI Components
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   ├── Button.module.css (optional)
│   │   │   └── index.js
│   │   ├── Card/
│   │   ├── Input/
│   │   ├── Badge/
│   │   ├── Avatar/
│   │   ├── Divider/
│   │   ├── Spinner/
│   │   ├── Modal/
│   │   ├── Dropdown/
│   │   └── Tooltip/
│   │
│   ├── layout/                      # Layout components
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── Container/
│   │   ├── Section/
│   │   └── Grid/
│   │
│   ├── features/                    # Feature-specific composed components
│   │   ├── PricingCard/
│   │   ├── TestimonialCard/
│   │   ├── FeatureCard/
│   │   ├── StatCard/
│   │   ├── ChartDisplay/
│   │   └── TeamMember/
│   │
│   └── common/                      # Shared common components
│       ├── Logo/
│       ├── ThemeToggle/
│       ├── ScrollToTop/
│       └── AnimatedSection/
│
├── sections/                        # Landing page sections
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── index.js
│   ├── Features/
│   ├── Statistics/
│   ├── About/
│   ├── Services/
│   ├── Pricing/
│   ├── Testimonials/
│   ├── CallToAction/
│   └── Newsletter/
│
├── pages/                           # Page components
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── index.js
│   ├── NotFound/
│   └── ComingSoon/
│
├── contexts/                        # React Context providers
│   ├── ThemeContext.jsx             # Dark/Light mode management
│   ├── ModalContext.jsx             # Global modal state
│   └── index.js
│
├── hooks/                           # Custom React hooks
│   ├── useTheme.js                  # Hook for theme access
│   ├── useMediaQuery.js             # Responsive breakpoint hook
│   ├── useScrollPosition.js         # Scroll position tracking
│   ├── useIntersectionObserver.js   # Scroll animations
│   └── useLocalStorage.js           # Persist theme preference
│
├── services/                        # External services & API calls
│   ├── api.js                       # API client configuration
│   ├── newsletter.service.js        # Newsletter subscription
│   └── contact.service.js           # Contact form handling
│
├── utils/                           # Utility functions
│   ├── formatters.js                # Number, date formatters
│   ├── validators.js                # Form validation helpers
│   ├── animations.js                # Animation configurations
│   └── helpers.js                   # General helper functions
│
├── lib/                             # Third-party library configs
│   ├── framer-motion.config.js      # Animation library setup
│   └── analytics.js                 # Analytics integration
│
├── types/                           # TypeScript types (if using TS)
│   ├── components.types.js
│   ├── theme.types.js
│   └── data.types.js
│
├── constants/                       # Application constants
│   ├── routes.js                    # Route definitions
│   ├── navigation.js                # Navigation menu items
│   ├── theme.js                     # Theme configuration
│   └── seo.js                       # SEO metadata
│
├── config/                          # App configuration
│   ├── site.config.js               # Site-wide settings
│   └── env.js                       # Environment variables
│
├── styles/                          # Global styles
│   ├── globals.css                  # Tailwind base + custom globals
│   ├── theme.css                    # CSS custom properties
│   └── animations.css               # Custom animations
│
├── App.jsx                          # Root component
├── main.jsx                         # Entry point
└── index.css                        # Tailwind imports
```

---

## 🎨 Design System Plan

### Core UI Components (Atomic Design Approach)

#### **Atoms** (Basic building blocks)
- `Button` - Primary, Secondary, Outline, Ghost, Link variants
- `Input` - Text, Email, Number, Password, Search
- `Badge` - Status indicators, tags
- `Avatar` - User profile images
- `Divider` - Horizontal/Vertical separators
- `Spinner` - Loading indicators
- `Icon` - Icon wrapper component

#### **Molecules** (Simple combinations)
- `Card` - Container with header, body, footer
- `InputGroup` - Input with label and error message
- `Dropdown` - Select menu component
- `Tooltip` - Hover information display
- `Modal` - Dialog/popup overlay
- `Accordion` - Expandable content sections

#### **Organisms** (Complex components)
- `Navbar` - Navigation header with menu, logo, CTA
- `Footer` - Site footer with links and info
- `PricingCard` - Pricing tier display
- `TestimonialCard` - Customer review display
- `FeatureCard` - Feature highlight card
- `StatCard` - Statistics display with icon and value
- `ChartDisplay` - Financial chart visualization
- `ContactForm` - Multi-field form component

#### **Templates** (Page layouts)
- `LandingLayout` - Main landing page wrapper
- `SectionLayout` - Consistent section spacing/padding
- `GridLayout` - Responsive grid system

---

## 📑 Landing Page Section Breakdown

### 1. **Hero Section**
   - Main headline and subheadline
   - Primary CTA button
   - Hero image/illustration
   - Trust badges (client logos)

### 2. **Statistics Section**
   - Key metrics display (Total API, Total income, etc.)
   - Animated counters
   - Interactive charts

### 3. **Features Section**
   - "Boosting Business, Today and Tomorrow"
   - Feature cards with icons
   - Three-column grid layout

### 4. **About/Services Section**
   - "Real-time accounting at your fingertips"
   - Financial transaction list
   - Service highlights

### 5. **Benefits Section**
   - "Optimize expense Management as a team"
   - Value propositions
   - Supporting imagery

### 6. **Testimonials Section**
   - "What are people saying"
   - Customer reviews carousel
   - Star ratings and avatars

### 7. **Pricing Section**
   - "Find the right plan"
   - Three-tier pricing cards (Basic, Pro, Enterprise)
   - Feature comparison
   - CTA buttons

### 8. **Final CTA Section**
   - "Let's Upgrade your finances experience"
   - Dual CTA buttons
   - Supporting image

### 9. **Footer Section**
   - Company info and logo
   - Navigation links (Category, Help, Subscribe)
   - Social media links
   - Newsletter subscription
   - Copyright notice

---

## 🌓 Dark/Light Mode Implementation Strategy

### Approach: **Tailwind CSS v4 + Context API**

#### Tailwind Configuration:
```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' for system preference
  // ... rest of config
}
```

#### Theme Context Structure:
- `ThemeContext.jsx` - Provides theme state and toggle function
- `useTheme()` hook - Access theme anywhere in the app
- `useLocalStorage()` - Persist user preference
- `ThemeToggle` component - UI control for switching themes

#### CSS Custom Properties:
```css
/* styles/theme.css */
:root {
  --color-primary: ...;
  --color-background: ...;
  --color-text: ...;
}

.dark {
  --color-primary: ...;
  --color-background: ...;
  --color-text: ...;
}
```

#### Component Implementation:
- Use Tailwind's `dark:` variant for styling
- Example: `bg-white dark:bg-gray-900`
- Store preference in localStorage
- Apply `dark` class to `<html>` element

---

## 📝 Naming Conventions

### Files & Folders:
- **Components**: `PascalCase` (e.g., `Button.jsx`, `PricingCard.jsx`)
- **Pages**: `PascalCase` (e.g., `Home.jsx`, `NotFound.jsx`)
- **Hooks**: `camelCase` with `use` prefix (e.g., `useTheme.js`, `useScrollPosition.js`)
- **Utils**: `camelCase` (e.g., `formatters.js`, `validators.js`)
- **Constants**: `camelCase` or `UPPER_SNAKE_CASE` for values (e.g., `constants/routes.js`)
- **Contexts**: `PascalCase` with `Context` suffix (e.g., `ThemeContext.jsx`)
- **Services**: `camelCase` with `.service` suffix (e.g., `newsletter.service.js`)
- **Assets**: `kebab-case` (e.g., `hero-image.png`, `company-logo.svg`)
- **Folders**: `kebab-case` or `lowercase` (e.g., `components/`, `assets/images/`)

### Variables & Functions:
- **Components**: `PascalCase` (e.g., `const Button = () => {}`)
- **Functions**: `camelCase` (e.g., `const formatCurrency = () => {}`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `const API_BASE_URL = '...'`)
- **Props**: `camelCase` (e.g., `onClick`, `isActive`)
- **CSS Classes**: Tailwind utility classes or `kebab-case` for custom

### Component Structure:
```javascript
// PascalCase for component file and function
// Button/Button.jsx or Button/index.jsx

const Button = ({ variant = 'primary', children, ...props }) => {
  return (
    <button className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  )
}

export default Button
```

---

## 🎯 Recommended Modern UI Libraries (Alternatives to Pure Tailwind)

While Tailwind CSS v4 is excellent, consider these for enhanced productivity:

1. **shadcn/ui** (Recommended)
   - Beautifully designed components built with Radix UI + Tailwind
   - Copy-paste component source code (not a package)
   - Full customization control
   - Excellent dark mode support

2. **Headless UI**
   - Official Tailwind Labs product
   - Unstyled, accessible UI components
   - Works perfectly with Tailwind

3. **Radix UI**
   - Low-level unstyled component primitives
   - Best accessibility practices
   - Complete design control

4. **Framer Motion**
   - Animation library (pairs with Tailwind)
   - Smooth page transitions and interactions
   - Essential for modern landing pages

**Recommendation**: Stick with Tailwind CSS + Headless UI/Radix for primitives + Framer Motion for animations. This gives maximum flexibility while maintaining clean, performant code.

---

## 🚀 Setup Instructions Summary

### 1. Install Additional Dependencies (Optional but Recommended):
```bash
npm install framer-motion @headlessui/react @heroicons/react
npm install -D prettier prettier-plugin-tailwindcss
```

### 2. Configure Tailwind for Dark Mode:
- Already set up with v4
- Add custom color palette in `styles/theme.css`

### 3. Project Initialization Checklist:
- [ ] Create folder structure as outlined
- [ ] Set up ThemeContext for dark mode
- [ ] Create base UI components (Button, Card, Input)
- [ ] Prepare static data files (testimonials, pricing, features)
- [ ] Configure constants (navigation, routes, theme)
- [ ] Build reusable layout components (Navbar, Footer, Container)
- [ ] Implement landing page sections one by one
- [ ] Add animations with Framer Motion
- [ ] Test dark/light mode across all sections
- [ ] Optimize images and assets
- [ ] Set up SEO metadata

---

## 📊 Benefits of This Structure

### ✅ Scalability
- Easy to add new features or pages
- Clear separation of concerns
- Modular component architecture

### ✅ Maintainability
- Consistent naming conventions
- Well-organized imports
- Easy to locate files

### ✅ Reusability
- Design system components can be reused across pages
- Shared hooks and utilities
- Consistent styling patterns

### ✅ Collaboration
- Clear structure for team members
- Self-documenting organization
- Easy onboarding for new developers

### ✅ Performance
- Code splitting friendly
- Lazy loading potential
- Optimized asset organization

### ✅ Testing
- Easy to unit test utilities and hooks
- Component isolation for testing
- Clear dependencies

---

## 🔄 Development Workflow

1. **Start with Design System**: Build core UI components first
2. **Create Layouts**: Navbar, Footer, Container components
3. **Build Sections**: One section at a time (Hero → Features → etc.)
4. **Compose Page**: Assemble sections in Home page
5. **Add Interactivity**: Animations, scroll effects, theme toggle
6. **Polish**: Responsive design, accessibility, performance
7. **Deploy**: Build and deploy to production

---

## 📚 Next Steps

1. Review this structure and approve/modify as needed
2. Create all folders and placeholder files
3. Set up core infrastructure (contexts, hooks, constants)
4. Begin building design system components
5. Implement landing page sections
6. Add polish and optimizations

---

This structure provides a solid foundation for building a professional, maintainable, and scalable landing page while following industry best practices and Clean Architecture principles.

