// Inicialização do ScrollReveal focado exclusivamente no Header e Footer
const srHeaderFooter = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 800,
    delay: 100,
    reset: false
});

// Verifica se é um dispositivo móvel de forma simples pela largura da tela (< 768px)
const isMobile = window.innerWidth <= 768;

if (!isMobile) {
    // === COMPORTAMENTO PARA PC / DESKTOP (Animações completas atentas) ===
    srHeaderFooter.reveal('header', { origin: 'top', distance: '20px', delay: 100 });
    srHeaderFooter.reveal('header > a', { origin: 'left', delay: 200 });
    srHeaderFooter.reveal('header ul li', { interval: 100, origin: 'top', delay: 300 });

    srHeaderFooter.reveal('footer', { origin: 'bottom', distance: '30px', delay: 200 });
} else {
    // === COMPORTAMENTO PARA MOBILE (Sem animações bloqueantes de opacidade) ===
    // No mobile, removemos o ScrollReveal direto no header e footer para garantir
    // que o menu e o rodapé renderizem instantaneamente sem falhas ou opacidades residuais.
    const headerElement = document.querySelector('header');
    const footerElement = document.querySelector('footer');

    if (headerElement) headerElement.style.visibility = 'visible';
    if (footerElement) footerElement.style.visibility = 'visible';
}