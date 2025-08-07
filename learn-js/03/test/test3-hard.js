let pivo = [0, 1];
let n = 10;
for (i = 1; i < n - 1; i++) {
  pivo[i + 1] = pivo[i] + pivo[i - 1];
}
console.log(`피보나치 수열(${n}항):`, pivo);

let start = 1,
  end = 100;
let result = [];
for (i = start + 1; i <= end; i++) {
  for (j = 2; j < i / 2; j++) {
    if (i % j == 0) break;
  }
  if(j > i / 2) result.push(i);
}
console.log(result);

const numbers = [5, 10, 15, 20, 25];
let sum = 0;
for(num of numbers){
    sum += num;
}
console.log(sum);

const str = "Hello, World!";
let answer2 = "";
for(c = str.length - 1; c >= 0; c--){
    answer2 += str[c];
}

let fn = 5;
let fac = fn;
for(i = fn - 1; i >= 1; i--){
    fac *= i;
}
console.log(fac);

let s = 100;
while(s <= 999){
    let temp = s;
    
    s++;
}