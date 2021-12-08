// Exercício Métodos de Arrays

// Exercício 01
// Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

let pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

let impares = pares.map(function(numero) {
  return numero + 1;
});

console.log(impares);

// Exercício 02
// Crie um novo array com o dobro de cada número.


let dobro = pares.map(function(numero) {
  return numero * 2;
});

console.log(dobro);

// Exercício 03
// Crie um array de nomes, que possua dois índices com o nome Maria.
// Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let nomes = ["Pedro", "João", "Maria", "Alberto", "Maria"]

let marias = nomes.filter(function(nome) {
    return nome === "Maria";
});

console.log(marias);

// Buscar por letra

let buscarPorLetra = nomes.filter(function(nome) {
    return nome.includes("a");
});

console.log(buscarPorLetra);