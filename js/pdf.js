/* ============================================================
   PDF.JS
   На мобиле заменяет iframe с PDF на ссылку.
   Вызывается автоматически после любого рендера PDF.

   Использование:
   <script src="js/pdf.js"></script>
   ============================================================ */

function initPdfs(root = document) {
  const isMobile = window.innerWidth <= 768 ||
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  root.querySelectorAll("iframe[src$='.pdf']").forEach(iframe => {
    if (!isMobile) return;

    const src = iframe.getAttribute("src");

    // создаём замену — ссылка в стиле сайта
    const wrapper = document.createElement("div");
    wrapper.className = "pdf-mobile";
    wrapper.innerHTML = `
      <a href="${src}" target="_blank" rel="noopener" class="pdf-mobile__link">
        <div class="pdf-mobile__inner">
          <span class="pdf-mobile__label">// process.pdf</span>
          <span class="pdf-mobile__action">open ↗</span>
        </div>
      </a>
    `;

    iframe.parentNode.replaceChild(wrapper, iframe);
  });
}

// запускаем после загрузки DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => initPdfs());
} else {
  initPdfs();
}

// экспортируем для вызова после динамического рендера
window.initPdfs = initPdfs;