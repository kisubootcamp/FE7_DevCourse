// 쉬움

// 1.
for (let i = 1; i <= 9; i++) {
  console.log(i);
}

console.log("=======================");

// 2.
let total = 0;
for (let i = 1; i <= 9; i++) {
  total += i;
}
console.log(total);

console.log("=======================");

// 3.
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) continue;
  console.log(i);
}

console.log("=======================");

// 4.

let numArr = [10, -10, 20, -30, 40];
let totalNumArr = 0;
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] > 0) totalNumArr += numArr[i];
}
console.log(totalNumArr);

console.log("=======================");

// 5.
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) console.log(`${i} 짝수`);
  if (i % 2 === 1) console.log(`${i} 홀수`);
}

console.log("=======================");

// 6.
let temp = -Infinity;
const numArr2 = [7, 2, 9, 4, 5];

for (let i = 0; i < numArr2.length; i++) {
  if (numArr2[i] > temp) temp = numArr2[i];
}
console.log(temp);

console.log("=======================");

// 7.
const alphabet = ["a", "b", "c", "d", "e"];
const newArr = [];

for (let i = 0; i < alphabet.length; i++) {
  if (i % 2 === 0) newArr.push(alphabet[i]);
}
console.log(newArr);

console.log("=======================");

// 8.
for (let i = 1; i <= 9; i++) {
  const gugudan = 3 * i;
  console.log(`3 * ${i} = ${gugudan}`);
}
