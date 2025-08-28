// 복습

// 비동기 흐름 제어를 위해
// 1. 콜백 함수
// 2. promise
// 3. async, await

// 자바스크립트는 동기, 코드를 한 번에 한 줄씩 순차적으로 실행
// ㄴ 동기의 단점 : 한 코드가 10초 걸린다면, 뒤에 있는 모든 코드가 10초 대기되면서 성능이 하락
// 그래서 비동기를 처리할 수 있는 방법을 제공 (성능 up)
// ㄴ 비동기 :; 코드의 실행을 기다리지 않는다

// promise
// 순차적으로 실행하면서 이미 지나간 코드를 promise라는 약속을 통해 다시 돌아와서 실행함
// 어떤 신호로 돌아오는가? :: pending -> (fulfiled, rejected)
// pending : 처음 약속을 맺은 상태, fulfiled, rejected : resolve, reject 호출을 통해 각각 발현됨
// fulfiled가 되면 then 내용 실행, rejected 상태가 되면 catch 내용을 실행
// 사용방법
const promise = new promise((resolve, reject) => resolve("성공"));
// promise도 표준 내장 객체
promise 
.then(console.log)
.catch(console.log)
// 한 번에 써도 됨
new promise((resolve, reject) => resolve("성공"))
.then(console.log)
.catch(console.log);

// async, await
// promise의 sugar syntax
// 성능향상을 위해 병렬 처리 -> (어떻게) 함수 먼저 호출 후 awatit, Promise.all(allSettled) 메서드, 
async function delay(ms) {
  // return new Promise((resolve) => resolve(ms));
  // 를 축약하면
  return ms;
}

delay(2000)
.then(console.log);
