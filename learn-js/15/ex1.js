// Promise Then 연습문제

//1
// const promise = new Promise((resolve, reject) => {
//   resolve("성공!!");
// }).then((success) => console.log(success));
// 간소화 방법 : .then(console.log);

//2
// const promise = new Promise((resolve, reject) => {
//   resolve("1번째 성공!");
// })
//   .then(
//     (success) =>
//         console.log(success);
//   )
//   .then((success) => {
//     console.log(success);
//   });

//3
// new Promise((resolve, reject) => {
//   reject(new Error("실패ㅠㅠ"));
// }).catch((fail) => {
//   console.log(fail);
// });

//4
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("비동기 작업 완료!");
//   }, 2000);
// });

//5
// const promise = new Promise((resolve) => resolve(2));
// promise //
//   .then((num) => {
//     return new Promise((resolve) => resolve(num * 2));
//   })
//   .then(console.log);

//6
// let condition = false;

// new Promise((resolve, reject) => {
//   if (condition === true) resolve("성공");
//   else reject("실패");
// })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log(value);
//   });

//강사님 코드

const promise = new Promise((resolve, reject) => {
  const condition = true;
  if (condition) resolve("성공");
  reject("실패");
});

promise //
  .then(console.log)
  .catch(console.error);
