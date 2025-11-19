# Agencija za registracije i regulatorne usluge

Modern, production-ready corporate website built with Next.js, TypeScript, Tailwind CSS, and GSAP animations.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **GSAP** (with ScrollTrigger plugin)
- **Three.js** (for PixelBlast background effects)

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the production version:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
pharma/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Process.tsx
│   │   ├── TargetAudience.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/                # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       ├── Textarea.tsx
│       ├── Select.tsx
│       └── PixelBlast.tsx # Interactive background component
├── lib/                   # Utilities
│   └── animations.ts      # GSAP animation helpers
└── public/                # Static assets
```

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Premium GSAP animations with ScrollTrigger
- ✅ Modern, clean UI with brand colors
- ✅ Interactive PixelBlast background effect
- ✅ Contact form with validation
- ✅ TypeScript for type safety
- ✅ Optimized performance

## Brand Colors

- Primary Pink: `#f0386e`
- Accent Pink: `#d8105a`
- Teal Blue: `#2d9ab0`

## License

© 2024 Agencija za registracije i regulatorne usluge. All rights reserved.
