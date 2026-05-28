/* ============================================================
   IMAGE.JS
   Запускается один раз после загрузки DOM.
   Также вызывается вручную после динамического рендера:
   window.processImages(container)

   Что делает:
   1. Автоматически заполняет alt из имени файла
   2. Добавляет loading="lazy" и decoding="async"
   3. Открывает лайтбокс на всех img не внутри <a>
   4. Подпись в bottom bar берётся из alt
   ============================================================ */


/* ------------------------------------------------------------
   ЗАПУСК
   ------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  processImages(document.body);
  createLightboxEl();
  document.addEventListener("keydown", onKey);
});

window.processImages = processImages;


/* ------------------------------------------------------------
   ОБРАБОТКА ИЗОБРАЖЕНИЙ
   Вызывай после любого динамического рендера:
   if (window.processImages) window.processImages(container);
   ------------------------------------------------------------ */

function processImages(root = document.body) {
  const images = root.querySelectorAll("img");

  images.forEach(img => {

    // 1. alt из имени файла если не задан
    if (!img.alt) {
      img.alt = altFromSrc(img.src);
    }

    // 2. производительность
    if (!img.hasAttribute("loading"))  img.setAttribute("loading",  "lazy");
    if (!img.hasAttribute("decoding")) img.setAttribute("decoding", "async");

    // 3. лайтбокс — только если img не внутри <a>
    if (!img.closest("a") && !img.classList.contains("no-lightbox")) {
      img.style.cursor = "zoom-in";

      // убираем старый обработчик чтобы не дублировать
      img.removeEventListener("click", img._lbHandler);
      img._lbHandler = () => openLightbox(img);
      img.addEventListener("click", img._lbHandler);
    }
  });
}


/* ------------------------------------------------------------
   ALT ИЗ ИМЕНИ ФАЙЛА
   "core-system-artefact-cover.jpeg" → "core system artefact cover"
   "p-01.jpg"                        → "p 01"
   "03_output_cover.png"             → "03 output cover"
   ------------------------------------------------------------ */

function altFromSrc(src) {
  if (!src) return "";

  // берём только имя файла без пути и расширения
  const filename = src.split("/").pop().replace(/\.[^.]+$/, "");

  return filename.replace(/[-_.]+/g, "—").trim();
}


/* ------------------------------------------------------------
   LIGHTBOX
   ------------------------------------------------------------ */

let lbImages = [];    // все img на странице доступные для лайтбокса
let lbIndex  = null;  // текущий индекс

function createLightboxEl() {
  if (document.getElementById("lb")) return;

  const el = document.createElement("div");
  el.id        = "lb";
  el.className = "lightbox";
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-modal", "true");

  el.innerHTML = `
    <div class="lightbox__backdrop"></div>
    <div class="lightbox__content">
      <img class="lightbox__img" src="" alt="" decoding="async">
    </div>
  `;

  document.body.appendChild(el);
  el.querySelector(".lightbox__backdrop").addEventListener("click", closeLightbox);
}

function openLightbox(clickedImg) {
  // собираем актуальный список каждый раз — DOM мог измениться
  lbImages = [...document.querySelectorAll("img:not(a img):not(.no-lightbox):not(.lightbox__img)")]
    .filter(img => img._lbHandler); // только те у кого есть обработчик

  lbIndex = lbImages.indexOf(clickedImg);
  if (lbIndex === -1) return;

  showImage(lbIndex);

  const lb = document.getElementById("lb");
  lb.classList.add("active");
  document.body.classList.add("lightbox-open");
}


function showImage(index) {
  const lb    = document.getElementById("lb");
  const img   = lb.querySelector(".lightbox__img");
  const photo = lbImages[index];

  img.src = photo.src;
  img.alt = photo.alt;

  updateBar(index);
}

function closeLightbox() {
  const lb = document.getElementById("lb");
  if (!lb) return;

  lb.classList.remove("active");
  document.body.classList.remove("lightbox-open");
  lbIndex = null;

  restoreBar();
}

function lbPrev() {
  if (lbIndex === null) return;
  lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length;
  showImage(lbIndex);
}

function lbNext() {
  if (lbIndex === null) return;
  lbIndex = (lbIndex + 1) % lbImages.length;
  showImage(lbIndex);
}

function onKey(e) {
  const lb = document.getElementById("lb");
  if (!lb?.classList.contains("active")) return;

  if (e.key === "ArrowLeft")  lbPrev();
  if (e.key === "ArrowRight") lbNext();
  if (e.key === "Escape")     closeLightbox();
}


/* ------------------------------------------------------------
   BOTTOM BAR
   ------------------------------------------------------------ */

let _barLeft  = null;
let _barRight = null;

function updateBar(index) {
  const left  = document.querySelector(".bottom-bar__left");
  const right = document.querySelector(".bottom-bar__right");
  if (!left || !right) return;

  if (_barLeft === null) {
    _barLeft  = left.innerHTML;
    _barRight = right.innerHTML;
  }

  const title   = lbImages[index]?.alt || "";
  const isFirst = index === 0;
  const isLast  = index === lbImages.length - 1;

  left.innerHTML = `[ IMAGE ]${title ? ` <span class="bottom-bar__title">— ${title}</span>` : ""}`;

  right.innerHTML = `
    ${isFirst
      ? `<span class="bottom-bar__disabled">← prev</span>`
      : `<button class="bottom-bar__btn" onclick="lbPrev()">← prev</button>`
    }
    <button class="bottom-bar__btn" onclick="closeLightbox()">| × |</button>
    ${isLast
      ? `<span class="bottom-bar__disabled">next →</span>`
      : `<button class="bottom-bar__btn" onclick="lbNext()">next →</button>`
    }
  `;
}

function restoreBar() {
  const left  = document.querySelector(".bottom-bar__left");
  const right = document.querySelector(".bottom-bar__right");
  if (!left || !right || _barLeft === null) return;

  left.innerHTML  = _barLeft;
  right.innerHTML = _barRight;
  _barLeft  = null;
  _barRight = null;
}
