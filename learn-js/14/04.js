// 표준 내장 객체
// Math

console.log(Math.PI); // 원주율
console.log(Math.abs(-5)); // 절대값
console.log(Math.ceil(1.2)); // 올림
console.log(Math.floor(1.8)); // 내림
console.log(Math.round(1.5)); // 반올림
console.log(Math.max(1, 2, 3)); // 최대값
console.log(Math.min(1, 2, 3)); // 최소값
console.log(Math.random()); // 0~1 사이의 난수
console.log(Math.pow(2, 3)); // 2의 3제곱
console.log(Math.sqrt(16)); // 제곱근
console.log(Math.log(10)); // 자연로그
console.log(Math.log10(100)); // 10을 밑으로 하는 로그
console.log(Math.exp(1)); // e의 1제곱

// 난수
// 0~9 사이의 난수
console.log(Math.random() * 10); // 0~10 사이의 난수

// 0~9 사이의 정수 난수 생성 함수
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(0, 9)); // 0~9 사이의 정수 난수
