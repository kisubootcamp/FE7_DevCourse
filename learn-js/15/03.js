//Promise 객체 (ES6)
//비동기 작업을 처리할 때 사용할 수 있는 매커니즘
//ES6 이전, 비동기 작업을 처리하는 방법으로 콜백 함수 밖에 없었음.
// 콜백 함수는 콜백이 중첩되면 코드가 복잡해지고 가독성이 떨어지는 (콜백 지옥) 패턴이 생기게 됨.

//Promise의 상태 (PromiseState)
// 1. Pending(작업이 실행중(성공, 실패 여부를 받지 않아 대기))
// 2. fullfilled(작업이 완료(이행, 수행))
// 3. reject(작업이 실패)

//Promise (생산자)
//Promise 객체를 생성하고 정의하는 부분을 일컫는다.
const promise = new Promise((resolve, reject) => {
  console.log("promise created");
  //데이터 패칭
  setTimeout(() => {
    //console.log("task1");
    //resolve("task1");
    reject("실패함");
  }, 1000);
  //작업이 성공하면 resolve 호출
  //작업이 실패하면 reject 호출
});

console.log(promise);

//Consumer (소비자)
//then: resolve의 값을 인자로 받아서 함수 실행
promise.then(
  (value) => {
    console.log(value);
    console.log("task2");
  },
  (reason) => {
    console.log(reason);
  }
);
