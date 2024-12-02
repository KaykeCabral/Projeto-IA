const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "No reino de Eryndor, onde a escuridão cresce e os demônios prosperam, um lendário caçador de demônios, Aric, é chamado para proteger o povo. Sua jornada o leva a enfrentar perigos inimagináveis, segredos sombrios e escolhas difíceis. Aric encontra um vilarejo devastado por demônios. Ele deve:",
        alternativas: [
            {
                texto: "Investigar as ruínas em busca de sobreviventes",
                afirmacao: "afirmacao"
            },
            {
                texto: "Seguir as pegadas deixadas pelos demônios",
                afirmacao: "afirmacao"
            }
        ]
},
{
        enunciado: "Dentro da caverna, Aric encontra uma encruzilhada. Ele decide:",
        alternativas: [
            {
                texto:  "Tomar o caminho iluminado por cristais",
                afirmacao: "afirmacao"
            },
            {
                texto:  "Seguir o caminho coberto por teias de aranha",
                afirmacao: "afirmacao"
            }
        ]
        
    },
{
        enunciado: "Com novas pistas, Aric chega a uma fortaleza demoníaca. Ele opta por:",
        alternativas: [
            {
                texto: "Invadir furtivamente para coletar informações",
                afirmacao: "afirmacao"
            },
            {
                texto: "Confrontar os demônios diretamente",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Ao enfrentar o líder demoníaco, Aric percebe que ele possui um amuleto. Ele decide:",
        alternativas: [
            {
                texto: "Focar em destruir o amuleto",
                afirmacao: "afirmacao"
            },
            {
                texto: "Concentrar seus ataques no líder",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Com a vitória próxima, Aric encontra um grimório antigo que contém um feitiço proibido. Ele:",
        alternativas: [
            {
                texto: "Usa o feitiço para selar os demônios para sempre",
                afirmacao: "afirmacao"
            },
            {
                texto: "Destrói o grimório, impedindo que caia em mãos erradas",
                afirmacao: "afirmacao"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();