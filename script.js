// Professional interactions: responsive nav, smooth scroll, intersection animations, contact demo
document.addEventListener('DOMContentLoaded', () => {
  // set copyright years
  ['year','year2','year3','year4','year5'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = new Date().getFullYear();
  });

  // mobile nav toggle
  const toggle = document.querySelectorAll('.nav-toggle');
  toggle.forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = document.querySelector('.nav-list');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if(nav) nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      if(nav) nav.style.flexDirection = 'column';
      if(nav) nav.style.background = 'rgba(255,255,255,0.98)';
      if(nav) nav.style.padding = '12px';
      if(nav) nav.style.borderRadius = '12px';
      if(nav) nav.style.position = 'absolute';
      if(nav) nav.style.top = '64px';
      if(nav) nav.style.right = '20px';
      if(nav) nav.style.boxShadow = '0 12px 40px rgba(2,6,23,0.08)';
    });
  });

  // smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if(href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });

  // IntersectionObserver for in-view animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.animate').forEach(el => observer.observe(el));

  // contact form demo
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Send message';
        btn.disabled = false;
        alert('Thanks — demo received. I can wire this to a real endpoint if you want.');
        form.reset();
      }, 900);
    });
  }
});