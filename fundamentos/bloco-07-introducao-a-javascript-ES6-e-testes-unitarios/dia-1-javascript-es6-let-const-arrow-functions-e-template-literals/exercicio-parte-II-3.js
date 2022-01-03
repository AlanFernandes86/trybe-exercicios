let count = 0;
const h1 = document.getElementById('click-count');

document.getElementById('count').onclick = clickCount;

function clickCount(event) {
  count++;
  h1.textContent = count;
}