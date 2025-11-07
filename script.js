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