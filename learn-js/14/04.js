//Math 객체
// 유틸리티 객체

//math.PI

//랜덤 만들기 (공식을 외워야함)
console.log(Math.random()); // 예: 0.123456789

// Math.floor(Math.random() * (B - A + 1)) + A; // A이상 B이하 정수
console.log(Math.floor(Math.random() * (15 - 5 + 1)) + 5); // 5 이상 ~ 15 이하 정수

// Math.random() * (B - A) + A; // A이상 B미만 실수
console.log(Math.random() * (4.5 - 1.5) + 1.5); // 1.5 이상 ~ 4.5 미만 실수
