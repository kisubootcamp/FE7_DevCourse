// var, let, const
// var - ES5
// let, const - ES6 블록 범위 스코프

let n = 0;

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    for (let k = 1; k <= 3; k++) {
      n++;
    }
  }
}

console.log(n);
