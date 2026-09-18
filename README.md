# Portfolio — Shah Aatif Bashir

A terminal-themed portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

Dark-first aesthetic with JetBrains Mono typography, typing animations, scroll reveals, and a `sudo hire-me` easter egg.

## 🚀 Live Demo

[portfolio-shahaatif.vercel.app](https://portfolio-shahaatif.vercel.app)

## 📋 Pages

| Route      | Description                                            |
| ---------- | ------------------------------------------------------ |
| `/`        | Terminal hero with typing intro and quick stats       |
| `/about`   | Bio, skills as JSON, education as git log             |
| `/projects`| Repository-style project cards with tech tags         |
| `/resume`  | Full CV with experience, education, skills, and cover letter |
| `/contact` | Contact form and direct communication options         |

## 🎯 Features

- ✨ **Typing Animations** — Smooth terminal-style text reveal
- 🎮 **Easter Egg** — Type `sudo hire-me` anywhere on the site
- 📱 **Fully Responsive** — Mobile-friendly terminal interface
- ♿ **Accessible** — Respects reduced motion preferences, proper focus states
- 🎨 **Customizable Theme** — All colors defined as CSS variables
- 🔍 **SEO Optimized** — Next.js metadata, Open Graph support
- ⚡ **Production Ready** — Optimized bundle, fast performance

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Font**: JetBrains Mono (monospace)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- pnpm (recommended) or npm

### Installation

```bash
git clone <this-repo> my-portfolio
cd my-portfolio
rm -rf .git .vercel
pnpm install
pnpm dev
```

Visit `http://localhost:3000` in your browser.

## ✏️ Customize for Your Portfolio

Edit these files to make it yours:

1. **`data/profile.ts`** — Your name, email, GitHub, LinkedIn, bio
2. **`data/resume.ts`** — Experience, education, skills, certifications
3. **`data/projects.ts`** — Your projects with descriptions and tech tags
4. **`public/resume.pdf`** — Your downloadable resume PDF
5. **`app/globals.css`** — Terminal color theme (CSS variables)
6. **`app/layout.tsx`** — Site metadata (title, description, OG image)
7. **`components/EasterEgg.tsx`** — Customize the easter egg message

### Color Theme

Edit CSS variables in `app/globals.css`:

```css
:root {
  --term-bg: #0a0e27;        /* Background */
  --term-fg: #e0e0e0;        /* Foreground */
  --term-green: #00ff41;     /* Primary accent */
  --term-cyan: #00d9ff;      /* Secondary accent */
  --term-amber: #ffaa00;     /* Tertiary accent */
  /* ... etc */
}
```

## 🚀 Deploy to Vercel

### First Deploy

```bash
npm install -g vercel
vercel login                    # Sign in with GitHub
vercel --prod --yes            # Deploy (auto-accepts defaults)
```

### After First Deploy

1. **Disable SSO protection** (new Vercel accounts default to this):
   ```bash
   vercel project protection disable <project-name> --sso
   ```

2. **Update metadata URL** in `app/layout.tsx`:
   ```typescript
   metadataBase: new URL("https://your-portfolio-domain.vercel.app")
   ```

3. **Re-deploy**:
   ```bash
   vercel --prod
   ```

### Optional: Custom Domain

1. Add your domain in Vercel → Settings → Domains
2. Update `metadataBase` to point to your custom domain
3. Re-deploy

## 📝 Project Structure

```
.
├── app/
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles & theme
│   ├── page.tsx                # Home
│   ├── about/
│   ├── projects/
│   ├── resume/
│   ├── contact/
│   └── icon.svg               # Favicon
├── components/
│   ├── TerminalWindow.tsx      # Window chrome
│   ├── TypedTerminal.tsx       # Typing animation
│   ├── Navbar.tsx              # Navigation
│   ├── Footer.tsx              # Footer
│   ├── EasterEgg.tsx           # sudo hire-me
│   ├── ProjectCard.tsx         # Project card
│   ├── ContactPanel.tsx        # Contact form
│   ├── JsonBlock.tsx           # JSON renderer
│   └── HireMeHint.tsx          # Easter egg hint
├── data/
│   ├── profile.ts              # Personal info
│   ├── resume.ts               # CV content
│   └── projects.ts             # Projects
├── public/
│   └── resume.pdf              # Your resume
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── README.md
```

## ⚡ Performance Tips

- **Lazy load images** in projects if you add them
- **Keep resume PDF small** — Use a compression tool if needed
- **Minify CSS** — Tailwind already does this
- **Optimize animations** — Respect `prefers-reduced-motion`

## 🐛 Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules .next
pnpm install
pnpm dev
```

### Vercel login fails (pmg users)
```bash
npm install -g vercel
vercel --prod  # Use the global binary instead of npx
```

### CRT scanlines or theme looks wrong
Check that `app/globals.css` is imported in `app/layout.tsx`:
```typescript
import "./globals.css";
```

## 📄 License

Free to use for personal projects. Feel free to fork and customize!

## 🤝 Contributing

Found a bug or want to improve the template? Open an issue or PR!

---

**Happy coding!** 🚀 Don't forget to type `sudo hire-me` 😉
