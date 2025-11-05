# Examples - أمثلة الاستخدام

## 📚 نظرة عامة

هذا المجلد يحتوي على أمثلة عملية لاستخدام المكونات المختلفة في المشروع.

## 📁 الملفات

### NavbarExample.jsx

يحتوي على 6 أمثلة مختلفة:

#### 1️⃣ BasicNavbarExample
استخدام بسيط للـ Navbar

```jsx
import { BasicNavbarExample } from './examples/NavbarExample';

<BasicNavbarExample />
```

#### 2️⃣ LogoExample
كيفية استخدام Logo بشكل منفصل

```jsx
import { LogoExample } from './examples/NavbarExample';

<LogoExample />
```

#### 3️⃣ ButtonExample
أمثلة متعددة لاستخدام Button مع خصائص مختلفة

```jsx
import { ButtonExample } from './examples/NavbarExample';

<ButtonExample />
```

#### 4️⃣ FullPageExample
مثال كامل لصفحة مع Navbar و Hero Section

```jsx
import { FullPageExample } from './examples/NavbarExample';

<FullPageExample />
```

#### 5️⃣ LogoWithLinkExample
كيفية تحويل Logo إلى رابط

```jsx
import { LogoWithLinkExample } from './examples/NavbarExample';

<LogoWithLinkExample />
```

#### 6️⃣ MultipleButtonsExample
عرض عدة أزرار بجانب بعضها

```jsx
import { MultipleButtonsExample } from './examples/NavbarExample';

<MultipleButtonsExample />
```

## 🚀 كيفية الاستخدام

### في App.jsx

```jsx
import { FullPageExample } from './examples/NavbarExample';

function App() {
  return <FullPageExample />;
}
```

### أو استخدم مكون معين

```jsx
import { Navbar, Button, Logo } from './components';

function MyPage() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Logo />
        <Button variant="primary">Action</Button>
      </div>
    </>
  );
}
```

## 💡 نصائح

1. **Fixed Navbar**: دائماً أضف `pt-[92px]` للمحتوى الرئيسي
2. **Dark Background**: استخدم `bg-[#0F0F0F]` لتطابق تصميم Navbar
3. **Spacing**: استخدم `container mx-auto px-4` للمحتوى المحاذي
4. **Colors**: 
   - Primary text: `text-white`
   - Secondary text: `text-[#9B9CA1]`
   - Background: `bg-[#0F0F0F]`
   - Button bg: `bg-[#1F1F1F]`

## 📖 مراجع إضافية

- [Navbar Documentation](../components/layout/Navbar/README.md)
- [Logo Documentation](../components/common/Logo/README.md)
- [Button Documentation](../components/ui/Button/README.md)

---

✨ جرّب الأمثلة المختلفة وعدّلها حسب احتياجاتك!

