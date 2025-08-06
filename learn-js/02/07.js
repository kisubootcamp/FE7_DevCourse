//삼항 연산자
//표현식 ? 참 : 거짓
//: 톨론
//; 세미콜론
// 실무에서 삼항 연산자는 2중첩 이상 하지 않는다. = 중첩 X
const m = 5000;
const price = 3000;

const buy = m >= price ? "살 수 있다" : "살 수 없다";
console.log(buy);

const score = 70;
const grade =
  score >= 90
    ? "A"
    : score > 80
    ? "B"
    : score > 70
    ? "C"
    : score > 60
    ? "D"
    : "F";

console.log(grade);

// 1. 숫자비교
//     1. 변수 `num`에 임의의 숫자를 할당하세요.
//     2. `num`이 0보다 큰지, 0인지, 0보다 작은지 삼항 연산자를 사용하여 각각 "Positive", "Zero", "Negative"를 출력하세요.

const num = 0;
const upDown = num < 0 ? "Negative" : num > 0 ? "Positive" : "Zero";

console.log(upDown);

// 1. 최댓값 찾기
//     - 세 변수 `a`, `b`, `c`에 임의의 숫자를 할당하세요.
//     - 삼항 연산자를 사용하여 `a`, `b`, `c` 중 가장 큰 숫자를 찾고, 그 결과를 출력하세요.

const a = 130;
const b = 142;
const c = 160;

// const max1 = a > b ? a : b;
// const max2 = max1 > c ? max1 : c;
const max3 = a > b ? (a > c ? a : c) : b > c ? b : c;

console.log(max3);

// 3. 짝수 홀수 확인

// - 변수 `number`에 임의의 숫자를 할당하세요.
// - 삼항 연산자를 사용하여 `number`가 짝수인지 홀수인지 확인하고, "Even" 또는 "Odd"를 출력하세요.

const number = 12;
const EvenOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(EvenOdd);

// 4. 로그인 확인

// - 변수 `isLoggedIn`에 `true` 또는 `false`를 할당하세요.
// - 삼항 연산자를 사용하여 `isLoggedIn`이 `true`이면 "Welcome", `false`이면 "Please log in"을 출력하세요.

const isLoggedIn = "true"; //값이 있으면 참 (0, false, null, undefined를 제외하고 전부 참)
// const LoggedIn = isLoggedIn === "true" ? "Welcome" : "Please log in";
const LoggedIn = isLoggedIn ? "Welcome" : "Please log in";
console.log(LoggedIn);

// 1. 성인 확인
// - 변수 `age`에 임의의 나이를 할당하세요.
// - 삼항 연산자를 사용하여 `age`가 18 이상이면 "Adult", 그렇지 않으면 "Minor"를 출력하세요.

const age = 23;
const ageTest = age >= 18 ? "Adult" : "Minor";

console.log(ageTest);
