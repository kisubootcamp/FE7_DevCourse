// ## 연습문제

// 1. 논리 연산자 기본
// - 변수 `a`와 `b`에 각각 `true`와 `false`를 할당하세요.
// - `a`와 `b`의 논리 AND 연산 결과를 출력하세요.
// - `a`와 `b`의 논리 OR 연산 결과를 출력하세요.
// - `a`의 논리 NOT 연산 결과를 출력하세요.

const a = true;
const b = false;
console.log(a && b);
console.log(a || b);
console.log(!a);

// 1. 여러 조건 결합
// - 변수 `x`, `y`, `z`에 각각 임의의 숫자를 할당하세요.
// - `x`가 10보다 크고 `y`가 5보다 작은지 확인하는 조건을 작성하고, 결과를 출력하세요.
// - `x`가 10보다 크거나 `z`가 3보다 큰지 확인하는 조건을 작성하고, 결과를 출력하세요.
// - `y`가 0이 아닌지 확인하는 조건을 작성하고, 결과를 출력하세요.

const x = 3;
const y = 8;
const z = 5;
console.log(x > 10 && y < 5);
console.log(x > 10 || z < 3);
console.log(y !== 0);

// 3. 사용자 로그인 및 권한 확인

// - 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
// - 사용자가 로그인했는지 확인하고, 로그인했다면 "Welcome"을, 그렇지 않다면 "Please log in"을 출력하세요.
// - 사용자가 관리자 권한을 가지고 있는지 확인하고, 관리자라면 "Admin access granted"를, 그렇지 않다면 "Admin access denied"를 출력하세요.
// - 로그인 여부와 관리자 권한을 모두 확인하여, 로그인하고 관리자라면 "Full access granted"를, 그렇지 않다면 "Restricted access"를 출력하세요.

const isLoggedIn = true;
const isAdmin = false;
console.log(isLoggedIn ? "Welcome" : "Please log in");
console.log(isAdmin ? "Full access granted" : "Restricted access");

// 4. 값의 존재 확인

// - 변수 `value1`과 `value2`에 각각 임의의 값을 할당하세요. (예: 숫자, 문자열, `null`, `undefined`)
// - 두 변수 중 하나라도 값이 존재하는지 확인하는 조건을 작성하고, 결과를 출력하세요.
// - 두 변수 모두 값이 존재하지 않는지 확인하는 조건을 작성하고, 결과를 출력하세요.

const value1 = "23123";
const value2 = null;

console.log(!!value1 || !!value2);
console.log(value1 || value2 ? "값이 존재함" : "값이 존재하지 않음");
console.log(!value1 && !value2);
console.log(!value1 && !value2 ? "값이 하나라도 존재함" : "값이 존재하지 않음");

// 1. 범위 확인
// - 변수 `num`에 임의의 숫자를 할당하세요.
// - `num`이 0 이상 100 이하인지 확인하는 조건을 작성하고, 결과를 출력하세요.
// - `num`이 0 미만이거나 100 초과인지 확인하는 조건을 작성하고, 결과를 출력하세요.

const num = 23123;
console.log(num >= 0 && num <= 100);
console.log(num < 0 || num > 100);

//부록
console.log(10 * "20"); // 200
