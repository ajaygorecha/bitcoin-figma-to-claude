# Figma to HTML Conversion Guidelines

## Project Overview

Convert the provided Figma design into a fully responsive frontend using:

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Remix Icon CDN

The final output must strictly match the Figma design visually and structurally.

---

## Figma Design URL

https://www.figma.com/design/Lq9iYwU7W1qKjfSEZ5fZi6/Web-Portal---Bellion-local--Copy-?node-id=303-1000&t=tfsmmAOb9mI2UWN8-4

---

## Project Assets

### Logo

/assets/images/logo.svg

### Favicon

/assets/images/favicon.png

### Main CSS File

/assets/style.css

### Main JavaScript File

/assets/script.js

### Color Reference

/assets/color-sheet.png

---

# Mandatory Tech Stack

Use only the following:

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Remix Icons

---

# Remix Icon CDN

```html
<link
  href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
  rel="stylesheet"
/>
```

---

# Important Rules

## 1. No Inline CSS

❌ Do NOT use:

```html
<div style="color:red;"></div>
```

✅ Use external CSS classes only.

All styling must be written inside:

/assets/style.css

---

## 2. No Inline JavaScript

❌ Do NOT use:

```html
<button onclick="openMenu()">
```

✅ Use event listeners inside:

/assets/script.js

---

## 3. Follow Figma Exactly

The implementation must match the Figma design exactly:

- Spacing
- Alignment
- Layout
- Colors
- Typography
- Border radius
- Shadows
- Icon sizes
- Section spacing
- Responsive behavior

Do not improvise design decisions.

---

## 4. Do Not Introduce Extra Design Elements

Do NOT add:

- New colors
- New fonts
- New gradients
- New shadows
- Extra animations
- Additional sections
- Different icon styles

Only use what exists in the design.

---

## 5. Color Usage

All colors must be taken from:

/assets/color-sheet.png

Create reusable CSS variables.

Example:

```css
:root {
  --primary-color: #000000;
  --secondary-color: #ffffff;
}
```

Do not invent additional colors.

---

## 6. Typography Rules

Use only the font family shown in the Figma design.

Do not introduce:

- Google Fonts
- System Fonts
- Additional font weights not used in design

Typography must match:

- Font size
- Font weight
- Line height
- Letter spacing

---

## 7. Bootstrap Usage Rules

Bootstrap should only be used for:

- Grid system
- Responsive layout
- Containers
- Utility classes where appropriate

Avoid excessive Bootstrap overrides.

Custom UI styling must be handled in:

/assets/style.css

---

## 8. File Structure

Use this exact structure:

```bash
project-root/
│
├── index.html
│
├── assets/
│   ├── style.css
│   ├── script.js
│   │
│   └── images/
│       ├── logo.svg
│       ├── favicon.png
│       └── color-sheet.png
```

---

# HTML Standards

## Semantic HTML Required

Use semantic tags properly:

```html
<header>
<nav>
<main>
<section>
<footer>
```

Avoid unnecessary div nesting.

---

## Accessibility

Include:

- alt attributes for images
- button labels
- proper heading hierarchy
- form labels if forms exist

---

# CSS Standards

## Naming Convention

Use clean class naming.

Example:

```css
.hero-section
.dashboard-card
.sidebar-menu
```

Avoid random or unclear names.

---

## CSS Organization

Structure CSS in this order:

```css
1. Root Variables
2. Reset/Base Styles
3. Typography
4. Layout
5. Components
6. Responsive Media Queries
```

---

## Responsive Design

The layout must be responsive for:

- Desktop
- Tablet
- Mobile

Use Bootstrap breakpoints properly.

---

# JavaScript Standards

Use vanilla JavaScript only.

Avoid:

- jQuery
- React
- Vue
- External plugins unless already used in Figma

All interactions must be modular and clean.

Example:

```javascript
document.addEventListener("DOMContentLoaded", () => {
  // code here
});
```

---

# Performance Requirements

Optimize for:

- Clean code
- Reusable components
- Minimal DOM nesting
- Fast loading
- Maintainable structure

---

# Image Handling

Use optimized image formats.

Do not stretch or distort assets.

Maintain correct aspect ratios.

---

# Icon Usage

Use Remix Icons only.

Example:

```html
<i class="ri-home-line"></i>
```

Do not mix icon libraries.

---

# Deliverables

The final output must include:

- Fully responsive HTML
- External CSS file
- External JavaScript file
- Bootstrap integration
- Remix Icon integration
- Pixel-perfect implementation from Figma

---

# Code Quality Expectations

The code should be:

- Clean
- Readable
- Maintainable
- Scalable
- Properly indented
- Well organized

Avoid:

- Duplicate CSS
- Unused code
- Inline styles
- Hardcoded spacing everywhere

---

# Final Goal

Create a production-quality frontend implementation that visually matches the Figma design exactly while following clean frontend development standards.
