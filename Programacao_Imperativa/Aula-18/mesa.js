/* Você deve criar uma função chamada loopDePares que receba um número como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console. Caso o (número da iteração somado com o número passado pelo parâmetro) seja par (% == 0), aparecerá no console: "O número x é par" */

// function loopDePares(numero) {
//     for (let i = 0; i<= 100; i++) {
//         x = i + numero;
//         if (x % 2 == 0) {
//             console.log(i + ": o número " + x + " é par");
//         } else {
//             console.log(i + ": o numero " + x + " não é par");
//         }
//     }
// }

// loopDePares(2)


// Exercício 2
// Lidando com dois arrays
// Você deve criar uma função chamada arrayHandler que receba dois arrays de igual tamanho como
// parâmetros e exiba no console: "Eu sou {elemento do array 1} e eu sou {elemento do array 2}".
// Exemplo:
// arrayHandler([1,2,3], [“o”,”l”,”á”]) deve mostrar: 
// Eu sou 1 e eu sou o
// Eu sou 2 e eu sou l
// Eu sou 3 e eu sou á

// function criaArray(tamanho) {
//     let array = [];
//     for (let i = 0; i < tamanho; i++) {
//         array.push(i+1);
//     }
//     return array;
// }

// console.log(criaArray(100));



function criaArray(tamanho) {
    let array = [];
    for (let i = 0; i <= tamanho; i++) {
        array.push(i);
    }
    return array;
}

let entrada = criaArray(100);

let impares = entrada.filter(numero => numero % 2 != 0);

console.log(impares);

// let impares = entrada.forEach(
//     function(i, numero) {
//         x = i + numero;
//         if (x % 2 == 0) {
//             console.log(i + ": o número " + x + " é par");
//         } else {
//             console.log(i + ": o numero " + x + " não é par");
//         }

//     })

// impares(15);



// let arrayHandler = (array1, array2) => {
//     if (array1.length == array2.length) {
//         for (let i = 0; i < array1.length; i++) {
//             console.log(`Eu sou ${array1[i]} e eu sou ${array2[i]}`);
//         }
//     } else {


