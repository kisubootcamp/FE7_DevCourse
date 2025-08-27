// ### 1. 기본 Promise
// **문제:** `resolve`와 `reject`를 사용하는 간단한 Promise를 생성하고, 성공 시 "성공!"을 출력하도록 하세요.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("성공!");
  }, 1000);
});

// promise.then((result) => {
//   console.log(result);
// });

//팁! 인자를 출력만 하는 코드면 아래와 같이 간단화 가능
promise.then(console.log);

// ### 2. 체이닝
// **문제:** 두 개의 Promise를 체이닝하여 첫 번째 Promise가 성공적으로 완료된 후 두 번째 Promise가 실행되도록 하세요.

// function promise2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("task1");
//       resolve();
//     }, 1000);
//   });
// }

// function promise2_1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("task2");
//       resolve();
//     }, 1000);
//   });
// }
// promise2().then(() => promise2_1());

const promise2 = new Promise((resolve) => resolve(2));
promise2 //
  .then((num) => num * 2)
  .then((num) => console.log(num));

// ### 3. 오류 처리
// **문제:** Promise를 생성하고, `reject`를 사용하여 오류를 발생시키세요.

//안쓰는 변수는 _ 처리
const promise3 = new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error("실패"));
  }, 1000);
});

promise3 //
  .catch((reason) => {
    console.error(reason);
  });

// ### 4. 비동기 작업

// **문제:** setTimeout을 사용하여 2초 후에 "비동기 작업 완료!"라는 메시지를 출력하는 Promise를 생성하세요.

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("비동기 작업 완료!");
  }, 2000);
});

promise4.then((result) => {
  console.log(result);
});

// ### 5. 중첩 Promise

// **문제:** 하나의 Promise 안에서 다른 Promise를 생성하여 중첩된 체이닝을 해보세요.

const promise5 = new Promise((resolve, _) => resolve(2));
promise5 //
  .then((num) => {
    return new Promise((resolve) => resolve(num * 2));
  })
  .then(console.log);

// ### 6. 조건부 실행
// **문제: condition 변수를 생성하고, 변수에 할당된 true, false 값에 따라서 resolve, reject를 선택하여 호출하는 코드를 작성해주세요.**
const promise6 = new Promise((resolve, reject) => {
  const condition = true;
  if (condition) resolve("성공");
  reject("실패");
});

promise6 //
  .then(console.log)
  .catch(console.error);
