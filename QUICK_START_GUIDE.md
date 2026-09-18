# 🚀 Quick Start Guide - Shah Aatif Portfolio

## Option 1: GitHub Method (Easiest) ⭐ RECOMMENDED

1. **Create GitHub Repo**
   - Go to https://github.com/new
   - Name it: `portfolio` or `my-portfolio`
   - Click "Create repository"

2. **Clone This Template**
   ```bash
   git clone https://github.com/akshithkarthik21/portfolio.git my-portfolio
   cd my-portfolio
   rm -rf .git
   ```

3. **Initialize Your Repo**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. **Customize (Edit These Files)**
   - `data/profile.ts` → Your name, email, GitHub, LinkedIn
   - `data/resume.ts` → Your experience, education, skills
   - `data/projects.ts` → Your 3 projects
   - `public/resume.pdf` → Your resume PDF

5. **Run Locally**
   ```bash
   pnpm install
   pnpm dev
   ```
   Visit: http://localhost:3000

6. **Deploy to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"
   - Done! ✨

---

## Option 2: Manual Setup (If You Don't Want GitHub)

### Step 1: Create a New Next.js Project
```bash
npx create-next-app@latest portfolio --typescript --tailwind
cd portfolio
```

### Step 2: Delete Unnecessary Files
```bash
rm -rf app/globals.css app/page.tsx
```

### Step 3: Copy These Files

Create the following directory structure:

```
portfolio/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── resume/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── TerminalWindow.tsx
│   ├── TypedTerminal.tsx
│   ├── ProjectCard.tsx
│   ├── ContactPanel.tsx
│   ├── JsonBlock.tsx
│   ├── EasterEgg.tsx
│   └── HireMeHint.tsx
├── data/
│   ├── profile.ts
│   ├── resume.ts
│   └── projects.ts
├── public/
│   └── resume.pdf (your resume)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### Step 4: Install Dependencies
```bash
pnpm install framer-motion
```

### Step 5: Copy Code Files
See sections below for each file's content.

### Step 6: Run
```bash
pnpm dev
```

---

## 📋 Essential Code Files

### 1️⃣ `data/profile.ts`
```typescript
export const profile = {
  name: "Shah Aatif Bashir",
  role: "Database Administrator & Full-Stack Developer",
  location: "India",
  email: "shahaatifb@gmail.com",
  phone: "+91-6005847809",
  github: "https://github.com/shahaatifb",
  linkedin: "https://linkedin.com/in/shah-aatif-bashir",
  bio: [
    "Computer Science graduate with hands-on experience in database administration, backend development, and full-stack applications. Currently working as a Database Administrator at IN Solutions Global Limited.",
    "Previously worked as a Software Developer at Capgemini, where I developed scalable backend modules and enterprise applications.",
    "Passionate about building robust database solutions and creating seamless user experiences.",
  ],
};
```

### 2️⃣ `data/resume.ts`
```typescript
export const resume = {
  experience: [
    {
      role: "Database Administrator",
      company: "IN Solutions Global Limited",
      period: "Sept 2025 – Present",
      bullets: [
        "Monitor database health, query performance, indexes, execution plans",
        "Perform regular database backups, restores, and recovery operations using RMAN",
        "Analyze database alerts and logs to investigate incidents",
        "Support production database operations",
      ],
    },
    {
      role: "Software Developer",
      company: "Capgemini, Mumbai",
      period: "Jan 2025 – Jun 2025",
      bullets: [
        "Developed backend modules and REST APIs using ASP.NET Core",
        "Designed and implemented application workflows",
        "Integrated AI accelerator solutions",
        "Collaborated with cross-functional teams",
      ],
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      school: "Lovely Professional University, Jalandhar, Punjab",
      period: "2021 – 2025",
      details: "CGPA: 7.31/10",
    },
    {
      degree: "12th (Science)",
      school: "Saint Joseph's Higher Secondary School, Baramulla",
      period: "2020 – 2021",
      details: "85.60%",
    },
  ],
  skills: {
    "Programming Languages": ["Java", "SQL", "C#", "JavaScript"],
    "Backend & Web": ["ASP.NET Core", "Web API", "Entity Framework", "Angular"],
    "Databases": ["Oracle Database", "SQL Server", "MySQL"],
    "Database Admin": ["RMAN", "Backup & Recovery", "Query Performance", "Indexing"],
    "Tools": ["Git", "GitHub", "SSMS", "Visual Studio"],
  },
  certifications: [
    "SQL (Intermediate) – HackerRank",
    "Core Java – Cipher Schools",
  ],
  coverLetter: `Dear Hiring Manager,

I'm Shah Aatif Bashir, a Computer Science graduate passionate about building robust database solutions. With experience in database administration and full-stack development, I'm excited to contribute to your team.

As a Database Administrator at IN Solutions Global Limited, I manage production databases, optimize query performance, and ensure data availability. Previously at Capgemini, I developed enterprise-grade REST APIs reducing application latency by 20%.

I bring strong technical foundations in Java, SQL, data structures, and algorithms, combined with practical experience in performance tuning and cross-functional collaboration.

Best regards,
Shah Aatif Bashir`,
};
```

### 3️⃣ `data/projects.ts`
```typescript
export const projects = [
  {
    name: "Hotel Management System",
    period: "Apr 2025 – Jun 2025",
    description: "Full-stack hotel management system supporting 100+ bookings",
    bullets: [
      "Built REST APIs using ASP.NET Web API and Entity Framework",
      "Integrated Angular frontend with SQL Server backend",
      "Designed optimized SQL queries reducing latency by 20%",
      "Implemented role-based access control",
    ],
    tags: ["ASP.NET Core", "Web API", "Entity Framework", "Angular", "SQL Server"],
    github: "https://github.com/shahaatifb",
  },
  {
    name: "Student Grading System",
    period: "Nov 2023 – Dec 2023",
    description: "Academic record management system handling 200+ student entries",
    bullets: [
      "Developed using Java with OOP principles",
      "Implemented modular grade calculation",
      "Created Java Swing GUI for managing records",
      "Designed efficient data structures",
    ],
    tags: ["Java", "OOP", "Swing GUI", "Data Structures"],
    github: "https://github.com/shahaatifb",
  },
  {
    name: "Poker Game Simulator",
    period: "Mar 2023",
    description: "Dynamic poker simulator with advanced player management",
    bullets: [
      "Built heap-based data structures to track 50+ players",
      "Developed ranking algorithms for profitability analysis",
      "Implemented game-state management",
      "Applied advanced data structure concepts",
    ],
    tags: ["Java", "Data Structures", "Algorithms", "Game Logic"],
    github: "https://github.com/shahaatifb",
  },
];
```

### 4️⃣ `app/layout.tsx`
```typescript
import type { Metadata } from "next";
import { profile } from "@/data/profile";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EasterEgg from "@/components/EasterEgg";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.name}, ${profile.role}. Database administration and full-stack development.`,
  metadataBase: new URL("https://portfolio-shahaatif.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col bg-term-bg text-term-fg">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <EasterEgg />
        <div className="fixed inset-0 pointer-events-none scanlines" />
      </body>
    </html>
  );
}
```

### 5️⃣ `app/globals.css` (Key Theme File)
```css
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap");

:root {
  --term-bg: #0a0e27;
  --term-fg: #e0e0e0;
  --term-green: #00ff41;
  --term-cyan: #00d9ff;
  --term-amber: #ffaa00;
  --term-red: #ff0055;
  --term-blue: #00d4ff;
  --term-purple: #bb86fc;
  --term-border: #1e2d4d;
  --term-accent: #00ff41;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "JetBrains Mono", monospace;
  background-color: var(--term-bg);
  color: var(--term-fg);
  line-height: 1.6;
}

.scanlines {
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
  animation: scanlines-move 8s linear infinite;
}

@keyframes scanlines-move {
  0% { transform: translateY(0); }
  100% { transform: translateY(10px); }
}

h1, h2, h3 {
  color: var(--term-green);
  font-weight: 600;
  margin-bottom: 0.5em;
}

a {
  color: var(--term-cyan);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--term-green);
}

button {
  background-color: var(--term-green);
  color: var(--term-bg);
  border: none;
  padding: 0.5em 1em;
  border-radius: 4px;
  cursor: pointer;
  font-family: "JetBrains Mono", monospace;
  font-weight: 600;
  transition: all 0.2s ease;
}

button:hover {
  background-color: var(--term-cyan);
}

input, textarea {
  background-color: var(--term-border);
  color: var(--term-fg);
  border: 1px solid var(--term-green);
  padding: 0.5em;
  border-radius: 4px;
  font-family: "JetBrains Mono", monospace;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--term-cyan);
}
```

---

## 📦 package.json
```json
{
  "name": "portfolio-shahaatif",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "next": "^16.0.0",
    "framer-motion": "^11.0.0"
  },
  "devDependencies": {
    "typescript": "^5.3.3",
    "@types/node": "^20.10.5",
    "@types/react": "^18.2.45",
    "@types/react-dom": "^18.2.18",
    "tailwindcss": "^4.0.0",
    "postcss": "^8.4.32",
    "autoprefixer": "^10.4.16"
  }
}
```

---

## ⚡ Quick Component Files (Copy-Paste Ready)

**For full component code (Navbar, Footer, TypedTerminal, etc.), see the individual files in outputs folder or reference the original repository.**

---

## 🚀 Next Steps

1. **Choose a method** (GitHub is easiest)
2. **Set up locally** (pnpm install && pnpm dev)
3. **Customize files** (profile.ts, resume.ts, projects.ts)
4. **Deploy** (Vercel - free tier works great)
5. **Type `sudo hire-me`** on your portfolio! 😉

---

## 📞 Stuck?

- Check README.md for detailed docs
- Check SETUP_INSTRUCTIONS.md for step-by-step help
- Check DEPLOYMENT.md for deployment issues
