// 비동기 흐름을 제어하기 위해서
// 1. 콜백 함수
// 2. Promise
// 3. Async/Await

// 자바스크립트는 동기, 코드를 한 번에 한 줄씩 순차적으로 실행
// 하지만, 브라우저 환경에서는 네트워크 요청, 파일 읽기 등 시간이 오래 걸리는 작업이 많음
// 이런 작업을 동기적으로 처리하면 사용자가 웹 페이지와 상호작용할 수 없게 됨
// 그래서 자바스크립트는 비동기 처리를 위한 메커니즘을 제공

// Promise 객체는 비동기 작업의 완료 또는 실패를 나타내는 객체
// Promise는 세 가지 상태(state)를 가짐
// 1. 대기(pending): 비동기 작업이 아직 완료되지 않은 상태
// 2. 이행(fulfilled): 비동기 작업이 성공적으로 완료된 상태
// 3. 거부(rejected): 비동기 작업이 실패한 상태

// resolved -> pending을 거쳐 fulfilled로 변경 -> then() 실행
// rejected -> pending을 거쳐 rejected로 변경 -> catch() 실행

new Promise((resolve, reject) => {
  resolve("성공");
  reject(new Error("실패"));
}).then((value) => console.log(value));
// .catch((error) => console.error(error));
console.log("성공 후");

// async/await
// Promise 기반의 비동기 코드를 더 간결하고 직관적으로 작성할 수 있게 해주는 문법 (문법적 설탕)

async function delay(ms) {
  // return new Promise((resolve) => setTimeout(resolve, ms));
  return ms;
}

delay(2000).then((ms) => console.log(ms));
