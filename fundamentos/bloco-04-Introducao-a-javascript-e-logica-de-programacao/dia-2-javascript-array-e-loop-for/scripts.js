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

console.log('=== Início exercício 04 ===\n');

if (media > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

console.log('\n=== Fim exercício 04 ===');

console.log('=== Início exercício 05 ===\n');

let biggerNumber = 0;

// eslint-disable-next-line prefer-const
for (let number of numbers) {
    if (number > biggerNumber) {
        biggerNumber = number;
    }
}

console.log('O maior número é:', biggerNumber);

console.log('\n=== Fim exercício 05 ===');

console.log('=== Início exercício 06 ===\n');

let oddAmount = 0;

// eslint-disable-next-line prefer-const
for (let number of numbers) {
    if (!(number % 2 === 0)) {
        oddAmount += 1;
    }
}

if (oddAmount === 0) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log('A quantidade de números impares é:', oddAmount);
}

console.log('\n=== Fim exercício 06 ===');

console.log('=== Início exercício 07 ===\n');

let smallerNumber = numbers[0];

for (let number of numbers) {
    if (number < smallerNumber) {
        smallerNumber = number;
    }
}

console.log('O menor número é:', smallerNumber);

console.log('\n=== Fim exercício 07 ===');

console.log('=== Início exercício 08 ===\n');

let newArray = [];

for (let i = 1; i <= 25; i++) {
    newArray.push(i);
}

console.log(newArray);

console.log('\n=== Fim exercício 08 ===');

console.log('=== Início exercício 09 ===\n');

for (let elementos of newArray) {
    let divisao = elementos/2;
    console.log(divisao);
}

console.log('\n=== Fim exercício 09 ===');

console.log('=== Início bônus 01 ===\n');

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

  console.log(numbers);

console.log('\n=== Fim bônus 01 ===');

console.log('=== Início bônus 02 ===\n');

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

  console.log(numbers);

console.log('\n=== Fim bônus 02 ===');

console.log('=== Início bônus 03 ===\n');

const numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array2 = [];

for (let index = 0; index < numbers2.length; index += 1) {
    if ((index + 1) === numbers2.length) {
        array2.push(numbers2[index] * 2);
    } else {
        array2.push(numbers2[index] * numbers2[index + 1]);
    }
}

  console.log(array2);

console.log('\n=== Fim bônus 03 ===');