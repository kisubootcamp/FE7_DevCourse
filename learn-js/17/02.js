// 태스크 큐, 마이크로 태스크 큐
// Promise가 먼저 사용되든, 나중에 사용되든 무조건 setTimeout보다 빠르게 실행됨
// 태스크 큐
// setTimeout, setInterval, setImmediate, DOM 이벤트 콜백, fetch().then
// 마이크로 태스크 큐
// Promise.then, catch,finally, MutationObserver
console.log("start");
Promise.resolve().then(() => {
  console.log("promise");
});
// setTimeout은 실행되면 콜스택에서 함수 실행컨텍스트가 만들어지면
// 이 실행 컨텍스트는 이후에 어디로 갈까?
// 실행컨텍스트는 웹 브라우저로 이동하게 된다
// 그 이후에 end console를 실행하러 간다
// 웹 브라우저로 간 애들은 자바 콜스택이 비워질 때까지
//  태스크 큐 or 마이크로 태스크 큐로 가서 대기하게 됨
// (기준이 있음) Pomise는 마이크로 태스크 큐, setTimeout은 태스크 큐로
// 그 후 이벤트 루프가 마이크로 태스크 큐, 태스크 큐 순으로 다시 자바 콜스택으로 보내서 작업을 하게 된다
setTimeout(() => {
  console.log("setTimeout");
}, 0);
console.log("end");
