// === Custom Cursor Animation ===
const cursor = document.querySelector('.custom-cursor');
const trail = document.querySelector('.cursor-trail');

document.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e;
  cursor.style.transform = `translate(${x}px, ${y}px)`;
  trail.style.transform = `translate(${x}px, ${y}px)`;
});
