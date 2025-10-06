// Array de frases
const frases = [
    "A persistência é o caminho do êxito.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Acredite em si mesmo e todo o resto se encaixará.",
    "A determinação de hoje é o sucesso de amanhã.",
    "Nunca é tarde para ser o que você poderia ter sido."
];

// Seleciona os elementos do DOM
const fraseElement = document.getElementById('frase');
const botaoTrocaFrase = document.getElementById('trocafrase');

// Função para trocar a frase com animação
function trocarFrase() {
    // Adiciona a classe de fade (fade out)
    fraseElement.classList.add('fade');

    // Aguarda o tempo da animação para trocar o texto
    setTimeout(() => {
        // Gera um índice aleatório baseado no tamanho do array
        const indiceAleatorio = Math.floor(Math.random() * frases.length);

        // Atualiza o texto da frase
        fraseElement.textContent = frases[indiceAleatorio];

        // Remove a classe de fade (fade in)
        fraseElement.classList.remove('fade');
    }, 500); // Tempo deve ser igual ao definido no CSS (0.5s)
}

// Adiciona o evento de clique ao botão
botaoTrocaFrase.addEventListener('click', trocarFrase);