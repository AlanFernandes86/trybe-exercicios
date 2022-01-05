function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num);
}

console.log(sum(35, 24, 34, 78));