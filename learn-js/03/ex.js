// 1. 논리 연산자 기본
const a = true;
const b = false;
console.log(a&&b);
console.log(a||b);
console.log(!a);

// 2. 여러 조건 결합
const x = 40;
const y = 3;
const z = -12;
console.log(x > 10 && y < 5);
console.log(x > 10 || z > 3);
console.log(y !== 0);

// 3. 사용자 로그인 및 권한 확인
const isLoggedIn = true;
const isAdmin = false;
console.log(isLoggedIn ? "Welcome" : "Plaese log in");
console.log(isAdmin ? "Admin access granted" : "Admin access denied");
console.log(isLoggedIn && isAdmin ? "Full access granted" : "Restricted access");

// 4. 값의 존재 확인
const value1 = null;
const value2 = 4;
console.log(value1 != null || value2 != null);
console.log(value1 == null && value2 == null);

// 5. 범위 확인
const num = 43;
console.log(num >= 0 && num <= 100);
console.log(num < 0 || num > 100);