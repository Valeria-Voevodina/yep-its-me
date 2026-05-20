/* ============================================================
   MENU.JS
   Загружает components/menu.html в #menu-container.
   Вешает логику кружка-триггера.
   Подсвечивает активный пункт меню по текущей странице.

   Подключение в HTML:
   <div id="menu-container"></div>
   <script src="js/menu.js"></script>
   ============================================================ */


/* ------------------------------------------------------------
   ЗАГРУЗКА И ИНЖЕКТ
   ------------------------------------------------------------ */

async function initMenu() {
  const container = document.getElementById("menu-container");
  if (!container) return;

  try {
    const res  = await fetch("components/menu.html");
    const html = await res.text();
    container.innerHTML = html;

    // после вставки вешаем логику
    initToggle();
    highlightActive();

  } catch (err) {
    console.error("menu.js: не удалось загрузить components/menu.html", err);
  }
}

initMenu();


/* ------------------------------------------------------------
   КРУЖОК-ТРИГГЕР
   Клик — меню появляется / прячется.
   Клик вне меню — закрывается.
   ------------------------------------------------------------ */

function initToggle() {
  const toggle = document.querySelector(".menu-toggle");
  const nav    = document.querySelector(".menu-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isActive = nav.classList.toggle("active");
    toggle.classList.toggle("active", isActive);
  });

  // клик вне меню закрывает его
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu-right")) {
      nav.classList.remove("active");
      toggle.classList.remove("active");
    }
  });

  // закрывать меню при клике на ссылку
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      toggle.classList.remove("active");
    });
  });
}


/* ------------------------------------------------------------
   АКТИВНЫЙ ПУНКТ
   Подсвечивает ссылку которая соответствует текущей странице.
   ------------------------------------------------------------ */

function highlightActive() {
  const current = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".menu-nav a").forEach(link => {
    const href = link.getAttribute("href");
    // совпадение по имени файла (без якоря)
    if (href && href.startsWith(current)) {
      link.classList.add("active");
    }
  });
}