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



let irmao = document.createElement('section');
irmao.id ='irmao';
let filho = document.createElement('section');
filho.id = 'filho';
let filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
filhoDoPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';
pai.appendChild(irmao);
ondeVoceEsta.appendChild(filho);
ondeVoceEsta.firstElementChild.appendChild(filhoDoPrimeiroFilhoDoFilho);


let listToRemove = ['terceiroFilho', 'quartoEUltimoFilho', 'irmao', 'primeiroFilho', 'segundoEUltimoFilhoDoFilho', 'filho', 'filhoDoPrimeiroFilhoDoFilho'];

let childrenElementsPai = pai.children;

console.log(childrenElementsPai);

function removeElements(listElements) {
    for (let element of listElements) {
        let temp = document.getElementById(element);
        if (temp.parentElement.id === 'pai'){
            pai.removeChild(temp);
        } else if (temp.parentElement.id === 'elementoOndeVoceEsta') {
            ondeVoceEsta.removeChild(temp);
        } else {
            document.getElementById('primeiroFilhoDoFilho').removeChild(temp);
        }  
    }
}

removeElements(listToRemove);


console.log(childrenElementsPai);
/* console.log(filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling) */

/* console.log(ondeVoceEsta.parentElement);
console.log(ondeVoceEsta.firstElementChild);
console.log(primeiroFilho);
console.log(primeiroFilho2);
console.log(atencao);
console.log(terceiroFilho);
console.log(terceiroFilho2); */