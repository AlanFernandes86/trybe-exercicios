const enviar = document.getElementById('enviar');
const dataDeInicio = document.getElementById('data-inicio');
const cpf = document.getElementById('cpf');

enviar.onclick = (event) => {
  event.preventDefault();
  if (validaData(dataDeInicio.value)) {
    dataDeInicio.setCustomValidity('OMG!');
  }
};

function validaData(data) {
  const dataSplit = data.split('/');
  const dia = dataSplit[0];
  const mes = dataSplit[1];
  const ano = dataSplit[2];

  return true;
}

cpf.onkeyup = (event) => {
  formataCPF(event.target.value);
};

function formataCPF(value) {
  const cpfAtual = value;
  let cpfAtualizado;
  cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, (regex, argumento1, argumento2, argumento3, argumento4) => {
     return (argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4);
    }
  );
  console.log(cpfAtualizado);
  cpf.value = cpfAtualizado;
}

/* 
Fonte:
https://stackoverflow.com/questions/10777970/can-i-mark-a-field-invalid-from-javascript 
*/
