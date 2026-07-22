# Stroke Hub

Stroke Hub is a static educational website about stroke medicine for healthcare professionals — medical students, doctors, nurses, and allied health staff. It covers ischaemic stroke, haemorrhagic stroke, and TIA, along with focused reference pages on mechanical thrombectomy, stroke scores (ASPECTS and mRS), the ICH Score and haematoma volume, and cerebral amyloid angiopathy, plus a placeholder page for local/departmental guidelines.

Built with plain HTML, CSS, and a small amount of vanilla JavaScript — no frameworks, no build step. Diagrams are rendered with [Mermaid](https://mermaid.js.org/) (loaded from a CDN on pages that use flowcharts) and with inline SVG for schematic illustrations.

**Live site:** once GitHub Pages is enabled (see below), the site will be available at `https://<your-username>.github.io/<repo-name>/`.

## Structure

```
.
├── index.html                        # Homepage
├── ischaemic-stroke.html             # Ischaemic stroke topic page
├── haemorrhagic-stroke.html          # Haemorrhagic stroke topic page
├── tia.html                          # TIA topic page
├── mechanical-thrombectomy.html      # Thrombectomy decision pathway (Mermaid flowcharts)
├── stroke-scores.html                # ASPECTS & modified Rankin Scale (inline SVG diagrams)
├── ich-score.html                    # ICH Score & ABC/2 volume (SVG + Mermaid flowchart)
├── cerebral-amyloid-angiopathy.html  # CAA & causes of lobar haemorrhage (Mermaid flowchart)
├── local-guidelines.html             # Placeholder for local/trust-specific protocols
├── 404.html                          # Custom not-found page
├── assets/
│   ├── css/style.css          # Shared stylesheet
│   └── js/main.js             # Shared JS (mobile nav, back-to-top, TOC scrollspy)
└── .github/workflows/deploy.yml  # GitHub Pages deployment workflow
```

Every content page shares the same header/navigation/footer and follows the same section structure (definition, pathophysiology, presentation, investigations, management, key trials, references) with a table of contents, making it straightforward to add new pages:

1. Copy an existing page as a template.
2. Update the `<title>`, meta description, heading, and content sections.
3. Add a link to the new page in the `<nav>` menu on every page.
4. Keep content inside `<section id="...">` blocks for a clean table of contents and good SEO structure.
5. Commit and push — the site redeploys automatically.

## Deployment (GitHub Pages)

This repository deploys via GitHub Actions (`.github/workflows/deploy.yml`), which publishes the repository root on every push to `main`.

To enable it on GitHub:

1. Go to **Settings → Pages** in this repository.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` (or merge a pull request into it) — the *Deploy Stroke Hub to GitHub Pages* workflow will run automatically and publish the site.

No build tools are required — the workflow simply uploads the repository as-is.

## Disclaimer

Stroke Hub is provided for educational purposes only. It is not a substitute for clinical judgement, local protocols, or up-to-date primary literature, and must not be used as the sole basis for patient care decisions.
