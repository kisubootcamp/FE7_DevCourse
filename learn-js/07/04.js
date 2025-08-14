// 은닉화 패턴
function counter() {
	let _count = 0;
	return {
		increment: function () {
			return ++_count;
		},
		decrement: function () {
			return --_count;
		},
	};
}

let mycount = counter();
console.log(mycount.increment());
console.log(mycount.increment());
console.log(mycount.increment());
mycount = null;

// 함수팩토리 패턴
// 함수를 만들어내는 기능을 하는? 함수 = 함수팩토리
function makeMultiple(multiper) {
	return function (x) {
		return x * multiper;
	};
}
let double = makeMultiple(2);
console.log(double(5));
console.log(double(10));
double = null;

// 메모이제이션 패턴
function memoization(cb) {
	const cache = {};
	return function (...args) {
		// 함수 호출 시 전달된 모든 인자를 배열 형태로 받고... (...arg)
		// 이를 JSON 문자열로 변환해서 캐시 key로 사용
		const key = JSON.stringify(args);

		if (cache[key]) return cache[key]; // 이미 해당 key로 계산한 결과가 있다면 즉시 반환. 재계산이 불필요

		const result = cb(...args); // 캐시에 없다면, 원래 함수(fn)을 실행하여 결과를 얻음
		cache[key] = result; // 결과를 캐시에 저장함;
		return result; // 결과를 반환함
	};
}

function slowFunc(num) {
	for (let i = 0; i < 9999999999; i++);
	return num * 2;
}

// 메모이제이션 없이 실행한다면 같은값 출력하라해도
// console.log(slowFunc(10)); // 늦게 출력됨. 8sec
// console.log(slowFunc(10)); // 늦게 출력됨. 8sec
// console.log(slowFunc(10)); // 늦게 출력됨. 8sec

const memoizedFn = memoization(slowFunc);
console.log(memoizedFn(10)); // 8sec 기다리면 나오는거.
console.log(memoizedFn(10)); // 캐시에 저장된 내용이라 바로 나옴
console.log(memoizedFn(10));
