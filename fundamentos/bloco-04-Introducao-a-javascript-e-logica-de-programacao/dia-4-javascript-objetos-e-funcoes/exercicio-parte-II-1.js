
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
function isPalindromo(palavra) {
    let palavraInvertida = palavra.split('').reverse().join('');
    return palavra === palavraInvertida;
}

console.log(isPalindromo('arara'));
