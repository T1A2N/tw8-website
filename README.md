# TW8.tech — Technology Company Website

A modern, professional, fully responsive landing page for **TW8.tech**, built with **React + Vite + Tailwind CSS**. Premium SaaS-style design with glassmorphism, smooth scroll-reveal animations, blue/white/dark theme, and an SEO-friendly structure.

## Features

- **Hero** with headline, subheadline, CTAs (Get a Quote / View Portfolio) and animated visual
- **About** section describing TW8.tech
- **Services**: Website Development, IT Support, Cybersecurity, Database Solutions, Custom Software Development
- **Portfolio** with project cards + featured **Chloe Logistics Website**
- **Why Choose Us** cards with icons
- **Testimonials**
- **Contact** form + floating **WhatsApp** button + social media links
- Sticky glass navigation bar, mobile-first responsive layout, footer with company info

## Tech Stack

- React 18, Vite 5
- Tailwind CSS 3
- lucide-react (icons)
- Google Fonts: Inter + Plus Jakarta Sans

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (default `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Configuration

- **WhatsApp number**: update `WHATSAPP_NUMBER` in `src/components/Contact.jsx` and `src/components/WhatsAppFab.jsx` (international format, digits only).
- **Contact details / social links**: edit `src/components/Contact.jsx` and `src/components/Footer.jsx`.
- **Contact form**: currently uses a simulated submit. Connect it to your backend or a service like Formspree/EmailJS in `onSubmit` within `src/components/Contact.jsx`.
