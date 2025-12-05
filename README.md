# Polymarket A+B — Premium (Demo)

This package contains two demo apps in one project:
- Option A — AI Terminal (ATerminal)
- Option B — Dashboard (BDashboard)

Run locally:
1. `npm install`
2. `npm run dev`
3. Open http://localhost:5173/?view=a  (or ?view=b)

Build for production:
- `npm run build` (outputs to /dist)

Notes:
- Mock data is in `/src/mock/`
- This is a deploy-ready Vite app. Works on Cloudflare Pages or Vercel.
