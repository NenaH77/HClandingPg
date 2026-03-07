// PARTICLE SYSTEM REBUILD
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('particle-container');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('span');
        const size = Math.random() * 4 + 2 + 'px';
        
        particle.style.width = size;
        particle.style.height = size;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = Math.random() * 10 + 10 + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        
        container.appendChild(particle);
    }
});

// SMOOTH SCROLLING FOR NAV
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// HAMBURGER TOGGLE
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the menu
    navMenu.classList.toggle('active');
});

// Optional: Close menu when a link is clicked (great for UX)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// SMOOTH SCROLLING FOR SERVICES
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Offset for the sticky navbar
                behavior: 'smooth'
            });
        }
    });
});
