# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Stroke Hub is a static, multi-page educational website on stroke medicine for
healthcare professionals. It is plain HTML + CSS with a small amount of
progressive-enhancement JavaScript — no build step, framework, or package
manager. It is designed to be served as-is (e.g. GitHub Pages; see
`.github/workflows/deploy.yml`).

## Structure

- **Pages** — one HTML file per topic at the repository root (e.g.
  `ischaemic-stroke.html`, `stroke-algorithms.html`), plus `index.html`
  (homepage) and `404.html`.
- **`assets/css/style.css`** — the single site-wide stylesheet. Design tokens
  (colours, spacing, fonts) are CSS custom properties in `:root`. Mobile-first,
  with breakpoints at the bottom of the file.
- **`assets/js/main.js`** — shared behaviour: mobile nav toggle, back-to-top
  button, and table-of-contents scrollspy. Every page must work with JS
  disabled.
- **`assets/js/mermaid.min.js`** — vendored Mermaid library (UMD build), used
  only by `stroke-algorithms.html` to render flowcharts. Vendored locally
  rather than loaded from a CDN so the site is self-contained.

## Conventions

- **Shared chrome is duplicated inline in every page**, not templated: the
  `<header class="site-header">` navigation and the `<footer class="site-footer">`
  disclaimer are copy-pasted into each HTML file. When editing the nav or footer,
  update **every** page so they stay identical. The current page's nav link
  carries `aria-current="page"`.
- The global nav lists every page on the site and collapses to a hamburger menu
  below 860px.
- Content pages follow a consistent template: a `.page-header` with breadcrumb
  and subtitle, an `<article class="page-content">` of numbered
  `<section id="…">` blocks, and an aside `.toc` on-page contents menu.
- Every page ends with the site-wide educational disclaimer footer.

## Local preview

No build is required. Serve the repository root with any static file server, e.g.:

```
python3 -m http.server 8000
```

then open <http://localhost:8000/>.

## Notes

- The default branch is `main`.
- All content is educational only and is not a substitute for clinical guidelines.
