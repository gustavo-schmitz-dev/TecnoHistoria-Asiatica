// Base de dados das Perguntas (Baseado nas páginas anteriores)
const quizData = [
    {
        question: "Qual país inventou o papel, a bússola e a pólvora?",
        options: ["Japão", "China", "Índia", "Coreia"],
        answer: 1 // Índice da resposta correta (China)
    },
    {
        question: "Qual civilização desenvolveu o Sistema Numérico e o conceito de Zero?",
        options: ["China", "Japão", "Coreia", "Índia"],
        answer: 3 // Índia
    },
    {
        question: "A famosa 'Rota da Seda' servia principalmente para conectar o Oriente ao...",
        options: ["Ocidente (Europa)", "Extremo Sul da África", "Norte da América", "Oceano Ártico"],
        answer: 0 // Ocidente
    },
    {
        question: "O K-pop, eletrônicos e a primeira impressão móvel são contribuições de qual país?",
        options: ["Japão", "Coreia", "China", "Tailândia"],
        answer: 1 // Coreia
    },
    {
        question: "Em que ano (aproximadamente) ocorreu a Era de Ouro da Filosofia, com figuras como Buda e Confúcio?",
        options: ["3000 a.C.", "105 d.C.", "500 a.C.", "1440 d.C."],
        answer: 2 // 500 a.C.
    },
    {
        question: "Tóquio é a capital de qual destes países asiáticos?",
        options: ["China", "Coreia", "Índia", "Japão"],
        answer: 3 // Japão
    },
    {
        question: "Segundo os dados da plataforma, qual é a população aproximada da Ásia?",
        options: ["1.4 bilhões", "4.7 bilhões", "8.1 bilhões", "125 milhões"],
        answer: 1 // 4.7 bilhões
    },
    {
        question: "Qual destas NÃO é uma contribuição histórica da China?",
        options: ["Yoga", "Impressão", "Pólvora", "Papel"],
        answer: 0 // Yoga (É da Índia)
    },
    {
        question: "O Xadrez, um dos jogos de tabuleiro mais famosos do mundo, teve origem em qual civilização?",
        options: ["Japão", "Rússia", "Índia", "China"],
        answer: 2 // Índia
    },
    {
        question: "Aproximadamente quantos países compõem o continente Asiático?",
        options: ["49 países", "30 países", "25 países", "62 países"],
        answer: 0 // 49 países
    }
];

// Variáveis de Estado
let currentQuestion = 0;
let score = 0;

// Seleção de Elementos do DOM
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const progressFill = document.getElementById('progress-fill');

const btnStart = document.getElementById('btn-start');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');
const finalScore = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');

// Eventos de Clique
btnStart.addEventListener('click', startQuiz);
btnNext.addEventListener('click', nextQuestion);
btnRestart.addEventListener('click', restartQuiz);

// Função para Iniciar o Quiz
function startQuiz() {
    startScreen.classList.remove('active');
    questionScreen.classList.add('active');
    questionScreen.classList.remove('hidden');
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

// Função para Carregar a Pergunta Atual
function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    
    // Atualiza Textos
    questionText.innerText = currentQuizData.question;
    questionCounter.innerText = `Pergunta ${currentQuestion + 1} de ${quizData.length}`;
    scoreDisplay.innerText = `Pontuação: ${score}`;
    
    // Atualiza Barra de Progresso
    const progressPercentage = ((currentQuestion + 1) / quizData.length) * 100;
    progressFill.style.width = `${progressPercentage}%`;

    // Limpa opções anteriores
    optionsContainer.innerHTML = '';
    
    // Esconde o botão Próxima
    btnNext.classList.add('hidden');

    // Letras para as alternativas
    const letters = ['A', 'B', 'C', 'D'];

    // Gera os botões de resposta
    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        
        button.innerHTML = `
            <div class="option-letter">${letters[index]}</div>
            <div class="option-text">${option}</div>
        `;
        
        // Adiciona evento de clique passando o índice da opção
        button.addEventListener('click', () => selectAnswer(index, button));
        optionsContainer.appendChild(button);
    });
}

// Função para Validar a Resposta
function selectAnswer(selectedIndex, selectedButton) {
    const correctIndex = quizData[currentQuestion].answer;
    
    // Bloqueia todos os botões para não clicar duas vezes
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = 'not-allowed';
    });

    // Verifica se acertou ou errou
    if (selectedIndex === correctIndex) {
        // Acertou: Adiciona classe de animação verde
        selectedButton.classList.add('correct');
        score++;
        scoreDisplay.innerText = `Pontuação: ${score}`;
    } else {
        // Errou: Adiciona classe de animação vermelha (tremida)
        selectedButton.classList.add('wrong');
        
        // Destaca qual era a resposta certa em verde
        allButtons[correctIndex].classList.add('correct');
    }

    // Mostra o botão para ir para a próxima pergunta
    btnNext.classList.remove('hidden');
}

// Função para ir para a próxima ou finalizar
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Função para mostrar a tela final
function showResults() {
    questionScreen.classList.remove('active');
    questionScreen.classList.add('hidden');
    resultScreen.classList.add('active');
    resultScreen.classList.remove('hidden');

    finalScore.innerText = score;

    // Mensagem baseada na pontuação
    if (score === 10) {
        resultMessage.innerText = "Incrível! Você é um verdadeiro mestre da História Asiática!";
    } else if (score >= 7) {
        resultMessage.innerText = "Muito bom! Seus conhecimentos estão bem afiados.";
    } else if (score >= 4) {
        resultMessage.innerText = "Foi um bom começo, mas ainda há muito o que explorar!";
    } else {
        resultMessage.innerText = "Parece que você precisa revisar os mapas e livros históricos.";
    }
}

// Função para reiniciar o jogo
function restartQuiz() {
    resultScreen.classList.remove('active');
    resultScreen.classList.add('hidden');
    startQuiz();
}
