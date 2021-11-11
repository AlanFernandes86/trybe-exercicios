
function verifyEnding(word, end){
    let wordToArray = word.split('');
    let endToArray = end.split('');
    let isEquals = true;

    if (endToArray.length < wordToArray.length){

        let j = wordToArray.length - 1;

        for(let i = endToArray.length -1; i >= 0 ; i -= 1){
            
            if(endToArray[i] != wordToArray[j]){
                isEquals = false;
            }
            j -= 1;
        }
    }

    return isEquals;
}

console.log(verifyEnding('trybe', 'ybe'));
console.log(verifyEnding('joaofernando', 'fernan'));