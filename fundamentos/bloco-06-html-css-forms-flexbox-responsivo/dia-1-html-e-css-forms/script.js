const enviar = document.getElementById('enviar');
const dataDeInicio = document.getElementById('data-inicio');
const cpf = document.getElementById('cpf');

enviar.onclick = (event) => {
  //event.preventDefault();

  if (!validaData(dataDeInicio.value)) {
    dataDeInicio.setCustomValidity('Data inválida!');
  }
};


function validaData(data) {
  const dataSplit = data;
  const regex = /\d+/g
  const a = dataSplit.match(regex)
  
  if (a[0] < 0 || a[0] > 31) {
    return false;
  } else if (a[1] < 0 || a[1] > 12 ) {
    return false;
  } else if (a[2] < 0) {
    return false;
  }

  return true;
}

cpf.onkeyup = (event) => {
  formataCPF(event.target.value);
};

function formataCPF(value) {
  const cpfAtual = value;
  let cpfAtualizado;
  cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
  function (reg, argumento1, argumento2, argumento3, argumento4) {
   // console.log(reg);
     return (argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4);
    }
  );
  //console.log(cpfAtualizado);
  cpf.value = cpfAtualizado;
}

cpf.onblur = (event) => {
    const cpf = event.target.value;
    const regex = /\d/g;
    const result = cpf.match(regex);
    const regexLetter = /[a-zA-Z]/
    const result2 = regexLetter.test(cpf)
    console.log(result2);
    console.log(result);
    if(result.length <= 11 && !result2) {
      
    } else {
      alert('CPF inválido');
    }
}
/* 
Fonte:
https://stackoverflow.com/questions/10777970/can-i-mark-a-field-invalid-from-javascript 
*/
