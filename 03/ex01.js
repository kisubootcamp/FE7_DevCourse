// 1. 정답
const a = true;
const b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);

// 2. 코드 수정
const x = 3;
const y = 22;
const z = 5;

// x > 10 && y < 5 ? console.log(true) : console.log(false);
console.log(x > 10 && y < 5);
// x > 10 || z > 3 ? console.log(true) : console.log(false);
console.log(x > 10 || z > 3);
// y !== 0 ? console.log(true) : console.log(false);
console.log(y !== 0);

// 3. 코드 수정
const isLoggedIn = true;
const isAdmin = false;

// isLoggedIn ? console.log("Welcome") : console.log("Please log in");
console.log(isLoggedIn ? "Welcome" : "Please log in");

// isAdmin
//   ? console.log("Admin access granted")
//   : console.log("Admin access denied");
console.log(isAdmin ? "Admin access granted" : "Admin access denied");

// isLoggedIn && isAdmin
//   ? console.log("Full access granted")
//   : console.log("Restricted access");
console.log(
  isLoggedIn && isAdmin ? "Full access granted" : "Restricted access"
);

// 4. 하나 틀림
const value1 = 3;
const value2 = "Jeong";
// value1 || value2 ? console.log("하나라도 값이 존재") : null;
console.log(
  value1 || value2 ? "하나라도 값이 존재" : "하나라도 값이 존재하지 않음"
);
// value1 && value2 ? console.log("모두 값이 존재") : null;
console.log(!value1 && !value2 ? "값이 존재하지 않음" : "값이 하나라도 존재함");

// 5.
const num = 44;
// num >= 0 && num <= 100 ? console.log(true) : console.log(false);
console.log(num >= 0 && num <= 100);
// num < 0 || num > 100 ? console.log(true) : console.log(false);
console.log(num < 0 || num > 100);

let obj = {
  name: "철수",
  age: 20,
  gender: "male",
};
