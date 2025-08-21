// 문제 1
for (let i = 1; i < 10; i++) {
  console.log(i);
}

// 문제 2
console.log("=========");
let sum = 0;
for (let i = 1; i < 10; i++) {
  sum += i;
}
console.log(sum);

// 문제 3
console.log("=========");
let add = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) console.log(i);
}

// 문제 4
console.log("=========");
let numArr = [10, -10, 20, -30, 40];
let summ = 0;
for (let i in numArr) {
  if (numArr[i] > 0) {
    summ += numArr[i];
  }
}
console.log(summ);

// 문제 5
console.log("=========");
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} 짝수`);
  } else console.log(`${i} 홀수`);
}

// 문제 6
console.log("=========");
const numArray = [7, 2, 9, 4, 5];
let max = 0;
for (let i in numArray) {
  if (max < numArray[i]) {
    max = numArray[i];
  }
}
console.log(max);

// 문제 7
console.log("=========");
const arr = ["a", "b", "c", "d", "e"];
let newArr = [];
for (let i in arr) {
  if (i % 2 === 0) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);

// 문제 8
console.log("=========");
for (let i = 3; i <= 3; i++) {
  for (let j = 1; j <= 9; j++) console.log(i + "X" + j + "=" + i * j);
}
console.log("=========");
