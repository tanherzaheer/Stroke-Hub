/*
 * Stroke Hub — diagram rendering.
 * Initialises Mermaid (loaded locally from assets/vendor/mermaid.min.js) for
 * any <pre class="mermaid"> flowcharts on the page. Inline SVG/HTML diagrams
 * render natively and need no JavaScript. Progressive enhancement: if Mermaid
 * fails to load, the flowchart source stays visible as readable text.
 */
(function () {
  "use strict";

  if (typeof window.mermaid === "undefined") {
    return;
  }

  window.mermaid.initialize({
    startOnLoad: true,
    securityLevel: "strict",
    theme: "base",
    flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" },
    themeVariables: {
      primaryColor: "#e8f1f6",
      primaryBorderColor: "#0b4f6c",
      primaryTextColor: "#1e2a32",
      lineColor: "#57636c",
      secondaryColor: "#f5f8fa",
      tertiaryColor: "#ffffff",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      fontSize: "15px"
    }
  });
})();
