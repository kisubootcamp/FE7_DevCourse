// Math 객체
// ceil 올림 floor 버림 round 반올림

// A이상 B이하 정수
// Math.floor(Math.random() * (B - A + 1)) + A;
Math.floor(Math.random() * (15 - 5 + 1)) + 5; // 5 이상 ~ 15 이하 정수

// A이상 B미만 정수
//Math.random() * (B - A) + A;
Math.random() * (4.5 - 1.5) + 1.5; // 1.5 이상 ~ 4.5 미만 실수

// floor, random, max, min => 정말 자주 사용함

const arr = [1, 2, 3, 4, 5];
console.log(Math.max(...arr)); // 5
console.log(Math.min(...arr)); // 5
