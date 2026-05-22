# 🌸 SPA & WELLNESS LANDING PAGE DESIGN SKILL STANDARD
> **Unified Font Standard:** `Be Vietnam Pro`
> **Aesthetic Class:** Ultra-Luxury, Modern Soft Elegance, Results-Driven

---

## 1. Core Typography (`Be Vietnam Pro` Only)
To maintain a high-end, clean luxury appearance, all headings and body copy must utilize the **Be Vietnam Pro** font family. Avoid mixing multiple sans-serif fonts.

```css
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap');

:root {
    --font-heading: 'Be Vietnam Pro', sans-serif;
    --font-body: 'Be Vietnam Pro', sans-serif;
}

body {
    font-family: var(--font-body);
    line-height: 1.7;
    color: var(--text-main);
    -webkit-font-smoothing: antialiased;
}
```

### Scale Hierarchy
*   **H1 (Hero Title):** `font-size: clamp(44px, 6vw, 76px);` with `line-height: 0.95; letter-spacing: -0.04em;`
*   **H2 (Section Title):** `font-size: clamp(32px, 4vw, 48px);` with `line-height: 1.05; letter-spacing: -0.02em;`
*   **H3 (Card Title):** `font-size: 20px;` with `line-height: 1.2;`
*   **Paragraph (Body Text):** `font-size: 16px;` with `line-height: 1.7;`
*   **Small Text:** `font-size: 13px;` with `line-height: 1.6;`

---

## 2. Snug Section Spacing (Anti-Whitespace Standard)
Avoid excessive vertical gaps that dilute content flow. Section spacing must follow this rhythm:

```css
section {
    padding: 72px 0; /* Snug default for desktop */
}

.section-sm {
    padding: 48px 0; /* Secondary or quick-promo blocks */
}

.section-lg {
    padding: 96px 0; /* Hero & large final CTA banners only */
}

@media (max-width: 768px) {
    section {
        padding: 48px 0; /* Optimized tight vertical mobile flow */
    }

    .section-lg {
        padding: 64px 0;
    }
}
```

---

## 3. Fluid Container Standard
To prevent content from feeling "lost" or cramped in the center, use the modern fluid min-max container standard:

```css
.container {
    width: min(1180px, calc(100% - 40px));
    margin: 0 auto;
}

@media (max-width: 768px) {
    .container {
        width: min(100% - 24px, 100%);
    }
}
```

---

## 4. Hero Section Layout
Hero grid must be visually robust to capture user attention in the first 5 seconds.

```css
.hero {
    min-height: calc(100vh - 80px);
    display: grid;
    align-items: center;
    padding: 64px 0;
    padding-top: calc(var(--header-height) + 32px);
}

.hero-container {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr; /* Dynamic focal shift to text */
    gap: 56px;
    align-items: center;
}

.hero-description {
    max-width: 520px;
    font-size: 17px;
    line-height: 1.7;
    margin-bottom: 36px;
}

/* Organic Dome Arch Image */
.hero-image {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: 160px 160px 24px 24px;
}
```

---

## 5. Services Grid & 1:1 Dome Cards
Cards must have high visual weight, perfectly proportioned images, and clear action triggers.

```css
.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 36px 28px;
}

.service-card {
    text-align: center;
    display: flex;
    flex-direction: column;
}

.service-image {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 999px 999px 24px 24px; /* Dome Arch shape */
    overflow: hidden;
}

.service-content h3 {
    margin-top: 18px;
    margin-bottom: 8px;
}

.service-content p {
    max-width: 280px;
    margin: 0 auto 14px;
    line-height: 1.6;
}
```

---

## 6. Photo Gallery Grid Standard
Transform standalone images into a premium, unified layout.

```css
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
}

.gallery-img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 18px;
    transition: all 0.5s ease;
}

@media (max-width: 768px) {
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }
}
```

---

## 7. Premium Call-To-Action (CTA) Styles
Buttons must be tactile, visually bold, and have a clear hierarchy:

```css
.btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 26px;
    border-radius: 999px;
    background: #8fa296; /* Soft Premium Sage */
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 26px;
    border-radius: 999px;
    border: 1px solid #8fa296;
    color: #5f7065;
    font-size: 14px;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-primary:hover, .btn-secondary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(143, 162, 150, 0.15);
}
```

---

## 8. Mobile Responsiveness Breakpoints
Ensure content always renders logically in a single-column or snug double-column layout without overflow.

```css
/* Desktop / Large Screen */
@media (min-width: 1025px) {}

/* Tablet Viewports */
@media (max-width: 1024px) {
    .services-grid, .gallery-grid, .reviews-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Mobile Viewports */
@media (max-width: 768px) {
    .hero-container {
        grid-template-columns: 1fr;
        gap: 32px;
    }
    
    .hero-visual {
        order: -1; /* Keep the beautiful visual on top */
    }
    
    .services-grid, .why-grid, .reviews-grid {
        grid-template-columns: 1fr;
        gap: 32px;
    }

    .btn-primary, .btn-secondary {
        width: 100%; /* Easy-to-tap, full-width actions */
    }
}
```

---

## 🚀 Checklist for Developers & Designers
1.  [ ] **Typography:** Is everything loaded under `Be Vietnam Pro`? Check font weight references.
2.  [ ] **Gaps:** Have all section paddings exceeding `100px` been scaled down to `72px` (desktop) / `48px` (mobile)?
3.  [ ] **Containers:** Does the layout span cleanly up to `1180px` rather than feeling thin and restricted?
4.  [ ] **Card Aspect Ratios:** Do service images utilize `aspect-ratio: 1/1`?
5.  [ ] **Gallery Aspect Ratios:** Do gallery images utilize `aspect-ratio: 4/3`?
6.  [ ] **Mobile CTAs:** Do buttons expand to `width: 100%` on viewports under 768px for higher conversion rates?
7.  [ ] **Mobile Layout Flow:** Does the hero visual stack above the headline and description to reduce friction?
