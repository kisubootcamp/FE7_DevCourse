// 1
for (let i = 1; i <= 9; i++) {
  console.log(i);
}

// 2
let sum = 0;
for (let i = 1; i <= 9; i++) {
  sum += i;
}
console.log(`1부터 9합: ${sum}`);

// 3
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 4.
const numArr = [10, -10, 20, -30, 40];
let sumQ4 = 0;
for (const num of numArr) {
  if (num > 0) {
    sumQ4 += num;
  }
}
console.log(sumQ4);

// 5.
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} 짝수`);
  } else {
    console.log(`${i} 홀수`);
  }
}

// 6.
const numArr2 = [7, 2, 9, 4, 5];
let max = numArr2[0];
for (const num of numArr2) {
  if (num > max) {
    max = num;
  }
}
console.log(max);

// 7
const arr = ["a", "b", "c", "d", "e"];
const newArr = [];
for (const index in arr) {
  if (index % 2 === 0) {
    newArr.push(arr[index]);
  }
}
console.log(newArr);

// 8
for (let i = 1; i <= 9; i++) {
  console.log(`3 * ${i} = ${3 * i}`);
}
