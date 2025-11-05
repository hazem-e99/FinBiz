# NewsletterInput Component

## Overview
مكون نموذج الاشتراك في النشرة البريدية، مصمم للاستخدام في Footer.

## Features
- حقل إدخال البريد الإلكتروني
- زر إرسال مخصص
- تحقق من صحة البريد الإلكتروني
- تأثيرات hover وfocus
- تصميم responsive

## Structure

```
NewsletterInput/
├── NewsletterInput.jsx   # المكون الرئيسي
├── index.js              # ملف التصدير
└── README.md             # التوثيق
```

## Design Specifications

### Container
- **Width**: 487.5px
- **Height**: 55px
- **Gap**: 13px (بين Input و Button)

### Input Field
- **Background**: Transparent
- **Border**: 1px solid #333333
- **Border Radius**: 8px
- **Padding**: 17px 20px 17px 20px
- **Font**: DM Sans 400, 16px
- **Color**: #FAFAFA
- **Focus Border**: #A3DC2F

### Button
- **Background**: #A3DC2F
- **Hover**: #92c925
- **Text Color**: #0F0F0F
- **Font**: DM Sans 600, 16px
- **Border Radius**: 8px
- **Padding**: 0 32px

## Usage

```jsx
import NewsletterInput from './components/ui/NewsletterInput';

// استخدام بسيط
<NewsletterInput />

// مع props مخصصة
<NewsletterInput 
  placeholder="أدخل بريدك الإلكتروني"
  buttonText="اشترك"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| placeholder | string | "Enter email address" | نص placeholder للحقل |
| buttonText | string | "Join" | نص الزر |

## Examples

### استخدام افتراضي
```jsx
<NewsletterInput />
```

### مع نصوص مخصصة
```jsx
<NewsletterInput 
  placeholder="Email address"
  buttonText="Subscribe"
/>
```

### في Footer
```jsx
<div className="footer-newsletter">
  <h3>Subscribe to Newsletter</h3>
  <NewsletterInput />
</div>
```

## Behavior

### عند الإرسال (Submit)
- يتحقق من صحة البريد الإلكتروني (HTML5 validation)
- يطبع البريد في console (يمكن تغييره)
- يمسح الحقل بعد الإرسال

### Validation
- Required: حقل إلزامي
- Type email: يجب أن يكون بريد إلكتروني صحيح

## Customization

### تغيير معالج الإرسال

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  
  // أضف الكود الخاص بك هنا
  // مثلاً: إرسال إلى API
  fetch('/api/newsletter', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
  
  setEmail('');
};
```

### تغيير الألوان

في الـ CSS أو inline styles:
```jsx
style={{
  borderColor: 'your-color',
  focusBorderColor: 'your-focus-color',
}}
```

### إضافة validation إضافية

```jsx
const [error, setError] = useState('');

const validateEmail = (email) => {
  // الكود الخاص بك
  if (!email.includes('@company.com')) {
    setError('Please use company email');
    return false;
  }
  return true;
};
```

## Styling

### الحالات المختلفة

**Default:**
- Border: #333333

**Focus:**
- Border: #A3DC2F
- Outline: None

**Hover (Button):**
- Background: #92c925
- Transition: 200ms

## Accessibility

- ✅ Label implicit (placeholder)
- ✅ Type email للتحقق التلقائي
- ✅ Required attribute
- ✅ Form submission handling
- ✅ Keyboard accessible

## Notes
- المكون يستخدم React hooks (useState)
- التحقق من البريد الإلكتروني يتم عبر HTML5
- يمكن تخصيص معالج الإرسال حسب احتياجاتك
- التصميم مطابق لمواصفات Figma بدقة
- تأثيرات transition سلسة (200ms)

