/**
 * generate_items.js — (re)generates items/*.html from data.js + icons.js.
 *
 * Run this any time you add, remove, or edit a category/item in data.js:
 *
 *   node generate_items.js
 *
 * It reads the SAME data.js / icons.js used by index.html (via Node's
 * require, since both files end with a `module.exports` guard), so there
 * is only one place to edit content — this script never needs to be
 * touched when content changes, only when the PAGE TEMPLATE changes.
 *
 * Requires only Node.js (no npm packages).
 */
const fs = require("fs");
const path = require("path");

const { CATEGORIES } = require("./data.js");
const { iconSvg } = require("./icons.js");

const OUT_DIR = path.join(__dirname, "items");
fs.mkdirSync(OUT_DIR, { recursive: true });

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

function renderBody(body) {
  return body
    .split("\n\n")
    .map((para) => `<p>${escapeHtml(para).replace(/\n/g, "<br/>")}</p>`)
    .join("\n        ");
}

function renderPage(cat, item) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escapeHtml(item.title)} · 정보 허브</title>
<link rel="stylesheet" href="../style.css" />
</head>
<body>
  <div class="app">
    <main class="main" style="flex: 1;">
      <div class="detail-shell">
        <p class="back-link">
          <a class="pill outlined" href="../index.html#${cat.id}">
            ${iconSvg("arrow-left")}
            <span>${escapeHtml(cat.label)} 목록으로 돌아가기</span>
          </a>
        </p>

        <div class="detail-cover" style="background: linear-gradient(160deg, hsl(${item.hue} 70% 42%), hsl(${item.hue} 55% 18%));">
          ${iconSvg(cat.icon)}
        </div>

        <span class="detail-tag">${escapeHtml(cat.label)}</span>
        <h1 class="detail-title">${escapeHtml(item.title)}</h1>
        <p class="detail-meta">${escapeHtml(item.meta)}</p>

        <div class="detail-card">
        ${renderBody(item.body)}
        </div>
      </div>
    </main>
  </div>
</body>
</html>
`;
}

let count = 0;
for (const cat of CATEGORIES) {
  for (const item of cat.items) {
    const outPath = path.join(OUT_DIR, `${item.id}.html`);
    fs.writeFileSync(outPath, renderPage(cat, item), "utf8");
    count++;
  }
}

console.log(`Generated ${count} item pages into ${OUT_DIR}`);
