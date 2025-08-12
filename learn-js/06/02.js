// 함수를 매개변수로 받아서 사용하는 함수
// 콜백 함수 (callback)
function greet(fn) {
	console.log(fn("sanga"));
}

// greet(function (name) {
// 	return `Hello, ${name}`;
// });

greet((name) => `Hello, ${name}`);
