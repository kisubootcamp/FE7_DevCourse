// Promise 객체 (ES6)
// 비동기 작업을 처리할 때 사용할 수 있는 매커니즘
// ES6 이전엔 비동기 작업을 처리하는 방법으로 콜백 함수밖에 없었음
// 콜백함수는 콜백이 중첩되면 코드가 복잡해지고 가독성이 떨어지는 "콜백 지옥" 패턴이 생기게 됨

// Producer (생산자)
// Promise 객체를 생성하고 정의하는 부분을 일컫음
const promise = new Promise((resolve, reject) => {
	// 작업이 성공하면 resolve 호출
	// 작업이 실패하면 reject 호출
	console.log("promise created");
	setTimeout(() => {
		// resolve("task1"); // 여기 resolve 값이 then으로 이동함
		reject("실패함"); // 여기서 reject 값이 reason으로 감
	}, 1000);
});
// promise 객체 생성하자마자 내부 함수 실행됨

// Consumer (소비자)
promise.then(
	(value) => {
		// 성공
		console.log(value);
		console.log("task2");
	},
	(reason) => {
		// 실패
		console.log(reason);
	},
);

// Promise의 상태
// 1. pending: 작업이 실행중 (유의미한 내부객체를 받을 때까지 pending)
// 2. fulfilled : 작업이 완료됨
// 3. reject: 작업이 실패함

// 실행순서는 이렇게 됨
// promise created
// task1
// task2
