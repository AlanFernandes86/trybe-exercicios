console.log('=== Início exercício 1 ===\n');

const a = 79;
const b = 86;

const soma = a + b;
const subtracao = a - b;
const multiplicacao = a * b;
const divisao = a / b;
const modulo = a % b;

console.log(
    `Soma = ${soma}` 
    + `\nSubtração = ${subtracao}` 
    + `\nMultiplicação = ${multiplicacao}`
    + `\nDivisão = ${divisao}`
    + `\nMódulo = ${modulo}`,
);

console.log('\n=== Fim exercício 1 ===');

console.log('=== Início exercício 2 ===\n');

const num1 = 1789;
const num2 = 2697;

let maior;

if (num1 > num2) {
    maior = num1;
} else {
    maior = num2;
}

console.log(`Maior número = ${maior}`);

console.log('\n=== Fim exercício 2 ===');

console.log('=== Início exercício 3 ===\n');

const nu1 = 1789;
const nu2 = 2697;
const nu3 = 5749;

let maior2;

if (nu1 > nu2) {
    maior2 = nu1;
} else if (nu3 > nu1) {
    maior2 = nu3;
} else {
    maior2 = nu2;
}

console.log(`Maior número = ${maior2}`);

console.log('\n=== Fim exercício 3 ===');

console.log('=== Início exercício 4 ===\n');

const valor = -59741682;
let sinal = 'zero';

if (valor < 0) {
    sinal = 'negative';
} else if (valor > 0) {
    sinal = 'positive';
}

console.log(`This number is ${sinal}`);

console.log('\n=== Fim exercício 4 ===');

console.log('=== Início exercício 5 ===\n');

const A = 60;
const B = 90;
const C = 30;
const sumABC = A + B + C;

console.log(`is this a triangle? ${sumABC === 180 && A > 0 && B > 0 && C > 0}`);

console.log('\n=== Fim exercício 5 ===');

console.log('=== Início exercício 6 ===\n');

const chessPiece = 'QUEEN';

switch (chessPiece.toLowerCase()) {
    case 'king':
        console.log('The king moves one square in any direction.');
        break;
    case 'queen':
        console.log(
            'The queen moves diagonally, horizontally, or vertically any number of squares.'
            );
        break;
    case 'rook':
        console.log('The rook moves horizontally or vertically any number of squares.');
        break;
    case 'knights':
        console.log('The knights moves in an ‘L’ shape’: two squares in a horizontal or' 
         + 'vertical direction, then move one square horizontally or vertically.');
        break;
    case 'bishop':
        console.log('The bishop moves in diagonals.');
        break;
    case 'pawns':
        console.log('The pawns moves vertically forward one square, with the option'
        + 'to move two squares if they have not yet moved.');
        break;
    default:
        console.log(`Piece "${chessPiece.toLowerCase()}" not found.`);
        break;
}

console.log('\n=== Fim exercício 6 ===');