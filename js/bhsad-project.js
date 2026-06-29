const layouts = {

  "double-image-pdf": (p) => `
    <div class="column-2">
      <img src="${p.assets.photos[0]}" alt="${p.title}" class="image--bordered">
    </div>
    <div class="column-3">
      <img src="${p.assets.photos[1]}" alt="${p.title}">
    </div>
    ${p.assets.pdf ? `
    <div class="center-columns">
      <iframe
        src="${p.assets.pdf}"
        loading="lazy"
        width="100%"
        height="800px"
        style="border: none;"
        onload="this.previousElementSibling.style.display='none'"
      ></iframe>
    </div>
    ` : ""}
  `,

};


/* ------------------------------------------------------------
   INIT — одна функция, всё внутри
   ------------------------------------------------------------ */

async function init() {
  const id = new URLSearchParams(window.location.search).get("id");
  if (!id) { showError("no project id in URL"); return; }

  const projects = await loadProjects();
  if (!projects) return;

  const idx = projects.findIndex(p => p.id === id);
  if (idx === -1) { showError(`project "${id}" not found`); return; }

  const project = projects[idx];

  // prev / next на body — до рендера чтобы bottom-bar их увидел
  if (idx > 0)                    document.body.dataset.prev = projects[idx - 1].id;
  if (idx < projects.length - 1) document.body.dataset.next = projects[idx + 1].id;

  render(project);

  // обновляем bottom-bar после рендера
  if (window.updateBottomBarTitle) window.updateBottomBarTitle(project.title);
  if (window.updateBottomBarNav)   window.updateBottomBarNav();
}

init();


/* ------------------------------------------------------------
   ЗАГРУЗКА JSON
   ------------------------------------------------------------ */

async function loadProjects() {
  try {
    const res = await fetch("data/bhsad-projects.json");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("bhsad-project: не удалось загрузить bhsad-projects.json:", err);
    showError("failed to load project data");
    return null;
  }
}


/* ------------------------------------------------------------
   РЕНДЕР
   ------------------------------------------------------------ */

function render(p) {
  document.title = p.title.toLowerCase() + " — valeria voevodina";

  const titleEl = document.querySelector(".title");
  if (titleEl) titleEl.textContent = p.title;

  const phaseEl = document.querySelector(".project-phase");
  if (phaseEl) phaseEl.textContent = `[ PHASE_${p.phase} ]`;

  const content = document.getElementById("project-content");
  if (!content) return;

  const layoutKey = p.layout || "double-image-pdf";
  const layoutFn  = layouts[layoutKey];

  if (!layoutFn) { showError(`unknown layout: "${layoutKey}"`); return; }

  content.innerHTML = layoutFn(p);
  if (window.initPdfs) window.initPdfs(content);
}

/* ------------------------------------------------------------
   ОШИБКА
   ------------------------------------------------------------ */

function showError(msg) {
  document.body.innerHTML = `
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-family: 'IBM Plex Mono', monospace;
      gap: 1rem;
    ">
      <p style="opacity: 0.5; text-transform: uppercase;">// error</p>
      <p>${msg}</p>
      <a href="index.html#archive">← back to archive</a>
    </div>
  `;
}

