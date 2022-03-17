// Função para divisão de dois números

module.exports = function(valorA, valorB) {
    if (valorA == 0 || valorB == 0) {
        return "Não se pode dividir por 0";
    } else {
        return valorA / valorB;
    }
}