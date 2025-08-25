// Math 내장 객체
// ceil - 올림
// floor - 버림
// round - 반올림

// console.log(Math.round(4.4)); // 5

// 0 < x < 1
// 0 이상 9 미만
// A 이상 B 이하 뽑을 때 공식
// Math.floor(Math.random * (B - A + 1)) + A;
// +1을 하면 이하, +1을 안 하면 미만

const numArr = [1, 2, 3, 4];
console.log(numArr[Math.floor(Math.random() * numArr.length)]);
console.log(Math.floor(Math.random() * (25 - 15 + 1)) + 15);

// console.log(Math.floor(Math.random() * 4)); 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
console.log(getRandomInt(1, 10)); // 1과 10 사이의 랜덤 정수

