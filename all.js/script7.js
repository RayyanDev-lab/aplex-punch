// Fade-in animation on scroll
const fadeItems = document.querySelectorAll('.fade-in-item');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.2 }
);

fadeItems.forEach(el => observer.observe(el));
