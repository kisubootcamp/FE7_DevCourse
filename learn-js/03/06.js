//1
let n = 10;
let result = [];

for (let i = 1; i <= n; i++) {
  if (i === 1) {
    result.push(1);
  } else if (i === 2) {
    result.push(1);
  } else {
    result.push(result[i] + result[i - 1]);
  }
}

console.log(result);
//1.
