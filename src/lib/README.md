# Lib Directory

Third-party library configurations and wrappers.

## Library Config Files:

### `framer-motion.config.js`
- Framer Motion default configurations
- Reusable animation variants
- Transition presets

Example:
```javascript
export const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export const defaultTransition = {
  duration: 0.5,
  ease: 'easeInOut'
}
```

### `analytics.js`
- Google Analytics or other analytics setup
- Event tracking helpers
- Page view tracking

### `chart.config.js` (if using charts)
- Chart.js or Recharts configuration
- Default chart options
- Color schemes for data visualization

## Purpose:
- Centralize third-party library setup
- Create reusable configurations
- Abstract library-specific code
- Make it easier to swap libraries later

## Naming Convention:
- camelCase with descriptive names
- One file per major library
- Export configuration objects and helper functions

