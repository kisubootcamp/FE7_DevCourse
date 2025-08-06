// 연습문제
// 1번
/*
- 변수 `a`와 `b`에 각각 `true`와 `false`를 할당하세요.
- `a`와 `b`의 논리 AND 연산 결과를 출력하세요.
- `a`와 `b`의 논리 OR 연산 결과를 출력하세요.
- `a`의 논리 NOT 연산 결과를 출력하세요.
*/

console.log("--1번--");
const a = true;
const b = false;
console.log(a && b);
console.log(a || b);
console.log(!a);

// 2번
/*
- 변수 `x`, `y`, `z`에 각각 임의의 숫자를 할당하세요.
- `x`가 10보다 크고 `y`가 5보다 작은지 확인하는 조건을 작성하고, 결과를 출력하세요.
- `x`가 10보다 크거나 `z`가 3보다 큰지 확인하는 조건을 작성하고, 결과를 출력하세요.
- `y`가 0이 아닌지 확인하는 조건을 작성하고, 결과를 출력하세요.
*/
console.log("--2번--");
const x = 11;
const y = 3;
const z = 72;
console.log(x > 10 && y < 5);
console.log(x > 10 || y > 3);
console.log(y != 0);

// 3번
/*
- 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
- 사용자가 로그인했는지 확인하고, 로그인했다면 "Welcome"을, 그렇지 않다면 "Please log in"을 출력하세요.
- 사용자가 관리자 권한을 가지고 있는지 확인하고, 관리자라면 "Admin access granted"를, 그렇지 않다면 "Admin access denied"를 출력하세요.
- 로그인 여부와 관리자 권한을 모두 확인하여, 로그인하고 관리자라면 "Full access granted"를, 그렇지 않다면 "Restricted access"를 출력하세요.
*/
console.log("--3번--");
const isLoggedIn = true;
const isAdmin = true;
console.log(isLoggedIn ? "Welcome" : "Please log in");
console.log(isAdmin ? "Admin access granted" : "Admin access denied");
console.log(
  isLoggedIn && isAdmin ? "Full access granted" : "Restricted access"
);

// 4번
/*
- 변수 `value1`과 `value2`에 각각 임의의 값을 할당하세요. (예: 숫자, 문자열, `null`, `undefined`)
- 두 변수 중 하나라도 값이 존재하는지 확인하는 조건을 작성하고, 결과를 출력하세요.
- 두 변수 모두 값이 존재하지 않는지 확인하는 조건을 작성하고, 결과를 출력하세요.
*/
console.log("--4번--");
const value1 = "string";
const value2 = null;
console.log(value1 || value2);
console.log(!(value1 && value2));

// 5번
/*
- 변수 `num`에 임의의 숫자를 할당하세요.
- `num`이 0 이상 100 이하인지 확인하는 조건을 작성하고, 결과를 출력하세요.
- `num`이 0 미만이거나 100 초과인지 확인하는 조건을 작성하고, 결과를 출력하세요.
*/
console.log("--5번--");
const num = 95;
console.log(num >= 0 && num <= 100);
console.log(num < 0 && num > 100);
