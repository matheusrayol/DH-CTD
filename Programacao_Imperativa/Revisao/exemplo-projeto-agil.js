// simular um projeto ágil em código JS

const numeroSprint = 77;
const nomeProjeto = "Projeto DH";
let listaEpicos = [1, 2, 3];
let nomeEpicos = ["Épico Login", "Épico Lista Disciplinas", "Épico Praticar Disciplina"];
const inicioSprint = "06/12/2021";
const fimSprint = "17/12/2021";


function validaDataNaSprint(data) {
    let mensagem
    if (data === fimSprint) {
        mensagem = "Você começou a Sprint hoje!"
    } else if (data === fimSprint) {
        mensagem = "Você está no último dia da Sprint!"
    } else {
        mensagem = "Data inválida pro momento."
    }

    return mensagem;

}

console.log(validaDataNaSprint("06/12/2022"))