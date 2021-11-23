// Ciclos e Repetições

// 1. Começamos a partir de nossa variedade de filmes, que tínhamos o seguinte:

let filmes = ["Star Wars", "Matrix", "Mr. Robot", "O Preço do Amanhã", "A Vida É Bela"];

// E nos pediram para passar todos os elementos para letras maiúsculas, o que na época tinhamos feito de forma "manual":

function converterEmMaiusculas(array) {
    array[0] = array[0].toUpperCase();
    array[1] = array[1].toUpperCase();
    array[2] = array[2].toUpperCase();
    array[3] = array[3].toUpperCase();
    array[4] = array[4].toUpperCase();
    return array;
}

// Vamos movê-lo para uma maneira mais automática usando loops.

function converterEmMaiusculasNew(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
    }
    return array;
}

// Verificamos o resultado:
console.log(converterEmMaiusculasNew(filmes));

// 2. Agora precisamos modificar a função de passagem de elemento, que nos permite adicionar o conteúdo de nossa matriz de animações à matriz de filmes.

let animacoes = ["Toy Story", "Finding Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

function passagemDeElementos(array1, array2) {
    
    array1.push(array2.pop().toUpperCase());
    array1.push(array2.pop().toUpperCase());
    array1.push(array2.pop().toUpperCase());
    array1.push(array2.pop().toUpperCase());
    array2.push(ultimoElemento);
    return array1;    
}

function novaPassagemDeElementos(array1, array2) {
    let ultimoElemento = array2.pop();
    for (let i = 0; i < array2.length; i++) {
        array1.push(array2[i].toUpperCase());
    }
    array2.push(ultimoElemento);
    return array1;
}

console.log(novaPassagemDeElementos(filmes, animacoes));