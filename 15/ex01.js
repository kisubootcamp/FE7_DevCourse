// // 1.
// const promise = new Promise((resolve, reject) => {
//   resolve("성공");
//   reject("실패");
// });

// promise.then((res) => console.log(res));

// // 2.
// const firstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("첫 번째 Promise");
//   }, 1000);
// });

// const secondPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("두 번째 Promise");
//   }, 1000);
// });

// firstPromise
//   .then((res) => {
//     console.log(res);
//     return secondPromise;
//   })
//   .then((res) => console.log(res));

// // 3.
// const promise = new Promise((resolve, reject) => {
//   reject(new Error("오류 발생!"));
// });

// promise //
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// // 4.
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("비동기 작업 완료");
//   }, 2000);
// });

// promise.then((res) => console.log(res));

// // 5.
// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("첫 번째 해결");
//   }, 1000);
// });

// promise.then((res) => {
//   console.log(res);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("두 번째 해결");
//     }, 1000);
//   }).then((res) => console.log(res));
// });

// // 6.
// const condition = false;

// const promise = new Promise((resolve, reject) => {
//   condition ? resolve("성공") : reject(new Error("실패"));
// });

// promise.then((res) => console.log(res)).catch((err) => console.error(err));
