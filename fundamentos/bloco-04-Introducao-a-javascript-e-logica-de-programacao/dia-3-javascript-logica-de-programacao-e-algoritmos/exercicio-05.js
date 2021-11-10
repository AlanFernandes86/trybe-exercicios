const n = 7;

for (let i = 1; i <= n; i++) {
  let x = '';

  if (i % 2 != 0) {
    let marginLeft = (n - i) / 2;
    let marginRight = n - marginLeft;

    for (let j = 1; j <= n; j++) {

      if (i != n) {
        if (j > marginLeft && j <= marginRight) {

          if(j > marginLeft +1 && j < marginRight) {
            x += ' ';
          } else {
            x += '*';
          }        
  
        } else {
          x += ' ';
        }
      } else {
          x += '*';
      }  
          
    }
    console.log(x);
  }
  
}
