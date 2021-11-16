const n = 5;

function sum(number){
    let result = 0;
    for(let i = 0; i < n; i++){
        result += i + 1;
    }
    return result;
}

console.log(sum(n));