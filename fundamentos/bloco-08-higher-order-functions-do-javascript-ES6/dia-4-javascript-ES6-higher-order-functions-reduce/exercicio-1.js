const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, val) => {
    acc = acc.concat(val);
    return acc;
  })
}

console.log(flatten());


