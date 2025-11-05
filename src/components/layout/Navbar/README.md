# Navbar Component

## Overview
مكون شريط التنقل الرئيسي (Navbar) للموقع، مصمم بناءً على مواصفات Figma الدقيقة.

## Features
- تصميم ثابت في أعلى الصفحة (Fixed Position)
- خلفية داكنة مع تأثير blur
- يتضمن Logo والعلامة التجارية FinBiz
- قائمة navigation مع 5 عناصر
- زر "Get Started" مخصص
- Responsive Design للشاشات المختلفة

## Structure

```
Navbar/
├── Navbar.jsx        # المكون الرئيسي
├── Navbar.css        # التنسيقات الخاصة
├── index.js          # ملف التصدير
└── README.md         # التوثيق
```

## Design Specifications

### Navbar Container
- **Width**: 1920px (كامل العرض)
- **Height**: 92px
- **Background**: #0F0F0F
- **Backdrop Filter**: blur(10px)
- **Padding**: 20px 320px

### Logo Section
- **Width**: 85px
- **Height**: 18px
- **Font**: Inter, 600 weight
- **Font Size**: 20px
- **Color**: #FBFBFB

### Navigation Items
- **Font**: DM Sans, 400 weight
- **Font Size**: 18px
- **Line Height**: 22.4px
- **Color**: #9B9CA1
- **Hover Effect**: تغيير اللون إلى الأبيض

### Get Started Button
- **Width**: 136px
- **Height**: 52px
- **Background**: #1F1F1F
- **Border Radius**: 64px
- **Padding**: 16px 24px
- **Color**: #ffffff

## Usage

```jsx
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-[92px]">
        {/* المحتوى هنا */}
      </div>
    </>
  );
}
```

## Dependencies
- Logo Component (`src/components/common/Logo`)
- Button Component (`src/components/ui/Button`)
- DM Sans Font (من Google Fonts)
- Inter Font (من Google Fonts)

## Responsive Behavior
- **Desktop (1920px+)**: Padding 320px على الجانبين
- **Large Screens (1280px-1919px)**: Padding 80px على الجانبين
- **Medium Screens (768px-1279px)**: Padding 40px على الجانبين
- **Mobile (< 768px)**: Padding 20px على الجانبين، إخفاء قائمة Navigation

## Notes
- الـ Navbar ثابت في أعلى الصفحة (position: fixed)
- تأكد من إضافة `pt-[92px]` للمحتوى الرئيسي لتجنب التداخل
- تأثير blur يعمل على المتصفحات الحديثة

