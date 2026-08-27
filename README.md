# Portfolio - Assmae Essabbahy

Industrial Engineering & Logistics portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS 4**, and **Lucide Icons**.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-assmae/
├── public/
│   ├── profile.jpg          # Your profile photo
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css       # All styles + animations
│   │   ├── layout.tsx        # Root layout with fonts
│   │   └── page.tsx          # Main page (imports all sections)
│   ├── components/portfolio/
│   │   ├── Navbar.tsx        # Fixed navbar with scroll tracking
│   │   ├── Hero.tsx          # Hero with typewriter + stats
│   │   ├── About.tsx         # About + highlight cards
│   │   ├── TechStack.tsx     # Infinite scroll marquee
│   │   ├── Education.tsx     # Timeline
│   │   ├── Experience.tsx    # Experience cards
│   │   ├── Projects.tsx      # Filterable project grid
│   │   ├── Skills.tsx        # Skill groups
│   │   ├── GetInTouch.tsx    # CTA section
│   │   ├── Contact.tsx       # Contact form + info
│   │   └── Footer.tsx        # Footer
│   └── hooks/
│       └── useScrollReveal.ts # Scroll animation hooks
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── .gitignore
```

## Customization

- **Profile photo**: Replace `public/profile.jpg`
- **CV**: Add your CV as `public/CV_Assmae.pdf`
- **Content**: Edit the data arrays at the top of each component
- **Colors**: Edit CSS variables in `src/app/globals.css` under `PORTFOLIO DESIGN SYSTEM`
- **Links**: Update social URLs in `Navbar.tsx`, `Hero.tsx`, `Contact.tsx`, `Footer.tsx`
