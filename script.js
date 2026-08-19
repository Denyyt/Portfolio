/*==================== DOM ELEMENTS ====================*/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

/*==================== TOGGLE NAVBAR ====================*/
if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
}

/*==================== SCROLL SECTIONS & STICKY HEADER ====================*/
window.addEventListener('scroll', () => {
    const top = window.scrollY;

    // Sticky Navbar
    if (header) {
        header.classList.toggle('sticky', top > 100);
    }

    // Scroll Active Link (Hanya dijalankan jika elemen section ada di halaman)
    if (sections.length > 0) {
        sections.forEach(sec => {
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const href = link.getAttribute('href');
                    if (id && href && href.includes(id)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
});

/*==================== CLOSE NAVBAR WHEN LINK CLICKED ====================*/
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuIcon && navbar) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    });
});

/*==================== SCROLL REVEAL ====================*/
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        distance: '80px',
        duration: 1500,
        delay: 150
    });

    // MUNCUL DARI ATAS (TOP)
    sr.reveal('.home-content, .heading', { origin: 'top' });

    // MUNCUL DARI BAWAH (BOTTOM)
    sr.reveal('.home-img, .skills-container, .portfolio-container, .contact-content', { origin: 'bottom' });
    sr.reveal('.skills-detail-container', { origin: 'bottom' });
    
    // WhatsApp & Email muncul BERSAMAAN dari bawah
    sr.reveal('.contact-cards', { origin: 'bottom' });

    // Media sosial muncul setelah kartu kontak
    sr.reveal('.social-connect', { 
        origin: 'bottom', 
        delay: 300 
    });

    // MUNCUL DARI KIRI & KANAN
    sr.reveal('.home-content h1, .about-img', { origin: 'left' });
    sr.reveal('.home-content p, .about-content', { origin: 'right' });
}

/*==================== TYPED JS ====================*/
const typedTarget = document.querySelector('.multiple-text');
if (typedTarget && typeof Typed !== 'undefined') {
    new Typed('.multiple-text', {
        strings: ['UI/UX Designer', 'Game Designer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}

/*==================== PORTFOLIO FILTER ====================*/
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

if (filterBtns.length > 0 && portfolioCards.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                const isMatch = filterValue === 'all' || filterValue === cardCategory;

                card.classList.toggle('hide', !isMatch);
            });
        });
    });
}