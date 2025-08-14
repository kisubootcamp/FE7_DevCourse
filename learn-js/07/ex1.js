/* 문제 1: 카운터 만들기
설명: 클로저를 이용해 카운터 함수를 만드세요. 이 함수는 호출할 때마다 1씩 증가하는 값을 반환해야 합니다.
기본 제공 코드: */
function createCounter() {
	let _i = 0;
	return () => ++_i;
}

let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
counter = null;

/* 문제 2: 비공식적인 캐싱
설명: 숫자를 제곱하는 함수를 만들고, 같은 숫자가 호출될 경우 결과를 캐싱하여 효율적으로 반환하세요.
기본 제공 코드: */
function square() {
	const cache = {};
	return (num) => {
		if (cache[num]) return cache[num];
		cache[num] = num ** 2;
		return cache[num];
	};
}
let squared = square();
console.log(squared(4)); // 16
console.log(squared(4)); // 16 (캐시 사용)
console.log(squared(5)); // 25
squared = null;

/* 문제 3: 지연 실행
설명: 주어진 시간 후에 실행되는 함수를 반환하는 클로저를 작성하세요.
기본 제공 코드: */
function delayExecution(ms) {
	// 이미 매개변수로 ms를 받고 있어서
	// let _ms = ms; 를 쓴거나 다름이 없음
	return (callback) => {
		// 이걸 닫기에는 delayExecution 의 ms값을 받아 사용하고 있어서 끝날때까지 닫히지않음
		setTimeout(callback, ms);
	};
}

let delayedFunc = delayExecution(1000);
delayedFunc(() => console.log("Executed after 1 second"));
delayedFunc = null;

/* 문제 4: 고유 ID 생성기
설명: 고유한 ID를 생성하는 함수를 만드세요. 각 호출마다 증가하는 ID를 반환해야 합니다. 
기본 제공 코드: */
function createIdGenerator() {
	let _id = 0;
	return () => ++_id;
}

let getId = createIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2
console.log(getId()); // 3
getId = null;

/* 문제 5: 메모이제이션
설명: 피보나치 수열을 계산하는 함수를 만들고, 결과를 메모이제이션하여 성능을 개선하세요.
기본 제공 코드: */

// 적은수열이면?
// function exfibonacci() {
// 	function fib(n) {
// 		if (n <= 1) return n;
// 		return fib(n - 1) + fib(n - 2);
// 	}
// 	return fib;
// }
function fibonacci() {
	const cache = {};
	function fib(n) {
		if (n <= 1) return n;
		if (cache[n]) return cache[n];
		cache[n] = fib(n - 1) + fib(n - 2);
		return cache[n];
	}
	return fib;
}

let fibo = fibonacci();
console.log(fibo(10)); // 55
console.log(fibo(100)); // 55 (메모이제이션 사용)

fibo = null;

/* 문제 6: 문자열 결합
설명: 문자열을 결합하는 함수를 작성하고, 이전에 결합된 문자열을 기억하게 하세요.
기본 제공 코드: */
function createStringCombiner() {
	let result = "";
	return (str) => (result += str);
}

let combiner = createStringCombiner();
console.log(combiner("Hello")); // "Hello"
console.log(combiner(" World")); // "Hello World"

combiner = null;

/* 문제 7: 객체 속성 카운터
설명: 객체의 속성 개수를 세는 함수를 작성하세요. 이 함수는 객체를 클로저로 기억해야 합니다.
기본 제공 코드: */
function createPropertyCounter() {
	let object = {};
	return (object) => {
		return Object.keys(object).length;
	};
	/* 혹은 */
	let storeObject = null; // []와 성능차이는 없음
	return function (obj) {
		storeObject = obj;
		let count = 0;
		for (let key in storeObj) {
			count++;
		}
		return count;
	};
}

let counterPro = createPropertyCounter();
console.log(counterPro({ a: 1, b: 2 })); // 2
console.log(counterPro({ a: 1 })); // 1

counterPro = null;

/* 문제 8: 배열 필터링
설명: 주어진 배열에서 특정 조건을 만족하는 요소만 필터링하는 함수를 작성하세요.
기본 제공 코드: */
function createFilter(condition) {
	// return (arr) => arr.filter(condition);
	// 반복문으로 풀기~
	return function (arr) {
		const result = [];
		for (const item of arr) {
			if (condition(item)) result.push(item);
		}
		return result;
	};
}

let filterEven = createFilter((num) => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5])); // [2, 4]

filterEven = null;

/* 문제 9: 다중 카운터
설명: 여러 개의 카운터를 동시에 관리할 수 있는 함수를 작성하세요. 각 카운터는 별개의 값을 가지고 있어야 하며, 특정 카운터를 지정하여 그 카운터만 증가시키는 기능이 필요합니다.
기본 제공 코드: */
function createMultiCounter() {
	let _counterObj = {};
	return (alp) => {
		if (!_counterObj[alp]) _counterObj[alp] = 0;
		return () => {
			_counterObj[alp]++;
			return _counterObj[alp];
		};
	};
}

let counters = createMultiCounter();
let counterA = counters("A");
let counterB = counters("B");

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1
console.log(counterA()); // 3
console.log(counterB()); // 2

counters = null;
counterA = null;
counterB = null;

/* 문제 10: 고차 함수로 커스터마이징된 계산기
설명: 기본 연산을 수행할 수 있는 계산기를 작성하세요. 이 계산기는 특정 연산을 클로저로 기억하여 그 연산만 수행할 수 있도록 합니다.
기본 제공 코드: */
function createCalculator(operator) {
	return operator;
	// 혹은
	return function (a, b) {
		return operator;
	};
}

let add = createCalculator((a, b) => a + b);
console.log(add(2, 3)); // 5
console.log(add(10, 5)); // 15

let multiply = createCalculator((a, b) => a * b);
console.log(multiply(2, 3)); // 6
console.log(multiply(10, 5)); // 50

add = null;
multiply = null;
