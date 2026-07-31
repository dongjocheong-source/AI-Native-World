/**
 * icons.js — inline SVG icon set shared by index.html and every generated
 * detail page. All icons are simple hand-authored line icons (24x24,
 * stroke=currentColor, fill=none) so no external icon font/CDN is required
 * and the site works fully offline from a plain file:// open.
 *
 * Add a new category icon by adding a new "name: '<path d="...">'" entry.
 */
const ICONS = {
  "file-text":
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h8"/><path d="M8 9h2"/>',
  folder:
    '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
  bookmark: '<path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"/>',
  "edit-3":
    '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  "book-open":
    '<path d="M2 5c2-1 5-1 7 0v14c-2-1-5-1-7 0Z"/><path d="M22 5c-2-1-5-1-7 0v14c2-1 5-1 7 0Z"/>',
  coffee:
    '<path d="M4 9h13v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M7 3c0 1-1 1-1 2s1 1 1 2"/><path d="M11 3c0 1-1 1-1 2s1 1 1 2"/>',
  zap: '<path d="M13 2 4 14h6l-1 8 9-12h-6Z"/>',
  user: '<path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',
  calendar:
    '<path d="M4 5h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/><path d="M3 10h18"/><path d="M8 2v4"/><path d="M16 2v4"/>',
  star: '<path d="m12 2 3.1 6.9 7.4.8-5.6 5 1.6 7.3L12 18.3 5.5 22l1.6-7.3-5.6-5 7.4-.8Z"/>',
  play: '<path d="M6 3.5v17l14-8.5Z"/>',
  "arrow-left": '<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>',
};

function iconSvg(name, extraAttrs) {
  const inner = ICONS[name] || ICONS["file-text"];
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${
    extraAttrs || ""
  }>${inner}</svg>`;
}

if (typeof module !== "undefined") {
  module.exports = { ICONS, iconSvg };
}
