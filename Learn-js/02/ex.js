// 2. 자료형
// 1번
let num = 42; // number
console.log(typeof num);

let uname2 = "John"; // string
console.log(typeof uname2);

let isTrue = true; // boolean
console.log(typeof isTrue);

let person = { name: "Alice", age: 30 }; // object
console.log(typeof person);

let fruits = ["apple", "banana", "orange"]; // *object
console.log(typeof fruits);

console.log(typeof undefined); // undefined
console.log(typeof null); // *object

// ---------------------------------------------------------------------------
// 2번
let length = 16; // number
let lastName = "Brown"; // string
let score = [10, 20]; // object
let x = {
  firstName: "Nick",
  lastName: "Doe",
}; // object

console.log(typeof length);
console.log(typeof lastName);
console.log(typeof score);
console.log(typeof x);

console.log(typeof ("A" + "B"));
console.log(typeof "A" + "B");

// ---------------------------------------------------------------------------
// 3. 연산자
// 3-1. 산술 연산자
let a = 10,
  b = 5;

let sum = a + b,
  sub = a - b,
  mul = a * b,
  div = a / b;
console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);

// ---------------------------------------------------------------------------
// 3-2. 증감 연산자
let y = 7;
console.log(y);
y++;
console.log(y);

console.log(y);
y--;
console.log(y);

console.log(y);
++y;
console.log(y);

console.log(y);
--y;
console.log(y);

// ---------------------------------------------------------------------------
// 3-3. 복합 대입 연산자
let x2 = 20;
x2 += 10;
console.log(x2);
x2 -= 5;
console.log(x2);
x2 /= 2;
console.log(x2);
x2 *= 3;
console.log(x2);

// ---------------------------------------------------------------------------
// 3-4. 비교 연산자
const age1 = 25,
  age2 = 30;
console.log(age1 > age2);
console.log(age1 === age2);

// ---------------------------------------------------------------------------
// 3-5. 삼항 연산자
// 1. 숫자비교
const num2 = 0;
const result = num2 === 0 ? "Zero" : num2 > 0 ? "Positive" : "Negative";
console.log(result);

// 2. 최댓값 찾기
const aa = 5,
  bb = 2,
  cc = 8;
const max = aa > bb ? (aa > cc ? "aa" : "cc") : bb > cc ? "bb" : "cc";
console.log(max);

// 3. 짝수 홀수 확인
const number = 21;
const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd);

// 4. 로그인 확인
const isLoggedIn = true;
// const message = isLoggedIn === true ? "Welcome" : "Please log in";
// 0, false, null, undefined => 거짓(false)
const message = isLoggedIn ? "Welcome" : "Please log in";
console.log(message);

// 5. 성인 확인
const age = 27;
const adultOrMinor = age >= 18 ? "Adult" : "Minor";
console.log(adultOrMinor);

// ---------------------------------------------------------------------------
// 3-6. 논리 연산자 (자습)
// 1. 논리 연산자 기본
const aaa = true,
  bbb = false;

const andResult = aaa && bbb;
console.log(andResult);

const orResult = aaa || bbb;
console.log(orResult);

const notResult = !aaa;
console.log(notResult);

// 2. 여러 조건 결합
const xx = 1,
  yy = 12,
  zz = 6;

const xyResult = xx > 10 && yy < 5;
console.log(xyResult);
const xzResult = xx > 10 || zz > 3;
console.log(xzResult);
const yResult = !yy;
console.log(yResult);

// 3. 사용자 로그인 및 권한 확인
const isLoggedIn2 = true,
  isAdmin = true;
const message2 = isLoggedIn2 ? "Welcome" : "Please log in";
const message3 = isAdmin ? "Admin access granted" : "Admin access denied";
const mResult =
  isLoggedIn2 && isAdmin ? "Full access granted" : "Restricted access";
console.log(mResult);

// 4. 값의 존재 확인
const value1 = null,
  value2 = "JS";
const orResult2 = !!value1 || !!value2;
const andResult2 = !!value1 && !!value2;
console.log(orResult2);
console.log(andResult2);

// 5. 범위 확인
const num3 = 85;
const innerNum = num3 >= 0 && num3 <= 100;
const overNum = num3 < 0 || num3 > 100;
console.log(innerNum);
console.log(overNum);
