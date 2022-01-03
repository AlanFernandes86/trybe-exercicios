const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const button = document.getElementById('button');
const htmlResult = document.getElementById('result');

button.addEventListener('click', executeSum);

function sum() {
  const result = parseInt(value1.value) + parseInt(value2.value);

  if (isNaN(result)) {
    throw Error('Digite somente números.');
  }

  htmlResult.textContent = `Resultado: ${result}`;
}

function executeSum() {
  try {
    sum();
  } catch (error) {
    htmlResult.textContent = `Error: ${error.message}`
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';    
  }
}