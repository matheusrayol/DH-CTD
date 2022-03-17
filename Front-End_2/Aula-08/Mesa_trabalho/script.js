// Declaração de constantes
const dateLoad = Date.now();
const elementoPai = document.querySelector('form');
const botaoSubmit = document.getElementById('submit');
const tituloFormulario = document.querySelector('h2');

// Previna a página de ser recarregada quando houver o submit utilizando preventDefault().
botaoSubmit.addEventListener('click', function(event) {
    event.preventDefault();
    alert('O botão Enviar foi clicado');
})

// Adicione uma cor a um texto quando o mouse ficar acima do mesmo e outra cor quando ele sair do mesmo.'

// No título
tituloFormulario.onmouseover = function() {
    tituloFormulario.style.color = "purple";
}

tituloFormulario.onmouseout = function() {
    tituloFormulario.style.color = "black";
}

// Na lista de participantes
const elemento = document.querySelectorAll('li');

for (let i of elemento) {
    i.onmouseover = function() {
        i.style.color = "purple";
        i.style.fontWeight = "bold";
    }
    i.onmouseout = function() {
        i.style.color = "black";
        i.style.fontWeight = "normal";
    }
}

// Extra: alteração da borda dos inputs com mouseover
const input = document.querySelectorAll('input');

for (let i of input) {
    i.onmouseover = function() {
        i.style.border = "3px solid orange";
    }
    i.onmouseout = function() {
        i.style.border = "1px solid black";
    }
};

// Faça um trecho de código que utilize algum evento de teclado, esse evento irá escrever o conteúdo do input em uma tag <p> e logo abaixo o número de vezes que esse evento foi chamado. Exemplo: <p>futebol</p> <p>7</p>.

function contarKeyPressNome() {
    var x = document.getElementById("nome").value;
    document.getElementById("mensagens").innerHTML = `Você digitou o nome <b>${x}</b> (${x.length} caracteres)`;
}

function contarKeyPressEmail() {
    var x = document.getElementById("email").value;
    document.getElementById("mensagens").innerHTML = `Você digitou o e-mail <b>${x}</b> (${x.length} caracteres)`;
}

const dateEnd = Date.now() - dateLoad;

// Mostre um alerta na página quando a tela terminar de ser carregada.
window.onload = function() {
    const div = document.createElement('div');
    const para = document.createElement('p');
    const texto = document.createTextNode(`Formulário totalmente carregado (${dateEnd}ms).`);
    div.className = "mb-3";
    div.id = "mensagens";
    div.appendChild(para);
    para.appendChild(texto);
    elementoPai.appendChild(div);
}