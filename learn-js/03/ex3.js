//반복문 쉬움
//1
// for (let i = 1; i < 10; i++) console.log(i);

//2
let x = 0;
for (let i = 1; i < 10; i++) {
  x += i;
}
console.log(x);

//3
let i = 1;
while (i <= 100) {
  if (i % 2 == 0) console.log(i);
  i++;
}

//4
let numArr = [10, -10, 20, -30, 40];
let hap = 0;
for (const i of numArr) if (i > 0) hap += i;
console.log(hap);

//5
for (let i = 0; i <= 15; i++) {
  if (i % 2 == 0) console.log(i + " 짝수");
  else console.log(i + " 홀수");
}

//6
const numArr2 = [7, 2, 9, 4, 5];
let max = 0;
for (elm of numArr2) {
  if (elm > max) max = elm;
}

//7
const arr = ["a", "b", "c", "d", "e"];
let stringArr = [];
for (let i = 0; i < arr.length; i += 2) stringArr.push(arr[i]);

//8
for (let i = 1; i <= 9; i++) {
  console.log(`3 * ${i} = ${3 * i}`);
}
