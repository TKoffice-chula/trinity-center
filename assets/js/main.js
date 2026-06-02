// Trinity Center - light interactions
document.addEventListener('click', (e) => {
  if (e.target.closest('.main-nav a')) {
    document.body.classList.remove('nav-open');
  }
});

// Close mobile nav on outside click
document.addEventListener('click', (e) => {
  if (document.body.classList.contains('nav-open') &&
      !e.target.closest('.main-nav') &&
      !e.target.closest('.nav-toggle')) {
    document.body.classList.remove('nav-open');
  }
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.pillar, .program-card, .news-card, .stat, .content-card, .timeline-item').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  io.observe(el);
});
