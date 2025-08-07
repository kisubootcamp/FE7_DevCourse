/* 3-6 논리 연산자 연습문제 */

// 1. 논리 연산자 기본
console.log("----------- 1. 논리 연산자 기본 -----------");
const a = true;
const b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);

// 2. 여러 조건 결합
console.log("----------- 2. 여러 조건 결합 -----------");
const x = 3;
const y = 5;
const z = 13;

const result1 = [x > 10 && y < 5, x > 10 || z > 3, !(y === 0)];

for (let i = 0; i < result1.length; i++) console.log(result1[i]);

// 3. 사용자 로그인 및 권한 확인
console.log("----------- 3. 사용자 로그인 및 권한 확인 -----------");
const isLoggedIn = true;
const isAdmin = false;

const loginMessage = [
  isLoggedIn ? "Welcome" : "Please log in",
  isAdmin ? "Admin access granted" : "Admin access denied",
  isLoggedIn
    ? isAdmin
      ? "Full access granted"
      : "Restricted access"
    : "Please log in",
];

for (let i = 0; i < loginMessage.length; i++) console.log(loginMessage[i]);

// 4. 값의 존재 확인
console.log("----------- 4. 값의 존재 확인 -----------");
const value1 = "hello";
const value2 = undefined;

console.log(
  (value1 !== null && value1 !== undefined) ||
    (value2 !== null && value2 !== undefined)
);
console.log(
  value1 == null && value1 == undefined && value2 == null && value2 == undefined
);

// 5. 범위 확인
console.log("----------- 5. 범위 확인 -----------");
const num = 37;

console.log(num >= 0 && num <= 100);
console.log(num < 0 || num > 100);
