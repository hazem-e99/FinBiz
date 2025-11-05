# Types Directory

Type definitions for TypeScript (or JSDoc types for JavaScript projects).

## Purpose:
- Centralized type definitions
- Shared interfaces and types
- Prop type definitions for components

## Type Files:

### `components.types.js` (or `.d.ts`)
- Component prop types
- Variant types
- Common component interfaces

### `theme.types.js`
- Theme-related types
- Color scheme types
- Breakpoint types

### `data.types.js`
- Data structure types
- API response types
- Entity types (Testimonial, PricingPlan, Feature)

## Note:
This project is currently JavaScript-based. If you migrate to TypeScript later:
- Rename files to `.ts` and `.tsx`
- Define interfaces and types here
- Import types across the application

For JavaScript projects with JSDoc:
```javascript
/**
 * @typedef {Object} ButtonProps
 * @property {'primary' | 'secondary' | 'outline'} variant
 * @property {React.ReactNode} children
 * @property {() => void} onClick
 */
```

## Naming Convention:
- PascalCase for type names
- camelCase for file names
- Descriptive, clear type names

