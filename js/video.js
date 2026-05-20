/* ============================================================
   VIDEO.JS
   ============================================================ */

const ICONS = {
  play:     `<svg width="12" height="14" viewBox="0 0 12 14" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="1,1 11,7 1,13"/></svg>`,
  pause:    `<svg width="12" height="14" viewBox="0 0 12 14" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="3" y1="1" x2="3" y2="13"/><line x1="9" y1="1" x2="9" y2="13"/></svg>`,
  unmute:   `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="1,4 5,4 9,1 9,13 5,10 1,10"/><path d="M11,4 Q14,7 11,10"/></svg>`,
  mute:     `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="1,4 5,4 9,1 9,13 5,10 1,10"/><line x1="12" y1="4" x2="16" y2="10"/><line x1="16" y1="4" x2="12" y2="10"/></svg>`,
  fullscreen: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="1,5 1,1 5,1"/><polyline points="9,1 13,1 13,5"/><polyline points="13,9 13,13 9,13"/><polyline points="5,13 1,13 1,9"/></svg>`,
  exit:     `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="5,1 1,1 1,5"/><polyline points="9,1 13,1 13,5"/><polyline points="13,9 13,13 9,13"/><polyline points="5,13 1,13 1,9"/><line x1="4" y1="4" x2="10" y2="10"/><line x1="10" y1="4" x2="4" y2="10"/></svg>`,
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAll);
} else {
  initAll();
}

function initAll() {
  document.querySelectorAll(".video-container").forEach(initVideo);
}

function initVideo(container) {
  const video = container.querySelector("video");
  if (!video) return;

  const old = container.querySelector(".controls");
  if (old) old.remove();

  container.insertAdjacentHTML("beforeend", `
    <div class="controls">
      <button class="control-btn js-play"       aria-label="play / pause"></button>
      <button class="control-btn js-mute"       aria-label="mute / unmute"></button>
      <button class="control-btn js-fullscreen" aria-label="fullscreen"></button>
    </div>
  `);

  const btnPlay = container.querySelector(".js-play");
  const btnMute = container.querySelector(".js-mute");
  const btnFull = container.querySelector(".js-fullscreen");

  /* ---------- начальное состояние иконок ---------- */
  // видео стартует замьюченным — показываем "включить звук"
  video.muted = true;
  btnPlay.innerHTML = ICONS.pause;   // autoplay запустится ниже
  btnMute.innerHTML = ICONS.unmute;  // звук выключен → иконка "включить"
  btnFull.innerHTML = ICONS.fullscreen;

  /* ---------- автовоспроизведение ---------- */
  video.play().catch(() => {
    btnPlay.innerHTML = ICONS.play;
    container.addEventListener("click", () => video.play(), { once: true });
  });

  /* ---------- play / pause ---------- */
  function togglePlay() {
    video.paused ? video.play() : video.pause();
  }

  video.addEventListener("click",  togglePlay);
  btnPlay.addEventListener("click", togglePlay);

  video.addEventListener("play",  () => { btnPlay.innerHTML = ICONS.pause; });
  video.addEventListener("pause", () => { btnPlay.innerHTML = ICONS.play;  });

  /* ---------- mute / unmute ---------- */
  // muted=true → иконка unmute (нажми чтобы включить звук)
  // muted=false → иконка mute   (нажми чтобы выключить)
  function updateMuteIcon() {
    btnMute.innerHTML = video.muted ? ICONS.unmute : ICONS.mute;
  }

  btnMute.addEventListener("click", () => {
    video.muted = !video.muted;
    updateMuteIcon();
  });

  /* ---------- fullscreen ---------- */
  btnFull.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      video.requestFullscreen().catch(err => console.warn("fullscreen:", err.message));
    } else {
      document.exitFullscreen();
    }
  });

  document.addEventListener("fullscreenchange", () => {
    btnFull.innerHTML = document.fullscreenElement ? ICONS.exit : ICONS.fullscreen;
  });

  /* ---------- клавиатура ---------- */
  let hovered = false;
  container.addEventListener("mouseenter", () => { hovered = true;  });
  container.addEventListener("mouseleave", () => { hovered = false; });

  document.addEventListener("keydown", (e) => {
    if (!hovered) return;
    if (e.key === " ")  { e.preventDefault(); togglePlay(); }
    if (e.key === "m")  { btnMute.click(); }
    if (e.key === "f")  { btnFull.click(); }
  });
}