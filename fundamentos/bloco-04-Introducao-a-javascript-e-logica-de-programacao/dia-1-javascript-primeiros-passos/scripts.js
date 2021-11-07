console.log('=== Início variáveis ===\n');
 const myName = 'Alan';
const birthCity = 'Rio de Janeiro';
let birthYear = 1986;

birthYear = 2030; // alterando o valor da variavel birthYear
// birthCity = 'Niteroi'; Não é possível alterar o valor pois a variável birthCity é uma constante.

console.log(myName);
console.log(birthCity);
console.log(birthYear); 

console.log('\n=== Fim do 1º conteúdo ===');

console.log('=== Início Tipos, tipagem dinâmica ===\n');

let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);

console.log('\n=== Fim Tipos, tipagem dinâmica ===');

console.log('=== Início operações aritméticas ===\n');

const base = 5;
let height = 8;
const area = base * height;
const perimeter = (base * 2) + (height * 2); 

console.log(area);
console.log(perimeter);

console.log('\n=== Fim operações aritméticas ===');

console.log('=== Início If e Else ===\n');

// const nota = 80;
// const nota = 60;
const nota = 59;

if (nota >= 80) {
  console.log('Parabéns, você foi aprovada(o)!');
} else if (nota < 80 && nota >= 60) {
  console.log('Você está na lista de espera');
} else {
  console.log('Você foi reprovada(o)');
}

console.log('\n=== Fim If e Else ===');

console.log('=== Início Operadores lógicos ===\n');

const comida = 'pão na chapa';
// const bebida = 'cafezinho';
const bebida = 'pingado';

if (bebida === 'cafezinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

const currentHour = 3;
let message = '';

if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
  message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18) {
  message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour > 11 && currentHour < 14) {
  message = 'Hora do almoço!!!';
} else if (currentHour > 4 && currentHour < 11) {
  message = 'Hmmm, cheiro de café recém passado';
}

console.log(message);

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

let weekDay = 'domingo';

if (
  weekDay === 'segunda-feira' 
  || weekDay === 'terça-feira' 
  || weekDay === 'quarta-feira' 
  || weekDay === 'quinta-feira' 
  || weekDay === 'sexta-feira'
  ) {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else if (
  weekDay === 'sábado'
  || weekDay === 'domingo'
  ) {
    console.log('FINALMENTE, descanso merecido UwU');
  }

  console.log(!1); // false
  console.log(!0); // true
  // O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.
  console.log(!null); // true
  console.log(!undefined); // true

console.log('\n=== Fim Operadores lógicos ===');

console.log('=== Início Switch e Case ===\n');

let state = 'aprovada';

switch (state) {
  case 'aprovada':
    console.log('aprovada');
    break;
  case 'lista':
    console.log('lista');
    break;
  case 'reprovada':
    console.log('reprovada');
    break;
  default:
    console.log('não se aplica');
    break;
}

console.log('\n=== Fim Switch e Case ===');