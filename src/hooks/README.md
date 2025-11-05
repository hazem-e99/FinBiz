# Hooks Directory

Custom React hooks for reusable logic across the application.

## Hooks:

### `useTheme.js`
- Access theme context (dark/light mode)
- Returns: `{ theme, toggleTheme, isDark }`

### `useMediaQuery.js`
- Responsive breakpoint detection
- Usage: `const isMobile = useMediaQuery('(max-width: 768px)')`

### `useScrollPosition.js`
- Track scroll position for navbar transparency, scroll-to-top button
- Returns: `{ scrollY, scrollDirection }`

### `useIntersectionObserver.js`
- Trigger animations when elements enter viewport
- For scroll-triggered animations

### `useLocalStorage.js`
- Persist and retrieve data from localStorage
- Sync state with localStorage
- Usage: `const [value, setValue] = useLocalStorage('key', defaultValue)`

### `useClickOutside.js` (Optional)
- Detect clicks outside an element (for dropdowns, modals)

### `useDebounce.js` (Optional)
- Debounce values for search inputs, form validation

## Naming Convention:
- camelCase with 'use' prefix
- Pure JavaScript (or TypeScript) functions
- Should be framework-agnostic logic where possible

