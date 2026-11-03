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

sr.reveal('.banner img', { origin: 'top', distance: '40px', delay: 100 });
sr.reveal('.banner h2', { delay: 250 });
sr.reveal('.banner p', { delay: 400 });

sr.reveal('.invencoes h2', { origin: 'top', delay: 100 });
sr.reveal('.invencoes h3', { delay: 200 });
sr.reveal('.invencoes ul li', { 
    interval: 200, 
    origin: 'bottom',
    distance: '60px'
});

sr.reveal('.curiosidades h2', { origin: 'top', delay: 100 });
sr.reveal('.curiosidades h3', { delay: 200 });
sr.reveal('.curiosidades ul li', { 
    interval: 150, 
    origin: 'bottom',
    scale: 0.95
});

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