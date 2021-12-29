const enviar = document.getElementById('enviar');
const dataDeInicio = document.getElementById('data-inicio');
const cpf = document.getElementById('cpf');
const form = document.forms[0];
const summary = document.querySelector('#summary');
const btnSample = document.getElementById('sample-data');
const selectEstados = document.getElementById('estados');
const uf = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'NY', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

window.onload = () => {
  initForm();
}

function initForm() {
  let option = document.createElement('option');
  option.value = '';
  option.textContent = 'Lista de Estados';
  selectEstados.appendChild(option);
  uf.forEach((estado) => {
    option = document.createElement('option');
    option.value = estado;
    option.textContent = estado;
    selectEstados.appendChild(option);
  });
  $('.ui.checkbox').checkbox();
  $('.ui.radio.checkbox').checkbox();
  $('#estados').dropdown();
  $('#data-inicio').datepicker();
  dataDeInicio.onchange = () => $('#data-inicio').datepicker("option", "dateFormat", 'dd/mm/yy');
  formValidation();
}

// https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
form.onsubmit = (event) => {
  event.preventDefault();
  if( $('.ui.form').form('is valid')) {
    new FormData(form);
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
  const regexCPF = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;
  const result = cpf.match(regexCPF);
  const regexLetter = /[a-zA-Z]/;
  const result2 = regexLetter.test(cpf);
  /* console.log(result); console.log(result2); */
  if (result == null || result.length > 11 || result2) {
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

// https://stackoverflow.com/questions/13343566/set-select-option-selected-by-value
function setFormData(formDataObject) {
  Object.values(form).forEach((element) => {
    if (formDataObject[element.id]){
      if (element.tagName === 'SELECT') {
        $('#estados').val('NY').change();
      } else {        
        element.value = formDataObject[element.id];
      }
    } else if (element.type === 'checkbox' && formDataObject['rede-social'].includes(element.id)) {
      element.checked = true;
    } else if (element.type === 'radio' && formDataObject['tipo-residencia'] === element.id) {
      element.checked = true;
    }
  });
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

function formValidation() {
  $('.ui.form')
  .form({
    fields: {
      name: {
        identifier: 'name',
        rules: [
          {
            type   : 'empty',
            prompt : 'Por favor preencha seu nome.'
          }
        ]
      },
      'e-mail': {
        identifier: 'e-mail',
        rules: [
          {
            type   : 'empty',
            prompt : 'Digite seu email.'
          },
          {
            type   : 'email',
            prompt : 'Digite um email válido.'
          },
        ]
      },
      cpf: {
        identifier: 'cpf',
        rules: [
          {
            type   : 'empty',
            prompt : 'Digite seu CPF.'
          }
        ]
      },
      endereco: {
        identifier: 'endereco',
        rules: [
          {
            type   : 'empty',
            prompt : 'Digite seu endereço.'
          }
        ]
      },
      cidade: {
        identifier: 'cidade',
        rules: [
          {
            type   : 'empty',
            prompt : 'Digite a cidade do seu endereço.'
          }
        ]
      },
      estados: {
        identifier: 'estados',
        rules: [
          {
            type   : 'empty',
            prompt : 'Selecione o estado da sua cidade.'
          }
        ]
      },
      'tipo-residencia': {
        identifier: 'tipo-residencia',
        rules: [
          {
            type   : 'checked',
            prompt : 'Selecione o tipo da sua residência.'
          }
        ]
      },
      'rede-social': {
        identifier: 'rede-social',
        rules: [
          {
            type   : 'checked',
            prompt : 'Selecione pelo menos uma rede social.'
          }
        ]
      },
      resumo: {
        identifier: 'resumo',
        rules: [
          {
            type   : 'empty',
            prompt : 'Insira o resumo do seu último emprego.'
          }
        ]
      },
      cargo: {
        identifier: 'cargo',
        rules: [
          {
            type   : 'empty',
            prompt : 'Insira o cargo do seu último emprego.'
          }
        ]
      },
      descricao: {
        identifier: 'descricao',
        rules: [
          {
            type   : 'empty',
            prompt : 'Insira o descrição do seu último cargo.'
          }
        ]
      },
      'data-inicio': {
        identifier: 'data-inicio',
        rules: [
          {
            type   : 'empty',
            prompt : 'Insira a data de início do seu último cargo.'
          }
        ]
      },
    }
  })
;
}

/* 
Fontes:
https://jqueryui.com/datepicker/
https://semantic-ui.com/
https://stackoverflow.com/questions/10777970/can-i-mark-a-field-invalid-from-javascript 
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#regular-expressions
https://stackoverflow.com/questions/17550317/how-to-manually-show-a-html5-validation-message-from-a-javascript-function
https://www.alura.com.br/artigos/formatando-cpf-com-ajuda-das-expressoes-regulares?gclid=Cj0KCQiA7oyNBhDiARIsADtGRZbih-FhV3m_yrotvIRwv-0Dd_yLfpKJbCTF2dj1_GVu2bZxbJRYqe4aAuhrEALw_wcB
*/
