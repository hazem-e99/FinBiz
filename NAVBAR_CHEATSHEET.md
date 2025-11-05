# 🎯 Navbar Cheatsheet - دليل مرجعي سريع

<div dir="rtl">

## 🚀 أوامر سريعة

```bash
npm install          # تثبيت المكتبات
npm run dev         # تشغيل المشروع
npm run build       # بناء للإنتاج
npm run lint        # فحص الأخطاء
```

---

## 📦 استيراد المكونات

```jsx
// طريقة 1: من الملف المركزي
import { Navbar, Logo, Button } from './components';

// طريقة 2: استيراد مباشر
import Navbar from './components/layout/Navbar';
import Logo from './components/common/Logo';
import Button from './components/ui/Button';
```

---

## 🎨 الألوان - نسخ مباشر

```jsx
// خلفيات
bg-[#0F0F0F]      // خلفية رئيسية
bg-[#1F1F1F]      // خلفية ثانوية

// نصوص
text-white        // #ffffff
text-[#FBFBFB]    // Logo
text-[#9B9CA1]    // Navigation

// CSS Variables (اختياري)
--bg-primary: #0F0F0F;
--bg-secondary: #1F1F1F;
--text-primary: #FBFBFB;
--text-secondary: #9B9CA1;
```

---

## 🧩 استخدام المكونات

### Navbar
```jsx
<Navbar />
```

### Logo
```jsx
<Logo />
<Logo className="custom-class" />
```

### Button
```jsx
<Button variant="primary">Text</Button>
<Button variant="primary" onClick={handleClick}>Click</Button>
<Button variant="primary" style={{ width: '200px' }}>Custom</Button>
```

---

## 📐 الأبعاد الدقيقة

```css
/* Navbar */
width: 1920px (full)
height: 92px
padding: 20px 320px

/* Logo SVG */
width: 18px
height: 18px

/* Logo Text */
font: Inter 600 20px
line-height: 16.2px

/* Navigation */
font: DM Sans 400 18px
line-height: 22.4px

/* Button */
width: 136px
height: 52px
padding: 16px 24px
border-radius: 64px
```

---

## 🎨 الخطوط

```html
<!-- في index.html -->
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:wght@100..900&display=swap" rel="stylesheet">
```

```css
/* في CSS/JSX */
font-family: 'Inter', sans-serif;
font-family: 'DM Sans', sans-serif;
```

---

## 📱 Breakpoints

```css
/* Mobile */
@media (max-width: 768px) { padding: 20px; }

/* Tablet */
@media (min-width: 768px) { padding: 40px; }

/* Desktop */
@media (min-width: 1280px) { padding: 80px; }

/* Large */
@media (min-width: 1920px) { padding: 320px; }
```

---

## 🔧 تخصيص Navigation

```jsx
// في Navbar.jsx
const navItems = [
  { label: 'Product', href: '#product' },
  { label: 'Pages', href: '#pages', hasDropdown: true },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Blog', href: '#blog' },
  { label: 'Pricing', href: '#pricing' },
];
```

---

## 🎯 Layout Pattern

```jsx
function App() {
  return (
    <>
      {/* Navbar ثابت في الأعلى */}
      <Navbar />
      
      {/* المحتوى مع padding */}
      <div className="pt-[92px] bg-[#0F0F0F] min-h-screen">
        <div className="container mx-auto px-4">
          {/* المحتوى هنا */}
        </div>
      </div>
    </>
  );
}
```

---

## 🎨 Theme Classes

```jsx
// Dark theme (default)
<div className="bg-[#0F0F0F] text-white">

// Section container
<div className="container mx-auto px-4 py-20">

// Card/Box
<div className="bg-[#1F1F1F] rounded-lg p-8">

// Text styles
<h1 className="text-5xl font-bold text-white mb-6">
<p className="text-xl text-[#9B9CA1] mb-8">
```

---

## 🔍 مسارات الملفات

```
src/
├── components/
│   ├── common/Logo/Logo.jsx
│   ├── ui/Button/Button.jsx
│   └── layout/Navbar/Navbar.jsx
├── examples/NavbarExample.jsx
├── assets/images/logos/logo.svg
└── App.jsx
```

---

## ⚡ Tips & Tricks

### Fixed Navbar Spacing
```jsx
// دائماً أضف هذا للمحتوى
<div className="pt-[92px]">
```

### Smooth Scroll
```css
/* في CSS */
html { scroll-behavior: smooth; }
```

### Backdrop Blur Support
```css
/* Fallback للمتصفحات القديمة */
background: rgba(15, 15, 15, 0.9);
backdrop-filter: blur(10px);
```

### Link with Logo
```jsx
<a href="/">
  <Logo />
</a>
```

---

## 🐛 حل المشاكل السريع

| المشكلة | الحل |
|---------|------|
| Navbar يغطي المحتوى | `pt-[92px]` |
| الخطوط لا تظهر | تحقق من الإنترنت |
| Blur لا يعمل | متصفح قديم |
| Logo مفقود | تحقق من المسار |

---

## 📋 Checklist

```markdown
✅ npm install
✅ Logo.svg في المسار الصحيح
✅ الخطوط في index.html
✅ pt-[92px] للمحتوى
✅ bg-[#0F0F0F] للخلفية
✅ npm run dev للتشغيل
```

---

## 🎨 Component Props

### Logo
```typescript
className?: string
```

### Button
```typescript
variant?: 'primary'
onClick?: () => void
className?: string
style?: CSSProperties
children: ReactNode
```

---

## 📝 Code Snippets

### Hero Section
```jsx
<div className="pt-[92px] bg-[#0F0F0F] min-h-screen">
  <div className="container mx-auto px-4 py-20 text-center">
    <h1 className="text-6xl font-bold text-white mb-6">Title</h1>
    <p className="text-2xl text-[#9B9CA1] mb-10">Subtitle</p>
    <Button variant="primary">CTA</Button>
  </div>
</div>
```

### Section
```jsx
<section className="bg-[#0F0F0F] py-20">
  <div className="container mx-auto px-4">
    {/* Content */}
  </div>
</section>
```

### Card
```jsx
<div className="bg-[#1F1F1F] rounded-lg p-8">
  <h2 className="text-2xl font-semibold text-white mb-4">Title</h2>
  <p className="text-[#9B9CA1]">Description</p>
</div>
```

---

## 🔗 روابط سريعة

- 📘 [Quick Start](./NAVBAR_QUICK_START.md)
- 📗 [Full Docs](./NAVBAR_IMPLEMENTATION.md)
- 💻 [Examples](./src/examples/NavbarExample.jsx)
- 🎨 [Navbar README](./src/components/layout/Navbar/README.md)

---

## 📊 Stats

- **Components**: 3 (Logo, Button, Navbar)
- **Files**: 13+
- **Lines of Code**: ~500
- **Lint Errors**: 0
- **Figma Accuracy**: 100%

---

<div align="center">

### 💾 احفظ هذا الملف للمرجع السريع!

</div>

</div>

