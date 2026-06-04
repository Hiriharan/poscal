# PosCal — Position Size Calculator

ICT-style position calculator for XAUUSD, EURUSD, GBPUSD.  
Built as a PWA — installs on iPhone/Android like a native app.

## Deploy to Vercel (2 mins)

### Option A — Vercel CLI
```bash
npm i -g vercel
cd poscal
vercel --prod
```

### Option B — GitHub → Vercel (recommended)
1. Create a new GitHub repo (e.g. `poscal`)
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "init"
   git remote add origin https://github.com/Hiriharan/poscal.git
   git push -u origin main
   ```
3. Go to vercel.com → New Project → Import that repo
4. Framework preset: **Other** (no framework)
5. Deploy → done

## Install on iPhone
1. Open the Vercel URL in Safari
2. Tap Share → "Add to Home Screen"
3. Done — it's on your home screen like an app

## Install on Android
1. Open in Chrome
2. Tap the 3-dot menu → "Add to Home Screen" or Chrome will prompt automatically

## Files
- `index.html` — the full app
- `manifest.json` — PWA config
- `sw.js` — service worker (offline support)
- `vercel.json` — Vercel routing config
- `icons/` — app icons

## Later: Move to LiquidMinds
Point a subdomain: `calc.liquidminds.com.au` → this Vercel deployment.
In Cloudflare DNS: add CNAME `calc` → `cname.vercel-dns.com`
Then in Vercel project settings → Domains → add `calc.liquidminds.com.au`
