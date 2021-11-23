// É necessário determinar o vencedor d eum concurso de Stand-Up composto por 3 apresentações por participante.
// O público, no máximo 100 pessoas, votou quem eles acham que era o melhor no final de cada etapa. Por exemplo, Alice sobe, se apresenta e desce; Bob sobe, aparece e desce.
// Após a apresentação, o público vota indicando quem eles acham que ganhou aquela rodada. Após isto, continua a próxima rodada assim como a primeira. E finalmente a terceira.

// A matriz de Alice é:
const alice = [55, 82, 46];

// A matriz de Bob é:
const bob = [24, 81, 46];

function quemGanhou(competidorA, competidorB) {

    let pontosCompetidorA = 0;
    let pontosCompetidorB = 0;

    for (let contador = 0; contador < competidorA.length; contador++) {

        if (competidorA[contador] > competidorB[contador]) {
            pontosCompetidorA++;
        } else if (competidorA[contador] < competidorB[contador]) {
            pontosCompetidorB++;
        } 
    }

    if (pontosCompetidorA > pontosCompetidorB) {
        return "Alice é a vencedora";
    } else if (pontosCompetidorA < pontosCompetidorB) {
        return "Bob é o vencedor";
    } else {
        return "Empate";
    }
}

console.log(quemGanhou(alice, bob));


// Exercício 2
// Crie a função digitalHouse() que receberá 2 números como parâmetros. A função deve imprimir na tela os números de 1 a 100, mas levando em conta os seguintes critérios:
// Se o número for um múltiplo do primeiro parâmetro, exibir a string "Digital" em vez do número.
// Se o número for um múltiplo do segundo parâmetro, exibir a string "House" em vez do número.
// Se o número a ser imprimido for um múltiplo de ambos os parâmetros, exibir a string "Digital House" em vez do número.

function digitalHouse(numero1, numero2) {

    let numeros = [];
    
    for (let contador = 1; contador <= 100; contador++) {
    
        if (contador % numero1 === 0 && contador % numero2 === 0) {
            numeros.push("Digital House");
        } else if (contador % numero1 === 0) {
            numeros.push("Digital");
        } else if (contador % numero2 === 0) {
            numeros.push("House");
        } else {
            numeros.push(contador);
        }
    }

    return numeros;
}

console.log(digitalHouse(2, 3));

// Exercício 3
// Criar uma função somaArray que aceita uma matriz de números e retorna a soma de todos eles.

function somaArray(array) {

    let soma = 0;

    for (let contador = 0; contador < array.length; contador++) {
        soma = soma + array[contador];
    }

    return soma;
}

console.log(somaArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4]));

// Exercício 4
// Criar uma função join() para que ela possa receber uma matriz de strings de qualquer quantidade de elementos, sem usar o método Array.join().

function join(array) {

    let string = "";

    for (let i = 0; i < array.length; i++) {
        string = string + array[i];    
    }

    return string
}

console.log(join(["a", "b", "c", "d", "e"]));