const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "No início ficou com medo do que essa tecnologia pode fazer."
                    "Acho assustador pensar na velocidade da qual a tecnologia esta avançando."
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Quis saber como usar IA no seu dia a dia."
                    "pensou que essa nova tecnologia pode ajudar em varias tarefas do seu dia a dia"
                ]
            }           
            
        ]
    },
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: 
                    [ "No início ficou com medo do que essa tecnologia pode fazer."
                ]
    },
    {
                texto: "Isso é maravilhoso!",
                afirmacao: 
                    [ "Quis saber como usar IA no seu dia a dia."
                ]
            }           
            
        ]
    },
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: 
                    [ "No início ficou com medo do que essa tecnologia pode fazer."
                ]
    },
    {
                texto: "Isso é maravilhoso!",
                afirmacao: 
                    [ "Quis saber como usar IA no seu dia a dia."
                ]
            }           
            
        ]
    },
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: 
                    [ "No início ficou com medo do que essa tecnologia pode fazer."
                ]
    },
    {
                texto: "Isso é maravilhoso!",
                afirmacao: 
                    [ "Quis saber como usar IA no seu dia a dia."
                ]
            }           
            
        ]
    },
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: 
                    [ "No início ficou com medo do que essa tecnologia pode fazer."
                ]
    },
    {
                texto: "Isso é maravilhoso!",
                afirmacao: 
                    [ "Quis saber como usar IA no seu dia a dia."
                ]
            }           
            
        ]
    },
];

let atual = 0;
let perguntaFinal;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual perguntas [atual];
    caixaPerguntas.textContent perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas document.createElement("button"); 
        botaoAlternativas.textContent alternativa.texto; 
        botaoAlternativas.addEventListener("click", () => respostaselecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function resposta Selecionada (opcaoSelecionada) { 
    const afirmacoes opcaoSelecionada.afirmacao; 
    historiaFinal + afirmacoes + "";
    atual++; 
    mostraPergunta();
}

function mostraResultado() { 
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();