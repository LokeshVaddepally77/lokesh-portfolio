# Lokesh Vaddepally — Portfolio

A multi-page portfolio site built with React, Vite, and React Router. The
design follows current Dribbble-style portfolio patterns: a bento-grid hero,
floating glass pill navigation, large display type with serif-italic
accents, a scrolling tech-stack marquee, and light/dark themes (follows the
OS setting until the visitor toggles it; the choice is remembered).

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
This outputs a static site to `dist/`.

## Deploy (Cloudflare Pages)

The live site is the `lokesh-vaddepally` Cloudflare Pages project at
https://lokesh-vaddepally.pages.dev. To publish a new version:

```bash
npm run build
npx wrangler pages deploy dist --project-name lokesh-vaddepally --branch master
```

`dist/` has no `404.html`, so Pages serves `index.html` for unknown paths and
client-side routes like `/projects` work on refresh. If the site URL ever
changes, update it in `index.html` (canonical, Open Graph, JSON-LD),
`public/robots.txt`, and `public/sitemap.xml`.

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
  data/profile.js            ← all content (edit this first)
  data/techIcons.js          ← brand icons for the stack marquee + text-only skills
  hooks/useReveal.js         ← IntersectionObserver scroll-reveal ([data-reveal])
  hooks/useTheme.js          ← light/dark toggle, persisted in localStorage
  components/
    Navbar.jsx               ← floating pill nav, theme toggle, mobile menu
    Footer.jsx               ← site-wide footer
    SectionHeader.jsx        ← eyebrow + title (+ description / action)
    ProjectCard.jsx          ← compact project tile used on Home
    ProjectCover.jsx         ← tinted CSS "UI sketch" cover for each project
  pages/
    Home.jsx                 ← bento hero, stack marquee, about, work, experience, CTA (/)
    Projects.jsx             ← full case studies, anchor per project (/projects#slug)
    Experience.jsx           ← timeline (/experience)
    Education.jsx            ← degrees + certifications (/education)
    Resume.jsx               ← embedded PDF viewer (/resume)
    Contact.jsx              ← contact methods (/contact)
    NotFound.jsx             ← 404
  index.css                  ← the whole design system (tokens at the top)
```

Each project in `profile.js` also has a `slug` (its anchor on /projects), a
`hue` (tints its cover), and a `cover` (`"grid"`, `"code"`, or `"list"`
picks the UI sketch).

## Notes on scope

This is a static frontend site, which is the right shape for a portfolio
since there's no data that needs a server. A real backend (a contact form
that emails you, or an API serving project data so the site updates without
a redeploy) is a reasonable next step down the road.
