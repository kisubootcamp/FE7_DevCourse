// 태스크 큐, 마이크로 태스크 큐
// 태스크 큐
// setTimeout, setInterval, setImmediate, DOM 이벤트 콜백, fetch().then()

// 마이크로 태스크 큐
// Promise.then, catch, finally
// MutationObserver

console.log("start");
setTimeout(() => {
	console.log("setTimeout");
}, 0);
Promise.resolve().then(() => {
	console.log("promise");
});
console.log("end");

// start
// end
// promise
// setTimeout
