# 🚀 Quick Start Guide - Core Concept Website

## Installation & Running

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: View in Browser
Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Complete File Structure

```
d:\new-web\core\
├── app/
│   ├── globals.css              # Tailwind directives & custom styles
│   ├── layout.tsx               # Root layout (RTL, metadata, fonts)
│   └── page.tsx                 # Main landing page
│
├── components/
│   ├── Header.tsx               # Sticky header with navigation
│   ├── Hero.tsx                 # Hero section (dark)
│   ├── About.tsx                # About/Who we are
│   ├── VisionMission.tsx        # Vision & Mission cards
│   ├── WhyUs.tsx                # 4 pillars (dark section)
│   ├── Domains.tsx              # 6 training domains grid
│   ├── Partners.tsx             # Partner logos & testimonial
│   └── Contact.tsx              # Contact info & footer
│
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── README.md                    # Full documentation
├── tailwind.config.ts           # Tailwind custom configuration
└── tsconfig.json                # TypeScript configuration
```

---

## 🎨 Design System

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Primary Black | `#1F1F1F` | Dominant backgrounds |
| Primary White | `#F4F4F4` | Content backgrounds |
| Accent Orange | `#E45427` | CTAs, highlights (10-15% max) |

### Custom Tailwind Classes

**Buttons:**
- `.btn-primary` - Orange filled button with hover effect
- `.btn-secondary` - Orange outline button with hover fill

**Layout:**
- `.section-container` - Consistent section padding & max-width
- `.card-premium` - Premium card with shadow, border & hover effects

### Typography
- Font: **IBM Plex Sans Arabic** (loaded from Google Fonts)
- Weights: 300, 400, 500, 600, 700
- Fallbacks: Cairo, Noto Kufi Arabic

---

## 📱 Sections Overview

| # | Section | ID | Background | Content |
|---|---------|----|-----------|------------|
| 1 | Header | - | Black (sticky) | Logo + Nav + CTA |
| 2 | Hero | - | Black | Main headline + description + 2 CTAs |
| 3 | About | `about` | White | Who we are card |
| 4 | Vision/Mission | `vision` | Gradient | 2 premium cards |
| 5 | Why Us | `why-us` | Black | 4 numbered pillars |
| 6 | Domains | `domains` | Gradient | 6 domain cards in grid |
| 7 | Partners | `partners` | White | Logo wall + testimonial |
| 8 | Contact | `contact` | Black | Contact info + footer |

---

## ⚙️ Key Features Implemented

✅ **RTL Support**
- `dir="rtl"` on `<html>` element
- Logical spacing throughout
- Arabic-first content

✅ **Smooth Navigation**
- Smooth scroll to sections
- Sticky header with scroll effects
- Mobile-responsive menu

✅ **Premium UI/UX**
- Hover effects on cards
- Smooth transitions
- Scale transforms
- Shadow effects
- Geometric background elements

✅ **Responsive Design**
- Desktop-first approach
- Mobile-optimized
- Flexible grids
- Responsive typography

✅ **SEO Ready**
- Metadata in `layout.tsx`
- Open Graph tags
- Arabic locale (`ar_SA`)
- Semantic HTML

---

## 🔧 Common Customizations

### Update Brand Colors
Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    black: '#1F1F1F',  // Change here
    white: '#F4F4F4',  // Change here
  },
  accent: {
    orange: '#E45427',  // Change here
  },
}
```

### Update Content
Each section's content is in its component file:
- `components/Hero.tsx` - Hero text & CTAs
- `components/About.tsx` - About text
- `components/VisionMission.tsx` - Vision & mission text
- etc.

### Add New Section
1. Create component in `components/YourSection.tsx`
2. Import in `app/page.tsx`
3. Add to page: `<YourSection />`
4. Add nav link in `Header.tsx` (optional)

### Update Navigation
Edit `components/Header.tsx`:

```typescript
const navItems = [
  { label: 'من نحن', id: 'about' },
  // Add your item here
]
```

---

## 🚀 Production Build

### Build
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 📊 Project Stats

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 3.4
- **Language:** TypeScript 5
- **Components:** 8 main components
- **Sections:** 8 sections (single-page)
- **RTL:** Full Arabic support
- **No linter errors:** ✅

---

## 💡 Tips

1. **Development:** Use `npm run dev` for hot reload
2. **Testing:** Check responsiveness at different breakpoints
3. **Content:** All Arabic content is easily editable in component files
4. **Styling:** Use Tailwind utilities for consistency
5. **Performance:** Next.js automatically optimizes images and fonts

---

## 🆘 Troubleshooting

### Port 3000 already in use?
```bash
# Use different port
npm run dev -- -p 3001
```

### Dependencies not installing?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors?
```bash
# Check TypeScript errors
npm run build
```

---

**Ready to launch! 🚀**

For full documentation, see `README.md`

