/* ============================================================
   CHILDHOOD-ARCHIVE.JS
   Рендерит сетку из childhood-photos.json.
   Лайтбокс — через image.js (processImages).
   ============================================================ */

async function initChildhoodArchive() {
  const grid = document.querySelector(".phase-grid-childhood");
  if (!grid) return;

  let photos = [];
  try {
    const res = await fetch("data/childhood.json");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    photos = await res.json();
  } catch (err) {
    console.error("childhood-archive:", err);
    return;
  }

  grid.innerHTML = photos.map((photo) => `
    <div class="childhood-item">
      <img
        src="${photo.src}"
        alt="${photo.title}"
        loading="lazy"
        decoding="async"
      >
    </div>
  `).join("");

  // передаём новые изображения в image.js — лайтбокс подхватит их
  if (window.processImages) window.processImages(grid);
}

initChildhoodArchive();