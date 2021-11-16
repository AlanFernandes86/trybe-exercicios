
/* Só é possível inserir números de 1 até 3999. */

const digit = 'DCCCXCVI';

let algarismos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanNumeralConverter(digits) {
    let smallerLeftCalculated = calculateSmallerLeft(digits.split());

}

function calculateSmallerLeft(digits) { // recebe os digitos

    let updatedDigits = digits.split('');
    
    for (let i = updatedDigits.length - 1; i => 0; i--) {
     
    }
    
}

function getDigitValue(digit) { // retorno o valor do algarismo
    
    let digitValue = 0;

    for (let key in algarismos) {
      if (key === digit.toUpperCase()) {
        digitValue = algarismos[key]
        break;
      };
    }

    return digitValue;
}

function validateDigits(digits) { // Valida se é um algarismo romano

  let mDigits = digits.split('');
  let isValid = true;

  for (let index in digits) {
    let repeated = 0

    while(digits[index] === digits[index + 1]){
      repeated += 1;
      if (repeated > 3){
        isValid = false;
      }
    }

    switch (digits[index].toUpperCase()) {
      case 'I':
        isValid = testI(digits, index, isValid);
      break;
    }
  }

  return isValid;
}

function testI(digits, index, isValid) {

  if (digits[index + 1] != 'V' && digits[index + 1] != 'X' && digits[index + 1] != 'I') {
    isValid = false;
  }
  return isValid;
}

console.log(validateDigits('IX'));

/* http://clubes.obmep.org.br/blog/sala-de-estudo-operando-com-algarismos-romanos/
Os símbolos I,X,C,M podem ser repetidos, seguidamente, até três vezes:
Os símbolos V,L,D não podem ser repetidos.
Quando um símbolo é colocado à direita de outro de valor igual ou maior, somamos os dois valores. (Na notação aditiva, símbolos a serem somados podem ser repetidos.)
Um símbolo colocado à esquerda de outro de maior valor tem seu valor subtraído do maior valor. (Na notação subtrativa, não se repetem os símbolos a serem subtraídos.)
Os símbolos V,L,D não podem ser utilizados para subtrair.
O I apenas se antepõe a V e a X 
O X apenas se antepõe a L e a C
O C apenas se antepõe a D e a M
Um traço horizontal colocado sobre um símbolo multiplica seu valor por 1.000 Essa regra só é utilizada para numeração a partir de 4.000.
Dois traços horizontais colocados sobre um símbolo multiplicam seu valor por 1.000.000. Essa regra só é utilizada para numeração a partir de 4.000.000 */