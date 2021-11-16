let arrayTest = [2, 3, 2, 5, 8, 2, 3];

function repeatNumber(array) {

    let mostRepeated = 0;
    let repeated = 0;

    for (let number of array) {
        let times = 0;

        for (let check of array){
           if (number === check){
               times += 1;
           }
        }
        
        if (times > repeated){
            repeated = times;
            mostRepeated = number;
        }
    }

    return mostRepeated;

}

console.log(repeatNumber(arrayTest));