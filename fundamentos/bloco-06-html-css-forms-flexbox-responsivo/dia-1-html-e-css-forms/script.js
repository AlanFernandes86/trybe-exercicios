const enviar = document.getElementById('enviar');
const dataDeInicio = document.getElementById('data-inicio');
const cpf = document.getElementById('cpf');
const form = document.forms[0];
const summary = document.querySelector('#summary');
const btnSample = document.getElementById('sample-data');
const btnEnviar = document.getElementById('enviar');
const selectEstados = document.getElementById('estados');
const uf = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'NY', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

window.onload = () => {
  uf.forEach((estado) => {
    const option = document.createElement('option');
    option.value = estado;
    option.textContent = estado;
    selectEstados.appendChild(option);
  });
}

// https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
btnEnviar.onclick = (event) => {
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

  if (form.checkValidity()) {
    new FormData(form);  
  } else {
    form.reportValidity();
  }  
};

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/formdata_event
form.onformdata = (event) => {
  const data = event.formData;
  const formDataObject = {
    name : data.get('name'),
    'e-mail' : data.get('e-mail'),
    cpf : data.get('cpf'),
    endereco : data.get('endereco'),
    cidade : data.get('cidade'),
    estados : data.get('estados'),
    'tipo-residencia' : data.get('tipo-residencia'),
    'rede-social' : data.getAll('rede-social'),
    resumo : data.get('resumo'),
    cargo : data.get('cargo'),
    descricao : data.get('descricao'),
    'data-inicio' : data.get('data-inicio'),
  }  
  showSummary(formDataObject);
}

cpf.oninput = (event) => {
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
  validaCPF(cpf);
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

btnSample.onclick = () => {
  const formDataObject = {
    name : 'Peter Parker',
    'e-mail' : 'teste@teste.com.br',
    cpf : '999.999.999-99',
    endereco : 'Rua Ingram, 20, Forest Hills',
    cidade : 'Queens',
    estados : 'NY',
    'tipo-residencia' : 'apartamento',
    'rede-social': [ 'linkedin', 'instagram' ],
    resumo : 'Pegar o escudo do Capitão América.',
    cargo : 'Membro',
    descricao : 'Ser amigão da vizinhança',
    'data-inicio' : '28/04/2016',
  }  
  setFormData(formDataObject);
};

function setFormData(formDataObject) {
  for (let key in formDataObject) {
    setInputData(key, formDataObject[key]);
  }
}

function setInputData(id, value) {
  const element = Object.values(form).find((element) => element.id === id);
  if (element === undefined) {
    if (Array.isArray(value)) {
      value.forEach((value) => {
        form.querySelector(`[value = ${value}]`).checked = true;
      })
    } else {
      form.querySelector(`[value = ${value}]`).checked = true;
    }
  } else {
    element.value = value;
  }
}

function showSummary(formDataObject) {
  toggleVisibility.call();

  summary.querySelector('#voltar').onclick = () => showForm();
  
  Object.entries(formDataObject).forEach(([key, value]) => {
    if (Array.isArray(value)){
      let result = '';
      value.forEach((value, index, array) => {
        index === array.length -1 ? result += `${value}.` : result += `${value}, `;
      });
      summaryAppend (key, result);
    } else {
      summaryAppend(key, value);
    }
  })

  function summaryAppend(key, value) {
    const paragraph = document.createElement('p');
    paragraph.innerText = `${key}: ${value}`;
    summary.appendChild(paragraph);
  }
}

function showForm() {
  summary.innerHTML = '<button id="voltar">Voltar</button>';
  toggleVisibility.call();
}

function toggleVisibility() {
  form.hidden ? form.hidden = false : form.hidden = true;
  summary.hidden ? summary.hidden = false : summary.hidden = true;
}

/* 
Fontes:
https://stackoverflow.com/questions/10777970/can-i-mark-a-field-invalid-from-javascript 
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#regular-expressions
https://stackoverflow.com/questions/17550317/how-to-manually-show-a-html5-validation-message-from-a-javascript-function
*/
