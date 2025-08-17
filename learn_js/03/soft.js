// 1
for (let i = 1; i <= 9; i++) console.log(i);

// 2
let sum = 0;
for (let i = 1; i <= 9; i++) {
  sum += i;
}

// 3
for (let i = -1; i <= 100; i++) {
  if (i % 2 === 0 && !(i === 0)) console.log(i);
}

// 4
let sum1 = 0;
let numArr = [10, -10, 20, -30, 40];
for (const v of numArr) {
  if (v > 0) sum1 = v;
}
console.log(sum1);

// 5
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} 짝수`);
  } else {
    console.log(`${i} 홀수`);
  }
}

// 6
const numArr1 = [7, 2, 9, 4, 5];
let max = numArr1[0];
for (const v of numArr1) {
  if (max < v) max = v;
}
console.log(max);

// 7
const arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = [];
for (const i in arr) {
  if (i % 2 === 0) {
    arr2.push(arr[i]);
  }
}

// 8
for (let i = 1; i <= 9; i++) {
  console.log(`3 X ${i} = ${3 * i}`);
}
