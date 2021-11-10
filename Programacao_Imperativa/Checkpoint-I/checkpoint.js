// Checkpoint I - Programação Imperativa
// Aluno: Matheus Rayol Ferreira
// Turma: 05 NT
// Linguagem: JavaScript
// Projeto: Microondas

function microondas(comida, tempo) {
    // Reserva as variáveis que receberão o nome do alimento e o tempo padrão de preparo
    let selecao = "";
    let tempoDefault = "";

    // Define o valor das variáveis para execução dos cálculos e a saída para o console.
    switch (comida) {
        case 1:
            selecao = "Pipoca";
            tempoDefault = 10;
            break;
            case 2:
                selecao = "Macarrão";
                tempoDefault = 8;
                break;
                case 3:
                    selecao = "Carne";
                    tempoDefault = 15;
                    break;
                    case 4:
                        selecao = "Feijão";
                        tempoDefault = 12;
                        break;
                        case 5:
                            selecao = "Brigadeiro";
                            tempoDefault = 8;
                            break;
                            default:
                                console.log("Opção inválida: " + comida);
                                break;
    }

    // Realiza os cálculos verificando o tempo padrão e as condições:
    // 1. Se o tempo for menor que o padrão, exibe a mensagem "Tempo insuficiente."  
    // 2. Se o tempo for maior que o padrão, mas menor que o dobro, exibe "Prato pronto, bom apetite!";
    // 3. Se o tempo for maior ou igual o dobro e menor do que o triplo, exibe "O prato queimou."
    // 4. Se o tempo for maior ou igual ao triplo, exibe "Kabum!"
    if (selecao != "" && tempoDefault != "") {
        if (tempo < tempoDefault) {
            console.log(selecao + ": Tempo insuficiente.");
        } else if (tempo >= tempoDefault && tempo < tempoDefault * 2 - 1) {
            console.log(selecao + ": Prato pronto, bom apetite!");
        } else if (tempo >= tempoDefault * 2 && tempo < tempoDefault * 3 - 1) {
            console.log(selecao + ": O prato queimou.");
        } else if (tempo >= tempoDefault * 3) {
            console.log(selecao + ": Kabum!");
        }
    }
}

// Testes de execução
// 1 - Pipoca, tempo padrão: 10 segundos
microondas(1, 5);
microondas(1, 12);
microondas(1, 24);
microondas(1, 38);

// 2 - Macarrão, tempo padrão: 8 segundos
microondas(2, 7);
microondas(2, 10);
microondas(2, 17);
microondas(2, 25);

// 3 - Carne, tempo padrão: 15 segundos
microondas(3, 11);
microondas(3, 17);
microondas(3, 35);
microondas(3, 46);

// 4 - Feijão, tempo padrão: 12 segundos
microondas(4, 11);
microondas(4, 13);
microondas(4, 26);
microondas(4, 38);

// 5 - Brigadeiro, tempo padrão: 8 segundos
microondas(5, 7);
microondas(5, 10);
microondas(5, 17);
microondas(5, 25);

// Opção inexistente (6)
microondas(6, 15);