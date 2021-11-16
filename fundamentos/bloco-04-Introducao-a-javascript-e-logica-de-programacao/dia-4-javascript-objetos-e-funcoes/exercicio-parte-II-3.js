const arrayTest = [2, 4, 6, 7, 10, 0, -3]; 

function smallNumber(array){
    let indexSmall = 0;
    let value = array[0];

    for (let index in array){
        if(array[index] < value){
            value = array[index];
            indexSmall = index;
        }
    }
    return indexSmall;
}

console.log(smallNumber(arrayTest))