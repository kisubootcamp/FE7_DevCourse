// ES5
// 콜백함수
// ES6
// Promise 객체
// ES7
// async.await

const dealy = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchNumbers() {
  return dealy(2000) //
    .then(() => 2);
}

async function fetchNumber() {
  await dealy(2000); // stop
  return 2;
}

fetchNumbers() //
  .then(console.log);
