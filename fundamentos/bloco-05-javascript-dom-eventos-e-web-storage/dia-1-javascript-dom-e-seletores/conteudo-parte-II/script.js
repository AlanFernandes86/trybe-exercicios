const paragraph = document.getElementById("paragraph");
const title = document.getElementById("page-title");
const subtitle = document.getElementById("subtitle");
const secondParagraph = document.getElementById("second-paragraph");

paragraph.style.color = "red";
title.innerText = 'Logan';
secondParagraph.innerText = 'Melhor filme disparado da serie de filmes do X-Men';
subtitle.innerText = 'Fato:';

const paragraphs = document.getElementsByClassName('paragraph');
const titleAgain = document.getElementsByTagName('h2');

paragraphs[0].style.fontSize = 'x-large';
titleAgain[0].style.color = 'blue';

