# SEO Recommendations – about-me-app

Angular 21 SPA deployed at `https://orczykowski.github.io/aboutme/`. Most critical issues are missing meta tags, hash-based routing, absent structured data, and no sitemap/robots.txt.

---

## Critical (Priority 1)

- [x] Add `<meta name="description">` to `src/index.html`
- [x] Switch routing from `HashLocationStrategy` to `PathLocationStrategy` in `src/app/app-routing.module.ts` + GitHub Pages 404 redirect trick via `src/404.html`
- [x] Fix heading hierarchy in `src/app/app.component.html` – H1 → H3 (missing H2); changed `<h3>` to `<h2>`
- [x] Fix heading hierarchy in `src/app/welcome/welcome.component.html` – H2 → H4 (missing H3); changed `<h4>` to `<h3>`
- [x] Fix heading hierarchy in `src/app/not-found/not-found.component.html` – two sibling `<h2>` merged into one
- [x] Create `src/robots.txt` with `Sitemap:` directive; added to `assets` in `angular.json`
- [x] Create `src/sitemap.xml` listing all five routes with `<loc>` and `<lastmod>`; added to `assets` in `angular.json`
- [x] Add `<script type="application/ld+json">` with `Person` + `WebSite` schema in `src/index.html`

---

## High Priority (Priority 2)

- [x] Add Open Graph meta tags to `src/index.html`: `og:title`, `og:description`, `og:url`, `og:type`, `og:image`
- [x] Add Twitter Card meta tags to `src/index.html`: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [x] Add `<link rel="canonical">` to `src/index.html`
- [x] Set per-route page titles via `title:` property on each route in `src/app/app-routing.module.ts` (Angular 14+ DefaultTitleStrategy)
- [x] Wrap `<router-outlet>` with `<main>` landmark in `src/app/app.component.html`
- [x] Add `aria-label` to hamburger checkbox in `src/app/utils/menu/menu.component.html`
- [x] Add `aria-label` to search `<input>` in `src/app/experience/experience.component.html`
- [x] Add `aria-label` to search `<input>` in `src/app/tools/tools.component.html`

---

## Medium Priority (Priority 3)

- [x] Add `font-display: swap` to both `@font-face` rules in `src/styles.css`
- [x] Add `<link rel="preload" as="image" href="assets/background.jpg">` in `src/index.html`
- [x] Wrap each job entry in `src/app/experience/job/job.component.html` with `<article>`
- [x] Wrap each project card in `src/app/projects/projects.component.html` with `<article>`
- [x] Add `<footer>` landmark to `src/app/app.component.html`
- [x] Replace icon-only link text (`</>`, `↗`) with descriptive text in `src/app/projects/projects.component.html`
- [x] Add `<meta name="author">` to `src/index.html`
- [x] Add `<meta name="theme-color">` to `src/index.html`
- [x] Replace `.ttf` with `.woff2` for JetBrainsMono in `src/styles.css`

---

## Long-term (Priority 4)

- [x] Enable Angular SSR/prerendering via `@angular/ssr` + `src/main.server.ts`; 5 routes now prerendered at build time
- [x] Add structured data JSON-LD for projects (`SoftwareSourceCode` / `ItemList`) in `src/index.html`
- [ ] Create a static OG image (`src/assets/og-image.png`, 1200×630 px) and reference it in `og:image`
- [ ] Add WebP variants with `<picture>` / `srcset` for social icon images in `src/app/welcome/welcome.component.html`
- [ ] Add `aria-label` to timeline `<button>` elements – done (added `[attr.aria-label]` binding in `src/app/experience/timeline/timeline.component.html`)
- [ ] Consider registering a custom domain instead of the GitHub Pages subdomain
