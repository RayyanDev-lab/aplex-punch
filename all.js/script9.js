// Smooth fade-out loader after page load
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.classList.add('fade-out');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 1000);
});
