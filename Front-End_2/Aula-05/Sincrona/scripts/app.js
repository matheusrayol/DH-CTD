//@@ Templates de String - Template literal

// let nomeUsuario = "Pablo";

// console.log("Olá, usuário "+nomeUsuario); // Concatenação

// console.log(`Olá, usuário ${nomeUsuario}!`); // Interpolação de valores

// console.log(`A soma foi: ${4+9}`); // Interpolação de valores

// function exibeNome() {
//     return nomeUsuario
// }

// console.log(`Olá, usuário ${exibeNome()}!`); // Interpolação de valores

//@@ Modificar elementos com o DOM

let h1 = document.querySelector("h1");
console.log(h1.childNodes[0].data);
console.log(h1.innerText);
console.log(h1.innerText);

h1.innerText = "Novo título";
h1.innerHTML = "<h6>Novo título 2</h6>";

//@@ Modificando estilos de um elemento

let body = document.querySelector("body");

body.style.backgroundColor = "#808080";
h1.style.color = "#FFFFFF"

//@@ Modificando classes com DOM-JS

let listaElementosLi = document.querySelectorAll("li");

console.log(listaElementosLi);

listaElementosLi.forEach(li => {
    console.log(li.innerText);

    li.classList.add("jsli");
});

listaElementosLi[3].classList.remove("jsli");

console.log(listaElementosLi[2].classList.contains("jsli"));