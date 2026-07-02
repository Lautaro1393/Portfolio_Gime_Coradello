(function () {
    'use strict';

    // ---------- Theme toggle ----------
    const root = document.documentElement;
    const themeBtn = document.querySelector('.theme-toggle');
    const setPressed = () => {
        if (themeBtn) themeBtn.setAttribute('aria-pressed', root.getAttribute('data-theme') === 'dark' ? 'true' : 'false');
    };
    setPressed();
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            try { localStorage.setItem('gimena-theme', next); } catch (e) { }
            setPressed();
            const meta = document.querySelector('meta[name="theme-color"]');
            if (meta) meta.setAttribute('content', next === 'dark' ? '#0a0a0a' : '#f9f9f9');
        });
    }
    if (window.matchMedia) {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        mq.addEventListener && mq.addEventListener('change', (e) => {
            if (localStorage.getItem('gimena-theme')) return;
            // Dark es el default, no respondemos al cambio del sistema
        });
    }

    // ---------- Mobile menu ----------
    const burger = document.querySelector('.nav__burger');
    const mobile = document.getElementById('mobile-menu');
    if (burger && mobile) {
        const closeMenu = () => {
            mobile.hidden = true;
            burger.setAttribute('aria-expanded', 'false');
            burger.setAttribute('aria-label', 'Abrir menú');
        };
        const openMenu = () => {
            mobile.hidden = false;
            burger.setAttribute('aria-expanded', 'true');
            burger.setAttribute('aria-label', 'Cerrar menú');
        };
        burger.addEventListener('click', () => {
            if (mobile.hidden) openMenu(); else closeMenu();
        });
        mobile.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') closeMenu();
        });
    }

    // ---------- Smooth scroll offset ----------
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', (e) => {
            const id = a.getAttribute('href');
            if (id.length < 2) return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            const navEl = document.querySelector('.nav');
            const navHeight = navEl ? navEl.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight + 1;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    // ---------- Reveal on scroll ----------
    const revealSelector = '.session, .about__title, .about__columns, .composite__inner, .contact__inner, .collab__inner, .credits__inner, .portfolio__head';
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const vh0 = window.innerHeight || document.documentElement.clientHeight;
    document.querySelectorAll(revealSelector).forEach((el) => {
        const r = el.getBoundingClientRect();
        if (!reduce && r.top > vh0) el.classList.add('reveal');
    });
    if ('IntersectionObserver' in window && !reduce) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
        document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
        setTimeout(() => document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible')), 2000);
    }

    // ---------- Lightbox ----------
    const lb = document.getElementById('lightbox');
    const lbImg = lb ? lb.querySelector('.lightbox__img') : null;
    const lbClose = lb ? lb.querySelector('.lightbox__close') : null;
    const lbPrev = lb ? lb.querySelector('.lightbox__nav--prev') : null;
    const lbNext = lb ? lb.querySelector('.lightbox__nav--next') : null;
    const items = Array.from(document.querySelectorAll('[data-lightbox]'));
    let idx = 0;

    const open = (i) => {
        if (!lb || !lbImg) return;
        idx = i;
        const src = items[i].getAttribute('href');
        const alt = items[i].querySelector('img')?.alt || '';
        lbImg.src = src;
        lbImg.alt = alt;
        lb.hidden = false;
        document.body.style.overflow = 'hidden';
    };
    const close = () => {
        if (!lb) return;
        lb.hidden = true;
        lbImg.src = '';
        document.body.style.overflow = '';
    };
    const step = (n) => open((idx + n + items.length) % items.length);

    items.forEach((el, i) => el.addEventListener('click', (e) => { e.preventDefault(); open(i); }));
    if (lbClose) lbClose.addEventListener('click', close);
    if (lbPrev) lbPrev.addEventListener('click', () => step(-1));
    if (lbNext) lbNext.addEventListener('click', () => step(1));
    if (lb) {
        lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
    }
    document.addEventListener('keydown', (e) => {
        if (lb && !lb.hidden) {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowLeft') step(-1);
            if (e.key === 'ArrowRight') step(1);
        }
    });
})();
