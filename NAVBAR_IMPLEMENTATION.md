# Navbar Implementation - FinBiz

## 📋 نظرة عامة

تم تنفيذ شريط التنقل (Navbar) الكامل بناءً على مواصفات التصميم من Figma، بما في ذلك جميع التفاصيل الدقيقة للألوان والأبعاد والخطوط.

## 🎨 المكونات المُنشأة

### 1. Logo Component
**المسار**: `src/components/common/Logo/`

مكون الشعار يتضمن:
- أيقونة SVG الخاصة بـ FinBiz
- نص العلامة التجارية "FinBiz"
- تنسيق بخط Inter، وزن 600، حجم 20px

```jsx
<Logo className="optional-class" />
```

### 2. Button Component
**المسار**: `src/components/ui/Button/`

مكون الزر القابل لإعادة الاستخدام:
- Primary variant للزر "Get Started"
- خلفية #1F1F1F مع نص أبيض
- حواف دائرية (border-radius: 64px)
- أبعاد: 136x52 بكسل

```jsx
<Button variant="primary">Get started</Button>
```

### 3. Navbar Component
**المسار**: `src/components/layout/Navbar/`

شريط التنقل الرئيسي يتضمن:
- خلفية داكنة (#0F0F0F) مع تأثير blur
- Logo في اليسار
- قائمة navigation في المنتصف (Product, Pages, Integrations, Blog, Pricing)
- زر "Get Started" في اليمين
- Fixed position في أعلى الصفحة

```jsx
<Navbar />
```

## 📐 مواصفات التصميم

### الأبعاد والألوان

#### Navbar Container
```css
width: 1920px (full width)
height: 92px
background: #0F0F0F
backdrop-filter: blur(10px)
padding: 20px 320px
```

#### Logo Section
```css
width: 85px
height: 18px
font-family: Inter
font-weight: 600
font-size: 20px
color: #FBFBFB
```

#### Navigation Links
```css
font-family: DM Sans
font-weight: 400
font-size: 18px
line-height: 22.4px
color: #9B9CA1
hover: #ffffff
```

#### Get Started Button
```css
width: 136px
height: 52px
background: #1F1F1F
border-radius: 64px
padding: 16px 24px
color: #ffffff
```

## 🚀 التثبيت والاستخدام

### 1. الخطوط المطلوبة

تم إضافة الخطوط التالية في `index.html`:
- **DM Sans** (جميع الأوزان)
- **Inter** (جميع الأوزان)

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:wght@100..900&display=swap" rel="stylesheet">
```

### 2. استخدام Navbar في التطبيق

في ملف `App.jsx`:

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

⚠️ **مهم**: تأكد من إضافة `pt-[92px]` للمحتوى الرئيسي لتجنب تداخله مع الـ Navbar الثابت.

## 📱 التصميم المتجاوب (Responsive)

تم إضافة دعم للشاشات المختلفة:

| حجم الشاشة | Padding الجانبي |
|------------|------------------|
| 1920px+ | 320px |
| 1280px-1919px | 80px |
| 768px-1279px | 40px |
| أقل من 768px | 20px |

في الشاشات الصغيرة (< 768px)، يتم إخفاء قائمة Navigation تلقائياً.

## 📁 هيكل الملفات

```
src/
├── components/
│   ├── common/
│   │   └── Logo/
│   │       ├── Logo.jsx
│   │       ├── index.js
│   │       └── README.md
│   ├── ui/
│   │   └── Button/
│   │       ├── Button.jsx
│   │       ├── index.js
│   │       └── README.md
│   └── layout/
│       └── Navbar/
│           ├── Navbar.jsx
│           ├── Navbar.css
│           ├── index.js
│           └── README.md
└── assets/
    └── images/
        └── logos/
            └── logo.svg
```

## 🎯 الميزات

✅ تصميم دقيق 100% مطابق لـ Figma
✅ مكونات قابلة لإعادة الاستخدام
✅ تصميم متجاوب (Responsive)
✅ تأثيرات hover سلسة
✅ backdrop blur effect
✅ Fixed navigation
✅ توثيق شامل لكل مكون

## 🔧 التخصيص

### تغيير عناصر Navigation

في `Navbar.jsx`، عدّل مصفوفة `navItems`:

```jsx
const navItems = [
  { label: 'Product', href: '#product' },
  { label: 'Pages', href: '#pages', hasDropdown: true },
  // أضف أو عدّل العناصر هنا
];
```

### إضافة Variants جديدة للـ Button

في `Button.jsx`، أضف variant جديد:

```jsx
const variants = {
  primary: "bg-[#1F1F1F] text-white ...",
  secondary: "your-new-variant-styles",
};
```

## 🎨 الألوان المستخدمة

| اللون | الكود | الاستخدام |
|-------|-------|-----------|
| أسود داكن | #0F0F0F | خلفية Navbar |
| رمادي داكن | #1F1F1F | خلفية Button |
| رمادي فاتح | #9B9CA1 | نص Navigation |
| أبيض | #FBFBFB | نص Logo |
| أبيض نقي | #ffffff | نص Button |

## 🚦 اختبار التطبيق

لتشغيل التطبيق:

```bash
npm run dev
```

ثم افتح المتصفح على `http://localhost:5173`

## 📝 ملاحظات

1. **تأثير Blur**: يعمل على المتصفحات الحديثة فقط
2. **Position Fixed**: الـ Navbar يبقى ثابتاً في أعلى الصفحة عند التمرير
3. **Logo SVG**: متوفر في `src/assets/images/logos/logo.svg`
4. **الخطوط**: محمّلة من Google Fonts
5. **Tailwind CSS**: يستخدم للتنسيق الأساسي

## 🔗 روابط مفيدة

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)

## 👨‍💻 الدعم الفني

لأي استفسارات أو مشاكل، راجع ملفات README الموجودة في كل مكون:
- `/src/components/common/Logo/README.md`
- `/src/components/ui/Button/README.md`
- `/src/components/layout/Navbar/README.md`

---

✨ تم إنشاء جميع المكونات بنجاح ووفقاً لمواصفات Figma الدقيقة!

