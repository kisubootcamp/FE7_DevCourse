// 03-6. 논리연산자 연습문제

// 1. 논리 연산자 기본
const a = true;
const b = false;
console.log(a && b);
console.log(a || b);
console.log(!a);

// 2. 여러 조건 결합
const x = 3;
const y = 6;
const z = 9;

let ans = x > 10 && y < 5;
console.log(ans);

ans = x > 10 || z > 3;
console.log(ans);

ans = y !== 0;
console.log(ans);

// 3. 사용자 로그인 및 권한 확인
const isLoggedIn = true;
const isAdmin = false;

console.log(isLoggedIn ? "Welcome" : "Please log In");
console.log(isAdmin ? "Admin access granted" : "Admin access denied");
console.log(
  isLoggedIn && isAdmin ? "Full access granted" : "Restricted access"
);

// 4. 값의 존재 확인
const value1 = null;
const value2 = "Hi";

console.log(value1 || value2);
console.log(!value1 && !value2);

// 5. 범위 확인
const num = 22;
console.log(num >= 0 && num <= 100);
console.log(num < 0 || num > 100);
