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
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmacao"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
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