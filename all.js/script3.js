const tabs = document.querySelectorAll(".tab");
const categories = document.querySelectorAll(".pricing-category");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active classes
    tabs.forEach((t) => t.classList.remove("active"));
    categories.forEach((cat) => cat.classList.remove("active"));
    // Add active to clicked tab
    tab.classList.add("active");
    // Show related section
    const target = tab.getAttribute("data-target");
    document.getElementById(target).classList.add("active");
  });
});