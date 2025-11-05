# Styles Directory

Global styles, CSS custom properties, and Tailwind configuration.

## Style Files:

### `globals.css`
- Tailwind imports (@tailwind base, components, utilities)
- Global CSS resets
- Base HTML element styling
- Custom utility classes

Example structure:
```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Global styles */
* {
  /* Custom resets */
}

body {
  /* Body defaults */
}
```

### `theme.css`
- CSS custom properties (CSS variables)
- Light and dark mode color definitions
- Design tokens

Example structure:
```css
:root {
  /* Light mode */
  --color-primary: #00D959;
  --color-background: #FFFFFF;
  --color-text: #1A1A1A;
  --color-muted: #6B7280;
}

.dark {
  /* Dark mode */
  --color-primary: #00D959;
  --color-background: #0A0A0A;
  --color-text: #FFFFFF;
  --color-muted: #9CA3AF;
}
```

### `animations.css`
- Custom CSS animations
- Keyframes for special effects
- Animation utility classes

Example:
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
```

## Tailwind CSS v4 Integration:
- Already configured in vite.config.js
- Use Tailwind utilities as primary styling method
- CSS modules only for component-specific styles if needed
- CSS custom properties for dynamic theming

## Dark Mode Strategy:
1. Define color variables in `theme.css`
2. Use Tailwind's `dark:` variant in components
3. Apply `.dark` class to `<html>` element via JavaScript
4. Store preference in localStorage

## Naming Convention:
- kebab-case for CSS files
- BEM or descriptive class names for custom CSS
- Prefer Tailwind utilities over custom CSS

