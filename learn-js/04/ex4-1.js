// 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
// 매개변수의 갯수 제한은 없습니다.

// 풀이1 (배운거 토대로만)
const totalSum = (...numbers) => {
	let result = 0;
	for (const num of numbers) {
		result += num;
	}
	return result;
};
// 풀이2 (추후 진행할 이상적인 코드)
const totalSum2 = (...numbers) => numbers.reduce((acc, cur) => acc + cur, 0);
console.log(totalSum(1, 2, 3));

//사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.  (매개변수 - 2개) (+, -, *, /)
//구현 방법은 자율입니다.
const calculateFunc = (x, y) => {
	console.log(`${x}와 ${y}의 사칙연산 수행`);
	console.log(`${x} + ${y} = ${x + y}`);
	console.log(`${x} - ${y} = ${x - y}`);
	console.log(`${x} * ${y} = ${x * y}`);
	console.log(`${x} / ${y} = ${x / y}`);
};
calculateFunc(1, 2);
// 아놔 이걸 의도하셨대요 이렇게 해야해요
const calculateFunc2 = (num1, num2, oper) => {
	let result;
	switch (oper) {
		case "+":
			result = num1 + num2;
			break;
		case "-":
			result = num1 - num2;
			break;
		case "*":
			result = num1 * num2;
			break;
		case "/":
			result = num1 / num2;
			break;
		default:
			result = "사칙연산 기호를 입력하세요";
			break;
	}
	return result;
};
console.log(calculateFunc2(1, 2, "*"));

//숫자를 매개변수로 받아서 짝수면 true, 홀수면 false를 반환하는 함수 isEven을 작성하세요.
//함수를 사용하여 7이 짝수인지 홀수인지 판별하고 결과를 출력하세요.
const isEven = (num) => num % 2 === 0;
console.log(`7은 ${isEven(7) ? "짝수" : "홀수"}입니다.`);

// 배열의 모든 요소의 합을 반환하는 함수를 작성하세요
const sumArray = (arr) => {
	let result = 0;
	for (const index in arr) {
		result += arr[index];
	}
	return result;
};
console.log(sumArray([1, 2, 3])); // 6

// 배열에서 최대값을 찾는 함수를 작성하세요
const findMax = (arr) => {
	let maxNum = arr[0];
	for (const ele of arr) {
		if (maxNum < ele) maxNum = ele;
	}
	return maxNum;
};
console.log(findMax([1, 5, 3, 9, 2])); // 9

// 주어진 문자열을 반전시켜 반환하는 함수를 작성하세요
const reverseString = (char) => {
	let cnt = char.length - 1;
	let result = "";
	do {
		result += char[cnt];
		cnt--;
	} while (cnt >= 0);

	return result;
};
console.log(reverseString("hello")); // "olleh"

// 주어진 문자열에서 특정 문자의 개수를 세는 함수를 작성하세요
const countCharacter = (string, char2) => {
	let result = 0;
	for (const char1 of string) {
		if (char1 === char2) result++;
	}
	return result;
};
// 추후 작성하는 이상적인 코드
const countCharacter2 = (string, char) => string.split(char).length - 1;
console.log(countCharacter("banana", "a")); // 3

// - 양의 정수를 매개변수로 받아서 그 수의 팩토리얼을 반환하는 함수 `factorial`을 작성하세요.
// - 함수를 사용하여 5의 팩토리얼을 계산하고 결과를 출력하세요.
const factorial = (num) => {
	let result = 1;
	for (let i = 1; i <= num; i++) result *= i;
	return result;
};
console.log(factorial(5));
// 재귀함수를 활용해보자는 목적으로 팩토리얼
// └>나를 스스로 호출하는 함수
// 1. 종료 조건이 있을 것
// 2. 스스로가 스스로를 호출할 것
// 1부터 n까지의 합?
function exFunc(n) {
	if (n === 1) return 1;
	return n + exFunc(n - 1);
}
console.log(exFunc(5));
function exFactorial(n) {
	if (n === 0 || n === 1) return 1;
	return n * exFactorial(n - 1);
}
console.log(exFactorial(5));

// 삼각형의 밑변과 높이를 매개변수로 받아서 넓이를 반환하는 함수 triangleArea를 작성하세요.
// 함수를 사용하여 밑변이 10이고 높이가 5인 삼각형의 넓이를 계산하고 결과를 출력하세요.
const triangleArea = (width, height) => (width * height) / 2;
console.log(triangleArea(10, 5));
