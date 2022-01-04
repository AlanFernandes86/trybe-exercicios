function hydrate(drinks) {

  let reg = /\d+/g;
  let numbers = drinks.match(reg).map(Number);
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }
  return (sum === 1) ? `${sum} copo de água` : `${sum} copos de água`;
}

module.exports = hydrate;