const menuToggle = document.querySelector('.menu-toggle');
const menuNav = document.querySelector('.menu-nav');

const video = document.getElementById('myVideo');
const playPause = document.getElementById('playPause');
const muteUnmute = document.getElementById('muteUnmute');
const fullscreen = document.getElementById('fullscreen');

const slideshowProjects = [ 
  [
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_01.jpg",
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_02.jpg",
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_03.jpg",
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_04.jpg",
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_05.jpg",
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_06.jpg",
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_07.jpg",
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_08.jpg",
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_09.jpg",
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_10.jpg",
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_11.jpg",
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_12.jpg",
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_13.jpg",
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_14.jpg",
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_15.jpg",
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_16.jpg",
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_17.jpg",
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_18.jpg",
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_19.jpg",
    "selected works/record cover/№ 20. “ This is  the RECORD COVER ”_20.jpg",
  ],
  [
    "selected works/experimental notation/experimental notation_01.jpg",
    "selected works/experimental notation/experimental  notation_02.jpg",
    "selected works/experimental notation/experimental notation_03.jpg",
    "selected works/experimental notation/experimental notation_04.jpg",
    "selected works/experimental notation/experimental notation_05.jpg",
    "selected works/experimental notation/experimental notation_06.jpg",
    "selected works/experimental notation/experimental notation_07.jpg",
    "selected works/experimental notation/experimental notation_08.jpg",
    "selected works/experimental notation/experimental notation_09.jpg",
    "selected works/experimental notation/experimental notation_10.jpg",
    "selected works/experimental notation/experimental notation_11.jpg",
    "selected works/experimental notation/experimental notation_12.jpg",
    "selected works/experimental notation/experimental notation_13.jpg",
    "selected works/experimental notation/experimental notation_14.jpg",
    "selected works/experimental notation/experimental notation_15.jpg",
    "selected works/experimental notation/experimental notation_16.jpg",
    "selected works/experimental notation/experimental notation_17.jpg",
    "selected works/experimental notation/experimental notation_18.jpg",
    "selected works/experimental notation/experimental notation_19.jpg",
    "selected works/experimental notation/experimental notation_20.jpg",
    "selected works/experimental notation/experimental notation_21.jpg",
    "selected works/experimental notation/experimental notation_22.jpg",
    "selected works/experimental notation/experimental notation_23.jpg",
    "selected works/experimental notation/experimental notation_24.jpg"
  ],
  [
    "selected works/fine art catalogue/№ 38. “ fine art graduation catalogue ”_01.jpg",
    "selected works/fine art catalogue/№ 38. “ fine art graduation catalogue ”_02.jpg",
    "selected works/fine art catalogue/№ 38. “ fine art graduation catalogue ”_03.jpg",
    "selected works/fine art catalogue/№ 38. “ fine art graduation catalogue ”_04.jpg",
    "selected works/fine art catalogue/№ 38. “ fine art graduation catalogue ”_05.jpg",
    "selected works/fine art catalogue/№ 38. “ fine art graduation catalogue ”_06.jpg",
    "selected works/fine art catalogue/№ 38. “ fine art graduation catalogue ”_07.jpg",
    "selected works/fine art catalogue/№ 38. “ fine art graduation catalogue ”_08.jpg",
    "selected works/fine art catalogue/№ 38. “ fine art graduation catalogue ”_09.jpg",
    "selected works/fine art catalogue/№ 38. “ fine art graduation catalogue ”_10.jpg",
    "selected works/fine art catalogue/№ 38. “ fine art graduation catalogue ”_11.jpg",
    "selected works/fine art catalogue/№ 38. “ fine art graduation catalogue ”_12.jpg"
  ],
  [
    "selected works/kind of magic/№ 23. “ kind of magic ”_01.jpg",
    "selected works/kind of magic/№ 23. “ kind of magic ”_02.jpg",
    "selected works/kind of magic/№ 23. “ kind of magic ”_03.jpg",
    "selected works/kind of magic/№ 23. “ kind of magic ”_04.jpg",
    "selected works/kind of magic/№ 23. “ kind of magic ”_05.jpg"
  ],
  [
    "selected works/secret project/№ 14. secret project._01.jpg",
    "selected works/secret project/№ 14. secret project._02.jpg",
    "selected works/secret project/№ 14. secret project._03.jpg",
    "selected works/secret project/№ 14. secret project._04.jpg",
    "selected works/secret project/№ 14. secret project._05.jpg",
    "selected works/secret project/№ 14. secret project._06.jpg",
    "selected works/secret project/№ 14. secret project._07.jpg",
    "selected works/secret project/№ 14. secret project._08.jpg",
    "selected works/secret project/№ 14. secret project._09.jpg",
    "selected works/secret project/№ 14. secret project._10.jpg",
    "selected works/secret project/№ 14. secret project._11.jpg",
    "selected works/secret project/№ 14. secret project._12.jpg",
    "selected works/secret project/№ 14. secret project._13.jpg",
    "selected works/secret project/№ 14. secret project._14.jpg"
  ],
  [
    "selected works/boys don't cry/№ 44.  “ Packaging  Soul Transfer ”_01.jpg",
    "selected works/boys don't cry/№ 44.  “ Packaging  Soul Transfer ”_02.jpg",
    "selected works/boys don't cry/№ 44.  “ Packaging  Soul Transfer ”_03.jpg",
    "selected works/boys don't cry/№ 44.  “ Packaging  Soul Transfer ”_04.jpg",
    "selected works/boys don't cry/№ 44.  “ Packaging  Soul Transfer ”_05.jpg",
    "selected works/boys don't cry/№ 44.  “ Packaging  Soul Transfer ”_06.jpg",
    "selected works/boys don't cry/№ 44.  “ Packaging  Soul Transfer ”_07.jpg",
    "selected works/boys don't cry/№ 44.  “ Packaging  Soul Transfer ”_08.jpg",
    "selected works/boys don't cry/№ 44.  “ Packaging  Soul Transfer ”_09.jpg",
    "selected works/boys don't cry/№ 44.  “ Packaging  Soul Transfer ”_10.jpg",
    "selected works/boys don't cry/№ 44.  “ Packaging  Soul Transfer ”_11.jpg",
  ],
  [
    "selected works/mood swings/№ 33.  “ mood swings ”_01.jpg",
    "selected works/mood swings/№ 33.  “ mood swings ”_02.jpg",
    "selected works/mood swings/№ 33.  “ mood swings ”_03.jpg",
    "selected works/mood swings/№ 33.  “ mood swings ”_04.jpg",
    "selected works/mood swings/№ 33.  “ mood swings ”_05.jpg",
    "selected works/mood swings/№ 33.  “ mood swings ”_06.jpg",
    "selected works/mood swings/№ 33.  “ mood swings ”_07.jpg",
    "selected works/mood swings/№ 33.  “ mood swings ”_08.jpg",
    "selected works/mood swings/№ 33.  “ mood swings ”_09.jpg",
    "selected works/mood swings/№ 33.  “ mood swings ”_10.jpg",
  ],
  [
    "selected works/independent project/№ 13. “ Independent  Project “_01.jpg",
    "selected works/independent project/№ 13. “ Independent  Project “_02.jpg",
    "selected works/independent project/№ 13. “ Independent  Project “_03.jpg",
    "selected works/independent project/№ 13. “ Independent  Project “_04.jpg",
    "selected works/independent project/№ 13. “ Independent  Project “_05.jpg",
    "selected works/independent project/№ 13. “ Independent  Project “_06.jpg",
    "selected works/independent project/№ 13. “ Independent  Project “_07.jpg",
    "selected works/independent project/№ 13. “ Independent  Project “_08.jpg",
    "selected works/independent project/№ 13. “ Independent  Project “_09.jpg",
    "selected works/independent project/№ 13. “ Independent  Project “_10.jpg",
    "selected works/independent project/№ 13. “ Independent  Project “_11.jpg",
    "selected works/independent project/№ 13. “ Independent  Project “_12.jpg",
    "selected works/independent project/№ 13. “ Independent  Project “_13.jpg",
    "selected works/independent project/№ 13. “ Independent  Project “_14.jpg",
    "selected works/independent project/№ 13. “ Independent  Project “_15.jpg",
    "selected works/independent project/№ 13. “ Independent  Project “_16.jpg",
  ],
  [
    "selected works/talent show/№ 26. “ talent show ”_01.jpg",
    "selected works/talent show/№ 26. “ talent show ”_02.jpg",
    "selected works/talent show/№ 26. “ talent show ”_03.jpg",
    "selected works/talent show/№ 26. “ talent show ”_04.jpg",
    "selected works/talent show/№ 26. “ talent show ”_05.jpg",
    "selected works/talent show/№ 26. “ talent show ”_06.jpg",
    "selected works/talent show/№ 26. “ talent show ”_07.jpg",
    "selected works/talent show/№ 26. “ talent show ”_08.jpg",
    "selected works/talent show/№ 26. “ talent show ”_09.jpg",
    "selected works/talent show/№ 26. “ talent show ”_10.jpg",
    "selected works/talent show/№ 26. “ talent show ”_11.jpg",
    "selected works/talent show/№ 26. “ talent show ”_12.jpg",
    "selected works/talent show/№ 26. “ talent show ”_13.jpg",
    "selected works/talent show/№ 26. “ talent show ”_14.jpg",
    "selected works/talent show/№ 26. “ talent show ”_15.jpg"
  ],
  [
    "selected works/warming up/№ 41.  “ Warming up ”_01.jpg",
    "selected works/warming up/№ 41.  “ Warming up ”_02.jpg",
    "selected works/warming up/№ 41.  “ Warming up ”_03.jpg",
    "selected works/warming up/№ 41.  “ Warming up ”_04.jpg",
    "selected works/warming up/№ 41.  “ Warming up ”_05.jpg",
    "selected works/warming up/№ 41.  “ Warming up ”_06.jpg",
    "selected works/warming up/№ 41.  “ Warming up ”_07.jpg",
    "selected works/warming up/№ 41.  “ Warming up ”_08.jpg"
  ],
  [
    "selected works/forbes education/№ 30. “ forbes education  magazine cover ”_01.jpg",
    "selected works/forbes education/№ 30. “ forbes education  magazine cover ”_02.jpg",
    "selected works/forbes education/№ 30. “ forbes education  magazine cover ”_03.jpg",
    "selected works/forbes education/№ 30. “ forbes education  magazine cover ”_04.jpg",
    "selected works/forbes education/№ 30. “ forbes education  magazine cover ”_05.jpg",
    "selected works/forbes education/№ 30. “ forbes education  magazine cover ”_06.jpg",
    "selected works/forbes education/№ 30. “ forbes education  magazine cover ”_07.jpg",
  ],
  [
    "selected works/infra–ordinarie/№ 18. “ infra–ordinarie ”_01.jpg",
    "selected works/infra–ordinarie/№ 18. “ infra–ordinarie ”_02.jpg",
    "selected works/infra–ordinarie/№ 18. “ infra–ordinarie ”_03.jpg",
    "selected works/infra–ordinarie/№ 18. “ infra–ordinarie ”_04.jpg",
    "selected works/infra–ordinarie/№ 18. “ infra–ordinarie ”_05.jpg",
    "selected works/infra–ordinarie/№ 18. “ infra–ordinarie ”_06.jpg",
    "selected works/infra–ordinarie/№ 18. “ infra–ordinarie ”_07.jpg",
    "selected works/infra–ordinarie/№ 18. “ infra–ordinarie ”_08.jpg",
  ],
];

let projectIndex = 0;
let slideIndex = 0;
const slideshowContainer = document.querySelector('.slideshow-container');

const gridItems = document.querySelectorAll('.grid-item');
const projectBox = document.getElementById('active-project');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menuNav.classList.toggle('active');
});

document.querySelectorAll('.menu-nav a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    menuNav.classList.remove('active');
  });
});

function startAutoplay() {
    if (!video) return;
    
    video.muted = true;

    video.play()
        .then(() => {
            console.log("Автовоспроизведение успешно.");
        })
        .catch(error => {
            console.warn("Автовоспроизведение было заблокировано. Ожидаем взаимодействия с пользователем.", error);
        });
}

window.addEventListener('load', startAutoplay);

function togglePlay() {
  if (!video) return;
  if (video.paused) {
    video.play();
    if (playPause) playPause.textContent = '⏸';
  } else {
    video.pause();
    if (playPause) playPause.textContent = '▶';
  }
}

window.addEventListener('load', () => {
  if (video) {
    video.play().catch(() => {});
  }
});

if (playPause) playPause.addEventListener('click', togglePlay);
if (video) video.addEventListener('click', togglePlay);

if (muteUnmute) {
  muteUnmute.addEventListener('click', () => {
    if (!video) return;
    video.muted = !video.muted;
    muteUnmute.textContent = video.muted ? '🔇' : '🔈';
  });
}

if (fullscreen) {
  fullscreen.addEventListener('click', () => {
    if (!video) return;
    if (!document.fullscreenElement) {
      video.requestFullscreen().catch(err => {
        console.error(`Ошибка при попытке полноэкранного режима: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (!video) return;
  
  switch (e.key.toLowerCase()) {
    case ' ':
      e.preventDefault();
      togglePlay();
      break;
    case 'm':
      video.muted = !video.muted;
      if (muteUnmute) muteUnmute.textContent = video.muted ? '🔇' : '🔈';
      break;
    case 'f':
      if (!document.fullscreenElement) video.requestFullscreen();
      else document.exitFullscreen();
      break;
  }
});

const preloadedUrls = new Set();

function preloadImage(url) {
  if (!url || preloadedUrls.has(url)) return;
  
  const img = new Image();
  img.src = url;
  
  preloadedUrls.add(url);
}

function showSlide() {
  if (!slideshowContainer || slideshowProjects.length === 0) return; 
  
  const currentProject = slideshowProjects[projectIndex];
  if (!currentProject || currentProject.length === 0) return;

  const imageUrl = currentProject[slideIndex];

  slideshowContainer.innerHTML = `
    <div class="mySlides active">
      <img src="${imageUrl}" alt="slide">
    </div>
  `;
    
  const slidesCount = currentProject.length;
  const nextSlideIndex = (slideIndex + 1) % slidesCount; 
  const nextImageUrl = currentProject[nextSlideIndex];
  
  const projectsCount = slideshowProjects.length; 
  const nextProjectIndex = (projectIndex + 1) % projectsCount;
  
  if (slideshowProjects[nextProjectIndex] && slideshowProjects[nextProjectIndex].length > 0) {
      const nextProjectFirstImageUrl = slideshowProjects[nextProjectIndex][0];
      preloadImage(nextProjectFirstImageUrl);
  }
  
  preloadImage(nextImageUrl);
}

function changeSlide(direction) {
  if (slideshowProjects.length === 0) return;

  const currentProject = slideshowProjects[projectIndex];
  if (!currentProject || currentProject.length === 0) return;

  const slidesCount = currentProject.length;
  
  slideIndex += direction;
  if (slideIndex < 0) slideIndex = slidesCount - 1;
  if (slideIndex >= slidesCount) slideIndex = 0;
  
  showSlide();
}

function changeProject(direction) {
  const projectsCount = slideshowProjects.length;
  if (projectsCount === 0) return;
  
  projectIndex += direction;
  if (projectIndex < 0) projectIndex = projectsCount - 1;
  if (projectIndex >= projectsCount) projectIndex = 0;
  
  slideIndex = 0; 
  showSlide();
}

const arrowLeft = document.querySelector('.arrow.left');
const arrowRight = document.querySelector('.arrow.right');
const arrowUp = document.querySelector('.arrow.up');
const arrowDown = document.querySelector('.arrow.down');

if (arrowLeft) arrowLeft.addEventListener('click', () => changeSlide(-1));
if (arrowRight) arrowRight.addEventListener('click', () => changeSlide(1));
if (arrowUp) arrowUp.addEventListener('click', () => changeProject(-1));
if (arrowDown) arrowDown.addEventListener('click', () => changeProject(1));

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      changeSlide(-1);
      break;
    case 'ArrowRight':
      changeSlide(1);
      break;
    case 'ArrowUp':
      changeProject(-1);
      break;
    case 'ArrowDown':
      changeProject(1);
      break;
  }
});

showSlide();

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox-close');

function setupGlobalImageLightbox() {
    const allImages = document.querySelectorAll('img');

    allImages.forEach(img => {
    
        if (img.closest('.grid-item') || img.closest('.arrow') || img.closest('.menu-toggle')) {
            return; 
        }

        img.addEventListener('click', function(e) {
            e.preventDefault(); // Предотвращаем любое стандартное действие

            lightboxImg.src = this.src;
            
            lightbox.style.display = 'block';
        });
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
}

if (lightbox) {
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
}

// Запускаем настройку после загрузки DOM
document.addEventListener('DOMContentLoaded', setupGlobalImageLightbox);

const projects = {
  1: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_01.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_01.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/01. OBSERVATION, TRANSLATION AND INVENTION.pdf"></iframe>
    </div>
  `,
  2: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_02.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_02.png">
      </div>
      
    </div>

    <div class="pdf-container">
      <iframe src="проекты/02. SKIN AND BONE.pdf"></iframe>
    </div>
  `,
  3: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_03.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_03.png">
      </div>
      
    </div>

    <div class="pdf-container">
      <iframe src="проекты/03. FABRICATION FOR THE LENS.pdf"></iframe>
    </div>
  `,
  4: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_04.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_04.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/04. WHERE WORLDS COLLIDE.pdf"></iframe>
    </div>
  `,
  5: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_05.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_05.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="/Users/valery/Downloads/yep-its-me-2.0/проекты/05. TEXT AND LANGUAGE.pdf"></iframe>
    </div>
  `,
  6: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_06.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_06.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/06. PERCENT.pdf"></iframe>
    </div>
  `,
  7: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_07.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_07.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/07. X.pdf"></iframe>
    </div>
  `,
  8: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_08.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_08.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/08. –>.pdf"></iframe>
    </div>
  `,
  9: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_09.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_09.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/09. (YELLOW CIRCLE).pdf"></iframe>
    </div>
  `,
  10: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_10.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_10.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/10. ONE.pdf"></iframe>
    </div>
  `,
  11: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_11.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_11.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/11. <*))))><.pdf"></iframe>
    </div>
  `,
  12: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_12.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_12.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/12. DEVELOPING INDEPENDENCE.pdf"></iframe>
    </div>
  `,
  13: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_13.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_13.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/13. INDEPENDENT PROJECT.pdf"></iframe>
    </div>
  `,
  14: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_14.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_14.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/14. SECRET PROJECT.pdf"></iframe>
    </div>
  `,
  15: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_15.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_15.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/15. TIME VS. SPACE.pdf"></iframe>
    </div>
  `,
  16: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_16.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_16.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/16. LUCKY NUMBERS.pdf"></iframe>
    </div>
  `,
  17: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_17.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_17.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/17. WORD + IMAGE.pdf"></iframe>
    </div>
  `,
  18: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_18.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_18.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/18. INFRA–ORDINARIE.pdf"></iframe>
    </div>
  `,
  19: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_19.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_19.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/19. TEXT –> PARAGRAPH –>.pdf"></iframe>
    </div>
  `,
  20: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_20.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_20.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/20. RECORD COVER.pdf"></iframe>
    </div>
  `,
  21: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_21.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_21.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/21. FANZINE.pdf"></iframe>
    </div>
  `,
  22: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_22.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_22.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/22. TO TRANSLATE.pdf"></iframe>
    </div>
  `,
  23: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_23.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_23.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/23. KIND OF MAGIC.pdf"></iframe>
    </div>
  `,
  24: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_24.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_24.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/24. BASIC OPERATIONS.pdf"></iframe>
    </div>
  `,
  25: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_25.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_25.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/25. IF. ELSE. THEN.pdf"></iframe>
    </div>
  `,
  26: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_26.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_26.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/26. TALENT SHOW.pdf"></iframe>
    </div>
  `,
  27: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_27.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_27.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/27. THE CRAZY SCIENTISTS LABORATORY.pdf"></iframe>
    </div>
  `,
  28: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_28.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_28.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/28. EXPERIMENTAL NOTATION.pdf"></iframe>
    </div>
  `,
  29: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_29.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_29.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/29. HAPPY ACCIDENTS.pdf"></iframe>
    </div>
  `,
  30: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_30.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_30.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/30. FORBES EDUCATION MAGAZINE.pdf"></iframe>
    </div>
  `,
  31: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_31.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_31.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/31. TYPOPHOTO.pdf"></iframe>
    </div>
  `,
  32: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_32.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_32.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/32. STOP. GO.pdf"></iframe>
    </div>
  `,
  33: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_33.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_33.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/33. MOOD SWINGS.pdf"></iframe>
    </div>
  `,
  34: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_34.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_34.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/34. MAKE A PORTFOLIO.pdf"></iframe>
    </div>
  `,
  35: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_35.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_35.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/35. ITS A MATCH.pdf"></iframe>
    </div>
  `,
  36: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_36.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_36.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/36. VDNX.pdf"></iframe>
    </div>
  `,
  37: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_37.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_37.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/37. TREASURE SEEKERS.pdf"></iframe>
    </div>
  `,
  38: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_38.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_38.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/38. FINE ART GRADUACATALOGUE.pdf"></iframe>
    </div>
  `,
  39: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_39.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_39.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/39. DYNAMIC LETTERFORMS.pdf"></iframe>
    </div>
  `,
  40: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_40.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_40.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/40. INTERNSHIP. ENDY.pdf"></iframe>
    </div>
  `,
  41: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_41.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_41.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/41. WARMING UP.pdf"></iframe>
    </div>
  `,
  42: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_42.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_42.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/42. BREAKING THE FOURTH WALL.pdf"></iframe>
    </div>
  `,
  43: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_43.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_43.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/43. SHOWREEL.pdf"></iframe>
    </div>
  `,
  44: `
    <div class="project-header">

      <div class="project-controls">
          <button class="share-project-btn" data-project-id="1">share</button>
          <button class="close-project-btn">
            <img src="images/close.svg" alt="close">
          </button>
      </div>

    </div>

    <div class="project-images-grid">

      <div class="project-image-item">
        <img src="превью проекта/превью проекта_44.jpg">
      </div>
      <div class="project-image-item">
        <img src="статистика проекта/статистика проекта_44.png">
      </div>

    </div>

    <div class="pdf-container">
      <iframe src="проекты/44. PACKAGING SOUL TRANSFER.pdf"></iframe>
    </div>
  `,
};

function closeProject() {
    if (projectBox) {
        projectBox.innerHTML = '';
        projectBox.style.display = 'none';
        window.history.pushState(null, '', window.location.pathname);
    }
}

function handleShare(event) {
    const projectId = event.currentTarget.dataset.projectId;
    const projectUrl = window.location.href.split('#')[0] + `#project-${projectId}`;
    const projectTitle = `project #${projectId} | valeria voevodina`;

    if (navigator.share) {
        navigator.share({
            title: projectTitle,
            text: 'check out this project!',
            url: projectUrl,
        }).then(() => {
            console.log('published successfully');
        }).catch((error) => {
            console.error('error', error);
        });
    } 
    else {
        navigator.clipboard.writeText(projectUrl).then(() => {
            event.currentTarget.textContent = 'link copied!';
            setTimeout(() => {
                event.currentTarget.textContent = 'share';
            }, 1500);
        }).catch(err => {
            console.error('error', err);
        });
    }
}

/**
 * Основная функция для открытия проекта (Единая точка входа)
 * @param {string} id - ID проекта
 */

function openProject(id) {
    if (projectBox && projects[id]) {
        if (projectBox.dataset.currentId === id && projectBox.style.display !== 'none') {
            projectBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }

        projectBox.dataset.currentId = id;
        window.history.pushState(null, '', `#project-${id}`);

        projectBox.innerHTML = '<div class="loader-placeholder">loading...</div>';
        projectBox.style.display = 'block'; 

        setTimeout(() => {
            projectBox.innerHTML = projects[id];
            
            const closeBtn = projectBox.querySelector('.close-project-btn');
            if (closeBtn) {
                closeBtn.addEventListener('click', closeProject);
            }

            const shareBtn = projectBox.querySelector('.share-project-btn');
            if (shareBtn) {
                shareBtn.addEventListener('click', handleShare);
            }

            projectBox.scrollIntoView({
                behavior: 'smooth', 
                block: 'start'
            });

        }, 10);
    }
}

gridItems.forEach(item => {
  item.addEventListener('click', () => {
    const id = item.dataset.project;
    openProject(id);
  });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectBox && projectBox.style.display !== 'none') {
        closeProject();
    }
});

function handleHashChange() {
    const hash = window.location.hash;
    if (hash.startsWith('#project-')) {
        const projectId = hash.replace('#project-', '');
        if (projects[projectId] && projectBox.dataset.currentId !== projectId) {
            projectBox.dataset.currentId = projectId;
            openProject(projectId);
        }
    } else if (projectBox && projectBox.style.display !== 'none') {
        closeProject();
    }
}

window.addEventListener('load', handleHashChange);
window.addEventListener('hashchange', handleHashChange);
