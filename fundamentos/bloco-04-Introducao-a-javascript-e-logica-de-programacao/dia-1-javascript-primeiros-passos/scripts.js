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
            'The queen moves diagonally, horizontally, or vertically any number of squares.',
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

console.log('=== Início exercício 7 ===\n');

const nota = 100;
let error = false;
let conceito;

if (nota < 0 || nota > 100) {
    error = true;
} else if (nota >= 90) {
    conceito = 'A';
} else if (nota >= 80) {
    conceito = 'B';
} else if (nota >= 70) {
    conceito = 'C';
} else if (nota >= 60) {
    conceito = 'D';
} else if (nota >= 50) {
    conceito = 'E';
} else if (nota < 50) {
    conceito = 'F';
}

if (!error) {
    console.log(`O conceito obtido foi ${conceito}`);
} else {
    console.log('Nota inválida.');
}

console.log('\n=== Fim exercício 7 ===');

console.log('=== Início exercício 8 ===\n');

const n1 = 1564771;
const n2 = 587427;
const n3 = 55685473;

console.log(
    ((n1 % 2) === 0)
    || ((n2 % 2) === 0)
    || ((n3 % 2) === 0)
);

console.log('\n=== Fim exercício 8 ===');

console.log('=== Início exercício 9 ===\n');

console.log(
    !((n1 % 2) === 0)
    || !((n2 % 2) === 0)
    || !((n3 % 2) === 0)
);

console.log('\n=== Fim exercício 9 ===');

console.log('=== Início exercício 10 ===\n');

const prodCusto = 10;
const prodVenda = 14;
const lucro = (prodVenda - prodCusto) - (prodCusto * 0.2)

if (prodCusto < 0 || prodVenda < 0) {
    console.log('Dados inválidos!');
} else {
    console.log(lucro * 1000);
}

console.log('\n=== Fim exercício 10 ===');

console.log('=== Início exercício 11 ===\n');

const salario = 3000;
let salarioBase;
let inss;
let ir = 0;

if (salario < 1556.94) {
    inss = salario * 0.08;
} else if (salario > 1556.95 && salario < 2594.92) {
    inss = salario * 0.09;
} else if (salario > 2594.93 && salario < 5189.82) {
    inss = salario * 0.11;
} else {
    inss = 570.88
}

salarioBase = salario - inss;

if (salarioBase > 1903.99 && salarioBase < 2826.65) {
    ir = (salarioBase * 0.075) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    ir = (salarioBase * 0.15) - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    ir = (salarioBase * 0.225) - 636.13;
} else if (salarioBase > 4664.68) {
    ir = (salarioBase * 0.275) - 869.36;
}

console.log(`Salário líquido de: R$ ${salario - inss - ir}`);

console.log('\n=== Fim exercício 11 ===');
