// 산술 연산자
// 수학적인 계산을 할 때 사용하는 연산자
// 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지(%), 제곱(**, ES7)
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 5);
console.log(10 ** 2);

// 연산자 우선 순위
// 소괄호
console.log(2 + 5 * 2); // 12
console.log((2 + 5) * 2); // 14

console.log(0.1 + 0.9);
console.log(0.1 + 0.2); // 부동 소수점 형식을 사용하기 때문, 2진수

// Decimal.js
console.log((0.1 * 100000000 + 0.2 * 100000000) / 100000000);
