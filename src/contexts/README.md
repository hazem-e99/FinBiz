# Contexts Directory

React Context providers for global state management.

## Contexts:

### `ThemeContext.jsx`
- Manages dark/light mode state
- Provides theme toggle function
- Persists preference to localStorage
- Applies 'dark' class to document root

### `ModalContext.jsx` (Optional)
- Global modal state management
- Open/close modal functions
- Modal content rendering

## Usage Example:
```javascript
// ThemeContext structure (concept only, not implementation)
export const ThemeProvider = ({ children }) => {
  // State: theme = 'light' | 'dark'
  // Function: toggleTheme()
  // Effect: Apply class to document, save to localStorage
}

export const useTheme = () => {
  // Returns { theme, toggleTheme, isDark }
}
```

## Naming Convention:
- PascalCase with 'Context' suffix
- Export both Provider and custom hook

