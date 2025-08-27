// 비동기 흐름을 제어하기 위해서
// 1. 콜백 함수
// 2. Promise, pending -> (fulfiled, rejected)
// 3. Async, Await

// 자바스크립트는 동기, 코드를 한 번에 한 줄 씩 순차적으로
// 10초, 모든 코드가 10초 동안 멈춤.
// 비동기를 처리할 수 있는 방법을 제공함. (비동기 -> 코드의 실행을 기다리지 않는다는 것)

const promise = new Promise((resolve, reject) => resolve('성공'));
promise //
  .then(console.log)
  .catch(console.log);

// Promise.resolve("성공").then(console.log);

// await
// a,b,c -> 3s
// 병렬 처리 -> 함수를 먼저 호출하고 await, Promise.all, race, allettled
async function delay(ms) {
  return ms;
}

delay(2000) //
  .then(console.log);
