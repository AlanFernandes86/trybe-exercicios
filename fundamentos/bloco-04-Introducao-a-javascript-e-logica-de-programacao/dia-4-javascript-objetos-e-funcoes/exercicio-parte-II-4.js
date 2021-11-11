const arrayTest = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggestName(names){
    let biggest = '';

    for (let nome of names) {
        if (nome.split('').length > biggest.split('').length) {
        biggest = nome;
        }
    }

    return biggest;
}

console.log(biggestName(arrayTest));