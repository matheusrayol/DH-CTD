// Função declarada
function darOi() {
    console.log('Olá, tudo bem?');
}
darOi();
darOi();
darOi();

// Função declarada com parâmetros
function darOiComParametros(nome) {
    console.log('Olá, ' + nome + '!');
}
darOiComParametros('João');

// Função expressa
let somar = function() {
    console.log(1 + 1);
};
somar();

// Função expressa com parâmetros
let somarComParametros = function(numero1, numero2) {
    console.log(numero1 + numero2);
};
somarComParametros(1, 2);
somarComParametros();

// Função declarada com retorno
function retornarOi() {
    return 'Olá, tudo bem?'; // O comando return não imprime resultados no console.
}

// Escopo de Bloco
function multiplicar(numero1, numero2) {
    let resultado = numero1 * numero2;
    // Esta variável existe apenas neste escopo, por estar dentro da função
    return resultado;
}

// Escopo Global
let bemVindo = 'Olá, tudo bem?';
function ola() {
    return bemVindo;
}
console.log(bemVindo);

// Exercício adicional - Definindo e invocando uma função
function cumprimentar(nome) {
    return 'Olá, ' + nome + '! Seja bem vindo!';
}
console.log(cumprimentar('Matheus'));