const n = 9;

for (let i = 1; i <= n; i++) {
  if (i % 2 != 0) {
    let x = "";

    let marginLeft = (n - i) / 2;
    let marginRight = n - marginLeft;

    for (let j = 1; j <= n; j++) {

      if (j > marginLeft && j <= marginRight) {
        x += "*";
      } else {
        x += " ";
      }
      
    }

    console.log(x);
  }
}

/* 
distância da margem esquerda e direita que possuí espaços
preciso somente das linhas ímpares
*/
