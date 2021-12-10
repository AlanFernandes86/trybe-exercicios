// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const wakeUp = () => {
  return 'Acordando!!';
}

const coffeeBreak = () => {
  return 'Bora tomar café!!';
}

const sleepTime = () => {
  return 'Partiu dormir!!';
}

/* const doingThings = (func) => {
  console.log(func());
} */

function doingThings(func) {
  console.log(func()); 
}

// Ao chamar a função doingThings:
// doingThings(wakeUp);
doingThings(wakeUp());