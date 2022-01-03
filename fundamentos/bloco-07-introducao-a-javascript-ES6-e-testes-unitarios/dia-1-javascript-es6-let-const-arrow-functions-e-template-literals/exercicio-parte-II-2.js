const longestWord = (prase) => {

  const words = prase.split(' ');

  let _index = 0;
  let letters = 0; 

  words.forEach((word, index) => {
    if (word.length > letters) {
      _index = index;
      letters = word.length;
    }
  })

  return words[_index]; 
  
}

const result = longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");
console.log(result);