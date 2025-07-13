# 📁 Components Structure

Dự án đã được tổ chức lại theo cấu trúc thư mục phân cấp để dễ quản lý và maintain.

## 🏗️ Cấu trúc thư mục

```
components/
├── 📂 common/              # Components dùng chung
│   ├── Header.tsx         # Navigation header  
│   ├── Footer.tsx         # Footer với social links
│   ├── ThemeSwitch.tsx    # Dark/Light mode toggle
│   ├── SectionHeading.tsx # Tiêu đề sections
│   ├── SectionDivider.tsx # Đường phân cách
│   └── index.ts          # Export tập trung
│
├── 📂 skills/              # Skills related components
│   ├── Skills.tsx         # Main skills section
│   ├── SkillsCarousel.tsx # Sliding skills carousel  
│   ├── SkillIcon.tsx      # Individual skill icon
│   ├── SkillCategory.tsx  # Skill category cards
│   └── index.ts          # Export tập trung
│
├── 📂 projects/            # Projects related components
│   ├── Projects.tsx       # Main projects section
│   ├── ProjectCard.tsx    # Individual project card
│   └── index.ts          # Export tập trung
│
├── 📂 experience/          # Experience related components
│   ├── Experience.tsx     # Main experience section
│   ├── ExperienceCard.tsx # Individual experience item
│   └── index.ts          # Export tập trung
│
├── 📂 education/           # Education related components  
│   ├── Education.tsx      # Main education section
│   ├── EducationCard.tsx  # Individual education item
│   └── index.ts          # Export tập trung
│
├── 📂 contact/             # Contact related components
│   ├── Contact.tsx        # Main contact section
│   ├── ContactForm.tsx    # Contact form logic
│   ├── SubmitButton.tsx   # Form submit button
│   └── index.ts          # Export tập trung
│
├── 📂 intro/               # Introduction related components
│   ├── Intro.tsx          # Hero/Landing section
│   └── index.ts          # Export tập trung
│
└── index.ts               # Export tất cả components
```

## 🔧 Cách sử dụng

### Import từ folder cụ thể:
```tsx
import { Skills, SkillsCarousel, SkillIcon } from '@/components/skills';
import { Header, Footer, ThemeSwitch } from '@/components/common';
import { Contact, ContactForm } from '@/components/contact';
```

### Import từ components chính:
```tsx
import { Skills, Header, Contact } from '@/components';
```

## 🎯 Lợi ích của cấu trúc mới

### ✅ **Tổ chức tốt hơn:**
- Mỗi feature có thư mục riêng
- Dễ tìm và định vị components
- Logic related được nhóm lại với nhau

### ✅ **Maintainability:**
- Dễ maintain và debug
- Thêm features mới không làm cluttered codebase
- Clear separation of concerns

### ✅ **Reusability:**
- Components có thể reuse dễ dàng
- Import chỉ những gì cần thiết
- Better tree-shaking

### ✅ **Team Collaboration:**
- Developers có thể work trên features riêng biệt
- Ít conflict trong Git
- Easier code reviews

## 🚀 Best Practices

### 1. **Naming Convention:**
- Folder names: lowercase với dấu gạch ngang
- Component names: PascalCase
- File names: PascalCase.tsx

### 2. **Export Strategy:**
- Mỗi folder có file `index.ts` để export
- Default export cho main component
- Named exports cho utilities

### 3. **Component Structure:**
```tsx
// ✅ Good
components/
├── feature/
│   ├── MainComponent.tsx     # Main feature component
│   ├── SubComponent.tsx      # Supporting components
│   ├── types.ts             # Feature-specific types  
│   ├── utils.ts             # Feature-specific utils
│   └── index.ts             # Exports

// ❌ Avoid
components/
├── FeatureMainComponent.tsx
├── FeatureSubComponent.tsx
├── FeatureTypes.ts
└── FeatureUtils.ts
```

### 4. **Dependencies:**
```tsx
// ✅ Import from lib/ for shared logic
import { skillIcons } from '@/lib/skillIcons';
import { useSectionInView } from '@/lib/hooks';

// ✅ Import from components/ for UI
import { SectionHeading } from '@/components/common';
```

## 🎨 UI Components Structure

Mỗi UI component được design theo pattern:

```tsx
// Component chính
export default function MainComponent() {
  // Main logic và layout
}

// Sub-components
function SubComponent() {
  // Specific functionality
}

// Exports
export { MainComponent as default, SubComponent };
```

Cấu trúc này giúp project dễ scale, maintain và develop trong tương lai! 🚀
