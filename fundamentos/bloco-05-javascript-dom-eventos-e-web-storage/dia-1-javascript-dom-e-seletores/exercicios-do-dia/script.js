/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

function changeParagraph() {
     const paragraphs = document.getElementsByTagName('p');
     paragraphs[0].innerText = 'Codando muito na XP Inc, de colete e sorriso no rosto.';
}

function changeMainColor() {
    const main = document.getElementsByClassName('main-content');
    main[0].style.backgroundColor = 'rgb(76,164,109)';
}

function changeSectionColor() {
    const mainSection = document.getElementsByClassName('center-content');
    mainSection[0].style.backgroundColor = 'white';
}

function fixH1() {
    const title = document.getElementsByClassName('title');
    title[0].innerText = 'Exercício 5.1 - Javascript';
}

function changeParagraph2() {
    const paragraphs = document.getElementsByTagName('p');
    paragraphs[0].style.textTransform = 'uppercase';
}

function printP() {
    const paragraphs = document.getElementsByTagName('p');
    for (let p of paragraphs) {
        console.log(p.innerText);
    }
}


changeParagraph();
changeParagraph2();
changeMainColor();
changeSectionColor();
fixH1();
printP();