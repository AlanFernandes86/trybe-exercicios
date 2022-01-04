let secretKeys = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

function encode(text) {
  
  let textArray = text.split('');

  textArray.forEach((key, index) => {
    if (secretKeys[key]) {
      textArray.splice(index, 1, secretKeys[key]);
    }
  });  

  return textArray.join('');
}

function decode(encodedText) {
  
  let textArray = encodedText.split('');

  textArray.forEach((char, index) => {
    const key = Object.entries(secretKeys).find(([_, value]) => char === value.toString());
    if (key) textArray.splice(index, 1, key[0]); 
  })  

  return textArray.join('');
}

module.exports = {
  encode,
  decode,
};


