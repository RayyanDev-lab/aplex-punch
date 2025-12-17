// Simple scroll reveal animation
window.addEventListener("scroll", () => {
  const boxes = document.querySelectorAll(".xray-text-box");
  const trigger = window.innerHeight * 0.85;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < trigger) {
      box.style.opacity = "1";
    }
  });
});
