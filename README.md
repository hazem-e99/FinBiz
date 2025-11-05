# FinBiz - Finance Solutions Landing Page

A modern, responsive landing page for FinBiz built with React, Vite, and Tailwind CSS v4. Features a clean architecture, design system, and full dark/light mode support.

## ✨ Features

- 🎨 **Modern Design System** - Reusable UI components (Button, Card, Input, etc.)
- 🌓 **Dark/Light Mode** - Seamless theme switching with persistence
- 📱 **Fully Responsive** - Mobile-first design, optimized for all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🎬 **Smooth Animations** - Scroll-triggered animations with Framer Motion
- ♿ **Accessible** - WCAG compliant, keyboard navigation, screen reader support
- 🏗️ **Clean Architecture** - Scalable folder structure following best practices
- 📊 **Data-Driven** - JSON-based content management for easy updates

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:5173` to see the app in development mode.

## 📚 Documentation

- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Detailed architecture and folder organization
- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Comprehensive setup and development guide
- **[FOLDER_TREE.md](./FOLDER_TREE.md)** - Visual folder structure and hierarchy
- **[IMPLEMENTATION_CHECKLIST.md](./IMPLEMENTATION_CHECKLIST.md)** - Step-by-step implementation tasks

## 🛠️ Tech Stack

- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS v4.1.16
- **Animations**: Framer Motion (to be installed)
- **Icons**: Heroicons / Lucide React (to be installed)
- **UI Components**: Headless UI (to be installed)

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── ui/           # Design system primitives
│   ├── layout/       # Layout components
│   ├── features/     # Composed feature components
│   └── common/       # Shared utilities
├── sections/         # Landing page sections
├── pages/            # Top-level page components
├── hooks/            # Custom React hooks
├── contexts/         # React Context providers
├── utils/            # Helper functions
├── constants/        # App constants
├── config/           # Configuration
├── services/         # API calls
├── assets/           # Static assets
└── styles/           # Global styles
```

## 🎨 Design System

The project includes a comprehensive design system with:

### UI Components
- Button (primary, secondary, outline, ghost, link)
- Card (container with header, body, footer)
- Input (text, email, password, search)
- Badge, Avatar, Modal, Dropdown, Tooltip

### Layout Components
- Navbar (responsive with mobile menu)
- Footer (links, social media, newsletter)
- Container, Section, Grid

### Feature Components
- PricingCard, TestimonialCard, FeatureCard, StatCard

## 🌐 Landing Page Sections

1. **Hero** - Main headline, CTA, hero image
2. **Statistics** - Key metrics with charts
3. **Features** - "Boosting Business, Today and Tomorrow"
4. **About** - "Real-time accounting at your fingertips"
5. **Testimonials** - Customer reviews carousel
6. **Pricing** - Three-tier pricing (Basic, Pro, Enterprise)
7. **Call to Action** - Final CTA before footer
8. **Footer** - Links, social media, newsletter

## 🔧 Configuration

### Path Aliases

Import paths are configured for clean imports:

```javascript
import Button from '@components/ui/Button';
import { NAV_ITEMS } from '@constants/navigation';
import useTheme from '@hooks/useTheme';
```

### Environment Variables

Copy `.env.example` to `.env` and configure:

```env
VITE_API_BASE_URL=https://api.finbiz.com
VITE_ANALYTICS_ID=
VITE_EMAIL_SERVICE_KEY=
```

## 🌓 Dark Mode

Dark mode is implemented using:
- Tailwind CSS `dark:` variants
- CSS custom properties in `styles/theme.css`
- ThemeContext for global state management
- localStorage for preference persistence

## 📦 Recommended Additional Packages

```bash
npm install framer-motion @headlessui/react @heroicons/react clsx
```

## 🎯 Development Workflow

1. **Build Design System** - Start with core UI components
2. **Create Layouts** - Build Navbar and Footer
3. **Implement Sections** - One section at a time
4. **Compose Pages** - Assemble sections in Home page
5. **Add Polish** - Animations, responsiveness, accessibility

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Large: > 1536px

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus visible states
- Color contrast compliance
- Screen reader support

## 🚢 Deployment

```bash
# Build for production
npm run build

# The dist/ folder is ready to deploy
```

Compatible with Vercel, Netlify, GitHub Pages, and any static hosting service.

## 📄 License

This project is private and proprietary.

## 👥 Team

Built for FinBiz by [Your Team Name]

---

For detailed implementation instructions, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)
