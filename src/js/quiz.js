// =========================================
// BANCO DE PERGUNTAS (10 Perguntas com Explicação)
// =========================================
const questions = [
    {
        question: "Qual invenção chinesa do século IX, originalmente criada em busca de um 'elixir da imortalidade', acabou revolucionando as táticas de guerra?",
        options: ["Bússola", "Pólvora", "Fogo Grego", "Besta"],
        answer: 1,
        explanation: "A pólvora foi descoberta por acaso por alquimistas chineses que tentavam criar uma poção para a vida eterna, misturando salitre, enxofre e carvão."
    },
    {
        question: "O primeiro livro impresso com tipos móveis de metal (o 'Jikji') foi criado no século XIII em qual país, séculos antes de Gutenberg na Europa?",
        options: ["Japão", "China", "Coreia", "Vietnã"],
        answer: 2,
        explanation: "Os coreanos inventaram a impressão com tipos móveis de metal em 1234, muito antes da famosa invenção da prensa de Gutenberg na Alemanha."
    },
    {
        question: "O conceito do número Zero, base de toda a matemática e programação de computadores modernos, teve sua origem em qual civilização?",
        options: ["Índia", "China", "Pérsia", "Babilônia"],
        answer: 0,
        explanation: "O zero como número (e não apenas como um espaço vazio) e o sistema de numeração decimal moderno foram desenvolvidos por brilhantes matemáticos na Índia antiga."
    },
    {
        question: "Criado no Japão em 1994 pela empresa Denso Wave, qual tecnologia foi desenvolvida originalmente para rastrear peças de carros nas fábricas?",
        options: ["Código de Barras", "NFC (Aproximação)", "Bluetooth", "QR Code"],
        answer: 3,
        explanation: "O QR Code (Quick Response) foi criado porque os códigos de barras tradicionais não armazenavam informações suficientes para a complexa montagem dos carros."
    },
    {
        question: "Durante a Dinastia Song (século XI), a China introduziu uma inovação econômica pioneira que o Ocidente demoraria séculos para adotar. Qual foi?",
        options: ["Cartão de crédito", "Moedas de ouro", "Papel-moeda (Cédulas)", "Cheques bancários"],
        answer: 2,
        explanation: "O papel-moeda foi criado na China para substituir as pesadas moedas de cobre que os mercadores precisavam carregar em carroças durante longas viagens comerciais."
    },
    {
        question: "Inaugurado em 1964 a tempo para as Olimpíadas de Tóquio, o 'Shinkansen' marcou o início de qual tecnologia de transporte asiática?",
        options: ["Metrô subterrâneo", "Trens-bala", "Levitação magnética (Maglev)", "Carros autônomos"],
        answer: 1,
        explanation: "O Shinkansen foi a primeira rede comercial de trens de alta velocidade (trens-bala) do mundo, mudando para sempre o padrão global do transporte público."
    },
    {
        question: "Atualmente, qual ilha asiática é a sede da TSMC e responsável pela produção de mais de 60% dos semicondutores (chips) avançados do mundo?",
        options: ["Taiwan", "Coreia do Sul", "Singapura", "Hong Kong"],
        answer: 0,
        explanation: "Taiwan é o grande polo mundial na fabricação de chips de última geração, peças essenciais que fazem funcionar smartphones, PCs e inteligências artificiais."
    },
    {
        question: "Lançado em 1979 pela gigante japonesa Sony, qual aparelho transformou o consumo de música no mundo ao permitir a portabilidade?",
        options: ["Discman", "iPod", "Rádio Transistor", "Walkman"],
        answer: 3,
        explanation: "O Sony Walkman revolucionou a cultura pop nos anos 80. Foi o primeiro dispositivo a tornar a audição de música uma experiência privada, com fones de ouvido e fitas cassete."
    },
    {
        question: "Inventado por Zhang Heng em 132 d.C. na China, o primeiro sismoscópio do mundo usava esferas de bronze caindo na boca de sapos para:",
        options: ["Medir a temperatura", "Detectar a direção de terremotos", "Prever a chuva", "Contar as horas do dia"],
        answer: 1,
        explanation: "O sismoscópio não previa terremotos, mas quando a terra tremia ao longe, uma esfera caía na boca do sapo indicando exatamente a direção do desastre, permitindo o envio rápido de ajuda."
    },
    {
        question: "Criados por Shigetaka Kurita em 1999 no Japão, o que são os pequenos símbolos visuais de 12x12 pixels que mudaram a comunicação digital moderna?",
        options: ["GIFs animadas", "Emojis", "Avatares 3D", "Figurinhas (Stickers)"],
        answer: 1,
        explanation: "A palavra 'Emoji' vem do japonês ('e' = imagem, 'moji' = caractere). Eles foram criados para facilitar a comunicação nos primeiros telefones celulares conectados à internet."
    }
];

// =========================================
// VARIÁVEIS DE ESTADO
// =========================================
let currentQuestionIndex = 0;
let score = 0;

// Seleção de elementos no DOM
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const btnNext = document.getElementById('btn-next');
const btnStart = document.getElementById('btn-start');
const btnRestart = document.getElementById('btn-restart');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const progressFill = document.getElementById('progress-fill');
const explanationBox = document.getElementById('explanation-box');
const explanationText = document.getElementById('explanation-text');
const finalScore = document.getElementById('final-score');

// =========================================
// INICIAR QUIZ
// =========================================
btnStart.addEventListener('click', () => {
    startScreen.classList.remove('active');
    startScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    questionScreen.classList.add('active');
    loadQuestion();
});

// =========================================
// CARREGAR PERGUNTA
// =========================================
function loadQuestion() {
    // Esconde a explicação e o botão próximo no início de cada pergunta
    explanationBox.classList.add('hidden');
    btnNext.classList.add('hidden');
    
    const currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;
    optionsContainer.innerHTML = ''; // Limpa botões da pergunta anterior
    
    // Atualiza o contador e a barra de progresso
    questionCounter.innerText = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
    scoreDisplay.innerText = `Pontuação: ${score}`;
    progressFill.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

    const letters = ['A', 'B', 'C', 'D'];

    // Gera os botões das alternativas
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.innerHTML = `
            <div class="option-letter">${letters[index]}</div>
            <span class="option-text">${option}</span>
        `;
        button.addEventListener('click', () => checkAnswer(index, button));
        optionsContainer.appendChild(button);
    });
}

// =========================================
// VERIFICAR RESPOSTA E EXIBIR EXPLICAÇÃO
// =========================================
function checkAnswer(selectedIndex, selectedButton) {
    const currentQuestion = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    
    // Bloqueia cliques adicionais
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === currentQuestion.answer) {
        selectedButton.classList.add('correct');
        score++;
        scoreDisplay.innerText = `Pontuação: ${score}`;
    } else {
        selectedButton.classList.add('wrong');
        // Destaca a resposta correta em verde
        buttons[currentQuestion.answer].classList.add('correct');
        
        // Exibe a explicação correspondente à pergunta errada
        explanationText.innerText = currentQuestion.explanation;
        explanationBox.classList.remove('hidden');
    }

    // Exibe o botão para a próxima questão
    btnNext.classList.remove('hidden');
}

// =========================================
// AVANÇAR PERGUNTA
// =========================================
btnNext.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// =========================================
// TELA FINAL
// =========================================
function showResults() {
    questionScreen.classList.remove('active');
    questionScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultScreen.classList.add('active');
    finalScore.innerText = score;
}

// =========================================
// REINICIAR
// =========================================
btnRestart.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultScreen.classList.remove('active');
    resultScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    questionScreen.classList.add('active');
    loadQuestion();
});
