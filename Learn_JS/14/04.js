// ceil - 옮림
// floor - 버림
// radnom - 반올림

// 0 ~ 9
// 0 < x < 1
// 0.999999 = 10 * 9.99999
// 0 - 999, Math.floor(Math.random() * 10000)
// const numArr = [1, 2, 3, 4];

// 15- 25
Math.floor(Math.random() * (B + A + 1 )) + A
console.log(Math.floor(Math.random() * (25 - 15 + 1)) + 15);
/// consolde logister (Math.fkiir (Math.random) * 4); ?? 예 : 0 ~ 9 

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10)); // 1과 10 사이의 랜덤 정수