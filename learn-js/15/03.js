// Promise 객체
// 프로미스는 비동기 작업의 완료 또는 실패를 나타내는 객체

// 프로미스는 세 가지 상태(state)를 가짐
// 1. 대기(pending): 비동기 작업이 아직 완료되지 않은 상태
// 2. 이행(fulfilled): 비동기 작업이 성공적으로 완료된 상태
// 3. 거부(rejected): 비동기 작업이 실패한 상태

// 프로미스는 then()과 catch() 메서드를 제공
// then(): 이행 상태일 때 호출되는 콜백 함수를 등록
// catch(): 거부 상태일 때 호출되는 콜백 함수를 등록

// Producer (생성자)
// Promise 객체를 생성하고 정의하는 부분
const promise = new Promise((resolve, reject) => {
  // 작업이 성공하면 resolve() 호출
  // 작업이 실패하면 reject() 호출
  console.log("promise created");
  setTimeout(() => {
    resolve("task 1");
    reject(new Error("failure"));
  }, 1000);
});

console.log("task2");

// Consumer (소비자)
promise.then((value) => {
  console.log("then:", value);
  console.log("task 2");
});
