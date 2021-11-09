// Validação de estrutura if-else
function validaSenha(senha) {
    let senhaCorreta = "batataBananaTomate";
    // Se a senha estiver CORRETA, retorna acesso permitido
    if (senha == senhaCorreta) {
        console.log("Acesso permitido");
    } 
    // Se a senha estiver INCORRETA, retorna acesso negado
    else {
        console.log("Acesso negado");
    }
}

validaSenha("batataBananaTomat");

// Validação de estrutura if-else ternária

function validaSenha1(senha) {
    let senhaCorreta = "batataBananaCebola";
    // Se a senha estiver CORRETA, retorna acesso permitido
    return senha == senhaCorreta ? console.log("Acesso permitido") : console.log("Acesso negado");
}

validaSenha1("batataBananaCebolo");

// Switch/Case dentro de uma função

function qualOMes(valor) {
    switch (valor) {
        case 1:
            console.log("Janeiro");
            break;
        case 2:
            console.log("Fevereiro");
            break;
        case 3:
            console.log("Março");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Maio");
            break;
        case 6:
            console.log("Junho");
            break;
        case 7:
            console.log("Julho");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Setembro");
            break;
        case 10:
            console.log("Outubro");
            break;
        case 11:
            console.log("Novembro");
            break;
        case 12:
            console.log("Dezembro");
            break;
        default:
            console.log("Mês inválido");
            break;
    }
}

qualOMes(11);