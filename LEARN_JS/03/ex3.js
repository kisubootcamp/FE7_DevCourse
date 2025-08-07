// 문제 1번 - for
let n = 10;
let arr = [0, 1];
for (let i = 2; i < n; i++) {
  arr.push(arr[i - 2] + arr[i - 1]);
}
console.log(arr);

// 문제 1번 - while
arr = [0, 1];
let i = 2;
while (arr.length < n) {
  arr.push(arr[i - 2] + arr[i - 1]);
  i++;
}
console.log(arr);

// 문제 1번 - do..while
i = 2;
arr = [0, 1];
do {
  arr.push(arr[i - 2] + arr[i - 1]);
  i++;
} while (arr.length < n);
console.log(arr);
