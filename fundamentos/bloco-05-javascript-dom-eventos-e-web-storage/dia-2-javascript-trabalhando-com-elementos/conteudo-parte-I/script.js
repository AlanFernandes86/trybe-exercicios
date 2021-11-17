// arquivo script.js

const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const primeiroFilho = document.getElementById('pai').firstElementChild;
const primeiroFilho2 = ondeVoceEsta.previousElementSibling;
const atencao = ondeVoceEsta.firstChild;
const terceiroFilho = ondeVoceEsta.nextElementSibling;
const pai = document.getElementById('pai');
const terceiroFilho2 = pai.children[2];

ondeVoceEsta.parentElement.style.color = 'green';
ondeVoceEsta.firstElementChild.innerText = "Primeiro filho do filho";




console.log(ondeVoceEsta.parentElement);
console.log(ondeVoceEsta.firstElementChild);
console.log(primeiroFilho);
console.log(primeiroFilho2);
console.log(atencao);
console.log(terceiroFilho);
console.log(terceiroFilho2);