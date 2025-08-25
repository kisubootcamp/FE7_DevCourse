// ceil - 올림
// floor - 버림
// round - 반올림

// 0 ~ 9

// 0 < x < 1
// 0.9999999 * 10 = 9.999999
// 0 - 999 , Math.floor(Math.random() * 1000)
// Math.floor(Math.random() * (B - A + 1)) + A;
// Math.random() * (B - A) + A;
// 15 - 25
console.log(Math.floor(Math.random() * (25 - 15)) + 15);
// const numArr = [1, 2, 3, 4];
// console.log(numArr[Math.floor(Math.random() * numArr.length)]);
// console.log(Math.floor(Math.random() * 4)); // 예: 0 - 9

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10)); // 1과 10 사이의 랜덤 정수
