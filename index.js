const perguntas = [
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Compara valores sem levar em conta o tipo de dado",
            "Compara valores e tipos de dados",
            "Realiza uma atribuição",
        ],
        correta: 1,
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Uma linguagem de programação",
            "Um modelo de objetos para representar documentos HTML",
            "Um método de ordenação de arrays",
        ],
        correta: 1,
    },
    {
        pergunta: "Como você declara uma variável em JavaScript?",
        respostas: ["let myVar = 10;", "const myVar = 'Hello';", "both"],
        correta: 2,
    },
    {
        pergunta: "O que é o evento 'click' em JavaScript?",
        respostas: [
            "Uma função built-in",
            "Uma ação do usuário, como clicar em um elemento HTML",
            "Uma biblioteca JavaScript popular",
        ],
        correta: 1,
    },
    {
        pergunta: "O que é o AJAX em JavaScript?",
        respostas: [
            "Uma linguagem de estilos para HTML",
            "Uma técnica para realizar requisições assíncronas",
            "Uma biblioteca de gráficos",
        ],
        correta: 1,
    },
    {
        pergunta:
            "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
        respostas: [
            "'let' é usado para variáveis mutáveis, enquanto 'const' é usado para variáveis imutáveis",
            "'let' é usado para variáveis locais, enquanto 'const' é usado para variáveis globais",
            "'let' e 'const' são intercambiáveis",
        ],
        correta: 0,
    },
    {
        pergunta: "O que é uma função de callback em JavaScript?",
        respostas: [
            "Uma função que é executada automaticamente",
            "Uma função passada como argumento para outra função e executada posteriormente",
            "Uma função utilizada apenas para fins de debugging",
        ],
        correta: 1,
    },
    {
        pergunta: "O que é o JSON em JavaScript?",
        respostas: [
            "Uma linguagem de programação",
            "Um formato de dados para intercâmbio de informações",
            "Uma biblioteca para manipulação de DOM",
        ],
        correta: 1,
    },
    {
        pergunta: "Como se chama a estrutura condicional em JavaScript?",
        respostas: ["Loop", "Switch", "If-else"],
        correta: 2,
    },
    {
        pergunta: "O que é o método 'map()' em JavaScript?",
        respostas: [
            "Um método para criar mapas interativos",
            "Um método para percorrer e transformar elementos de um array",
            "Um método para ordenar um array",
        ],
        correta: 1,
    },
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

// laço de repetição ou loop
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector("h3").textContent = item.textContent = item.pergunta;

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector("dl dt").cloneNode(true);
        dt.querySelector("span").textContent = resposta;

        quizItem.querySelector("dl").appendChild(dt);
    }

    quizItem.querySelector("dl dt").remove();
    quiz.appendChild(quizItem);
}
