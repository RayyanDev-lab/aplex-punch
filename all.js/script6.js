// Smooth counting animation for "15+"
document.addEventListener("DOMContentLoaded", () => {
  const numberEl = document.getElementById("experience-number");
  const boxEl = document.querySelector(".stat-box");
  let started = false;

  function animateCount() {
    if (started) return;
    started = true;

    boxEl.classList.add("animate");

    let count = 0;
    const target = 12;
    const speed = 60; // smaller = faster

    const counter = setInterval(() => {
      count++;
      numberEl.firstChild.textContent = count;
      if (count >= target) {
        clearInterval(counter);
        numberEl.classList.add("animate");
      }
    }, speed);
  }

  function onScroll() {
    const rect = boxEl.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      animateCount();
      window.removeEventListener("scroll", onScroll);
    }
  }

  window.addEventListener("scroll", onScroll);
});
