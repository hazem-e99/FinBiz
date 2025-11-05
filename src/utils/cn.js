// Utility function to merge Tailwind CSS classes
// Similar to clsx or classnames

/**
 * Merges CSS class names, filtering out falsy values
 * @param {...string} classes - Class names to merge
 * @returns {string} Merged class string
 * 
 * @example
 * cn('btn', isActive && 'active', className)
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Conditional class utility
 * @param {Object} classMap - Object mapping conditions to class names
 * @returns {string} Merged class string
 * 
 * @example
 * cva({
 *   'text-blue-500': variant === 'primary',
 *   'text-gray-500': variant === 'secondary',
 * })
 */
export function cva(classMap) {
  return Object.entries(classMap)
    .filter(([_, condition]) => condition)
    .map(([className]) => className)
    .join(' ');
}

export default cn;

