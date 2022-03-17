let nomeUsuario = "Pablo";

// // Função declarativa
// function exibeNomeUsuario (nome, idade) {
//     //Bloco de execução da função
//     return console.log(nome+idade)
// }
// exibeNomeUsuario("Pedro", 26);


// // Função auto-executável
// (function () {
//     console.log(nomeUsuario)
// })();


// // Função expressa ou expressada

// let somar = function efetuarSoma(valorA, valorB) {
//     return valorA+valorB
// }
// console.log(somar(10,20))


// // Funções com callbacks
// // Somar 2 números e exibir o resultado

// function executaCalculo(callback) {
//     let valor1 = 4
//     let valor2 = 6

//     let resultadoSoma = valor1+valor2

//     callback(resultadoSoma);
// }

// function exibeResultadoSoma(resultadoObtido) {
//     console.log(resultadoObtido)
// }

// executaCalculo(exibeResultadoSoma)


// Arrow functions

let soma = function(valorA, valorB) {
    return console.log(valorA+valorB)
}

soma(5,5)

let somaArrowFunction = (valorA, valorB) => {
    return console.log(valorA+valorB);
}

somaArrowFunction(10,10);