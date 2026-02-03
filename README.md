# Core Concept (كور كونسيبت) - Corporate Training Website

A premium Saudi corporate training website built with Next.js, Tailwind CSS, and full RTL support for Arabic-first content.

## 🎨 Brand Identity

**Colors:**
- Primary Black: `#1F1F1F`
- Secondary White: `#F4F4F4`
- Accent Orange: `#E45427`

**Typography:**
- IBM Plex Sans Arabic (Google Fonts)
- Fallback: Cairo / Noto Kufi Arabic

## 🚀 Features

- ✅ Next.js 16 with App Router
- ✅ Tailwind CSS with custom design system
- ✅ Full RTL (Right-to-Left) support
- ✅ Responsive design (desktop-first, mobile-optimized)
- ✅ Premium UI with smooth interactions
- ✅ SEO-ready metadata
- ✅ Clean component architecture
- ✅ Smooth scroll navigation

## 📦 Project Structure

```
core-concept-website/
├── app/
│   ├── globals.css           # Global styles & Tailwind directives
│   ├── layout.tsx             # Root layout with RTL & font setup
│   └── page.tsx               # Main landing page
├── components/
│   ├── Header.tsx             # Sticky navigation header
│   ├── Hero.tsx               # Hero section with CTAs
│   ├── About.tsx              # About/Who we are section
│   ├── VisionMission.tsx      # Vision & Mission cards
│   ├── WhyUs.tsx              # 4 pillars of differentiation
│   ├── Domains.tsx            # Training domains grid
│   ├── Partners.tsx           # Partners & testimonials
│   └── Contact.tsx            # Contact info & footer
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📄 Page Sections

The landing page includes the following sections in order:

1. **Header (Sticky)** - Navigation with logo and menu
2. **Hero** - Main headline with CTAs and brand message
3. **About** - Company introduction and positioning
4. **Vision & Mission** - Two premium cards showcasing goals
5. **Why Us** - 4 numbered pillars of differentiation
6. **Domains** - 6 training domain cards in a grid
7. **Partners** - Logo wall and testimonial
8. **Contact** - Contact information and footer

## 🎯 Key Components

### Header
- Sticky navigation
- Smooth scroll to sections
- Mobile-responsive menu

### Hero
- Dark background with geometric elements
- Primary and secondary CTAs
- Premium typography

### Cards & Components
- Hover effects with scale transforms
- Border accents using orange
- Shadow transitions
- Premium rounded corners

## 🌐 RTL Support

The entire site is built with RTL (Right-to-Left) support:
- `dir="rtl"` on HTML element
- Logical spacing utilities
- Arabic-first content structure
- RTL-aware component layouts

## 🎨 Styling Guidelines

### Color Usage
- Black (`#1F1F1F`) - Dominant background for key sections
- White (`#F4F4F4`) - Main content background
- Orange (`#E45427`) - Accent only (10-15% usage max)

### Custom Tailwind Classes
- `.btn-primary` - Orange filled button
- `.btn-secondary` - Orange outline button
- `.section-container` - Consistent section padding
- `.card-premium` - Premium card with shadow & border

## 📱 Responsive Design

- Desktop-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- All components fully responsive
- Mobile menu for smaller screens

## 🔧 Customization

### Updating Colors
Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    black: '#1F1F1F',
    white: '#F4F4F4',
  },
  accent: {
    orange: '#E45427',
  },
}
```

### Updating Content
All content is in the component files. Edit the respective component in `/components` directory.

### Adding Sections
1. Create a new component in `/components`
2. Import and add to `app/page.tsx`
3. Update navigation in `Header.tsx`

## 📊 SEO & Metadata

Metadata is configured in `app/layout.tsx`:
- Title with Arabic & English
- Description
- Keywords
- Open Graph tags
- Locale set to `ar_SA`

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
Build the static site:
```bash
npm run build
```

## 📝 License

© 2026 Core Concept (كور كونسيبت) - All Rights Reserved

## 🤝 Support

For support, email info@coreconcept.sa or visit coreconcept.sa

---

**Built with ❤️ for Core Concept Training**


