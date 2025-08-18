// 연습문제 - 쉬움
// 복습 완

// 1.
for (let i = 1; i <= 9; i++) {
  console.log(i);
}

// 2.
let sum = 0;
// let sum; 선언만으로는 실행이 안 되는 이유 :: NaN발생, 0이 없으면 undefined, undefined+i 이므로 계산 불가능
for (let i = 1; i <= 9; i++) {
  sum += i;
}
console.log(sum);

// 3.
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

// 4.
const numArr = [10, -10, 20, -30, 40];
let sumArr = 0;
for (let i = 0; i <= numArr.length; i++) {
  if (numArr[i] > 0) sumArr += numArr[i];
}
console.log(sumArr);

// 5.
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) console.log(i, "짝수");
  else if (i % 2 !== 0) console.log(i, "홀수");
}

// 6.
// 주어진 숫자 배열의 최댓값 찾기
const newnumArr = [7, 2, 9, 4, 5];
let max = newnumArr[0];
for (let i = 0; i <= newnumArr.length; i++) {
  if (max < newnumArr[i]) max = newnumArr[i];
}
console.log(max);

// 7. *
const arr = ["a", "b", "c", "d", "e"];
let arrNew = [];
for (let i = 0; i <= arr.length; i++) {
  //i=0~5
  if (i % 2 === 0) arrNew.push(arr[i]);
  // 왜 거꾸로지... i=1,3,5가 출력됨
}
console.log(arrNew);

// 8.
for (let i = 1; i <= 9; i++) {
  //console.log(i, "*", 3, "=", i * 3);
  console.log(`${i} * 3 = ${i * 3}`);
}
