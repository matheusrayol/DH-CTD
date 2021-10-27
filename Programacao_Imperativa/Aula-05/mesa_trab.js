// Neste exercício, você terá que pensar sobre o que cada função retornará, sem executá-la no console.

// Micro Desafio 1
function teste1(x, y) {
    return y - x;
};
teste1(10, 40);
// Retorno: 30

// Micro Desafio 2
function teste2(x , y) {
    return x * 2;
    console.log(x);
    return x / 2;
};
teste2(10);
// Retorno: 20


// Funções Simples
// 1. Crie uma função que converta polegadas em centímetros. Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
function polegadasParaCentimetros(polegadas) {
    return polegadas * 2.54;
};
console.log(polegadasParaCentimetros(10));

// 2. Crie uma função que receba uma string e a converta em um URL. Ex.: "funcaojs" é retornado como "http://www.funcaojs.com.br"
function converteUrl(string) {
    return 'http://www.' + string + '.com.br';
}
console.log(converteUrl('funcaojs'));

// 3. Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação (!).
function converteExclamacao(string) {
    return string + '!';
}
console.log(converteExclamacao('Oi'));

// 4. Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano equivale a 7 anos para eles.
function calcularIdadeCachorro(anosHumanos) {
    return anosHumanos * 7;
}
console.log(calcularIdadeCachorro(5));

// 5. Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal. Considere que você trabalhe 160 horas por mês.
function calcularHoraTrabalho(salario) {
    return salario / 160;
}
console.log(calcularHoraTrabalho(6750));

// 6. Crie a função calculadora de IMC de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores.
function calculadoraImc(altura, peso) {
    return peso / (altura * altura / 10000);
}
console.log(calculadoraImc(150, 80).toFixed(2));
console.log(calculadoraImc(179, 100).toFixed(2));
console.log(calculadoraImc(180, 105.2).toFixed(2));

// 7. Crie uma função que receba uma string em minúsculas, converta-as em maiúsculas e as retorne.
function converteMaiusculas(string) {
    return string.toUpperCase();
}
console.log(converteMaiusculas('olá, digitalhouse!'));

// 8. Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
function tipoDado(parametro) {
    return typeof parametro;
}
console.log(tipoDado(10));
console.log(tipoDado('Teste'));
console.log(tipoDado(false));

// 9. Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
function circunferencia(raio) {
    return 2 * Math.PI * raio;
}
console.log(circunferencia(2).toFixed(2));