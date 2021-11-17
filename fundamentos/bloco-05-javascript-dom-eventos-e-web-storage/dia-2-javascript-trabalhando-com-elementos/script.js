const body = document.body;

// exercício 01
const h1 = document.createElement('h1');
h1.id = 'title';
h1.innerText = 'Exercício 5.2 - JavaScript DOM';

body.appendChild(h1);

// exercício 02
const main = document.createElement('main');
main.className = 'main-content';

body.appendChild(main);

