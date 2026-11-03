// Inicialização do ScrollReveal para a página Comercio
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false
});

// === CABEÇALHO ===
sr.reveal('header', { origin: 'top', distance: '30px', delay: 100, cleanup: true });
sr.reveal('header > a', { origin: 'left', delay: 200 });
sr.reveal('header ul li', { interval: 100, origin: 'top', delay: 300 });

// === HERO COMÉRCIO ===
sr.reveal('.hero-comercio img', { origin: 'top', distance: '40px', delay: 100 });
sr.reveal('.hero-comercio h2', { delay: 250 });
sr.reveal('.hero-comercio p', { delay: 400 });

// === ROTA DA SEDA ===
sr.reveal('.card-rota', { origin: 'bottom', distance: '60px', delay: 200 });
sr.reveal('.box-stat', { interval: 150, origin: 'bottom', delay: 300 });

// === PRODUTOS (GRID) ===
sr.reveal('.produtos-secao h2', { origin: 'top', delay: 100 });
sr.reveal('.produtos-secao > p', { delay: 200 });
sr.reveal('.card-produto', { interval: 150, origin: 'bottom' });

// === GRÁFICO ===
sr.reveal('.grafico-secao h2', { origin: 'top', delay: 100 });
sr.reveal('.grafico-secao p', { delay: 200 });
sr.reveal('.card-grafico', { scale: 0.9, delay: 300 });

// === IMPACTO CULTURAL ===
sr.reveal('.impacto-secao h2', { origin: 'top', delay: 100 });
sr.reveal('.impacto-secao > p', { delay: 200 });
sr.reveal('.box-impacto', { interval: 150, origin: 'bottom' });

// === RODAPÉ ===
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