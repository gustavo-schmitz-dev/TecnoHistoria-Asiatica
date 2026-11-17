const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false
});

sr.reveal('.tagline', { delay: 100, origin: 'top' });
sr.reveal('.hero-home h1', { delay: 200 });
sr.reveal('.hero-subtitle', { delay: 300 });
sr.reveal('.botoes-hero', { delay: 400 });

sr.reveal('.explore-secao h2', { origin: 'top' });
sr.reveal('.explore-desc', { delay: 300 });
sr.reveal('.card-explore', { interval: 200, origin: 'bottom' });

sr.reveal('.cta-secao', { duration: 1200 });
