// Script principal - Calculadora JS
// Grupo 8: Matheus Rayol Ferreira, Maria Bonifácio, Moisés Andrade, Steffany Costa, André Luiz da Silva Almeida


// Criar um arquivo calculadora.js no qual serão necessários os quatro arquivos feitos anteriormente.
// Importa as funções criadas para operações matemáticas
var somar = require('./somar');
var subtrair = require('./subtrair');
var multiplicar = require('./multiplicar');
var dividir = require('./dividir');

// Executar a função que permite adicionar e a função que permite subtrair, passando como argumentos quaisquer dois números. Mostrar os resultados no console.
console.log(somar(10,20));
console.log(subtrair(30,20));

// Executar a função que permite a multiplicação, passando como argumentos quaisquer dois números. Mostrar o resultado no console.
console.log(multiplicar(10,20));

// Executar a função que permite multiplicar, passando agora como um dos dois argumentos, o número zero. Mostrar o resultado no console.
console.log(multiplicar(0,20));

// Executar a função que permite a divisão, passando como argumentos quaisquer dois números. Mostrar o resultado no console.
console.log(dividir(40,20));

// Executar a função que permite dividir, passando agora como um dos dois argumentos, o número zero. Mostrar o resultado no console.
console.log(dividir(40,0));