// Checkpoint I - Programação Imperativa
// Aluno: Matheus Rayol Ferreira
// Turma: 05 NT
// Linguagem: JavaScript
// Projeto: Microondas

function microondas(comida, tempo) {
    // Reserva as variáveis que receberão o nome do alimento e o tempo padrão de preparo
    let selecao = "";
    let tempoDefault = "";

    // Define o valor das variáveis para execução dos cálculos para a saída correta no console
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

    // Realiza os cálculos verificando o tempo padrão e as condições
    if (selecao != "" && tempoDefault != "") {
        // 1. Se o tempo for menor que o tempoDefault, exibe a mensagem "Tempo insuficiente."  
        if (tempo < tempoDefault) {
            console.log(selecao + ": Tempo insuficiente.");
        } 
        // 2. Se o tempo for maior ou igual ao tempoDefault, mas menor que o dobro, exibe "Prato pronto, bom apetite!"
        else if (tempo >= tempoDefault && tempo < tempoDefault * 2 - 1) {
            console.log(selecao + ": Prato pronto, bom apetite!");
        } 
        // 3. Se o tempo for maior ou igual o dobro do tempoDefault e menor do que o triplo do tempoDefault, exibe "O prato queimou."
        else if (tempo >= tempoDefault * 2 && tempo < tempoDefault * 3 - 1) {
            console.log(selecao + ": O prato queimou.");
        } 
        // 4. Se nenhuma das condições anteriores for atendida, consideramos que o tempo foi maior que o triplo do tempoDefault, exibindo "Kabum"
        else {
            console.log(selecao + ": Kabum!");
        }
    }
}

// Testes de execução
// Em cada bloco de teste abaixo, considera-se:
// 1. Menor tempo padrão de preparo ( < tempoDefault)
// 2. Tempo de preparo considerado normal ( >= tempoDefault e < tempoDefault * 2 - 1 )
// 3. Tempo de preparo acima do normal, queimando o prato ( >= tempoDefault * 2 e < tempoDefault * 3 - 1 )
// 4. Tempo de preparo muito acima do normal, explodindo ( >= tempoDefault * 3, mas na condicional 'else')
// * Exceção ao último bloco, que exibe apenas um resultado de Opção inválida para evitar repetição

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