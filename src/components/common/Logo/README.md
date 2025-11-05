# Logo Component

## Overview
مكون الشعار (Logo) الخاص بالعلامة التجارية FinBiz، يتضمن الأيقونة والنص.

## Features
- أيقونة SVG مخصصة
- نص العلامة التجارية "FinBiz"
- تنسيق مطابق لمواصفات Figma
- قابل لإعادة الاستخدام

## Structure

```
Logo/
├── Logo.jsx          # المكون الرئيسي
├── index.js          # ملف التصدير
└── README.md         # التوثيق
```

## Design Specifications

### Logo Icon
- **Width**: 18px
- **Height**: 18px
- **Source**: `/src/assets/images/logos/logo.svg`

### Brand Text (FinBiz)
- **Font Family**: Inter
- **Font Weight**: 600 (Semi Bold)
- **Font Size**: 20px
- **Line Height**: 16.2px
- **Color**: #FBFBFB

### Container
- **Display**: Flex
- **Gap**: 8px (بين الأيقونة والنص)
- **Align Items**: Center

## Usage

```jsx
import Logo from './components/common/Logo';

// استخدام بسيط
<Logo />

// مع className إضافي
<Logo className="custom-class" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | '' | كلاسات CSS إضافية |

## Dependencies
- `/src/assets/images/logos/logo.svg` - ملف SVG الخاص بالشعار
- Inter Font من Google Fonts

## Examples

```jsx
// في Navbar
<Logo />

// في Footer
<Logo className="footer-logo" />

// مع Link (إذا أردت إضافة رابط)
<a href="/">
  <Logo />
</a>
```

## Notes
- الشعار يستخدم خط Inter المحمّل من Google Fonts
- يمكن تخصيص الحجم واللون من خلال className
- SVG الخاص بالشعار موجود في `/src/assets/images/logos/`

