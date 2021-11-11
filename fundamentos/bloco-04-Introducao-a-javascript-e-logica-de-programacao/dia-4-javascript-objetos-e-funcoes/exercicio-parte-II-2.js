const arrayTest = [2, 3, 6, 7, 10, 1];

function biggerNumber(array){
    let indexBiggest = 0;
    let value = 0;
    for (let index in array){
        if(array[index] > value){
            value = array[index];
            indexBiggest = index;
        }
    }
    return indexBiggest;
}

console.log(biggerNumber(arrayTest))