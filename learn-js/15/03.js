// 2. Promise 객체 (ES6)
// 비동기 작업을 처리할 때 사용할 수 있는 메커니즘
// ES6 이전에는 비동기 작업 처리 방법이 콜백 함수 밖에 없었음
// ㄴ 콜백 함수는 콜백이 중첩되면 코드가 복잡, 가독성이 하락하는 (콜백 지옥) 패턴이 형성

// 2-1. Promise = Producer + Consumer
// Producer (생산자)
// Promise 객체를 생성하고 정의하는 부분
const promise = new Promise((resolve, reject) => {
  // 작업이 성공하면 resolve 호출
  // 작업이 실패하면 reject 호출
  console.log("promise created");
  // 함수보단 코드 실해ㅇ되는 동안 익스큐터 바로 실행됨
  setTimeout(() => {
    //resolve("task1");
    reject("failed"); //Uncaugh error : 잡히지 않음 (예외처리 꼼꼼히 안 한 지표 될 수 있음, 에러 핸들링 안 함) -> 27-29줄 추가
  }, 1000);
});

// Consumer (소비자)
// 소비, 사용하는 부분
promise.then (
  (vlaue) => { // 성공 했을 때
  console.log(vlaue);
  console.log("task2");
},
  (reason) => { // 실패 했을 때 
  console.log(reason);
} // uncaugh error -> error
);

// 2-2. Promise의 상태
// pendinf(작업이 실행 중 - 성공/실패 리액션 못 받고 대기 중), fulfilled(이행, 작업이 완료), reject(작업이 실패)