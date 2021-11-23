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

let filmes = ["Star Wars", "Matrix", "Mr. Robot", "O Preço do Amanhã", "A Vida É Bela"];

// 2. Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
// Dica: revise o que faz o método de strings .toUpperCase().

function converterEmMaiusculas(array) {
    array[0] = array[0].toUpperCase();
    array[1] = array[1].toUpperCase();
    array[2] = array[2].toUpperCase();
    array[3] = array[3].toUpperCase();
    array[4] = array[4].toUpperCase();
    return array;
}

console.log("Array em maíusculas:");
console.log(converterEmMaiusculas(filmes));

// 3. Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação: "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"

let animacoes = ["Toy Story", "Finding Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

// Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos.

// function adicionarEmArray(array1, array2) {
//     array1.push(array2.pop().toUpperCase());
//     array1.push(array2.pop().toUpperCase());
//     array1.push(array2.pop().toUpperCase());
//     array1.push(array2.pop().toUpperCase());
//     array1.push(array2.pop().toUpperCase());
//     return array1;
// }

// console.log("Unindo dois Arrays para exibição única: ");
// console.log(adicionarEmArray(filmes, animacoes));

// Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.
// PS: por precaução, salve o elemento que você vai deletar em uma variável.

function novoAdicionarEmArray(array1, array2) {
    let ultimoElemento = array2.pop();
    array1.push(array2.pop().toUpperCase());
    array1.push(array2.pop().toUpperCase());
    array1.push(array2.pop().toUpperCase());
    array1.push(array2.pop().toUpperCase());
    array2.push(ultimoElemento);
    return array1;    
}

console.log("Unindo dois Arrays para exibição única: ");
console.log(novoAdicionarEmArray(filmes, animacoes));

// 5. Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.
function compararNotas(array1, array2) {
    if (array1[0] == array2[0] && array1[1] == array2[1] && array1[2] == array2[2] && array1[3] == array2[3] && array1[4] == array2[4] && array1[5] == array2[5] && array1[6] == array2[6] && array1[7] == array2[7] && array1[8] == array2[8]) {
        console.log("As notas são iguais!");
    } else {
        console.log("As notas são diferentes!");
    }
}

console.log(compararNotas(asiaScores, euroScores));