let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function moveSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false
});

// === BANNER ===
sr.reveal('.banner-content img', { origin: 'top', distance: '30px', delay: 100 });
sr.reveal('.banner h2', { delay: 250 });
sr.reveal('.banner p', { delay: 400 });

// === INTRO NAÇÕES ===
sr.reveal('.nacoes-intro h3', { origin: 'top', delay: 100 });
sr.reveal('.nacoes-intro p', { delay: 200 });

// === CARROSSEL ===
sr.reveal('.carrosel', { origin: 'bottom', distance: '60px', delay: 300 });

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