// === spa.js ===

// Book Now alert on click
document.addEventListener("DOMContentLoaded", () => {
  const bookButtons = document.querySelectorAll(".book-btn");

  bookButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Thank you for choosing us! Our team will contact you shortly to confirm your appointment.");
    });
  });
});

// Optional: Scroll animation for each service (for smooth appearance)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll(".spa-service").forEach((card) => {
  card.classList.add("hidden");
  observer.observe(card);
});
