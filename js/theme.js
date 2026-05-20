/* ============================================================
   THEME.JS
   Автоматически переключает тему страницы когда секция
   с data-theme входит в viewport.

   Использование в HTML:
   <section data-theme="light"> ← белый фон, чёрный текст
   <section data-theme="dark">  ← чёрный фон, белый текст

   Тема применяется как атрибут на <body>:
   <body data-theme="light"> / <body data-theme="dark">

   CSS реагирует на это так:
   [data-theme="dark"] { background: var(--black); color: var(--white); }

   Для страниц где тема фиксирована (about — всегда светлая,
   bhsad-project — всегда тёмная) — прописывай data-theme
   прямо на <body>, theme.js не будет его перезаписывать
   если на странице нет секций с data-theme.
   ============================================================ */


/* ------------------------------------------------------------
   INIT
   ------------------------------------------------------------ */

function initTheme() {
  const sections = document.querySelectorAll("[data-theme]");

  // если на странице нет секций с data-theme — ничего не делаем,
  // тема берётся из атрибута на body (задаётся в HTML)
  if (!sections.length) return;

  const observer = new IntersectionObserver(onIntersect, {
    // секция считается активной когда 40% её высоты в viewport
    threshold: 0,
    rootMargin: "-40% 0px -40% 0px",
  });

  sections.forEach(section => observer.observe(section));
}

initTheme();


/* ------------------------------------------------------------
   ОБРАБОТЧИК
   ------------------------------------------------------------ */

function onIntersect(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const theme = entry.target.dataset.theme;
    if (!theme) return;

    // меняем атрибут на body
    document.body.dataset.theme = theme;
  });
}

