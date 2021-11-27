const enviar = document.getElementById('enviar');
const dataDeInicio = document.getElementById('data-inicio');

enviar.onclick = (event) => {
  //event.preventDefault();
  if(validaData(dataDeInicio.value)){
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

/* 
Fonte:
https://stackoverflow.com/questions/10777970/can-i-mark-a-field-invalid-from-javascript 
*/