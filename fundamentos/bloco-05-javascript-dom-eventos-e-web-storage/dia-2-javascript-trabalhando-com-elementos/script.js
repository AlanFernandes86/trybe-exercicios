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

// exercício 03
const section = document.createElement('section');
section.className = 'center-content';

main.appendChild(section);

// exercício 04
const p = document.createElement('p');
p.innerText = 'Lorem ipsum dolor sit amet';
section.appendChild(p);

// exercício 05
const section2 = document.createElement('section');
section2.className = 'left-content';
main.appendChild(section2);

// exercício 06
const section3 = document.createElement('section');
section3.className = 'right-content';
main.appendChild(section3);

// exercício 07
const image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';

section2.appendChild(image);