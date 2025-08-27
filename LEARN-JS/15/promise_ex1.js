// 연습문제
// 1.
// const promise = new Promise((resolve) => {
//   resolve('성공');
// });
// promise.then(console.log);

// 2.
// const promise = new Promise((resolve) => resolve());
// const promise2 = new Promise((resolve2) => resolve2());

// promise.then(() => {
//   console.log('프로미스1');
//   promise2.then(() => console.log('프로미스2'));
// });

// 3.
// const promise = new Promise((resolve, reject) => {
//   reject(new Error("에러"));
// });
// promise.catch((reason) => {
//   console.error(reason);
// });

// 4.
// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve();
//   }, 2000);
// });
// promise.then(() => console.log('비동기 작업 완료!'));

// 5.
// const promise = new Promise((resolve) => resolve());
// promise
//   .then(() => {
//     console.log('성공1');
//     return new Promise((resolve) => resolve());
//   })
//   .then(() => console.log('성공2'));

// 6.
// const condition = false;
// const promise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve();
//   } else reject();
// });

// promise.then(() => console.log('성공')).catch(() => console.error('실패'));
