// 05.js 파일을 이렇게도 작성이 가능

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
	return new Promise((resolve, reject) => {
    setTimeout(() => {
			console.log("task3");
      reject(new Error("강제 에러"));
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

async function runTasks() {
	try {
		await task1();
		await task2();
		await task3();
		await task4();
		await task5();
	} catch (e) {
		console.error(e);
	} finally {
    console.log("task all finish");
  }
	// 병렬처리하면 순서가 보장이 안됨
}
runTasks();
