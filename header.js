document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.querySelector('.nav');
  const header = document.querySelector('.header');

  // Toggle mobile nav
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('show');
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
  });

  // Close nav on link click (for mobile)
  document.querySelectorAll('.nav-item, .btn-primary').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
      menuBtn.classList.remove('active');
    });
  });

  // Scroll effect (header shrink + subtle shadow)
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });
});
