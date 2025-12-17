// Smooth scroll effect for CTA button
document.querySelectorAll('.cta').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });
});
