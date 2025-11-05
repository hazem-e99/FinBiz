# Button Component

## Overview
مكون الزر (Button) القابل لإعادة الاستخدام، مصمم وفقاً لمواصفات Figma.

## Features
- تصميم عصري ونظيف
- دعم variants مختلفة
- تأثيرات hover سلسة
- قابل للتخصيص بالكامل

## Structure

```
Button/
├── Button.jsx        # المكون الرئيسي
├── index.js          # ملف التصدير
└── README.md         # التوثيق
```

## Design Specifications

### Primary Variant (Get Started)
- **Width**: 136px
- **Height**: 52px
- **Background**: #1F1F1F
- **Border Radius**: 64px
- **Padding**: 16px 24px (vertical horizontal)
- **Color**: #ffffff
- **Font**: DM Sans
- **Font Size**: 16px

## Usage

```jsx
import Button from './components/ui/Button';

// استخدام بسيط
<Button variant="primary">
  Get started
</Button>

// مع onClick handler
<Button 
  variant="primary" 
  onClick={() => console.log('clicked')}
>
  Click me
</Button>

// مع inline styles إضافية
<Button 
  variant="primary"
  style={{ width: '200px' }}
>
  Custom Width
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | محتوى الزر (نص أو عناصر) |
| onClick | function | - | دالة يتم استدعاؤها عند الضغط |
| variant | string | 'primary' | نوع الزر (primary, secondary, etc.) |
| className | string | '' | كلاسات CSS إضافية |
| style | object | {} | تنسيقات inline إضافية |

## Variants

### Primary
```jsx
<Button variant="primary">Get started</Button>
```
- خلفية داكنة (#1F1F1F)
- نص أبيض
- حواف دائرية (64px)

## Examples

```jsx
// في Navbar
<Button variant="primary">
  Get started
</Button>

// زر تسجيل دخول
<Button 
  variant="primary"
  onClick={handleLogin}
>
  Login
</Button>

// زر مع حجم مخصص
<Button 
  variant="primary"
  style={{ 
    width: '180px', 
    fontSize: '18px' 
  }}
>
  Sign Up
</Button>
```

## Customization

يمكنك إضافة variants جديدة بتعديل ملف `Button.jsx`:

```jsx
const variants = {
  primary: "bg-[#1F1F1F] text-white ...",
  secondary: "bg-transparent border-2 border-white text-white ...",
  // أضف variants جديدة هنا
};
```

## Notes
- الزر يستخدم Tailwind CSS للتنسيق
- تأثير hover يغير لون الخلفية بشكل سلس
- يمكن تمرير أي props إضافية للزر (disabled, type, etc.)

