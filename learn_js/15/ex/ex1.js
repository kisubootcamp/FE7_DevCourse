// // 1. resolve와 reject를 사용하는 간단한 Promise를 생성하고, 성공 시 "성공!"을 출력하도록 하세요.
// const promise = new Promise((resolve, reject) => {
//   resolve('성공');
//   reject('실패');
// });

// promise.then(console.log);

// // 2. 두 개의 Promise를 체이닝하여 첫 번째 Promise가 성공적으로 완료된 후 두 번째 Promise가 실행되도록 하세요.
// function promiseChain1() {
//   return new Promise((resolve, reject) => {
//     console.log('1. 성공');
//     resolve();
//   });
// }
// function promiseChain2() {
//   return new Promise((resolve) => {
//     console.log('2.성공');
//     resolve();
//   });
// }

// promiseChain1() //
//   .then(() => promiseChain2())
//   .finally(() => console.log('task all finish'));

// // 3. Promise를 생성하고, reject를 사용하여 오류를 발생시키세요.
// const promise = new Promise((_, reject) => {
//   reject(new Error('에러 발생함'));
// });
// promise.catch((reason) => {
//   console.log(reason);
// });

// // 4. setTimeout을 사용하여 2초 후에 "비동기 작업 완료!"라는 메시지를 출력하는 Promise를 생성하세요.
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('비동기 작업완료');
//   }, 2000);
// });

// promise.then(console.log);

// 5. 하나의 Promise 안에서 다른 Promise를 생성하여 중첩된 체이닝을 해보세요.
const promise = new Promise((resolve, reject) => {
  resolve(2);
});

promise //
  .then((value) => {
    console.log(`${value} 작업완료`);
    return new Promise((resolve) => resolve(num * 4)}) //
      .then(console.log);
  
// // 6. condition 변수를 생성하고, 변수에 할당된 true, false 값에 따라서 resolve, reject를 선택하여 호출하는 코드를 작성해주세요.
// const promise = new Promise((resolve, reject) => {
//   let condition = false;
//   if (condition) resolve('컨디션 최상');
//   else reject('컨디션 에러');
// });
// promise.then((s) => console.log(s)).catch((u) => console.log(u));
