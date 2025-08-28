// 테스크 큐, 마이크로 테스크 큐
// 테스크 큐
// setTimeout, setInterval, setImmediate, DOM 이벤트 콜백, fetch().then()

// 마이크로 테스크 큐
// Promise,
console.log("start");
setTimeout(() => {
  console.log("setTimeout");
}, 0);
Promise.resolve().then(() => {
  console.log("promise");
});
console.log("end");

// Promise는 마이크로 테스크 큐, setTimeout은 테스크 큐이다.
// 이 두개의 큐는 스택이 제거 돼야 실행되고,
// 마이크로 테스크 큐 -> 테스크 큐 순으로 실행됨
