let isPrimo = true;
let primo = 349;
let not = '';

for (let i = 2; i < primo; i++){
    if (primo % i === 0){
        isPrimo = false;
        not = ' não';
    }
}

console.log(`${primo}${not} é um número primo.`);