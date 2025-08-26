// ES5
// 콜백함수
// ES6
// Promise 객체
// ES7
// async.await (syntatic sugar)

// function fetchNumber() {
// 	return new Promise((resolve) => resolve(2));
// }

// async 는? 비동기를 가지고 있는 키워드
// async function fetchNumber() {
// 	return 2;
// }
// 요 두개는 똑같은 함수

// fetchNumber() //
// 	.then(console.log);

// 프로미스 객체를 만드는 이유는? 우리가 무언가 비동기 제어를 하기위해서

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function fetchNumber() {
	// return delay(5000) //
	// 	.then(() => 2);
	// 이렇게 써야하는것을
	await delay(5000);
	return 2;
}

fetchNumber() //
	.then(console.log);
