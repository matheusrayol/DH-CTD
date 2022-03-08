// let body = document.querySelector('body');
// let button = document.querySelector('button');
// let item = document.querySelector('li');

// item.classList.add('dark');

// function colorChange() {
//     body.classList.toggle('dark')
//     for (let item of texto) {
//         item.classList.toggle('dark');


//     }

// }
//     button.onclick = colorChange;

let body = document.querySelector('body');
let button = document.querySelector('button');
let title = document.querySelector('h1');
let cards = document.querySelectorAll('div.item');
let texts = document.querySelectorAll('h2 p');

function toggleDarkMode() {
    body.classList.toggle('dark');
    title.classList.toggle('darkTitle');
    cards.forEach(div => {
        div.classList.toggle('darkItem');
        div.classList.toggle('darkText');
    });
}

button.onclick = toggleDarkMode;