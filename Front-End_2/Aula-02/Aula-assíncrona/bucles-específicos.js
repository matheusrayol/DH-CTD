// For in (Para objetos)
// Exemplo 1
let pessoa = {
    nome: "Brendan Eich",
    idade: 58,
    profissao: "Programador"
}

for (let caracteristica in pessoa) {
    console.log(pessoa[caracteristica])
}

// Exemplo 2
let carro = {
    nome: "fox",
    ano: 2011
}

for (let propriedade in carro) {
    console.log(carro[propriedade]);
}



// For of (Para arrays)
// Exemplo 1
let series = [ "Friends", "Game of Thrones", "Breaking Bad" ];

for (let umaSerie of series) {
    console.log(umaSerie);
}

