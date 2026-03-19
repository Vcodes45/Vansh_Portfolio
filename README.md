# Vansh Sharma — Portfolio

A next-level portfolio built with **Next.js 14** + **Tailwind CSS**.

## ✨ Features

- **Magnetic custom cursor** with smooth lag tracking
- **Canvas particle network** in hero section
- **Typewriter effect** cycling through roles
- **3D tilt cards** on project hover (mouse-tracked perspective)
- **Animated counters** triggered on scroll
- **Dual marquee** tech stack scroll
- **Scroll-reveal** on every section (IntersectionObserver)
- **Glassmorphism** cards with backdrop blur
- **Glitch hover** on project titles
- **Noise grain** texture overlay
- **Gradient mesh** backgrounds
- **Availability pulsing** indicator
- **Fully responsive** mobile-first design

## 🚀 Setup

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

## 📁 Structure

```
src/
├── app/
│   ├── globals.css     ← All custom CSS, animations, grain overlay
│   ├── layout.tsx      ← Fonts (Syne + DM Mono + Plus Jakarta Sans)
│   └── page.tsx        ← Assembles all sections
└── components/
    ├── Cursor.tsx      ← Magnetic cursor (dot + trailing ring)
    ├── Navbar.tsx      ← Sticky glassmorphic nav
    ├── Hero.tsx        ← Canvas particles + typewriter + giant type
    ├── About.tsx       ← Animated counters + terminal card
    ├── Skills.tsx      ← Skill bars + dual marquee
    ├── Projects.tsx    ← 3D tilt cards + glitch text
    ├── Contact.tsx     ← Large CTA + social links
    └── Footer.tsx
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#050505` |
| Surface | `#0d0d0d` |
| Accent (Lime) | `#CCFF00` |
| Muted | `#555566` |
| Font Display | Syne 800 |
| Font Mono | DM Mono |
| Font Body | Plus Jakarta Sans |

## 📦 Deploy to Vercel

```bash
npm run build
# Then push to GitHub and connect to Vercel
```
