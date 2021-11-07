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

console.log(maior);

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

console.log(maior2);

console.log('\n=== Fim exercício 3 ===');