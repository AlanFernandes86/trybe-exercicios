function runExercises() {

    for (var i = 0; i < functions.length; i++){
        console.log(`=== Início exercício ${ i + 1 } ===\n`);

        functions[i]();

        console.log(`\n=== Fim exercício ${ i + 1 } ===`);
    } 

}

let exercise01 = function() {
  const a = 79;
  const b = 86;

  const soma = a + b;
  const subtracao = a - b;
  const multiplicacao = a * b;
  const divisao = a / b;
  const modulo = a % b;

  console.log(
    `Soma = ${soma}` +
      `\nSubtração = ${subtracao}` +
      `\nMultiplicação = ${multiplicacao}` +
      `\nDivisão = ${divisao}` +
      `\nMódulo = ${modulo}`
  );
}

let exercise02 = function() {
  const num1 = 1789;
  const num2 = 2697;

  let maior;

  if (num1 > num2) {
    maior = num1;
  } else {
    maior = num2;
  }

  console.log(`Maior número = ${maior}`);
}

let exercise03 = function() {
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
}

let exercise04 = function() {
  const valor = -59741682;
  let sinal = "zero";

  if (valor < 0) {
    sinal = "negative";
  } else if (valor > 0) {
    sinal = "positive";
  }

  console.log(`This number is ${sinal}`);
}

let exercise05 = function() {
    const A = 60;
    const B = 90;
    const C = 30;
    const sumABC = A + B + C;
    
    let isTriangle = sumABC === 180 && A > 0 && B > 0 && C > 0;
    
    console.log(`is this a triangle? ${isTriangle}`);
}

let functions = [exercise01, exercise02, exercise03, exercise04, exercise05];

runExercises();