/* ==================== 1. NAVIGATION & STICKY HEADER ==================== */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Mobile menu toggle
if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
}

// On scroll: sticky header + highlight the nav link of the visible section
window.addEventListener('scroll', () => {
    const top = window.scrollY;

    if (header) {
        header.classList.toggle('sticky', top > 100);
    }

    if (sections.length > 0) {
        sections.forEach(sec => {
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const href = link.getAttribute('href');
                    if (id && href?.includes(id)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
});

// Close the mobile menu after a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon?.classList.remove('bx-x');
        navbar?.classList.remove('active');
    });
});


/* ==================== 2. SCROLLREVEAL ANIMATIONS ==================== */
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        distance: '80px',
        duration: 1500,
        delay: 150
    });

    // Slide in from the top
    sr.reveal('.home-content, .heading', { origin: 'top' });

    // Slide in from the bottom
    sr.reveal(
        '.home-img, .skills-container, .portfolio-container, .contact-content, .skills-detail-container, .contact-cards',
        { origin: 'bottom' }
    );
    sr.reveal('.social-connect', { origin: 'bottom', delay: 300 });

    // Slide in from the left / right
    sr.reveal('.home-content h1, .about-img', { origin: 'left' });
    sr.reveal('.home-content p, .about-content', { origin: 'right' });
}


/* ==================== 3. TYPED.JS TEXT ANIMATION ==================== */
// Home page only: rotating role text
if (document.querySelector('.multiple-text') && typeof Typed !== 'undefined') {
    new Typed('.multiple-text', {
        strings: ['UI/UX Designer', 'Game Designer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}


/* ==================== 4. PORTFOLIO FILTER ==================== */
// Portfolio page only: show cards whose data-category matches the button's data-filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

if (filterBtns.length && portfolioCards.length) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const val = btn.getAttribute('data-filter');

            portfolioCards.forEach(card => {
                const cat = card.getAttribute('data-category');
                card.classList.toggle('hide', val !== 'all' && val !== cat);
            });
        });
    });
}


/* ==================== 5. UTILITY: COPY EMAIL ==================== */
// Contact page only: called by the "Copy Email" button (onclick="copyEmail()")
function copyEmail() {
    navigator.clipboard.writeText("dyudha287060@gmail.com");

    const btn = document.querySelector('.copy-btn');
    if (!btn) return;

    btn.innerHTML = "<i class='bx bx-check'></i> Copied!";
    btn.style.color = "#2ecc71";
    btn.style.borderColor = "#2ecc71";

    setTimeout(() => {
        btn.innerHTML = "<i class='bx bx-copy'></i> Copy Email";
        btn.style.color = "var(--text-color)";
        btn.style.borderColor = "rgba(255, 255, 255, 0.2)";
    }, 2000);
}
