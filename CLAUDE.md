# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Stroke Hub is a **static educational website** about stroke medicine for healthcare
professionals (medical students, doctors, nurses, and allied health staff). It covers
ischaemic stroke, haemorrhagic stroke, and TIA, with a placeholder page for
local/departmental guidelines.

It is built with **plain HTML, CSS, and a small amount of vanilla JavaScript** — no
frameworks, no bundler, no package manager, and **no build step**. Files are served
exactly as they sit in the repository root.

The default branch is `main`.

## Build / test / lint

There is intentionally **no build system, test framework, or linter**. To work on the
site:

- **Preview locally:** open a file directly in a browser, or serve the root with any
  static server, e.g. `python3 -m http.server` and visit `http://localhost:8000/`.
- **Deploy:** merge/push to `main`; GitHub Actions publishes automatically (see below).

Do not add a build toolchain, framework, or dependency without a clear reason — the
zero-dependency, no-build design is a deliberate feature of this project.

## Layout

```
.
├── index.html                 # Homepage (hero + topic cards)
├── ischaemic-stroke.html      # Topic page
├── haemorrhagic-stroke.html   # Topic page
├── tia.html                   # Topic page
├── local-guidelines.html      # Placeholder for local/trust-specific protocols
├── 404.html                   # Custom not-found page (meta robots noindex)
├── assets/
│   ├── css/style.css          # Single shared stylesheet (CSS custom properties, mobile-first)
│   └── js/main.js             # Single shared script (mobile nav, back-to-top, TOC scrollspy)
├── .nojekyll                  # Disable Jekyll processing on GitHub Pages
└── .github/workflows/deploy.yml   # GitHub Pages deployment workflow
```

All internal links are **relative** (`index.html`, `assets/css/style.css`, `#section-id`)
so the site works at any base path.

## Page conventions

Every page shares the same skeleton; **keep these consistent across all pages** when
editing or adding content:

- **Head:** `<title>… — Stroke Hub</title>`, a `meta description`, `link rel="icon" href="data:,"`
  (blank favicon, avoids a 404), and `<link rel="stylesheet" href="assets/css/style.css">`.
- **Skip link:** `<a class="skip-link" href="#main-content">` as the first body element (accessibility).
- **Header/nav:** identical `.site-header` block with the `.nav-toggle` button and `#main-nav` list.
  The link for the current page carries `aria-current="page"`.
- **Main:** `<main id="main-content">`.
- **Footer:** identical `.site-footer` including the educational **disclaimer** and a
  `<span id="year">` populated by an inline script.
- **Back-to-top:** `<button class="back-to-top">` near the end of `<body>`.
- **Scripts:** `<script src="assets/js/main.js"></script>` then the inline year-updater.

### Topic-page structure

Topic pages (`ischaemic-stroke`, `haemorrhagic-stroke`, `tia`) follow a fixed section
template so readers always know where to find things. Each `<h2>` section lives in a
`<section id="…">` and is mirrored in the on-page table of contents:

1. Definition & classification
2. Pathophysiology
3. Risk factors
4. Clinical presentation
5. Investigations
6. Management
7. Key trials & latest studies
8. References

- The **table of contents** is an `<aside class="toc"><details class="toc-inner" open>` with
  anchor links (`href="#…"`) matching the section `id`s. `main.js` adds `aria-current="true"`
  to the active link on scroll (scrollspy), so TOC hrefs and section ids must stay in sync.
- **Callout boxes** use `<div class="box …">` with one of these variants:
  `box-key-points`, `box-note`, `box-red-flag`. Reuse these rather than inventing new styles.

`local-guidelines.html` is a deliberately-marked **placeholder** to be filled in by a
local team; keep it clearly labelled as such rather than inventing trust-specific content.

## Adding a new topic page

1. Copy an existing topic page (e.g. `ischaemic-stroke.html`) as a template.
2. Update `<title>`, `meta description`, the `<h1>`, and the section content.
3. Keep the standard `<section id="…">` structure and update the TOC to match.
4. Add a link to the new page in the `<nav class="main-nav">` list on **every** page
   (header) and in the footer's Topics list — navigation is duplicated per page, not shared.
5. Commit and push to `main`; the site redeploys automatically.

## Styling (assets/css/style.css)

- One stylesheet, plain CSS, **mobile-first**, no framework.
- Colours, radius, widths, and fonts are defined as **CSS custom properties** on `:root`
  (e.g. `--color-primary`, `--content-width`, `--font-heading`). Prefer these variables
  over hard-coded values so the clinical/professional theme stays coherent.
- Body font is a system sans-serif stack; headings use a serif stack (`--font-heading`).
- The mobile nav breakpoint is **860px** (matched in `main.js`).

## JavaScript (assets/js/main.js)

- Single IIFE, `"use strict"`, **progressive enhancement only** — every page must remain
  fully usable with JavaScript disabled. Don't move essential content or navigation into JS.
- Provides three behaviours: mobile-nav toggle, back-to-top button, and TOC scrollspy.
  Each feature guards for the presence of its DOM elements before binding.

## Accessibility & content principles

- Preserve accessibility affordances: skip link, `aria-*` attributes, `aria-current`,
  semantic landmarks (`header`/`main`/`nav`/`footer`), and keyboard-operable controls.
- Content is a **study aid**, drawn from major guidelines (NICE, AHA/ASA, ESO) and
  landmark trials. It must never present itself as a substitute for clinical judgement or
  local protocols — keep the disclaimer intact.

## Deployment

`.github/workflows/deploy.yml` deploys to **GitHub Pages** on every push to `main`
(and via manual `workflow_dispatch`). It uploads the repository root as-is
(`actions/upload-pages-artifact` with `path: .`) and publishes with
`actions/deploy-pages` — there is no build step. `.nojekyll` disables Jekyll processing.

To enable Pages in the GitHub UI: **Settings → Pages → Build and deployment → Source →
GitHub Actions**.
