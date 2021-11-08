console.log('=== Início exercício 01 ===\n');

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// eslint-disable-next-line prefer-const
for (let number of numbers) {
    console.log(number);
}

console.log('\n=== Fim exercício 01 ===');

console.log('=== Início exercício 02 ===\n');

let result = 0;
// eslint-disable-next-line prefer-const
for (let number of numbers) {
    result += number;
}

console.log('Resultado do somatório =', result);

console.log('\n=== Fim exercício 02 ===');

console.log('=== Início exercício 03 ===\n');

let soma = 0;
let media;
// eslint-disable-next-line prefer-const
for (let number of numbers) {
    soma += number;
}
// eslint-disable-next-line prefer-const
media = soma / numbers.length;

console.log('Média dos valores =', media);

console.log('\n=== Fim exercício 03 ===');