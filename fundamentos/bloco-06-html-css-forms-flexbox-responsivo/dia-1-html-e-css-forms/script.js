const enviar = document.getElementById('enviar');
const dataDeInicio = document.getElementById('data-inicio');
const cpf = document.getElementById('cpf');

enviar.onclick = (event) => {
  event.preventDefault();

  if (validaData(dataDeInicio.value)) {
    dataDeInicio.setCustomValidity('Data inválida!');
  } else {
    dataDeInicio.setCustomValidity('');
  }

  if (validaCPF(cpf.value)) {
    cpf.setCustomValidity('CPF inválido!');
  } else {
    cpf.setCustomValidity('');
  }

};

cpf.onkeyup = (event) => {
  formataCPF(event.target.value);
};

function formataCPF(value) {
  const cpfAtual = value;
  let cpfAtualizado;
  cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
    function (reg, argumento1, argumento2, argumento3, argumento4) {
      // console.log(reg);
      return (
        argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4
      );
    }
  );
  //console.log(cpfAtualizado);
  cpf.value = cpfAtualizado;
};

cpf.onblur = (event) => {
  const cpf = event.target.value;
  if(validaCPF(cpf)){
    alert('CPF inválido!');
  };
};

function validaCPF(cpf) {
  const regexCPF = /\d/g;
  const result = cpf.match(regexCPF);
  const regexLetter = /[a-zA-Z]/;
  const result2 = regexLetter.test(cpf);
  /* console.log(result); console.log(result2); */
  if (result == null || result.length > 11 || result2) {
    return true;
  }
  return false;
}

dataDeInicio.onkeyup = (event) => {
  formataData(event.target.value);
}

function formataData(value) {
  const dataAtual = value;
  let dataAtualizada;
  dataAtualizada = dataAtual.replace(/(\d{2})(\d{2})(\d{4})/,
    function (reg, argumento1, argumento2, argumento3) {
      // console.log(reg);
      return (
        argumento1 + '/' + argumento2 + '/' + argumento3
      );
    }
  );
  //console.log(cpfAtualizado);
  dataDeInicio.value = dataAtualizada;
}

function validaData(data) {
  const regexData = /\d+/g;
  const regexFormato = /\d{2}\/\d{2}\/\d{4}$/;
  const a = data.match(regexData);
  /* console.log(a);
  console.log(regexFormato.test(data)); */

  if (!regexFormato.test(data) || data === '') {
    return true;
  } else if (a[0] < 0 || a[0] > 31) {
    return true;
  } else if (a[1] < 0 || a[1] > 12) {
    return true;
  } else if (a[2] < 0) {
    return true;
  }

  return false;
}

/* 
Fontes:
https://stackoverflow.com/questions/10777970/can-i-mark-a-field-invalid-from-javascript 
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#regular-expressions
https://stackoverflow.com/questions/17550317/how-to-manually-show-a-html5-validation-message-from-a-javascript-function
*/
