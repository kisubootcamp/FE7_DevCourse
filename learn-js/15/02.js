//promise 객체(ES6)
// 비동기 작업을 처리할 때 사용할 수 있는 메커니즘
// ES6 이전에는 비동기 작업을 처리하는 방법으로 콜백 함수 밖에 없었음
// 콜백 함수는 콜백이 중첩되면 코드가 복잡해지고 가독성이 떨어지는 콜백지옥 패턴이 생성

// promise의 3가지 상태
// Pending(작업 실행중), fulfilled(작업 완료), reject(작업 실패)

// producer(생산자)
// Promise 객체를 생성하고 정의하는 부분을 일컫는다.
const promise = new Promise((resolve, reject) => {
  // 작업이 성공하면 resolve 호출
  // 작업이 실패하면 reject 호출
  console.log("promise created"); // promise는 생성되는 즉시 실행
  setTimeout(() => {
    // resolve("task1");
    reject("실패함");
  }, 1000);
});

// Consumer (소비자)
// 소비자는 생산자가 생성한 Promise의 결과 값을 사용하는 부분
promise.then(
  (value) => {
    // 성공했을 때
    console.log(value);
    console.log("task2");
  },
  (reason) => {
    // 실패했을 때
    console.log(reason);
  }
);
