document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Mobile Nav / Hamburger ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const opened = navLinks.classList.toggle('active');
    hamburger.classList.toggle('is-active', opened);
    hamburger.setAttribute('aria-expanded', opened);
  });

  // Close mobile nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
    })
  );

  /* ---------- Sticky Navbar Shadow on Scroll ---------- */
  const navbar = document.querySelector('.navbar');
  const toggleScrolled = () =>
    navbar.classList.toggle('scrolled', window.scrollY > 80);
  toggleScrolled(); // run at start
  window.addEventListener('scroll', toggleScrolled);

  /* ---------- Intersection Observer (fade-in) ---------- */
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // Animate only once
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.section, .card, .feature, .spa-card').forEach(el =>
    observer.observe(el)
  );

  // Inject scroll animation styles
  const style = document.createElement('style');
  style.textContent = `
    .section, .card, .feature, .spa-card {
      opacity: 0;
      transform: translateY(30px);
      transition: 0.6s ease;
    }
    .section.in-view, .card.in-view, .feature.in-view, .spa-card.in-view {
      opacity: 1;
      transform: none;
    }
  `;
  document.head.appendChild(style);

  /* ---------- CTA Buttons ---------- */
  // Book Room Buttons
  document.querySelectorAll('.book-btn').forEach(btn =>
    btn.addEventListener('click', e => {
      const id = e.currentTarget.closest('[data-room-id]')?.dataset.roomId;
      if (id) window.location.href = `rooms.html?room=${id}`;
    })
  );

  // Order Food Buttons
  document.querySelectorAll('.order-btn').forEach(btn =>
    btn.addEventListener('click', e => {
      const id = e.currentTarget.closest('[data-food-id]')?.dataset.foodId;
      if (id) window.location.href = `food.html?item=${id}`;
    })
  );

  // Book Spa Buttons
  document.querySelectorAll('.spa-card .book-btn').forEach(btn =>
    btn.addEventListener('click', e => {
      const id = e.currentTarget.closest('.spa-card')?.dataset.roomId; // Using roomId as per HTML
      if (id) window.location.href = `spa.html?treatment=${id}`;
    })
  );

  /* ---------- Smooth Scroll Fallback ---------- */
  if (!('scrollBehavior' in document.documentElement.style)) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor =>
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({ top: target.offsetTop, left: 0, behavior: 'smooth' });
        }
      })
    );
  }
});
