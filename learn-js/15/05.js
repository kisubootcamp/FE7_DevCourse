// 이렇게도 작성이 가능

function task1() {
	return new Promise((resolve) => {
		console.log("task1");
		resolve();
	});
}
function task2() {
	return new Promise((resolve) => {
		console.log("task2");
		resolve();
	});
}
function task3() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("task3");
			resolve();
		}, 1000);
	});
}
function task4() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("task4");
			resolve();
		}, 1000);
	});
}
function task5() {
	console.log("task5");
}

task1()
	.then(() => task2())
	.then(() => task3())
	.then(() => task4())
	.then(() => task5())
	.finally(() => console.log("task all finish"));

// finally는 무조건 맨 마지막에 실행됨
