/**
 * KevinScale — Navigation centralisée
 * Injecte automatiquement le header et le footer dans toutes les pages.
 * Pour modifier le header/footer, modifier uniquement ce fichier.
 */

(function () {
  "use strict";

  // ── Détecter la page active ──────────────────────────────
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";

  function isActive(href) {
    if (href === "index.html" && (page === "index.html" || page === "")) return true;
    return page === href;
  }

  function navLink(href, icon, label) {
    const active = isActive(href) ? ' class="nav-active"' : '';
    return `<a href="${href}"${active} title="${label}"><i class="fa ${icon}"></i><span class="nav-label">${label}</span></a>`;
  }

  // ── Header ───────────────────────────────────────────────
  const aboutActive = isActive("about.html") ? ' class="nav-active"' : '';
  const headerHTML = `
<div id="ks-header">
  <div class="ks-header-inner">
    <div class="ks-header-left">
      <a href="about.html" title="À propos"${aboutActive}><i class="fa fa-question-circle"></i></a>
    </div>
    <div class="ks-header-middle">
      <a href="index.html" class="ks-logo">
        <span class="ks-logo-icon">⚖️</span>
        <span class="ks-logo-text">KevinScale</span>
      </a>
    </div>
    <div class="ks-header-right"></div>
  </div>
</div>`;

  // ── Footer ───────────────────────────────────────────────
  const footerHTML = `
<div id="ks-footer">
  <div class="ks-footer-inner">
    <div class="ks-footer-links">
      <a href="index.html">Accueil</a>
      <a href="quiz.html">Passer le test</a>
      <a href="about.html">À propos</a>
      <a href="https://politiscales.fr" target="_blank" rel="noopener">PolitiScales ↗</a>
    </div>
    <div class="ks-footer-copy">
      KevinScale — Test d'affinité idéologique · <a href="https://github.com/kevinraphael95/kevinscale" target="_blank" rel="noopener">GitHub ↗</a>
    </div>
  </div>
</div>`;

  // ── Injection ────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", function () {
    // Header
    const headerEl = document.getElementById("ks-header-placeholder");
    if (headerEl) headerEl.outerHTML = headerHTML;

    // Footer
    const footerEl = document.getElementById("ks-footer-placeholder");
    if (footerEl) footerEl.outerHTML = footerHTML;
  });
})();
