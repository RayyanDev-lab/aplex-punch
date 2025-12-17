// FILTER
const rwxPills = document.querySelectorAll('.rwx-pill');
const rwxCards = document.querySelectorAll('.rwx-card');

rwxPills.forEach(pill => {
  pill.addEventListener('click', () => {
    rwxPills.forEach(p => p.removeAttribute('data-active'));
    pill.setAttribute('data-active', 'true');
    const filter = pill.dataset.filter;
    rwxCards.forEach(card => {
      card.style.display = (card.dataset.type === filter) ? 'block' : 'none';
    });
  });
});

// Default filter on load
document.querySelector('[data-filter="digitizing"]').click();

// LIGHTBOX
const rwxLightbox = document.getElementById('rwx-lightbox');
const rwxImg = document.getElementById('rwx-lightbox-img');
const rwxTitle = document.getElementById('rwx-lightbox-title');
const rwxDesc = document.getElementById('rwx-lightbox-desc');
const rwxClose = document.querySelector('.rwx-close-btn');

rwxCards.forEach(card => {
  const img = card.querySelector('img');
  card.addEventListener('click', () => {
    rwxImg.src = img.src;
    rwxTitle.textContent = card.querySelector('.rwx-title').textContent;
    rwxDesc.textContent = card.querySelector('.rwx-sub').textContent;
    rwxLightbox.classList.add('show');
  });
});

rwxClose.addEventListener('click', () => rwxLightbox.classList.remove('show'));
rwxLightbox.addEventListener('click', e => {
  if (e.target === rwxLightbox) rwxLightbox.classList.remove('show');
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') rwxLightbox.classList.remove('show');
});
