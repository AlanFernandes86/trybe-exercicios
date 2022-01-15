const skills = ['javascript', 'html5', 'css3', 'git e github', 'DOM'];

const changeTheX = function(text) {
const xText = 'Tryber x aqui!';
const newText = xText.replace(/x/, text);
return newText;
};

function printSkills(skills, callback) {
  let response = callback('Bebeto');
  response = `${response} Minhas cinco principais habilidades são:`
  skills.sort().forEach((item) => {
    response += `\n${item}`;
  });
  return response;
}

console.log(printSkills(skills, changeTheX));
