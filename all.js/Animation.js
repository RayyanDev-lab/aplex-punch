document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => {
          entry.target.classList.add("is-visible");
        });
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const selectorMap = [
    // Standard Elements
    "section h1", "section h2", "section h3", "section p",
    ".btn", ".btn-primary", "a.cta",
    ".service-card", ".project-card", ".pricing-card", ".choose-card", ".xp-stat-card",
    ".form-row",
    ".choose-image img", ".about-img img", ".hero-img img",
    ".software-section",
    // Hero Elements
    ".qpl-slide-l33",
    ".qpl-slide-r33",
    ".qpl-logo-img11",
    // Pricing Categories
    ".pricing-category.active .pricing-card"
  ];

  const targets = document.querySelectorAll(selectorMap.join(","));

  targets.forEach((el) => {
    if (el.closest(".no-anim") || el.dataset.animInit) return;
    el.dataset.animInit = "true";

    // Hero elements have their own classes
    if (el.classList.contains("qpl-slide-l33") || el.classList.contains("qpl-slide-r33")) {
      observer.observe(el);
      return;
    }

    let animClass = "anim-fade-up";

    // Directional heurstics
    const parent = el.parentElement;
    if (el.closest(".left") || (parent && parent.classList.contains("left"))) {
      animClass = "anim-from-left";
    } else if (el.closest(".right") || (parent && parent.classList.contains("right"))) {
      animClass = "anim-from-right";
    }

    // Cards always fade up
    if (el.className.includes("card")) {
      animClass = "anim-fade-up";
    }

    el.classList.add(animClass);
    observer.observe(el);
  });

  // Smooth Scrolling for Anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
