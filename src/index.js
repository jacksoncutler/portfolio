createIO();
setupWavePattern();

function createIO() {
  const sectionList = document.querySelectorAll('.section.in-nav');
  const navList = document.querySelectorAll('.nav-item');
  const options = { rootMargin: '-25% 0% -25% 0%' };

  const io = new IntersectionObserver(observerCallback, options);
  sectionList.forEach((sectionEl) => {
    io.observe(sectionEl);
  });

  function observerCallback(entries) {
    entries.forEach((entry) => {
      const navEl = getNavEl(entry.target.id);
      if (entry.intersectionRatio > 0) {
        if (navEl) navEl.classList.add('intersecting');
      } else {
        if (navEl) navEl.classList.remove('intersecting');
      }
    });

    function getNavEl(sectionId) {
      return Array.from(navList).find((navEl) => {
        return sectionId === navEl.dataset.sectionId;
      });
    }
  }
}

function setupWavePattern() {
  const bgWave = document.getElementById('bg-wave');
  const mql = window.matchMedia('(max-width: 800px)');
  mql.addEventListener('change', setViewBox);
  setViewBox(mql);

  function setViewBox(mql) {
    if (mql.matches) {
      bgWave.setAttribute('viewBox', '0 0 350 150');
    } else {
      bgWave.setAttribute('viewBox', '0 0 600 150');
    }
  }
}
