const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false
});

sr.reveal('header', { origin: 'top', distance: '30px', delay: 100, cleanup: true });
sr.reveal('header > a', { origin: 'left', delay: 200 });
sr.reveal('header ul li', { interval: 100, origin: 'top', delay: 300 });

sr.reveal('.hero-sobre .hero-icon', { origin: 'top', distance: '30px', delay: 100 });
sr.reveal('.hero-sobre h2', { delay: 250 });
sr.reveal('.hero-sobre p', { delay: 400 });

sr.reveal('.card-projeto', { origin: 'bottom', distance: '60px', delay: 200 });
sr.reveal('.badge', { interval: 150, origin: 'bottom', delay: 300 });

sr.reveal('.equipe-secao .icon-section', { origin: 'top', delay: 100 });
sr.reveal('.equipe-secao h2', { delay: 200 });
sr.reveal('.subtitle-section', { delay: 300 });
sr.reveal('.card-membro', { interval: 150, origin: 'bottom' });

sr.reveal('.tecnologias-secao .icon-section', { origin: 'top', delay: 100 });
sr.reveal('.tecnologias-secao h2', { delay: 200 });
sr.reveal('.card-tech', { interval: 120, origin: 'bottom', scale: 0.9 });

sr.reveal('.processo-secao h2', { origin: 'top', delay: 100 });
sr.reveal('.subtitle-processo', { delay: 200 });
sr.reveal('.card-processo', { interval: 150, origin: 'bottom' });

sr.reveal('footer', { delay: 100, cleanup: true });

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