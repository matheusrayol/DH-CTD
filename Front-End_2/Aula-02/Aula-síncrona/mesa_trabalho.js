// Programaremos um pequeno jogo de Pedra, Papel ou Tesoura. Neste jogo o usuário poderá escolher entre uma das três opções e o computador escolherá aleatoriamente uma das três opções, essas opções serão então comparadas e no final será mostrado quem ganhou e quem perdeu a disputa. Para fazer essa atividade é importante lembrar das regras básicas deste jogo:
// 1. Pedra ganha de Tesoura
// 2. Tesoura ganha de Papel
// 3. Papel ganha de Pedra
// 4. Se as opções forem iguais, deve ser mostrado um empate.

// Após termos as regras e o sistema com uma partida do jogo, ficará ao encargo das mesas de trabalho:
// Refatorar o código, utilizando funções e a estrutura de decisão switch;
// Implementar uma regra de que só é declarado como ganhador, quem ganhou 2 rodadas, para auxiliar use uma variável para armazenar o vencedor de cada rodada;
// Empate no jogo, não dá pontuação para nenhum dos jogadores.
// Comentar o código e utilizar de qualquer outro recurso para deixá-lo melhor formatado.

// 0: Pedra
// 1: Papel
// 2: Tesoura

let vitoriasJogador = 0;
let vitoriasComputador = 0;
while (vitoriasJogador < 2 || vitoriasComputador < 2) {
    let valorJogador = parseInt(prompt("Escolha entre (0) Pedra, (1) Papel ou (2) Tesoura"));
    let valorComputador = Math.floor(Math.random() * 3);
    switch (valorJogador) { // Se Usuário lançar Pedra
        case 0:
            if (valorComputador == 1) {
                vitoriasComputador++; // Computador ganha
                alert("Você escolheu Pedra e o computador escolheu Papel, você perdeu!");
            } else if (valorComputador == 2) {
                vitoriasJogador++; // Usuário ganha
                alert("Você escolheu Pedra e o computador escolheu Tesoura, você ganhou!");
            } else { // Empate
                alert("Você escolheu Pedra e o computador escolheu Pedra, deu empate!");
            }
            break;
            // Se Usuário lançar Papel
        case 1:
            if (valorComputador == 0) {
                vitoriasJogador++; // Usuário ganha
                alert("Você escolheu Papel e o computador escolheu Pedra, você ganhou!");
            } else if (valorComputador == 2) {
                vitoriasComputador++; // Computador ganha
                alert("Você escolheu Papel e o computador escolheu Tesoura, você perdeu!");
            } else { // Empate
                alert("Você escolheu Papel e o computador escolheu Papel, deu empate!");
            }
            break;
            // Se Usuário lançar Tesoura
        case 2:
            if (valorComputador == 0) {
                vitoriasComputador++ // Computaddor ganha
                alert("Você escolheu Tesoura e o computador escolheu Pedra, você perdeu!");
            } else if (valorComputador == 1) {
                vitoriasJogador++; // Usuário ganha
                alert("Você escolheu Tesoura e o computador escolheu Papel, você ganhou!");
            } else {
                alert("Você escolheu Tesoura e o computador escolheu Tesoura, deu empate!");
            }
            break;
    }
    console.log(vitoriasJogador, vitoriasComputador);
    if (vitoriasJogador == 2) {
        alert("Você ganhou!");
        break;
    } else if (vitoriasComputador == 2) {
        alert("Você perdeu!");
        break;
    }
}


// Matheus Rayol
// Carlos Lima
// Henrique César
// Marcelo Pacholak
// Wallace Assis
// Pedro Marques