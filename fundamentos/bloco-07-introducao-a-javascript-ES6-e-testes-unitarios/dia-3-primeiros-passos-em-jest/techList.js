// Desafio 10
function techList(arrayTech, name) {
  // seu código aqui
  let output = [];
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  arrayTech.sort();
  for (let tech of arrayTech) {
    let temp = {
      tech,
      name,
    };
    output.push(temp);
  }
  return output;
}

module.exports = techList;