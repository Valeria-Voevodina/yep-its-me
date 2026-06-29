/* ============================================================
   DASHES.JS
   Заменяет дефисы (-) на тире (–) во всех текстовых узлах.
   Не трогает атрибуты (href, src, data-*) и код внутри <script>.
   ============================================================ */

function replaceDashes(root = document.body) {
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const tag = node.parentElement?.tagName;

        // пропускаем скрипты, стили, поля ввода
        if (["SCRIPT", "STYLE", "INPUT", "TEXTAREA"].includes(tag)) {
          return NodeFilter.FILTER_REJECT;
        }

        // пропускаем если нет дефиса
        if (!node.nodeValue.includes("-")) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    node.nodeValue = node.nodeValue.replace(/-/g, "–");
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => replaceDashes());
} else {
  replaceDashes();
}

// вызывай после динамического рендера
window.replaceDashes = replaceDashes;