/* Crie um arquivo somar.js contendo uma função chamada somar, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a soma dos mesmos.

Crie um arquivo subtrair.js contendo uma função chamada subtrair, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a subtração dos mesmos.

Criar um arquivo multiplicar.js contendo uma função chamada multiplicar, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a multiplicação dos mesmos. Importante::
Contemplar o cenário onde se um dos dois parâmetros for zero, a função retornará zero.

Crie um arquivo dividir.js contendo uma função chamada dividir, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a divisão dos mesmos. Importante:
Considere o cenário em que se um dos dois parâmetros for zero, a função retornará "Não se pode dividir por zero". */

var somar = require('./somar');
var subtrair = require('./subtrair');
var multiplicar = require('./multiplicar');
var dividir = require('./dividir');

console.log(somar(1,1));
console.log(subtrair(2,1));
console.log(multiplicar(2,2));
console.log(dividir(2,2));