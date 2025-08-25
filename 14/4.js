// ceil - 올림
// floor - 버림
// round - 반올림

// 0 ~ 9

// 0 <= x < 1
// 0.9999999 * 10 = 9.999999
// Math.floor(Math.random() * (B - A + 1)) + A; -> A이상 B이하의 데이터를 가져오는 공식
// Math.floor(Math.random() * (B - A)) + A; -> A이상 B미만의 데이터를 가져오는 공식

console.log(Math.floor(Math.random() * (25 - 15)) + 15);

// const numArr = [1, 2, 3, 4];
// console.log(numArr[Math.floor(Math.random() * numArr.length)]);

function getRandomInt(min, max) {}
