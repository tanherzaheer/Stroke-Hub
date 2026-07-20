/*
 * Stroke Hub — shared site behaviour.
 * Progressive enhancement only: every page works with JS disabled.
 */
(function () {
  "use strict";

  // Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the mobile menu after a link is chosen
    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A" && window.innerWidth < 860) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Back-to-top button
  var backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    var toggleVisibility = function () {
      if (window.scrollY > 500) {
        backToTop.classList.add("is-visible");
      } else {
        backToTop.classList.remove("is-visible");
      }
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Table-of-contents scrollspy: highlights the section currently in view
  var tocLinks = document.querySelectorAll(".toc-inner a[href^='#']");
  if (tocLinks.length) {
    var sections = [];
    tocLinks.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      var section = document.getElementById(id);
      if (section) {
        sections.push({ link: link, section: section });
      }
    });

    var onScroll = function () {
      var scrollPos = window.scrollY + 120;
      var current = null;
      sections.forEach(function (item) {
        if (item.section.offsetTop <= scrollPos) {
          current = item;
        }
      });
      tocLinks.forEach(function (link) {
        link.removeAttribute("aria-current");
      });
      if (current) {
        current.link.setAttribute("aria-current", "true");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
