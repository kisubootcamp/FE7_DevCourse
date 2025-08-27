// Promise Then 연습 문제

// 1. 기본 Promise
// `resolve`와 `reject`를 사용하는 간단한 Promise를 생성하고, 성공 시 "성공!"을 출력하도록 하세요.
const basicPromise = new Promise((resolve, reject) => {
  // 작업이 성공하면 resolve() 호출
  resolve("성공!");
  // 작업이 실패하면 reject() 호출
  reject(new Error("실패!"));
});
basicPromise.then((message) => console.log(message));

//

// 2. 체이닝
// 두 개의 Promise를 체이닝하여 첫 번째 Promise가 성공적으로 완료된 후 두 번째 Promise가 실행되도록 하세요.
// const firstPromise = new Promise((resolve) => {
//   setTimeout(() => resolve("첫 번째 작업 완료"), 1000);
// });
// const secondPromise = new Promise((resolve) => {
//   setTimeout(() => resolve("두 번째 작업 완료"), 1000);
// });

// firstPromise
//   .then((message) => {
//     console.log(message);
//     return secondPromise;
//   })
//   .then((message) => console.log(message));

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000);
});

promise.then((num) => num * 2).then((num) => console.log(num));

//

// 3.
const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000);
  reject(new Error("실패!"));
});

promise3.catch((error) => {
  console.error(error);
});

//

// 4.
const promise4 = new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000);
});

promise4.then(console.log);

//

// 5. 하나의 Promise 안에서 다른 Promise를 생성하여 중첩된 체이닝을 해보세요.
const promise5 = new Promise((resolve) => resolve(2));
promise5.then((num) => num * 3).then((num) => console.log(num));
//

// 6.
// condition 변수를 생성하고, 변수에 할당된 true, false 값에 따라서 resolve, reject를 선택하여 호출하는 코드를 작성해주세요.
const promise6 = new Promise((resolve, reject) => {
  const condition = true;
  if (condition) {
    resolve("성공!");
  }
  reject(new Error("실패!"));
});

promise6.then(console.log).catch(console.error);
