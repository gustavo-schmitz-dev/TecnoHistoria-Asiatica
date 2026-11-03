// Inicializa a biblioteca ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false
});

// === CABEÇALHO (HEADER) ===
sr.reveal('header', { origin: 'top', distance: '30px', delay: 100, cleanup: true });
sr.reveal('header > a', { origin: 'left', delay: 200 });
sr.reveal('header ul li', { interval: 100, origin: 'top', delay: 300 });

// === SEÇÃO HERO ===
sr.reveal('.tagline', { delay: 100, origin: 'top' });
sr.reveal('.hero-home h1', { delay: 200 });
sr.reveal('.hero-subtitle', { delay: 300 });
sr.reveal('.botoes-hero', { delay: 400 });

// === SEÇÃO EXPLORE ===
sr.reveal('.explore-secao h2', { origin: 'top' });
sr.reveal('.explore-desc', { delay: 300 });
sr.reveal('.card-explore', { interval: 200, origin: 'bottom' });

// === SEÇÃO CTA & RODAPÉ ===
sr.reveal('.cta-secao', { duration: 1200 });
sr.reveal('footer', { delay: 100 });

// === CORREÇÃO AUTOMÁTICA DO MENU ATUAL ===
document.addEventListener("DOMContentLoaded", () => {
    const caminhoAtual = window.location.pathname.split("/").pop() || "index.html";
    const linksMenu = document.querySelectorAll("header ul li a");

    linksMenu.forEach(link => {
        const hrefLink = link.getAttribute("href");
        if (hrefLink === caminhoAtual || (caminhoAtual === "" && hrefLink.includes("index.html"))) {
            link.classList.add("atual");
        }
    });
});