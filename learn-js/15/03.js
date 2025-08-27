const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("task1");
		reject(new Error("실패함"));
	});
});

// promise.then(
// 	(value) => {
// 		console.log("value");
// 	}, // resolve. 실행되었을 때
// 	(reason) => {
// 		console.error(reason);
// 	}, // reject. 실패했을 때
// );

// 혹은 이렇게 작성이 가능한데, 실무에서 제일 잘 씀. 이유는 가독성이 더 좋기 때문
promise
	.then((value) => {
		console.log(value);
		return "task2";
	})
	.then((value) => {
		console.log(value);
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("task3");
			}, 2000);
		});
	})
	.then((value) => {
		console.log(value);
		return "task4";
	})
	.then((value) => {
		console.log(value);
		return "task all finish";
	})
	.catch((reason) => {
		console.error(reason);
	});
