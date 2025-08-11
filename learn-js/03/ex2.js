// Q1

const n = 10;
const pivo = [0, 1];

for (i = 0; i < n - 2; i++) {
  pivo.push(pivo[i] + pivo[i + 1]);
}

console.log(pivo);

// Q2
const q2 = [];
for (i = 2; i < 101; i++) {
  let isSosu = true;
  for (j = 2; j < i; j++) {
    if (i % j == 0) {
      isSosu = false;
      break;
    }
  }
  if (isSosu) q2.push(i);
}
console.log(q2);

// Q3
const numbers = [5, 10, 15, 20, 25];
let q3 = 0;
for (i of numbers) {
  q3 += i;
}
console.log(q3);

// Q4
const str = "Hello, World!";
let reversed = "";
for (i = str.length; i--; i >= 0) {
  reversed += str[i];
}
console.log("뒤집힌 문자열:", reversed); // "!dlroW ,olleH"

// Q5
let n5 = 5;
let q5 = 1;
for (i = 1; i <= n5; i++) {
  q5 *= i;
}

console.log(`${n5}의 팩토리얼:`, q5); // 출력 120

// Q6
for (let i = 100; i < 1000; i++) {
  let num = i + "";
  result = num[0] ** 3 + num[1] ** 3 + num[2] ** 3;
  if (result == i) console.log(i);
}
