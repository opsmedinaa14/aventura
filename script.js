const historia = [
    {
        texto: "Você está em uma floresta misteriosa. Você vê dois caminhos: um à esquerda e outro à direita.",
        opcoes: [
            { texto: "Ir à esquerda", proxima: 1 },
            { texto: "Ir à direita", proxima: 2 }
        ]
    },
    {
        texto: "Você encontra uma cabana. Deseja entrar?",
        opcoes: [
            { texto: "Entrar na cabana", proxima: 3 },
            { texto: "Voltar", proxima: 0 }
        ]
    },
    {
        texto: "Você encontra um rio. Deseja atravessá-lo?",
        opcoes: [
            { texto: "Atravessar o rio", proxima: 4 },
            { texto: "Voltar", proxima: 0 }
        ]
    },
    {
        texto: "Dentro da cabana, você encontra um tesouro! Você ganhou!",
        opcoes: [
            { texto: "Recomeçar", proxima: 0 }
        ]
    },
    {
        texto: "Você foi arrastado pela correnteza e não conseguiu atravessar. Fim do jogo!",
        opcoes: [
            { texto: "Recomeçar", proxima: 0 }
        ]
    }
];

let parteAtual = 0;

function carregarNarrativa() {
    const p = historia[parteAtual];
    document.getElementById("narrativa").innerText = p.texto;

    const opcoesContainer = document.getElementById("opcoes");
    opcoesContainer.innerHTML = "";

    p.opcoes.forEach((opcao) => {
        const button = document.createElement("button");
        button.innerText = opcao.texto;
        button.onclick = () => {
            parteAtual = opcao.proxima;
            carregarNarrativa();
        };
        opcoesContainer.appendChild(button);
    });
}

carregarNarrativa();

