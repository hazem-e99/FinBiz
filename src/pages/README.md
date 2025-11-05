# Pages Directory

Top-level page components that represent different routes in the application.

## Pages:

### `Home/`
- Main landing page
- Imports and composes all sections
- Top-level layout for the homepage

Structure:
```
Home/
  ├── Home.jsx        - Composes all landing sections
  └── index.js        - Clean export
```

### `NotFound/`
- 404 error page
- Custom not found design
- Link back to home

### `ComingSoon/` (Optional)
- Coming soon page for future features
- Email capture form

## Page Component Responsibility:
- Import and compose sections/components
- Handle page-level state if needed
- SEO metadata for the page
- Analytics page view tracking
- Top-level error boundaries

## Example Home Page Structure (concept):
```javascript
// Home.jsx
import { Hero, Features, Pricing, ... } from '@/sections'

const Home = () => {
  return (
    <main>
      <Hero />
      <Statistics />
      <Features />
      <About />
      <Services />
      <Testimonials />
      <Pricing />
      <CallToAction />
    </main>
  )
}
```

## Naming Convention:
- PascalCase for page components
- Each page in its own folder
- index.js for clean imports

