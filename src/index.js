createObserver();
createMediaQuery();

function createObserver() {
  const sectionList = document.querySelectorAll('.section');
  const navList = document.querySelectorAll('.nav-item');

  const io = new IntersectionObserver(observerCallback, {
    rootMargin: '-25% 0% -25% 0%',
  });
  sectionList.forEach((sectionEl) => {
    io.observe(sectionEl);
  });

  function observerCallback(entries) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        const navEl = getNavEl(entry.target.id);
        if (navEl) navEl.classList.add('intersecting');
      } else {
        const navEl = getNavEl(entry.target.id);
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

function createMediaQuery() {
  const bgWave = document.getElementById('bg-wave');

  window.matchMedia('(max-width: 800px)').addEventListener('change', (e) => {
    if (e.matches) {
      bgWave.setAttribute('viewBox', '0 0 350 150');
    } else {
      bgWave.setAttribute('viewBox', '0 0 600 150');
    }
  });
}
