const n = 5;

for (let i = 0; i < n; i++) {
  let x = "";

  for (let j = n; j > 0; j--) {
    if (j > i + 1) {
      x += " ";
    } else {
      x += "*";
    }
  }

  console.log(x);
}
