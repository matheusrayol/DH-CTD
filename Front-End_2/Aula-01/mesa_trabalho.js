// Desenvolver um script que permita somar um array de números consecutivos, de forma que se some o primeiro número com o segundo e o imprima através do console. 
// Depois, temos que pegar este resultado e somar o terceiro número, e assim por diante, até termos terminado de percorrer todo o array.


// Exemplo 1
function ex1() {
    let arr = [ 1, 2, 4, 8 ];
    let soma = arr[0];

    for (let i = 1; i < arr.length; i++) {
        soma += arr[i];
    }
    console.log(soma)
}
ex1()

// Exemplo 2
function ex2() {
    let arr = [ 1, 2, 4, 8 ];
    let soma = 0;

    for (let i of arr) {
        soma += i
    }
    console.log(soma)
}
ex2()

// Exemplo 3
function ex3() {
    let arr = [ 1, 2, 4, 8 ];
    
    const valorInicial = 0;
    const somaComInicial = arr.reduce (
        (valorAnterior, valorAtual) => valorAnterior + valorAtual, valorInicial
    );
    console.log(somaComInicial)
}
ex3()
