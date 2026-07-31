/**
 * main.js — renders the sidebar (from CATEGORIES) and the item grid for
 * whichever category is currently selected. Clicking an item card
 * navigates to its static detail page at items/{id}.html.
 *
 * Depends on: data.js (CATEGORIES), icons.js (iconSvg)
 */
(function () {
  const navList = document.getElementById("nav-list");
  const pageEyebrow = document.getElementById("page-eyebrow");
  const pageTitle = document.getElementById("page-title");
  const pageDesc = document.getElementById("page-desc");
  const itemCount = document.getElementById("item-count");
  const itemGrid = document.getElementById("item-grid");

  function renderSidebar(activeId) {
    navList.innerHTML = CATEGORIES.map((cat) => {
      const active = cat.id === activeId ? "active" : "";
      return `
        <li>
          <button class="nav-item ${active}" data-category="${cat.id}">
            ${iconSvg(cat.icon)}
            <span>${cat.label}</span>
          </button>
        </li>`;
    }).join("");

    navList.querySelectorAll(".nav-item").forEach((btn) => {
      btn.addEventListener("click", () => selectCategory(btn.dataset.category));
    });
  }

  function renderCategory(cat) {
    pageEyebrow.textContent = "CATEGORY";
    pageTitle.textContent = cat.label;
    pageDesc.textContent = cat.description;
    itemCount.textContent = `${cat.items.length}개 항목`;

    if (!cat.items.length) {
      itemGrid.innerHTML = `<div class="empty-state">이 카테고리에는 아직 항목이 없습니다.</div>`;
      return;
    }

    itemGrid.innerHTML = cat.items
      .map(
        (item) => `
        <a class="item-card" href="items/${item.id}.html">
          <div class="card-cover" style="background: linear-gradient(160deg, hsl(${item.hue} 70% 42%), hsl(${item.hue} 55% 18%));">
            ${iconSvg(cat.icon)}
            <span class="card-play">${iconSvg("play")}</span>
          </div>
          <p class="card-title">${item.title}</p>
          <p class="card-meta">${item.meta}</p>
        </a>`
      )
      .join("");
  }

  function selectCategory(id) {
    const cat = CATEGORIES.find((c) => c.id === id) || CATEGORIES[0];
    renderSidebar(cat.id);
    renderCategory(cat);
    history.replaceState(null, "", `#${cat.id}`);
  }

  const initialId = (location.hash || "").replace("#", "") || CATEGORIES[0].id;
  selectCategory(CATEGORIES.some((c) => c.id === initialId) ? initialId : CATEGORIES[0].id);
})();
