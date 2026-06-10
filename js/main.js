/* ============================================
   Yunshan Peng - Personal Site JS
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    // ---------- Navbar Scroll Effect ----------
    const navbar = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section[id]');

    function handleScroll() {
        // Navbar background
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active nav link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // ---------- Smooth Scroll for Nav Links ----------
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }
            // Close mobile menu
            const navCollapse = document.getElementById('navbarNav');
            if (navCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
                if (bsCollapse) bsCollapse.hide();
            }
        });
    });

    // ---------- Scroll Reveal Animation ----------
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in class to elements
    const animElements = document.querySelectorAll(
        '.news-item, .research-card, .publication-item, .timeline-item'
    );
    animElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${index * 0.08}s`;
        fadeObserver.observe(el);
    });

    // ---------- Type Effect for Hero ----------
    const nameTitle = document.querySelector('.name-title');
    if (nameTitle) {
        nameTitle.style.opacity = '0';
        nameTitle.style.transform = 'translateY(20px)';
        setTimeout(() => {
            nameTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            nameTitle.style.opacity = '1';
            nameTitle.style.transform = 'translateY(0)';
        }, 200);
    }

    const aboutElements = document.querySelectorAll('.current-position, .education, .research-intro, .keyword-tags, .social-links');
    aboutElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(15px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 400 + index * 150);
    });

    // ---------- Hide Scholar link if no URL ----------
    const scholarLink = document.getElementById('scholar-link');
    if (scholarLink && scholarLink.getAttribute('href') === '#') {
        scholarLink.style.display = 'none';
    }

});
