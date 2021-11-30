/* 
Neste exercício, você terá que criar uma função &quot;FizzBuzz&quot; que recebe dois
parâmetros numéricos. 

A função deve atender aos seguintes requisitos:
● Você deve imprimir os números de 1 a 100;
● Se o número a ser impresso for um múltiplo de seu PRIMEIRO
parâmetro, você deve imprimir a palavra “Fizz” em vez do número
correspondente;

● Se o número a ser impresso for um múltiplo do seu SEGUNDO parâmetro,
você deve imprimir a palavra &quot;Buzz&quot; em vez do número correspondente;
● Se o número for um múltiplo de AMBOS os parâmetros, você deve imprimir
a palavra “FizzBuzz”.
*/

let FizzBuzz = (numero1, numero2) => {
    for (let i = 1; i <= 100; i++) {
        if (i % numero1 === 0 && i % numero2 === 0) {
            console.log('FizzBuzz');
        } else if (i % numero1 === 0) {
            console.log('Fizz');
        } else if (i % numero2 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

FizzBuzz(3, 5);