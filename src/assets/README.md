# Assets Directory

Static assets including images, fonts, icons, and data files.

## Structure:

### `/images`
All image assets organized by category:
- `/logos` - Brand logos, client logos, trust badges
- `/icons` - Custom icon files (SVG, PNG)
- `/illustrations` - Hero illustrations, decorative graphics
- `/photos` - Photo assets, team photos, testimonial avatars

### `/fonts` (Optional)
Custom web fonts if not using Google Fonts:
- Font files (.woff, .woff2, .ttf)
- Font face declarations

### `/data`
Static JSON data files:
- `testimonials.json` - Customer testimonial data
- `features.json` - Feature list data
- `pricing-plans.json` - Pricing tier information
- `faq.json` - Frequently asked questions

## Data File Examples:

### `testimonials.json`
```json
[
  {
    "id": "1",
    "name": "Roderick LaMarko",
    "role": "Founder",
    "avatar": "/images/photos/testimonial-1.jpg",
    "rating": 5,
    "content": "I really like the system as the management..."
  }
]
```

### `pricing-plans.json`
```json
[
  {
    "id": "basic",
    "name": "Basic",
    "price": 499,
    "period": "month",
    "description": "Perfect Plan to get started",
    "features": [
      "Only 3x AI Content",
      "Advance Editor Tool",
      "Unlimited Download"
    ]
  }
]
```

## Image Optimization:
- Use WebP format for photos
- Use SVG for icons and logos
- Optimize images before committing (compress, resize)
- Consider using Vite's built-in image optimization

## Naming Convention:
- kebab-case for all asset files
- Descriptive names: `hero-background.png`, `company-logo.svg`
- Version numbers if needed: `logo-v2.svg`
- Avoid spaces and special characters

## Import Pattern:
```javascript
import heroImage from '@/assets/images/illustrations/hero-image.png'
import Logo from '@/assets/images/logos/company-logo.svg'
```

