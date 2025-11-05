# Footer Component

## Overview
مكون الـ Footer (تذييل الصفحة) الكامل لموقع FinBiz، مصمم بناءً على مواصفات Figma الدقيقة.

## Features
- تصميم احترافي ونظيف
- 4 أقسام رئيسية (Brand, Company, Help, Newsletter)
- أيقونات وسائل التواصل الاجتماعي
- نموذج الاشتراك في النشرة البريدية
- حقوق النشر
- Responsive Design

## Structure

```
Footer/
├── Footer.jsx        # المكون الرئيسي
├── Footer.css        # التنسيقات الخاصة
├── index.js          # ملف التصدير
└── README.md         # التوثيق
```

## Design Specifications

### Footer Container
- **Width**: 1920px (full width)
- **Min Height**: 474px
- **Background**: #0F0F0F
- **Padding Top**: 98px

### Inner Container
- **Max Width**: 1637px
- **Gap**: 46px
- **Padding**: 47px vertical

### Content Layout
يتكون من 4 أقسام رئيسية:

#### 1. Brand Section (Left)
- **Width**: 496px
- **Height**: 170px
- يحتوي على:
  - Logo (نفس اللوجو في Navbar)
  - وصف الشركة (DM Sans 400, 20px, line-height 160%)
  - أيقونات التواصل الاجتماعي (4 أيقونات، 36×36px)

#### 2. Company Section
- **Width**: 94px
- **Title**: "Company" (DM Sans 700, 20px)
- **Links**: Service, Resources, About us
- **Font**: DM Sans 400, 16px
- **Color**: #B9B3B3

#### 3. Help Section
- **Width**: 146px
- **Title**: "Help" (DM Sans 700, 20px)
- **Links**: Customer Support, Terms & Conditions, Privacy Policy

#### 4. Newsletter Section
- **Width**: 487px
- **Title**: "Subscribe to Newsletter"
- Newsletter input component (487.5×55px)

### Divider
- **Width**: 100%
- **Border**: 1px solid #333333

### Copyright
- **Text**: "© Copyright 2024, All Rights Reserved by FinBiz"
- **Font**: DM Sans 400, 14px, line-height 20px
- **Color**: #FAFAFA

## Usage

```jsx
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>{/* المحتوى */}</main>
      <Footer />
    </>
  );
}
```

## Social Icons

يستخدم مكتبة `react-icons` للأيقونات:
- Twitter (FaTwitter)
- Facebook (FaFacebookF)
- Instagram (FaInstagram)
- Dribbble (FaDribbble)

كل أيقونة:
- حجم: 36×36px
- خلفية: #3D3D3D
- Hover: #A3DC2F مع حركة للأعلى

## Colors

```css
--bg-primary: #0F0F0F;        /* خلفية Footer */
--text-primary: #FFFFFF;      /* العناوين */
--text-secondary: #B9B3B3;    /* النصوص والروابط */
--text-copyright: #FAFAFA;    /* حقوق النشر */
--border-color: #333333;      /* الخط الفاصل */
--social-bg: #3D3D3D;        /* خلفية الأيقونات */
--accent-color: #A3DC2F;     /* لون التفاعل */
```

## Dependencies
- Logo Component
- NewsletterInput Component
- react-icons (FaTwitter, FaFacebookF, FaInstagram, FaDribbble)
- DM Sans Font

## Responsive Behavior

| الشاشة | السلوك |
|--------|---------|
| Desktop (> 1600px) | التصميم الكامل |
| Laptop (1280-1600px) | تعديل padding |
| Tablet (768-1280px) | flex-wrap للأقسام |
| Mobile (< 768px) | عمودي بالكامل |

## Examples

### استخدام بسيط
```jsx
<Footer />
```

### مع محتوى مخصص
يمكنك تعديل الروابط والنصوص داخل `Footer.jsx`.

## Customization

### تغيير الروابط

```jsx
const companyLinks = [
  { label: 'الخدمات', href: '#services' },
  { label: 'المنتجات', href: '#products' },
  // أضف المزيد...
];
```

### تغيير الأيقونات الاجتماعية

```jsx
import { FaLinkedin, FaYoutube } from 'react-icons/fa';

const socialIcons = [
  { Icon: FaLinkedin, href: '#linkedin', label: 'LinkedIn' },
  { Icon: FaYoutube, href: '#youtube', label: 'YouTube' },
];
```

### تغيير النص الوصفي

عدّل النص في `footer-description`:
```jsx
<p className="footer-description">
  النص الجديد هنا
</p>
```

## Notes
- Footer يستخدم نفس Logo الموجود في Navbar
- الأيقونات من مكتبة react-icons (تم تثبيتها)
- التصميم responsive ويتكيف مع جميع الشاشات
- تأثيرات hover سلسة على الروابط والأيقونات
- Newsletter input منفصل كمكون قابل لإعادة الاستخدام

