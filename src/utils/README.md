# Utils Directory

Pure utility functions and helper methods.

## Utility Files:

### `formatters.js`
- Number formatting (currency, percentages, large numbers)
- Date formatting
- String formatting (truncate, capitalize, slugify)

Example functions:
- `formatCurrency(amount)` → "$350,240"
- `formatNumber(num)` → "1.5M"
- `formatDate(date, format)` → "Nov 5, 2025"

### `validators.js`
- Form validation functions
- Email validation
- Phone number validation
- Required field checks
- Custom validation rules

Example functions:
- `isValidEmail(email)` → boolean
- `validateForm(data, rules)` → errors object

### `animations.js`
- Framer Motion animation configurations
- Reusable animation variants
- Scroll animation configs

Example:
- `fadeInUp` - Fade in and slide up animation
- `staggerContainer` - Stagger children animations

### `helpers.js`
- General helper functions
- Array manipulation
- Object operations
- DOM utilities

Example functions:
- `cn(...classes)` - Class name merger (like clsx)
- `debounce(fn, delay)`
- `throttle(fn, delay)`
- `sleep(ms)`

## Naming Convention:
- camelCase for files and functions
- Pure functions (no side effects)
- Should be framework-agnostic
- Easily testable

