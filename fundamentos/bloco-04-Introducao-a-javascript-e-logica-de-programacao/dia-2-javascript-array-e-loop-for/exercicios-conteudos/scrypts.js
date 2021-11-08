console.log('=== Início for/of ===\n');

const menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
const menuServices = menu[1];

console.log(menuServices);

console.log('\n=== Fim for/of ===');

console.log('=== Início Arrays exercício 2 ===\n');

const menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
const indexOfPortfolio = menu2.indexOf('Portfólio');

console.log(indexOfPortfolio);

console.log('\n=== Fim Arrays exercício 2 ===');

console.log('=== Início Arrays exercício 3 ===\n');

const menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push('Contato');

console.log(menu3);

console.log('\n=== Fim Arrays exercício 3 ===');

console.log('=== Início For exercício 1 ===\n');

const groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i += 1) {
    console.log(groceryList[i]);
}

console.log('\n=== Fim For exercício 1 ===');

console.log('=== Início for/of ===\n');

const names = ['João', 'Maria', 'Antônio', 'Margarida'];

// eslint-disable-next-line prefer-const
for (let name of names) {
    console.log(name);
}

console.log('\n=== Fim for/of ===');