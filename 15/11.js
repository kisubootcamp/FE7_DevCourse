// ES5
// 콜백함수

// ES6
// Promise 객체

// ES7
// async, await (syntatic sugar)

// function fetchNumber() {
//   return new Promise((resolve) => resolve(2));
// }

// async function fetchNumber() {
//   return 2;
// }

// fetchNumber() //
//   .then(console.log);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchNumbers() {
  await delay(2000); //
  return 2;
}

fetchNumbers() //
  .then(console.log);
