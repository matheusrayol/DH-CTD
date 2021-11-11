// O que esses códigos retornam?
// Neste exercício, você terá que pensar sobre o que esses códigos retornam sem testá-lo no console.

// 1. let numbers = [22, 33, 54, 66, 72];
// console.log(numbers[numbers.length]);
console.log("O resultado é undefined porque a posição 5 do array não existe.");

// 2. let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
// console.log(grupoDeAmigos[1][0])
console.log("O resultado é Spiderman, correspondente ao segundo array, e ao primeiro elemento do segundo array.");

// 3. let str = "una string qualquer"
// let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123", "false", 54, true, str] ]
// console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])
console.log("O resultado é \"una string qualquer\", correspondente ao último elemento (5) do terceiro array (2).");

// Array invertido
// Neste exercício, você terá que criar uma função que retorne um array com seus elementos invertidos, sem modificá-lo. Então, você deve fazer uma função que o modifique e inverta a ordem de seus elementos.

// 1. Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).

function imprimirInverso(itensArray) {
    let array = itensArray;
    console.log("Exercício 1");
    console.log("Ordem normal do array: " + array);
    console.log(array[4]);
    console.log(array[3]);
    console.log(array[2]);
    console.log(array[1]);
    console.log(array[0]);
    // Solução alternativa? 
    // console.log(array.reverse());
}

imprimirInverso(["Batata", "Tomate", "Cenoura", "Alface", "Cebola"]);

// 2. Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.
function inverter(itensArray) {
    let array = itensArray;
    console.log("Exercício 2");
    console.log("Array em ordem reversa: " + array.reverse());
}

inverter(["Batata", "Tomate", "Cenoura", "Alface", "Cebola"]);

// somarArray
// Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.

function somarArray(itensArray) {
    let array = itensArray;
    console.log("Exercício 3");
    console.log("Soma dos elementos do array: " + array.reduce(function (a, b) { return a + b; }));
}

somarArray([1, 2, 3, 4, 5]);

// Simulação Array.join()
// Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join();

function join(itensArray) {
    let array = itensArray;
    console.log("Exercício 4");
    console.log("Array como string: " + array.join(""));
}

join(["M", "a", "t", "h", "e", "u", "s"]);

// Coleções de Filmes
// O Tech Leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
// 1. Criar a estrutura apropriada para armazenar os seguintes filmes e séries: "star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela".
// 2. Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
// Dica: revise o que faz o método de strings .toUpperCase().
// 3. Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação: "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos.


    