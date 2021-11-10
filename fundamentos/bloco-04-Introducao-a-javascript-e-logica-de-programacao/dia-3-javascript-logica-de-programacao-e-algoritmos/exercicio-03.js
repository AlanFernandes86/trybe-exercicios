const n = 5;

for (let i = 0; i < n; i++) {
    
    let x = '';

    for (let j = 0; j < n ; j++) {
       if (j >= n - i - 1){
        x += '*';
       } else {
           x += ' ';
       }           
    }

    console.log(x);    
}