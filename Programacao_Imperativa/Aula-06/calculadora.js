// Mesa de trabalho - Calculadora
// Nível I

// 1. Crie um arquivo calculadora.js que terá as diferentes operações para realizar.

// 2. Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
function adicionar(numero1, numero2) {
    return numero1 + numero2;
}

// 3. Crie uma função de subtração, que deverá receber dois parâmetros e retorrnar a subtração do primeiro menos o segundo.
function subtrair(numero1, numero2) {
    return numero1 - numero2;
}

// 4. Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

// 5. Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
function dividir(numero1, numero2) {
    return numero1 / numero2;
}

// Nível II

// 1. No seu arquivo calculadora.js, a partir das 4 funções feitas anteriormente, ccrie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções.

console.log('---- Início dos testes da Calculadora ----');

// 2. Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.
console.log('Adição de 33 + 22: ' + adicionar(33, 22));
console.log('Subração de 55 - 27: ' + subtrair(55, 27));

// 3. Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.
console.log('Multiplicação de 9 por 15: ' + multiplicar(9, 15));

// 4. Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.
console.log('Divisão de 100 por 25: ' + dividir(100, 25));

// 5. Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.
console.log('Divisão de 10 por 0: ' + dividir(10, 0));

// Nível III

// 1. Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
function quadradoDoNumero(numero) {
    return multiplicar(numero, numero);
}
console.log('Quadrado do número 5: ' + quadradoDoNumero(5));

// 2. Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro. Você deve usar algumas funções criadas anteriormente em nossa calculadora.
function mediaDeTresNumeros(numero1, numero2, numero3) {
    let conjunto1 = adicionar(numero1, numero2);
    let conjunto2 = adicionar(conjunto1, numero3);
    return dividir(conjunto2, 3);
}
console.log('A média entre 33, 44 e 55 é: ' + mediaDeTresNumeros(33, 44, 55));

// 3. Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem. Exemplo: calculaPorcentagem(300, 15) (deve retornar 45, pois é 15% de 300)
function calculaPorcentagem(total, porcentagem) {
    return multiplicar(dividir(porcentagem, 100), total);
}
console.log('38% de 731 é: ' + calculaPorcentagem(731, 38).toFixed(2));

// 4. Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro. Exemplo: geradorDePorcentagem(2, 200) (deve retornar 1, já que 2 é 1% de 200)
function geradorDePorcentagem(numero1, numero2) {
    return dividir(numero1, numero2) * 100;
}
console.log('35 é igual a ' + geradorDePorcentagem(35, 200) + '%' + ' de 200');