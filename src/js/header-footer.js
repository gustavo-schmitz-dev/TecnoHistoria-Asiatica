// Configuração global e animações do ScrollReveal

// 1. Animação do Header (Logo e Título) - Descendo de cima
ScrollReveal().reveal('header > a', {
    origin: 'top',
    distance: '40px',
    duration: 1000,
    delay: 200,
    reset: false
});

// 2. Animação dos Links do Menu - Aparecendo em cascata
ScrollReveal().reveal('header ul li', {
    origin: 'top',
    distance: '30px',
    duration: 800,
    delay: 400,
    interval: 100, // Cria um efeito de sequência entre os itens do menu
    reset: false
});

// 3. Animação da Seção Esquerda do Rodapé
ScrollReveal().reveal('.footer-left', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false
});

// 4. Animação das Redes Sociais no Rodapé
ScrollReveal().reveal('.footer-social', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 400,
    reset: false
});

// 5. Animação dos Direitos Autorais no Rodapé
ScrollReveal().reveal('.footer-right', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 600,
    reset: false
});