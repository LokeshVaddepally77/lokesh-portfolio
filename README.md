# Lokesh Vaddepally — Portfolio

A multi-page portfolio site built with React, Vite, and React Router, styled
as an engineering drafting sheet (title block, revision-history table,
drawing sheets) — a nod to the civil-engineering-to-software-architecture
path in the resume this site is built from.

## Run it locally in VS Code

1. Unzip this folder and open it in VS Code.
2. Open a terminal in VS Code (`` Ctrl+` `` / `` Cmd+` ``) and run:
   ```bash
   npm install
   npm run dev
   ```
3. Open the local URL Vite prints (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```
This outputs a static site to `dist/`. Since the resume already mentions
Vercel, that's the easiest deploy target: push this folder to a GitHub repo,
import it in Vercel, and it will auto-detect the Vite framework — no config
needed.

## Where to edit content

Everything text-based lives in one file: `src/data/profile.js`. Update your
summary, skills, experience, projects, education, and contact info there —
the components re-render automatically, no need to touch JSX or CSS.

**Two things worth filling in before you share this:**
- Each project in `profile.js` has a `links: { live, github }` object set to
  `null`. Add your deployed URL and/or repo link there — the button just
  won't render until you do.
- `profile.github` is `null` too. Add your GitHub profile URL to show it on
  the home page.

The résumé PDF that the "Download resume" button links to is at
`public/Lokesh_Vaddepally_Resume.pdf`. Replace that file (keep the same name,
or update the `resumeFile` path in `profile.js`) whenever you update your resume.

## Project structure

```
src/
  data/profile.js          ← all content (edit this first)
  data/techIcons.js         ← brand-icon tech grid + fallback text-only skills
  hooks/useReveal.js          ← IntersectionObserver hook powering scroll-reveal animation
  components/
    Navbar.jsx                  ← persistent top nav (routes, mobile toggle)
    SheetHeader.jsx               ← shared "SHEET n/6" section header
    Projects.jsx                    ← "Selected work" case studies (routed at /projects)
    illustrations/                    ← hand-drawn monoline SVG illustrations
  pages/
    Home.jsx                            ← hero, summary, tech stack grid (/)
    Education.jsx                         ← degrees + certifications (/education)
    Experience.jsx                          ← revision-history cards (/experience)
    Resume.jsx                                ← embedded PDF viewer (/resume)
    Contact.jsx                                 ← contact + sign-off footer (/contact)
  index.css                                     ← the whole design system (CSS variables at top)
vercel.json                                       ← SPA rewrite so client-side routes work on refresh
```

## Notes on scope

This is a static frontend site, which is the right shape for a portfolio
since there's no data that needs a server. A real backend (a contact form
that emails you, or an API serving project data so the site updates without
a redeploy) is a reasonable next step down the road.
