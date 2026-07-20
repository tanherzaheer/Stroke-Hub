# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

Stroke-Hub is a static, educational website about stroke medicine for healthcare professionals. It is plain HTML, CSS, and a small amount of vanilla JavaScript — no build system, framework, package manager, or test runner. It is designed to be served directly (e.g. GitHub Pages; `.nojekyll` is present).

## Structure

- `index.html` — home page with a hero and a card grid linking to each topic.
- Topic pages (one file each): `ischaemic-stroke.html`, `tia.html`, `carotid-stenosis.html`, `haemorrhagic-stroke.html`, `subarachnoid-haemorrhage.html`, and the `local-guidelines.html` placeholder.
- `404.html` — custom not-found page.
- `assets/css/style.css` — the single stylesheet. Design tokens (colours, spacing, widths) are CSS custom properties in `:root`. Mobile-first with breakpoints at 640/720/860/960px.
- `assets/js/main.js` — progressive-enhancement behaviour (mobile nav toggle, back-to-top, table-of-contents scrollspy). Every page works with JS disabled.
- `assets/js/vendor/mermaid.min.js` — vendored Mermaid UMD bundle used to render flowcharts on pages that include a `<pre class="mermaid">` block.

## Conventions

- Each topic page shares the same skeleton: sticky header/nav, `.page-header` (breadcrumbs, title, subtitle, tags), a `<main>` with a short `.page-contents` menu at the top of the article, numbered `<section>`s, a references list, and the shared footer.
- Keep the primary nav (`.main-nav`) and footer "Topics" list in sync across **all** pages when adding or renaming a page.
- Reusable content components in the stylesheet: `.box` (with `.box-red-flag`, `.box-key-points`, `.box-note`), `.study-card`, `.tag`/`.tag-row`, `.reference-list`.
- To add a Mermaid flowchart: put the diagram in `<pre class="mermaid">…</pre>`, then before `</body>` load `assets/js/vendor/mermaid.min.js` and call `mermaid.initialize({ startOnLoad: true, ... })`. Diagram node labels avoid raw `<`/`>` characters.

## Guidance for Future Work

- The default branch is `main`.
- There is no automated build or test step; verify changes by opening the pages in a browser (a simple static file server is enough).
