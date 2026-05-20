/* ============================================================
   BHSAD-ARCHIVE.JS
   Подключается в index.html:
   <script src="js/bhsad-archive.js"></script>

   порядок работы:
   1. загружаем data/bhsad-projects.json
   2. рендерим теги в #bhsad-tag-filters
   3. рендерим списки имён и превью в каждую фазу
   4. фильтрация по тегам
   5. синхронизация URL
   ============================================================ */


/* ------------------------------------------------------------
   INIT
   ------------------------------------------------------------ */

async function initBhsadArchive() {
  const projects = await loadProjects();
  if (!projects) return;

  renderTags(projects);
  renderPhases(projects);

  const activeTags = new Set(getTagsFromURL());
  initTagUI(activeTags);
  initTagClicks(activeTags);
  filterItems(activeTags);
  initCounters();
}

initBhsadArchive();


/* ------------------------------------------------------------
   ЗАГРУЗКА JSON — только bhsad-projects.json
   Другие проекты (не bhsad) в этот файл не попадают
   и в архиве не появятся.
   ------------------------------------------------------------ */

async function loadProjects() {
  try {
    const res = await fetch("data/bhsad-projects.json");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("bhsad-archive: не удалось загрузить bhsad-projects.json:", err);
    return null;
  }
}


/* ------------------------------------------------------------
   РЕНДЕР ТЕГОВ
   ------------------------------------------------------------ */

function renderTags(projects) {
  const container = document.getElementById("bhsad-tag-filters");
  if (!container) return;

  const allTags = new Set();
  projects.forEach(p => p.tags?.forEach(t => allTags.add(t)));

  container.innerHTML = [...allTags].map(tag => `
    <button class="tag" data-tag="${tag}">
      ${tag} <span class="count"></span>
    </button>
  `).join("");
}


/* ------------------------------------------------------------
   РЕНДЕР ФАЗ
   Карточки ведут на bhsad-project.html?id=...
   (не на project.html — чтобы другие проекты не открывались)
   ------------------------------------------------------------ */

function renderPhases(projects) {

  // списки имён
  document.querySelectorAll(".archive-phase-bhsad").forEach(section => {
    const phase = section.dataset.phase;
    const phaseProjects = projects.filter(p => p.phase === phase);
    const listEl = section.querySelector(".phase-list");

    if (listEl && phaseProjects.length) {
      listEl.innerHTML = phaseProjects
        .map(p => `/ ${p.title}`)
        .join(" <br> ");
    }
  });

  // сетки с превью
  document.querySelectorAll(".phase-grid-bhsad").forEach(grid => {
    const phase = grid.dataset.phase;
    const phaseProjects = projects.filter(p => p.phase === phase);

    if (!phaseProjects.length) return;

    grid.innerHTML = phaseProjects.map(p => `
      <a
        class="grid-item"
        href="bhsad-project.html?id=${p.id}"
        data-tags="${(p.tags || []).join(" ")}"
      >
        <img
          src="${p.assets.preview}"
          alt="${p.title}"
          loading="lazy"
        >
      </a>
    `).join("");
  });
}


/* ------------------------------------------------------------
   ФИЛЬТРАЦИЯ
   ------------------------------------------------------------ */

function filterItems(activeTags) {
  const items = document.querySelectorAll("#archive .grid-item");

  items.forEach(item => {
    const itemTags = (item.dataset.tags || "").split(" ").filter(Boolean);

    if (activeTags.size === 0) {
      item.classList.remove("is-hidden");
      return;
    }

    const match = [...activeTags].some(tag => itemTags.includes(tag));
    item.classList.toggle("is-hidden", !match);
  });

  // скрываем заголовок фазы если все карточки в ней скрыты
  document.querySelectorAll(".phase-grid-bhsad").forEach(grid => {
    const cards   = grid.querySelectorAll(".grid-item");
    const visible = [...cards].some(c => !c.classList.contains("is-hidden"));
    const header  = document.querySelector(
      `.archive-phase-bhsad[data-phase="${grid.dataset.phase}"]`
    );
    if (header) header.classList.toggle("is-hidden", cards.length > 0 && !visible);
    grid.classList.toggle("is-hidden", cards.length > 0 && !visible);
  });
}


/* ------------------------------------------------------------
   СЧЁТЧИКИ
   ------------------------------------------------------------ */

function initCounters() {
  const items = document.querySelectorAll("#archive .grid-item");
  const tags  = document.querySelectorAll("#bhsad-tag-filters .tag");

  const counts = {};
  items.forEach(item => {
    (item.dataset.tags || "").split(" ").filter(Boolean).forEach(tag => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
  });

  tags.forEach(tag => {
    const value = tag.dataset.tag;
    const el = tag.querySelector(".count");
    if (el) el.textContent = counts[value] ? `(${counts[value]})` : "(0)";
  });
}


/* ------------------------------------------------------------
   КЛИКИ ПО ТЕГАМ
   ------------------------------------------------------------ */

function initTagClicks(activeTags) {
  const container = document.getElementById("bhsad-tag-filters");
  if (!container) return;

  container.addEventListener("click", e => {
    const tag = e.target.closest(".tag");
    if (!tag) return;

    const value = tag.dataset.tag;

    if (activeTags.has(value)) {
      activeTags.delete(value);
      tag.classList.remove("active");
    } else {
      activeTags.add(value);
      tag.classList.add("active");
    }

    filterItems(activeTags);
    syncURL(activeTags);
  });
}


/* ------------------------------------------------------------
   НАЧАЛЬНОЕ СОСТОЯНИЕ ТЕГОВ
   ------------------------------------------------------------ */

function initTagUI(activeTags) {
  document.querySelectorAll("#bhsad-tag-filters .tag").forEach(tag => {
    if (activeTags.has(tag.dataset.tag)) tag.classList.add("active");
  });
}


/* ------------------------------------------------------------
   URL SYNC
   index.html?tags=editorial+branding#archive
   ------------------------------------------------------------ */

function getTagsFromURL() {
  const params = new URLSearchParams(window.location.search);
  const val    = params.get("tags");
  return val ? val.split("+") : [];
}

function syncURL(activeTags) {
  const params = new URLSearchParams();
  if (activeTags.size > 0) params.set("tags", [...activeTags].join("+"));

  const newURL = window.location.pathname +
    (params.toString() ? `?${params.toString()}` : "") +
    "#archive";

  window.history.replaceState({}, "", newURL);
}

