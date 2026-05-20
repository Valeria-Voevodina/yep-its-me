/* ============================================================
   BOTTOM-BAR.JS
   Вставляет нижнюю полоску без fetch — сразу из строки.

   data-атрибуты на <body>:
   data-page="index|about|bhsad-project|project"
   data-title="НАЗВАНИЕ"        ← для ручных проектов
   data-prev="id"               ← для проектов
   data-next="id"               ← для проектов

   bhsad-проекты: data-title не нужен,
   название берётся из .project-title после рендера.
   ============================================================ */

function initBottomBar() {
  const container = document.getElementById("bottom-bar-container");
  if (!container) return;

  container.innerHTML = `
    <footer class="bottom-bar">
      <div class="bottom-bar__left"></div>
      <div class="bottom-bar__right"></div>
    </footer>
  `;

  const page = document.body.dataset.page || "index";

  if (page === "bhsad-project") {
    // название появится после того как bhsad-project.js отрендерит страницу
    // ждём через requestAnimationFrame — не блокирует загрузку
    requestAnimationFrame(() => pollForTitle());
  } else {
    render();
  }
}

/* ------------------------------------------------------------
   ЖДЁМ НАЗВАНИЕ — для bhsad-project
   Проверяем каждый кадр пока .project-title не появится.
   ------------------------------------------------------------ */
function pollForTitle(attempts = 0) {
  const titleEl = document.querySelector(".project-title");

  if (titleEl && titleEl.textContent.trim()) {
    render(titleEl.textContent.trim());
    return;
  }

  // пробуем максимум 60 раз (~1 секунда), потом рендерим без названия
  if (attempts < 60) {
    requestAnimationFrame(() => pollForTitle(attempts + 1));
  } else {
    render();
  }
}

/* ------------------------------------------------------------
   РЕНДЕР
   ------------------------------------------------------------ */
function render(titleFromDOM = null) {
  const left  = document.querySelector(".bottom-bar__left");
  const right = document.querySelector(".bottom-bar__right");
  if (!left || !right) return;

  const page  = document.body.dataset.page  || "index";
  const title = titleFromDOM || document.body.dataset.title || null;

  const labels = {
    "index":         "[ MAIN ]",
    "about":         "[ ABOUT ]",
    "bhsad-project": "[ BHSAD ]",
    "project":       "[ PROJECT ]",
    "fun-stuff":     "[ FUN-STUFF ]",
  };

  const label = labels[page] || `[ ${page.toUpperCase()} ]`;

  left.innerHTML = title
    ? `${label} <span class="bottom-bar__title">— ${title}</span>`
    : label;

  if (page === "bhsad-project" || page === "project") {
    renderControls(right, page);
  } else if (page === "about") {
    right.innerHTML = `<a href="index.html">go to [ main ]</a>`;
  } else if (page === "index") {
    right.innerHTML = `<a href="#about"> top</a>`;
  } else if (page === "fun-stuff") {
    right.innerHTML = `<a href="#fun-stuff"> top</a>`;
}
}

/* ------------------------------------------------------------
   КОНТРОЛЫ — ← prev | × | next →
   ------------------------------------------------------------ */
function renderControls(container, page) {
  const prev = document.body.dataset.prev;
  const next = document.body.dataset.next;

  // для bhsad — добавляем basePath и ?id=
  // для ручных — href уже готовый (имя .html файла)
  const isBhsad = page === "bhsad-project";

  const prevHref = isBhsad ? `bhsad-project.html?id=${prev}` : prev;
  const nextHref = isBhsad ? `bhsad-project.html?id=${next}` : next;

  const prevLink = prev
    ? `<a href="${prevHref}">← prev</a>`
    : `<span class="bottom-bar__disabled">← prev</span>`;

  const nextLink = next
    ? `<a href="${nextHref}">next →</a>`
    : `<span class="bottom-bar__disabled">next →</span>`;

  container.innerHTML = `${prevLink}<a href="index.html#archive">| × |</a>${nextLink}`;
}

initBottomBar();




window.updateBottomBarTitle = function(title) {
  const left = document.querySelector(".bottom-bar__left");
  if (!left) return;
  const page = document.body.dataset.page || "index";
  const labels = {
    "index": "[ MAIN ]", "about": "[ ABOUT ]",
    "bhsad-project": "[ BHSAD ]", "project": "[ PROJECT ]",
  };
  const label = labels[page] || `[ ${page.toUpperCase()} ]`;
  left.innerHTML = title ? `${label} <span class="bottom-bar__title">— ${title}</span>` : label;
};

window.updateBottomBarNav = function() {
  const right = document.querySelector(".bottom-bar__right");
  if (!right) return;
  const page = document.body.dataset.page;
  if (page === "bhsad-project" || page === "project") {
    renderControls(right, page);
  }
};