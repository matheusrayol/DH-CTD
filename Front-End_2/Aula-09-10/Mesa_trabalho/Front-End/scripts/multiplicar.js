// Função para multiplicação de dois números
// Grupo 8: Matheus Rayol Ferreira, Maria Bonifácio, Moisés Andrade, Steffany Costa, André Luiz da Silva Almeida


// Criar um arquivo multiplicar.js contendo uma função chamada multiplicar, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a multiplicação dos mesmos. 
// Importante:
// Contemplar o cenário onde se um dos dois parâmetros for zero, a função retornará zero.

function multiplicar(valorA, valorB) {
    if (valorA == 0 || valorB == 0) {
        return 0;
    } else {
        return parseFloat(valorA) * parseFloat(valorB);
    }
}