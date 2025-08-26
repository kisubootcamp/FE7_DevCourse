{
	// 문제: resolve와 reject를 사용하는 간단한 Promise를 생성하고, 성공 시 "성공!"을 출력하도록 하세요.
	const promise = new Promise((resolve, reject) => {
		resolve("성공!");
		reject(new Error("실패함"));
	});

	promise.then(
		(value) => {
			// 성공
			console.log(value);
		},
		(reason) => {
			// 실패
			console.error(reason);
		},
	);
}

{
	// 문제: 두 개의 Promise를 체이닝하여 첫 번째 Promise가 성공적으로 완료된 후 두 번째 Promise가 실행되도록 하세요.
	const promise1 = new Promise((resolve, reject) => {
		resolve("promise1");
		reject(new Error("실패함"));
	});

	promise1
		.then((value) => {
			// 성공
			console.log(value);
			return new Promise((resolve, reject) => {
				resolve("promise2");
				reject(new Error("실패함"));
			});
		})
		.then((value) => {
			console.log(value);
		})
		.catch((reason) => {
			console.error(reason);
		});
}

{
	// 문제: Promise를 생성하고, reject를 사용하여 오류를 발생시키세요.
	const promise = new Promise((rsv, rsn) => {
		rsn(new Error("실패했습니다"));
	});
	promise
		.then((v) => {
			// 성공
			console.log(v);
		})
		.catch((r) => {
			// 실패
			console.error(r);
		});
}

{
	// 문제: setTimeout을 사용하여 2초 후에 "비동기 작업 완료!"라는 메시지를 출력하는 Promise를 생성하세요.
	const promise = new Promise((rsv, rsn) => {
		setTimeout(() => {
			rsv("비동기 작업 완료!");
			rsn("비동기 작업 실패...");
		}, 2000);
	});
	promise.then((v) => console.log(v));
}

{
	// 문제: 하나의 Promise 안에서 다른 Promise를 생성하여 중첩된 체이닝을 해보세요.
	// const promise = new Promise((rsv, rsn) => {
	// 	rsv();
	// 	rsn("비동기 작업 실패...");
	// });
	// promise.then((v) => resolve()).then((v) => console.log(v));
}

// 문제: condition 변수를 생성하고, 변수에 할당된 true, false 값에 따라서 resolve, reject를 선택하여 호출하는 코드를 작성해주세요.
const condition = true;
const promise = new Promise((resolve, value) => {
	condition ? resolve("condition이 true") : reject("condition이 false");
});

promise
	.then((value) => {
		console.log(value);
	})
	.catch((reason) => {
		console.error(reason);
	});
