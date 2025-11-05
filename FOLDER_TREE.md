# Complete Folder Structure - Visual Tree

```
my-project/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── data/
│   │   │   ├── features.json
│   │   │   ├── pricing-plans.json
│   │   │   └── testimonials.json
│   │   └── images/
│   │       ├── icons/
│   │       │   └── .gitkeep
│   │       ├── illustrations/
│   │       │   └── .gitkeep
│   │       ├── logos/
│   │       │   └── .gitkeep
│   │       └── photos/
│   │           └── .gitkeep
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Logo/
│   │   │   │   └── index.js
│   │   │   └── ThemeToggle/
│   │   │       └── index.js
│   │   │
│   │   ├── features/
│   │   │   ├── FeatureCard/
│   │   │   │   └── index.js
│   │   │   ├── PricingCard/
│   │   │   │   └── index.js
│   │   │   ├── StatCard/
│   │   │   │   └── index.js
│   │   │   └── TestimonialCard/
│   │   │       └── index.js
│   │   │
│   │   ├── layout/
│   │   │   ├── Container/
│   │   │   │   └── index.js
│   │   │   ├── Footer/
│   │   │   │   └── index.js
│   │   │   ├── Navbar/
│   │   │   │   └── index.js
│   │   │   └── Section/
│   │   │       └── index.js
│   │   │
│   │   ├── ui/
│   │   │   ├── Avatar/
│   │   │   │   └── index.js
│   │   │   ├── Badge/
│   │   │   │   └── index.js
│   │   │   ├── Button/
│   │   │   │   └── index.js
│   │   │   ├── Card/
│   │   │   │   └── index.js
│   │   │   ├── Input/
│   │   │   │   └── index.js
│   │   │   └── Modal/
│   │   │       └── index.js
│   │   │
│   │   └── README.md
│   │
│   ├── config/
│   │   ├── env.js
│   │   ├── site.config.js
│   │   └── README.md
│   │
│   ├── constants/
│   │   ├── navigation.js
│   │   ├── routes.js
│   │   ├── seo.js
│   │   ├── theme.js
│   │   └── README.md
│   │
│   ├── contexts/
│   │   └── README.md
│   │   └── (ThemeContext.jsx - to be created)
│   │
│   ├── hooks/
│   │   └── README.md
│   │   └── (Custom hooks to be created)
│   │
│   ├── lib/
│   │   └── README.md
│   │   └── (Library configs to be created)
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   └── index.js
│   │   └── README.md
│   │
│   ├── sections/
│   │   ├── About/
│   │   │   └── index.js
│   │   ├── CallToAction/
│   │   │   └── index.js
│   │   ├── Features/
│   │   │   └── index.js
│   │   ├── Hero/
│   │   │   └── index.js
│   │   ├── Pricing/
│   │   │   └── index.js
│   │   ├── Statistics/
│   │   │   └── index.js
│   │   ├── Testimonials/
│   │   │   └── index.js
│   │   └── README.md
│   │
│   ├── services/
│   │   └── README.md
│   │   └── (Service files to be created)
│   │
│   ├── styles/
│   │   ├── animations.css
│   │   ├── globals.css
│   │   ├── theme.css
│   │   └── README.md
│   │
│   ├── types/
│   │   └── README.md
│   │
│   ├── utils/
│   │   ├── cn.js
│   │   └── README.md
│   │   └── (Utility files to be created)
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env (to be created)
├── .env.example (to be created)
├── .gitignore
├── eslint.config.js
├── FOLDER_TREE.md (this file)
├── index.html
├── package.json
├── package-lock.json
├── PROJECT_STRUCTURE.md
├── README.md
├── SETUP_GUIDE.md
└── vite.config.js

```

## 📊 Statistics

- **Total Directories**: ~35
- **Configuration Files**: 14 created
- **Component Placeholders**: 16 created
- **Section Placeholders**: 7 created
- **Data Files**: 3 JSON files
- **Documentation Files**: 16 README files + 3 guides

## 🎯 Component Hierarchy

### Design System (UI Components)
```
ui/
├── Button ─────────┐
├── Card ───────────┤
├── Input ──────────┤──→ Used by →─┐
├── Badge ──────────┤              │
├── Avatar ─────────┤              │
└── Modal ──────────┘              │
                                   ▼
Layout                         Features
├── Container ────────┐        ├── PricingCard
├── Section ──────────┤──→ Compose →─┤
├── Navbar ───────────┤        ├── TestimonialCard
└── Footer ───────────┘        ├── FeatureCard
                               └── StatCard
                                   │
                                   ▼
                               Sections
                               ├── Hero
                               ├── Features
                               ├── Statistics
                               ├── About
                               ├── Testimonials
                               ├── Pricing
                               └── CallToAction
                                   │
                                   ▼
                                  Page
                                  └── Home
```

## 🔄 Data Flow

```
Static Data (JSON)
    │
    ├── features.json
    ├── pricing-plans.json
    └── testimonials.json
            │
            ▼
    Components (consume data)
            │
            ▼
    Sections (compose components)
            │
            ▼
    Page (compose sections)
            │
            ▼
    App (render page)
```

## 🌓 Theme System Flow

```
ThemeContext
    │
    ├── State: theme ('light' | 'dark')
    ├── Function: toggleTheme()
    └── Effect: Apply class to <html>
            │
            ▼
    useTheme Hook
    (access theme anywhere)
            │
            ▼
    Components
    (use dark: variants)
            │
            ▼
    CSS Variables
    (from theme.css)
```

## 📦 Module Dependencies

### Core Dependencies (Already Installed)
- react: 19.1.1
- react-dom: 19.1.1
- tailwindcss: 4.1.16
- vite: 7.1.7

### Recommended Additional Dependencies
- framer-motion (animations)
- @headlessui/react (accessible components)
- @heroicons/react or lucide-react (icons)
- clsx (utility for conditional classes)

## 🎨 Styling Strategy

```
Tailwind CSS (Primary)
    │
    ├── Utility Classes (most styling)
    ├── dark: variants (dark mode)
    └── Custom Classes (minimal)
            │
            ▼
    CSS Variables (theme.css)
    (for dynamic values)
            │
            ▼
    Custom Animations (animations.css)
    (keyframes for special effects)
```

## 📝 File Naming Summary

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `Button.jsx`, `PricingCard.jsx` |
| Pages | PascalCase | `Home.jsx`, `NotFound.jsx` |
| Hooks | camelCase + use prefix | `useTheme.js`, `useMediaQuery.js` |
| Utils | camelCase | `formatters.js`, `validators.js` |
| Constants | camelCase (files) | `navigation.js`, `routes.js` |
| Services | camelCase + .service | `newsletter.service.js` |
| Assets | kebab-case | `hero-image.png`, `logo.svg` |
| Contexts | PascalCase + Context | `ThemeContext.jsx` |
| Folders | lowercase/kebab-case | `components/`, `assets/` |

---

This structure provides a solid foundation for building a professional, maintainable landing page while following Clean Architecture principles and modern React best practices.

