// Função para divisão de dois números
// Grupo 8: Matheus Rayol Ferreira, Maria Bonifácio, Moisés Andrade, Steffany Costa, André Luiz da Silva Almeida


// Crie um arquivo dividir.js contendo uma função chamada dividir, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a divisão dos mesmos. Importante:
// Considere o cenário em que se um dos dois parâmetros for zero, a função retornará "Não se pode dividir por zero". */

function dividir(valorA, valorB) {
    if (valorA == 0 || valorB == 0) {
        return "Não se pode dividir por 0";
    } else {
        return parseFloat(valorA) / parseFloat(valorB);
    }
}