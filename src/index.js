const bgWave = document.getElementById('bg-wave');

window.matchMedia('(max-width: 675px)').addEventListener('change', (e) => {
  console.log('hello');
  if (e.matches) {
    bgWave.setAttribute('viewBox', '0 0 350 150');
  } else {
    bgWave.setAttribute('viewBox', '0 0 600 150');
  }
});
