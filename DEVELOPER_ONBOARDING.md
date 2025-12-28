# Developer Onboarding Guide: VJ Scans & Labs

Welcome to the **VJ Scans & Labs** codebase! This guide covers the essential patterns, tools, and "gotchas" you need to know to be productive immediately.

## 🚀 Quick Start
```bash
# Node version: 20+ recommended
npm install
npm run dev
# Server starts at localhost:3000
```

## 🏗️ Architecture to Follow
We strictly follow a **Feature-Based Architecture**. Do not dump everything into `components/ui`.

*   **`src/components/features/[feature-name]`**:
    *   Code related to a specific page or large domain goes here.
    *   *Example*: `features/our-facility` contains the `Hero`, `Intro`, and `Carousel` for that page only.
*   **`src/components/common`**:
    *   Reusable business widgets (e.g., `TestimonialSection`, `AppointmentSection`).
*   **`src/components/ui`**:
    *   Dumb, presentational primitives (e.g., `LiquidGlassButton`, `resizable-navbar`).

## 🎨 Styling & Theming (Tailwind v4)
We are using **Tailwind CSS v4**.
*   **Configuration**: There is NO `tailwind.config.js`. Theme variables are defined in `src/app/globals.css` using the `@theme` directive.
*   **The "Liquid Glass" Theme**:
    *   Primary Orange: `#F98D1B`
    *   Primary Blue: `#0961A1`
    *   **Glass Effect**: Used heavily on buttons and nav items. See `src/components/ui/LiquidGlassButton.jsx` for the implementation.

## 🧩 Key Patterns
### 1. Navigation Active States
The `Header` and `SpecialitiesNav` automatically highlight the active link.
*   **How**: They use the `usePathname()` hook.
*   **Rule**: When adding new links, ensure `pathname.includes(link)` logic is consistent so the "pill" highlighter works.

### 2. SEO Management
Stop! Don't hardcode `<title>` in `page.tsx`.
*   **Go to**: `src/lib/seo.ts`.
*   **Action**: Add your page details to the `seoDatas` object.
*   **Usage**: In your `page.tsx`, export `metadata` using the imported data.

### 3. Images
*   **Format**: We prefer `.avif` for all static assets.
*   **Location**: `public/images/[feature-name]/`.

## ⚠️ Gotchas & Pitfalls
1.  **Hydration Errors (Button Nesting)**:
    *   *Never* put a `<button>` inside a `<LiquidGlassButton>` or `motion.button`.
    *   *Fix*: Use `motion.div` with an `onClick` handler if you need to wrap a custom button component. We fixed this in `ScrollToTop.tsx`.
2.  **Tailwind v4 Gradients**:
    *   Some older Tailwind gradient classes might behave differently. Stick to standard `bg-gradient-to-[dir]` utilities using hex codes or declared ecosystem variables.

## 🛠️ Tech Stack Cheat Sheet
*   **Next.js 16**: Server Components by default. Add `"use client"` at the top if you need interactions (hooks, event listeners).
*   **Framer Motion**: used for all animations (`motion.div`, `AnimatePresence`).
*   **Lucide React**: The standard icon set.

Happy Coding! 🚀
