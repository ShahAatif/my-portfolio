# 🎯 Portfolio Setup Instructions

Your terminal-themed portfolio is ready! Follow these steps to get it running locally and deploy it online.

## 📦 What You Have

A production-ready Next.js portfolio with:
- ✅ 5 pages (Home, About, Projects, Resume, Contact)
- ✅ Your resume, experience, education, and projects pre-populated
- ✅ Terminal theme with animations and easter eggs
- ✅ Mobile-responsive design
- ✅ SEO optimized
- ✅ Deployment-ready for Vercel

---

## 🚀 Quick Start (Local Development)

### 1. Extract the Portfolio

```bash
# If you downloaded the .tar.gz file:
tar -xzf portfolio-shahaatif.tar.gz
cd portfolio-shahaatif

# Or if you cloned from GitHub:
git clone <your-repo-url>
cd portfolio-shahaatif
```

### 2. Install Dependencies

```bash
# Using pnpm (recommended):
pnpm install

# Or using npm:
npm install
```

### 3. Run Development Server

```bash
pnpm dev
# or
npm run dev
```

Visit **http://localhost:3000** in your browser. 🎉

### 4. Test the Site

- ✅ Navigate through all pages
- ✅ Click links and buttons
- ✅ Type `sudo hire-me` anywhere on the site (easter egg!)
- ✅ Download the resume PDF from `/resume` page

---

## ✏️ Customize Your Portfolio

### Edit Your Information

The site is data-driven! Only edit these files:

#### **1. `data/profile.ts`** — Personal Info
```typescript
export const profile = {
  name: "Your Name",
  role: "Your Role",
  email: "your@email.com",
  // ... etc
};
```

#### **2. `data/resume.ts`** — CV Content
```typescript
export const resume = {
  experience: [ /* your jobs */ ],
  education: [ /* your degrees */ ],
  skills: { /* your skills */ },
  certifications: [ /* your certs */ ],
  coverLetter: "Your cover letter...",
};
```

#### **3. `data/projects.ts`** — Your Projects
```typescript
export const projects = [
  {
    name: "Project Name",
    period: "Apr 2025 – Jun 2025",
    description: "What this project does",
    bullets: ["Bullet 1", "Bullet 2"],
    tags: ["Tech1", "Tech2"],
    github: "https://github.com/...",
  },
  // ... more projects
];
```

#### **4. `app/layout.tsx`** — Site Metadata
```typescript
export const metadata: Metadata = {
  title: "Your Name — Your Role",  // Update this
  description: "Your description",   // Update this
  metadataBase: new URL("https://your-domain.vercel.app"), // Update for deployment
};
```

#### **5. `public/resume.pdf`** — Your Resume
Replace with your own PDF (keep the filename). You can use the one I extracted from your PDF.

#### **6. `app/globals.css`** — Theme Colors
```css
:root {
  --term-bg: #0a0e27;        /* Dark background */
  --term-fg: #e0e0e0;        /* Light text */
  --term-green: #00ff41;     /* Primary accent (green) */
  --term-cyan: #00d9ff;      /* Secondary accent (cyan) */
  --term-amber: #ffaa00;     /* Tertiary accent (orange) */
  /* ... change colors here */
}
```

#### **7. `components/EasterEgg.tsx`** — Easter Egg Message
Replace the message shown when users type `sudo hire-me`

### Make Changes Locally

After editing, the dev server auto-reloads. No restart needed!

```bash
pnpm dev
# Edit files
# Changes appear instantly! ✨
```

---

## 🌐 Deploy to Vercel (5 minutes)

Vercel makes deployment super easy:

### Step 1: Initialize Git

```bash
git init
git add .
git commit -m "Initial portfolio commit"
```

### Step 2: Create GitHub Repo

1. Go to https://github.com/new
2. Name it `portfolio` or similar
3. Create the repo (don't initialize with README)

### Step 3: Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/your-repo-name.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Vercel

#### Option A: CLI (Fastest)
```bash
npm install -g vercel
vercel login          # Sign in with GitHub
vercel --prod --yes   # Deploy!
```

#### Option B: Web Dashboard
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repo
4. Click "Deploy"
5. Done! ✨

### Step 5: Update Metadata

After first deploy, update your site URL in `app/layout.tsx`:

```typescript
metadataBase: new URL("https://your-deployment-url.vercel.app")
```

Then:
```bash
git add app/layout.tsx
git commit -m "Update metadataBase for deployment"
git push
```

Vercel auto-deploys! 🚀

---

## 📋 Project Structure

```
portfolio/
├── app/                    # Pages & global styles
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── projects/page.tsx  # Projects page
│   ├── resume/page.tsx    # Resume page
│   ├── contact/page.tsx   # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles & theme
│
├── components/            # Reusable React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer
│   ├── TerminalWindow.tsx # Window chrome styling
│   ├── TypedTerminal.tsx  # Typing animation
│   ├── ProjectCard.tsx    # Project card component
│   ├── ContactPanel.tsx   # Contact form
│   ├── EasterEgg.tsx      # sudo hire-me easter egg
│   ├── JsonBlock.tsx      # JSON renderer
│   └── HireMeHint.tsx     # Easter egg hint
│
├── data/                  # Site content (TypeScript)
│   ├── profile.ts         # Your personal info
│   ├── resume.ts          # CV content
│   └── projects.ts        # Projects list
│
├── public/
│   └── resume.pdf         # Your downloadable resume
│
├── package.json           # Dependencies & scripts
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind CSS config
├── next.config.js         # Next.js config
├── postcss.config.js      # PostCSS config
├── .gitignore             # Git ignore rules
├── README.md              # Project overview
├── DEPLOYMENT.md          # Deployment guide
└── SETUP_INSTRUCTIONS.md  # This file
```

---

## 🎨 Customization Tips

### Add More Projects
Edit `data/projects.ts` and add a new object to the array:
```typescript
{
  name: "My New Project",
  period: "Jan 2025 – Feb 2025",
  description: "Short description",
  bullets: ["Feature 1", "Feature 2", "Feature 3"],
  tags: ["React", "TypeScript", "Tailwind"],
  github: "https://github.com/username/project",
}
```

### Change Theme Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --term-bg: #000000;       /* Change background */
  --term-green: #ff00ff;    /* Change primary color */
  /* ... etc */
}
```

### Add a Logo
Add an image to `public/` and reference in `components/Navbar.tsx`:
```typescript
<Image src="/logo.png" alt="Logo" width={32} height={32} />
```

### Update Skills Display
The About page shows skills as JSON from `data/resume.ts`. Just update the `skills` object:
```typescript
skills: {
  "Programming": ["Java", "SQL", "C#"],
  "Frontend": ["React", "Next.js", "Tailwind"],
  // ... etc
}
```

---

## 🐛 Troubleshooting

### "Port 3000 already in use"
```bash
pnpm dev --port 3001  # Use a different port
```

### Dependencies won't install
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install           # Fresh install
```

### Vercel deployment fails
1. Check the build logs in Vercel dashboard
2. Make sure `package.json` has all dependencies
3. Try building locally first: `npm run build`

### Resume PDF doesn't download
1. Ensure PDF is at `public/resume.pdf`
2. Check that `app/resume/page.tsx` has the correct download link
3. Verify the PDF file isn't corrupted

### Easter egg not working
1. Make sure you're typing the exact command: `sudo hire-me`
2. Check browser console for errors
3. Verify `components/EasterEgg.tsx` is imported in `app/layout.tsx`

---

## 📚 Learning Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Vercel Docs**: https://vercel.com/docs

---

## 🚀 Next Steps

1. ✅ Extract and install dependencies
2. ✅ Run locally with `pnpm dev`
3. ✅ Customize with your info (optional)
4. ✅ Push to GitHub
5. ✅ Deploy to Vercel
6. ✅ Share your portfolio URL!

---

## 💡 Pro Tips

- **Auto-deploy**: Push to GitHub, Vercel auto-deploys
- **Preview URLs**: Every GitHub PR gets a preview deploy
- **Custom domain**: Add in Vercel Settings → Domains
- **Analytics**: Vercel has built-in Web Analytics
- **Monitoring**: Check Vercel dashboard for performance metrics

---

## 📞 Support

- Check **README.md** for technical details
- Check **DEPLOYMENT.md** for deployment help
- Review **Next.js documentation** for advanced features

---

**Happy coding!** Your portfolio is now ready to impress. 🎉

Remember: Type `sudo hire-me` on your portfolio for a surprise! 😉
