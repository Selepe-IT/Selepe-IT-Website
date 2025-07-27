const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("theme-toggle");

function toggleNav() {
  navLinks.classList.toggle("open");
  document.body.classList.toggle("menu-open");
}

// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
const userPref = localStorage.getItem('theme');

if (userPref === 'dark') {
  document.body.classList.add('dark');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    toggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

// Fade-in on scroll
const fadeEls = document.querySelectorAll(".fade-in, .fade-in-text");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el))

// Lightbox functionality
  function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  }

  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }



