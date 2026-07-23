# Lokesh Vaddepally — Portfolio

A one-page portfolio site built with React + Vite, styled as an engineering
drafting sheet (title block, revision-history table, drawing sheets) — a nod
to the civil-engineering-to-software-architecture path in the resume this
site is built from.

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
- `profile.github` is `null` too. Add your GitHub profile URL to show it in
  the sidebar.

The résumé PDF that the "Download resume" button links to is at
`public/Lokesh_Vaddepally_Resume.pdf`. Replace that file (keep the same name,
or update the `resumeFile` path in `profile.js`) whenever you update your resume.

## Project structure

```
src/
  data/profile.js         ← all content (edit this first)
  hooks/useScrollSpy.js    ← IntersectionObserver hook powering the active-nav highlight
  components/
    Sidebar.jsx             ← persistent left panel: name, tagline, nav, resume/CTA, socials
    Projects.jsx              ← "Selected work" case studies (problem / role / outcome / links)
    About.jsx                   ← summary + education + certifications
    Experience.jsx                ← revision-history table (career timeline)
    Proof.jsx                       ← companies/institutions worked with
    Skills.jsx                       ← short, light skills list
    Contact.jsx                       ← contact + sign-off footer
  index.css                          ← the whole design system (CSS variables at top)
```

## Notes on scope

This is a static frontend site — the right shape for a portfolio, since
there's no data that needs a server. If you'd like to add a real backend
later (for example, a working contact form that emails you, or an API that
serves project data so the site can be updated without a redeploy), that's a
natural next step and would pair well with the ASP.NET Core or Node/Express
experience already on the resume — happy to help build that when you're
ready.
