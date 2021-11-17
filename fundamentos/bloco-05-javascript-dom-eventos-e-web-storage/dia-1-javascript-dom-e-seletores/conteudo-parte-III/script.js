/* HTMLCollection e NodeList diferem em conteúdo potencial e métodos disponíveis.
Um HTMLCollection deve conter apenas elementos, ter um método namedItem e permitir a indexação do item por número ou nome.

Um NodeList pode conter elementos junto com outros tipos de nós (como blocos de texto) e os itens só podem ser indexados por número.

Portanto, eles são muito semelhantes, 
mas embora um NodeList possa conter apenas elementos, 
você não pode usar o método namedItem nele, ou indexar nele usando nomes como índices. */

const [
    header, 
    emergencyTask, 
    noEmergencyTask, 
    h3InEmergencyTask, 
    h3InNoEmergencyTask,
    footer] = [
    document.getElementById('header-container'),
    document.getElementsByClassName('emergency-tasks'),
    document.getElementsByClassName('no-emergency-tasks'),
    document.querySelectorAll('.emergency-tasks div h3'),
    document.querySelectorAll('.no-emergency-tasks div h3'),
    document.getElementById('footer-container'),
]

header.style.backgroundColor = 'green';
emergencyTask[0].style.backgroundColor = 'burlywood';
noEmergencyTask[0].style.backgroundColor = 'yellow';

h3InEmergencyTask.forEach((h3) => {
    h3.style.backgroundColor = 'pink';
});

h3InNoEmergencyTask.forEach((h3) => {
    h3.style.backgroundColor = 'black';
});

footer.style.backgroundColor = 'green';

