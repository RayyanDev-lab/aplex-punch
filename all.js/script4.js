// experience-section
// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// Function to handle scroll animations
function handleScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');

            // If it's a counter element, animate the number
            if (element.querySelector('.counter')) {
                animateCounter(element.querySelector('.counter'));
            }
        }
    });
}
// Function to animate counters
function animateCounter(counter) {
    // Check if this counter has already been animated
    if (counter.getAttribute('data-animated') === 'true') return;

    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 3000; // Animation duration in milliseconds
    const step = Math.ceil(target / (duration / 16)); // 60fps
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
            counter.setAttribute('data-animated', 'true');
        }
        counter.textContent = current.toLocaleString();
    }, 16);
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimations();

    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimations);

    // Trigger once on load in case elements are already in viewport
    setTimeout(handleScrollAnimations, 100);
});

// Handle responsive behavior on window resize
window.addEventListener('resize', handleScrollAnimations);