const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false
});

// === HERO CONHECENDO ===
sr.reveal('.hero-conhecendo img', { origin: 'top', distance: '40px', delay: 100 });
sr.reveal('.hero-conhecendo h2', { delay: 250 });
sr.reveal('.hero-conhecendo p', { delay: 400 });

// === SUPERLATIVOS ===
sr.reveal('.superlativos-secao h2', { origin: 'top', delay: 100 });
sr.reveal('.superlativos-secao .subtitulo', { delay: 200 });
sr.reveal('.card-stat', { interval: 150, origin: 'bottom', scale: 0.95 });

// === CIVILIZAÇÕES ===
sr.reveal('.civilizacoes-secao h2', { origin: 'top', delay: 100 });
sr.reveal('.civilizacoes-secao .subtitulo', { delay: 200 });
sr.reveal('.card-civilizacao', { interval: 200, origin: 'bottom' });

// === LINHA DO TEMPO ===
sr.reveal('.linha-tempo-secao h2', { origin: 'top', delay: 100 });
sr.reveal('.linha-tempo-secao .subtitulo', { delay: 200 });
