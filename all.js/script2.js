// ===== Scroll to Top Button =====
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// ===== Simple Glow Animation on Load =====
window.addEventListener("load", () => {
  document.querySelector(".footer-section").style.opacity = "1";
});
