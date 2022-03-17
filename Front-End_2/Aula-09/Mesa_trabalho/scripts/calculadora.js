// Script principal - Calculadora JS
// Grupo 8: Matheus Rayol Ferreira, Maria Bonifácio, Moisés Andrade, Steffany Costa, André Luiz da Silva Almeida


// Criar um arquivo calculadora.js no qual serão necessários os quatro arquivos feitos anteriormente.
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


// Captura de botões no HTML
const botaoLimpar = document.getElementById('button-clear');
const botaoSomar = document.getElementById('button-adicao');
const botaoSubtrair = document.getElementById('button-subtracao');
const botaoMultiplicar = document.getElementById('button-multiplicacao');
const botaoDividir = document.getElementById('button-divisao');
const botaoNove = document.getElementById('button-nove');
const botaoOito = document.getElementById('button-oito');
const botaoSete = document.getElementById('button-sete');
const botaoSeis = document.getElementById('button-seis');
const botaoCinco = document.getElementById('button-cinco');
const botaoQuatro = document.getElementById('button-quatro');
const botaoTres = document.getElementById('button-tres');
const botaoDois = document.getElementById('button-dois');
const botaoUm = document.getElementById('button-um');
const botaoZero = document.getElementById('button-zero');
const botaoPonto = document.getElementById('button-ponto');
const botaoIgual = document.getElementById('button-resultado');

let tipoOperacao
let expressaoUm
let expressaoDois

// Captura de campo de texto no HTML
let telaCalculadora = document.getElementById('tela-calculadora-1');
let telaCalculadoraAlt = document.getElementById('tela-calculadora-2');

// Listener para os botões da calculadora
botaoZero.addEventListener('click', function() {
    telaCalculadora.value += 0;
});
botaoUm.addEventListener('click', function() {
    telaCalculadora.value += 1;
});
botaoDois.addEventListener('click', function() {
    telaCalculadora.value += 2;
});
botaoTres.addEventListener('click', function() {
    telaCalculadora.value += 3;
});
botaoQuatro.addEventListener('click', function() {
    telaCalculadora.value += 4;
});
botaoCinco.addEventListener('click', function() {
    telaCalculadora.value += 5;
});
botaoSeis.addEventListener('click', function() {
    telaCalculadora.value += 6;
});
botaoSete.addEventListener('click', function() {
    telaCalculadora.value += 7;
});
botaoOito.addEventListener('click', function() {
    telaCalculadora.value += 8;
});
botaoNove.addEventListener('click', function() {
    telaCalculadora.value += 9;
});
botaoPonto.addEventListener('click', function() {
    telaCalculadora.value += '.';
});
botaoLimpar.addEventListener('click', function() {
    telaCalculadora.value = '';
    telaCalculadoraAlt.value = '';
});
botaoSomar.addEventListener('click', function() {
    expressaoUm = telaCalculadora.value;
    telaCalculadoraAlt.value = telaCalculadora.value;
    telaCalculadora.value = '';
    tipoOperacao = 'somar';
});
botaoSubtrair.addEventListener('click', function() {
    expressaoUm = telaCalculadora.value;
    telaCalculadoraAlt.value = telaCalculadora.value;
    telaCalculadora.value = '';
    tipoOperacao = 'subtrair';
});
botaoMultiplicar.addEventListener('click', function() {
    expressaoUm = telaCalculadora.value;
    telaCalculadoraAlt.value = telaCalculadora.value;
    telaCalculadora.value = '';
    tipoOperacao = 'multiplicar';
});
botaoDividir.addEventListener('click', function() {
    expressaoUm = telaCalculadora.value;
    telaCalculadoraAlt.value = telaCalculadora.value;
    telaCalculadora.value = '';
    tipoOperacao = 'dividir';
});
botaoIgual.addEventListener('click', function() {
    expressaoDois = telaCalculadora.value;
    telaCalculadoraAlt.value = telaCalculadora.value;
    telaCalculadora.value = '';
    if (tipoOperacao === 'somar') {
        telaCalculadoraAlt.value = `${expressaoUm} + ${expressaoDois}`;
        telaCalculadora.value = somar(expressaoUm, expressaoDois);
    } else if (tipoOperacao === 'subtrair') {
        telaCalculadoraAlt.value = `${expressaoUm} - ${expressaoDois}`;
        telaCalculadora.value = subtrair(expressaoUm, expressaoDois);
    } else if (tipoOperacao === 'multiplicar') {
        telaCalculadoraAlt.value = `${expressaoUm} * ${expressaoDois}`;
        telaCalculadora.value = multiplicar(expressaoUm, expressaoDois);
    } else if (tipoOperacao === 'dividir') {
        telaCalculadoraAlt.value = `${expressaoUm} / ${expressaoDois}`;
        telaCalculadora.value = dividir(expressaoUm, expressaoDois);
    }
});