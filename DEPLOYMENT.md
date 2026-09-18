# 🚀 Deployment Guide

Deploy your portfolio to Vercel in 5 minutes!

## Prerequisites

- GitHub account (for version control)
- Vercel account (free tier works great)
- Node.js 18+ installed locally

## Step 1: Initialize Git & Push to GitHub

```bash
# Initialize git locally
git init
git add .
git commit -m "Initial portfolio commit"

# Create a new repository on GitHub (https://github.com/new)
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Fastest)

```bash
npm install -g vercel
vercel login              # Sign in with GitHub
vercel --prod --yes       # Deploy!
```

### Option B: Using Vercel Dashboard (GUI)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Done! Vercel auto-detects Next.js settings

## Step 3: Configure Your Domain

### Using Vercel Subdomain

Your portfolio will be live at: `portfolio-<random>.vercel.app`

### Using Custom Domain

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Follow DNS setup instructions
4. Update `metadataBase` in `app/layout.tsx`:

```typescript
metadataBase: new URL("https://yourdomain.com")
```

Then commit and push:

```bash
git add app/layout.tsx
git commit -m "Update metadataBase to custom domain"
git push
```

Vercel auto-redeploys on push! ✨

## Step 4: Disable SSO Protection (if needed)

New Vercel accounts might have SSO protection enabled. Disable it:

```bash
vercel project protection disable <project-name> --sso
```

## ✅ You're Live!

Visit your deployed URL and test:
- ✓ All pages load
- ✓ Links work
- ✓ Resume PDF downloads
- ✓ Forms work (they send mailto by default)
- ✓ Easter egg works (type `sudo hire-me`)

## 📝 Making Changes

After deployment, any changes you push to GitHub auto-deploy:

```bash
# Edit files locally
git add .
git commit -m "Update projects section"
git push

# Vercel automatically builds and deploys!
```

## 🔧 Troubleshooting

### "vercel login" fails

Try the global binary:
```bash
npm install -g vercel
vercel login
```

### "Module not found" after deploying

Vercel uses different Node versions. Try locally first:
```bash
npm run build
npm run start
```

### Domain not working

DNS changes take 24-48 hours. Check:
- Vercel shows domain as "Connected" ✓
- DNS records are correctly configured ✓

### Need to change environment variables

Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Push changes:
```bash
git add .env.local .env.example
git commit -m "Update environment config"
git push
```

## 💡 Pro Tips

1. **Add a GitHub Actions CI/CD** — Vercel does this automatically
2. **Enable Preview Deployments** — Vercel creates preview URLs for PRs
3. **Set up branch protection** — Require reviews before merging to main
4. **Monitor performance** — Vercel Analytics shows real-time metrics
5. **Use Vercel's edge functions** — If you add API routes later

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs

---

**Happy deploying!** Your portfolio is now on the internet for the world to see. 🎉
