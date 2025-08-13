function sayHello(callback) {
	callback("안녕하세용");
}
sayHello(console.log);
// 아주 전형적인 콜백함수의 예제
// 너무 자주 써서 잊고 있었지만 console.log 이것도 함수다

function calculator(callback) {
	return () => callback(10, 20); // return () => { callback(10, 20)}와 같음
}
calculator((num1, num2) => num1 + num2);
calculator((num1, num2) => num1 - num2);
calculator((num1, num2) => num1 * num2);

setTimeout(() => {
	console.log("5초뒤에 실행");
}, 5000); // 1000ms -> 1s

function setTimeout(handler, timeout) {
	// timeout ...
}
// 자바스크립트 내장함수
// WEB API : 웹 브라우저 기반으로 프로그래밍 할 때 사용할 수 있는 수단

function makeGreeter(name) {
	return function () {
		return `안뇽 ${name}`;
	};
}

const makeGreeter = (name = () => `안뇽 ${name}`);

function getOperation(op) {
	if (op === "add") return (a, b) => a + b;
	else return (a, b) => a - b;
}
const add = getOperation("add");
console.log(add(5, 3));
const minus = getOperation("minus");
console.log(minus(5, 3));
